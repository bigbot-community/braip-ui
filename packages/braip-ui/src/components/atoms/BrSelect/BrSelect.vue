<script setup lang="ts">
/**
 * BrSelect - Dropdown select component
 *
 * @example
 * <BrSelect v-model="selected" :options="options" />
 * <BrSelect v-model="value" :options="items" placeholder="Selecione..." />
 */

import { computed, ref, watch, onMounted, onUnmounted } from 'vue'
import type { SelectProps, SelectOption } from './types'

// ---------------------------------------------------------------------------
// PROPS
// ---------------------------------------------------------------------------

const props = withDefaults(defineProps<SelectProps>(), {
  options: () => [],
  placeholder: 'Selecione...',
  disabled: false,
  error: false,
  size: 'md',
  searchable: false,
  clearable: false,
})

// ---------------------------------------------------------------------------
// MODEL
// ---------------------------------------------------------------------------

const model = defineModel<string | number | null>()

// ---------------------------------------------------------------------------
// EMITS
// ---------------------------------------------------------------------------

const emit = defineEmits<{
  (e: 'change', value: string | number | null): void
  (e: 'open'): void
  (e: 'close'): void
}>()

// ---------------------------------------------------------------------------
// REFS
// ---------------------------------------------------------------------------

const selectRef = ref<HTMLDivElement | null>(null)
const isOpen = ref(false)
const searchQuery = ref('')
const highlightedIndex = ref(0)

// ---------------------------------------------------------------------------
// COMPUTED
// ---------------------------------------------------------------------------

const selectedOption = computed(() => {
  return props.options.find((opt) => opt.id === model.value)
})

const filteredOptions = computed(() => {
  if (!props.searchable || !searchQuery.value) {
    return props.options
  }
  const query = searchQuery.value.toLowerCase()
  return props.options.filter((opt) => opt.text.toLowerCase().includes(query))
})

const classes = computed(() => [
  'br-select',
  `br-select--${props.size}`,
  {
    'br-select--open': isOpen.value,
    'br-select--error': props.error,
    'br-select--disabled': props.disabled,
    'br-select--has-value': model.value !== null && model.value !== undefined,
  },
])

// ---------------------------------------------------------------------------
// METHODS
// ---------------------------------------------------------------------------

function toggleDropdown() {
  if (props.disabled) return
  isOpen.value = !isOpen.value
  if (isOpen.value) {
    emit('open')
    highlightedIndex.value = 0
  } else {
    emit('close')
    searchQuery.value = ''
  }
}

function selectOption(option: SelectOption) {
  model.value = option.id
  emit('change', option.id)
  closeDropdown()
}

function closeDropdown() {
  isOpen.value = false
  searchQuery.value = ''
  emit('close')
}

function clearSelection() {
  model.value = null
  emit('change', null)
}

function handleKeydown(event: KeyboardEvent) {
  if (!isOpen.value) {
    if (event.key === 'Enter' || event.key === ' ' || event.key === 'ArrowDown') {
      event.preventDefault()
      toggleDropdown()
    }
    return
  }

  switch (event.key) {
    case 'ArrowDown':
      event.preventDefault()
      highlightedIndex.value = Math.min(highlightedIndex.value + 1, filteredOptions.value.length - 1)
      break
    case 'ArrowUp':
      event.preventDefault()
      highlightedIndex.value = Math.max(highlightedIndex.value - 1, 0)
      break
    case 'Enter':
      event.preventDefault()
      if (filteredOptions.value[highlightedIndex.value]) {
        selectOption(filteredOptions.value[highlightedIndex.value])
      }
      break
    case 'Escape':
      closeDropdown()
      break
  }
}

function handleClickOutside(event: MouseEvent) {
  if (selectRef.value && !selectRef.value.contains(event.target as Node)) {
    closeDropdown()
  }
}

// ---------------------------------------------------------------------------
// LIFECYCLE
// ---------------------------------------------------------------------------

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<template>
  <div ref="selectRef" :class="classes" @keydown="handleKeydown">
    <button
      type="button"
      class="br-select__trigger"
      :disabled="disabled"
      @click="toggleDropdown"
    >
      <span class="br-select__value">
        {{ selectedOption?.text || placeholder }}
      </span>
      <span class="br-select__actions">
        <span
          v-if="clearable && model !== null && model !== undefined"
          class="br-select__clear"
          @click.stop="clearSelection"
        >
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
          </svg>
        </span>
        <span class="br-select__arrow">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6z" />
          </svg>
        </span>
      </span>
    </button>

    <Transition name="br-select-dropdown">
      <div v-if="isOpen" class="br-select__dropdown">
        <input
          v-if="searchable"
          v-model="searchQuery"
          type="text"
          class="br-select__search"
          placeholder="Buscar..."
          @click.stop
        />
        <ul class="br-select__options">
          <li
            v-for="(option, index) in filteredOptions"
            :key="option.id"
            class="br-select__option"
            :class="{
              'br-select__option--selected': option.id === model,
              'br-select__option--highlighted': index === highlightedIndex,
            }"
            @click="selectOption(option)"
            @mouseenter="highlightedIndex = index"
          >
            {{ option.text }}
          </li>
          <li v-if="filteredOptions.length === 0" class="br-select__empty">
            Nenhum resultado encontrado
          </li>
        </ul>
      </div>
    </Transition>
  </div>
