<script setup lang="ts">
/**
 * BrTextarea - Multiline text input component
 *
 * @example
 * <BrTextarea v-model="text" placeholder="Digite sua mensagem..." />
 * <BrTextarea v-model="description" :rows="6" resize="vertical" />
 */

import type { TextareaProps } from './types'

// ---------------------------------------------------------------------------
// PROPS
// ---------------------------------------------------------------------------

const props = withDefaults(defineProps<TextareaProps>(), {
  placeholder: '',
  disabled: false,
  readonly: false,
  error: false,
  rows: 4,
  resize: 'vertical',
  maxLength: undefined,
})

// ---------------------------------------------------------------------------
// MODEL
// ---------------------------------------------------------------------------

const model = defineModel<string>({ default: '' })

// ---------------------------------------------------------------------------
// EMITS
// ---------------------------------------------------------------------------

const emit = defineEmits<{
  (e: 'focus', value: string): void
  (e: 'blur', value: string): void
}>()

// ---------------------------------------------------------------------------
// REFS
// ---------------------------------------------------------------------------

const textareaRef = ref<HTMLTextAreaElement | null>(null)
const isFocused = ref(false)

// ---------------------------------------------------------------------------
// COMPUTED
// ---------------------------------------------------------------------------

const classes = computed(() => [
  'br-textarea',
  {
    'br-textarea--error': props.error,
    'br-textarea--disabled': props.disabled,
    'br-textarea--focused': isFocused.value,
  },
])

const styles = computed(() => ({
  resize: props.resize,
}))

const charCount = computed(() => model.value?.length || 0)

// ---------------------------------------------------------------------------
// METHODS
// ---------------------------------------------------------------------------

function handleInput(event: Event) {
  const target = event.target as HTMLTextAreaElement
  model.value = target.value
}

function handleFocus() {
  isFocused.value = true
  emit('focus', model.value)
}

function handleBlur() {
  isFocused.value = false
  emit('blur', model.value)
}

function focus() {
  textareaRef.value?.focus()
}

function blur() {
  textareaRef.value?.blur()
}

// ---------------------------------------------------------------------------
// EXPOSE
// ---------------------------------------------------------------------------

defineExpose({ focus, blur, textareaRef })
</script>

<template>
  <div class="br-textarea-wrapper">
    <textarea
      ref="textareaRef"
      :class="classes"
      :style="styles"
      :value="model"
      :placeholder="placeholder"
      :disabled="disabled"
      :readonly="readonly"
      :rows="rows"
      :maxlength="maxLength"
      @input="handleInput"
      @focus="handleFocus"
      @blur="handleBlur"
    />
    <div v-if="maxLength" class="br-textarea__counter">
      {{ charCount }}/{{ maxLength }}
    </div>
  </div>
</template>

<style lang="scss" scoped>
.br-textarea-wrapper {
  position: relative;
  width: 100%;
}

.br-textarea {
  width: 100%;
  font-family: var(--br-font-primary);
  font-size: var(--br-text-sm);
  line-height: 1.5;
  padding: var(--br-space-3) var(--br-space-4);
  border: 1px solid var(--br-light-300);
  border-radius: var(--br-radius-md);
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
  // STATES
  // ---------------------------------------------------------------------------

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

  &__counter {
    position: absolute;
    bottom: var(--br-space-2);
    right: var(--br-space-3);
    font-size: var(--br-text-xs);
    color: var(--br-dark-1100);
  }
}
</style>
