<script setup lang="ts">
/**
 * BrInput - Text input component
 *
 * @example
 * <BrInput v-model="value" placeholder="Digite aqui" />
 * <BrInput type="password" v-model="password" />
 * <BrInput type="number" :min="0" :max="100" />
 */

import type { InputProps } from './types'

// ---------------------------------------------------------------------------
// PROPS
// ---------------------------------------------------------------------------

const props = withDefaults(defineProps<InputProps>(), {
  type: 'text',
  placeholder: '',
  disabled: false,
  readonly: false,
  error: false,
  size: 'md',
  block: true,
})

// ---------------------------------------------------------------------------
// MODEL
// ---------------------------------------------------------------------------

const model = defineModel<string | number>()

// ---------------------------------------------------------------------------
// EMITS
// ---------------------------------------------------------------------------

const emit = defineEmits<{
  (e: 'focus', value: string | number | undefined): void
  (e: 'blur', value: string | number | undefined): void
  (e: 'enter', value: string | number | undefined): void
  (e: 'keydown', event: KeyboardEvent): void
}>()

// ---------------------------------------------------------------------------
// REFS
// ---------------------------------------------------------------------------

const inputRef = ref<HTMLInputElement | null>(null)
const isFocused = ref(false)

// ---------------------------------------------------------------------------
// COMPUTED
// ---------------------------------------------------------------------------

const classes = computed(() => [
  'br-input',
  `br-input--${props.size}`,
  {
    'br-input--block': props.block,
    'br-input--error': props.error,
    'br-input--disabled': props.disabled,
    'br-input--focused': isFocused.value,
  },
])

// ---------------------------------------------------------------------------
// METHODS
// ---------------------------------------------------------------------------

function handleInput(event: Event) {
  const target = event.target as HTMLInputElement
  const value = props.type === 'number' ? Number(target.value) : target.value

  if (props.type === 'number' && props.min !== undefined && Number(value) < props.min) {
    model.value = props.min
    return
  }

  if (props.type === 'number' && props.max !== undefined && Number(value) > props.max) {
    model.value = props.max
    return
  }

  model.value = value
}

function handleFocus() {
  isFocused.value = true
  emit('focus', model.value)
}

function handleBlur() {
  isFocused.value = false
  emit('blur', model.value)
}

function handleKeydown(event: KeyboardEvent) {
  emit('keydown', event)
  if (event.key === 'Enter') {
    emit('enter', model.value)
  }
}

function focus() {
  inputRef.value?.focus()
}

function blur() {
  inputRef.value?.blur()
}

// ---------------------------------------------------------------------------
// EXPOSE
// ---------------------------------------------------------------------------

defineExpose({ focus, blur, inputRef })
</script>

<template>
  <input
    ref="inputRef"
    :class="classes"
    :type="type"
    :value="model"
    :placeholder="placeholder"
    :disabled="disabled"
    :readonly="readonly"
    :min="min"
    :max="max"
    :maxlength="maxLength"
    :autocomplete="autocomplete"
    @input="handleInput"
    @focus="handleFocus"
    @blur="handleBlur"
    @keydown="handleKeydown"
  />
</template>

<style lang="scss" scoped>
.br-input {
  font-family: var(--br-font-primary);
  border: 1px solid var(--br-light-300);
  border-radius: var(--br-radius-sm);
  background: var(--br-light-0);
  color: var(--br-dark-700);
  transition: all var(--br-transition-fast);

  &::placeholder {
    color: var(--br-dark-1100);
  }

  &:focus {
    outline: none;
    border-color: var(--br-primary-600);
    box-shadow: 0 0 0 3px rgba(109, 54, 251, 0.1);
  }

  // ---------------------------------------------------------------------------
  // SIZES
  // ---------------------------------------------------------------------------

  &--sm {
    height: 36px;
    padding: 0 var(--br-space-3);
    font-size: var(--br-text-xs);
  }

  &--md {
    height: 44px;
    padding: 0 var(--br-space-4);
    font-size: var(--br-text-sm);
  }

  &--lg {
    height: 56px;
    padding: 0 var(--br-space-4);
    font-size: var(--br-text-base);
  }

  // ---------------------------------------------------------------------------
  // STATES
  // ---------------------------------------------------------------------------

  &--block {
    width: 100%;
  }

  &--error {
    border-color: var(--br-danger-600);

    &:focus {
      border-color: var(--br-danger-600);
      box-shadow: 0 0 0 3px rgba(255, 46, 46, 0.1);
    }
  }

  &--disabled {
    background: var(--br-light-200);
    color: var(--br-dark-1100);
    cursor: not-allowed;
  }
}

// Remove number input spinners
input[type='number']::-webkit-inner-spin-button,
input[type='number']::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type='number'] {
  -moz-appearance: textfield;
}
</style>