</template>

<style lang="scss" scoped>
.br-select {
  position: relative;
  width: 100%;

  &__trigger {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 0 var(--br-space-4);
    border: 1px solid var(--neutralLightGrey5);
    border-radius: var(--br-radius-sm);
    background: var(--neutralLightGrey9);
    color: var(--neutralDarkGrey7);
    font-family: var(--br-font-primary);
    cursor: pointer;
    transition: all var(--br-transition-fast);

    &:focus {
      outline: none;
      border-color: var(--brandPrimary6);
      box-shadow: 0 0 0 3px rgba(109, 54, 251, 0.1);
    }
  }

  &__value {
    flex: 1;
    text-align: left;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  &__actions {
    display: flex;
    align-items: center;
    gap: var(--br-space-1);
  }

  &__clear,
  &__arrow {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
    color: var(--neutralDarkGrey8);

    svg {
      width: 16px;
      height: 16px;
    }
  }

  &__clear:hover {
    color: var(--auxiliaryRed6);
  }

  &__arrow {
    transition: transform var(--br-transition-fast);
  }

  // ---------------------------------------------------------------------------
  // SIZES
  // ---------------------------------------------------------------------------

  &--sm .br-select__trigger {
    height: 36px;
    font-size: var(--br-text-xs);
  }

  &--md .br-select__trigger {
    height: 44px;
    font-size: var(--br-text-sm);
  }

  &--lg .br-select__trigger {
    height: 56px;
    font-size: var(--br-text-base);
  }

  // ---------------------------------------------------------------------------
  // STATES
  // ---------------------------------------------------------------------------

  &--open {
    .br-select__arrow {
      transform: rotate(180deg);
    }

    .br-select__trigger {
      border-color: var(--brandPrimary6);
    }
  }

  &--error .br-select__trigger {
    border-color: var(--auxiliaryRed6);
  }

  &--disabled .br-select__trigger {
    background: var(--neutralLightGrey6);
    color: var(--neutralDarkGrey9);
    cursor: not-allowed;
  }

  &:not(&--has-value) .br-select__value {
    color: var(--neutralDarkGrey9);
  }

  // ---------------------------------------------------------------------------
  // DROPDOWN
  // ---------------------------------------------------------------------------

  &__dropdown {
    position: absolute;
    top: calc(100% + 4px);
    left: 0;
    right: 0;
    z-index: var(--br-z-dropdown);
    background: var(--neutralLightGrey9);
    border: 1px solid var(--neutralLightGrey5);
    border-radius: var(--br-radius-md);
    box-shadow: var(--br-shadow-lg);
    overflow: hidden;
  }

  &__search {
    width: 100%;
    padding: var(--br-space-3);
    border: none;
    border-bottom: 1px solid var(--neutralLightGrey5);
    font-family: var(--br-font-primary);
    font-size: var(--br-text-sm);

    &:focus {
      outline: none;
    }
  }

  &__options {
    list-style: none;
    margin: 0;
    padding: var(--br-space-1) 0;
    max-height: 240px;
    overflow-y: auto;
  }

  &__option {
    padding: var(--br-space-3) var(--br-space-4);
    cursor: pointer;
    transition: background var(--br-transition-fast);

    &:hover,
    &--highlighted {
      background: var(--neutralLightGrey7);
    }

    &--selected {
      background: var(--brandPrimaryLightest);
      color: var(--brandPrimaryDark7);
    }
  }

  &__empty {
    padding: var(--br-space-4);
    text-align: center;
    color: var(--neutralDarkGrey9);
  }
}

// ---------------------------------------------------------------------------
// TRANSITION
// ---------------------------------------------------------------------------

.br-select-dropdown-enter-active,
.br-select-dropdown-leave-active {
  transition: opacity 0.15s ease, transform 0.15s ease;
}

.br-select-dropdown-enter-from,
.br-select-dropdown-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
