<script setup lang="ts">
import type { FormFieldProps } from './types'

const props = withDefaults(defineProps<FormFieldProps>(), {
  labelPosition: 'top',
  required: false,
  error: false,
  success: false,
  disabled: false,
})

const slots = useSlots()

const classes = computed(() => [
  'br-form-field',
  `br-form-field--label-${props.labelPosition}`,
  {
    'br-form-field--error': props.error,
    'br-form-field--success': props.success,
    'br-form-field--disabled': props.disabled,
    'br-form-field--has-prefix': !!slots.prefix,
    'br-form-field--has-suffix': !!slots.suffix,
  },
])

const messageType = computed(() => {
  if (props.error && props.errorMessage) return 'error'
  if (props.success && props.successMessage) return 'success'
  if (props.helperText) return 'helper'
  return null
})

const message = computed(() => {
  if (props.error && props.errorMessage) return props.errorMessage
  if (props.success && props.successMessage) return props.successMessage
  return props.helperText
})
</script>

<template>
  <div :class="classes">
    <label v-if="label" class="br-form-field__label">
      {{ label }}
      <span v-if="required" class="br-form-field__required">*</span>
    </label>

    <div class="br-form-field__control">
      <span v-if="$slots.prefix" class="br-form-field__prefix">
        <slot name="prefix" />
      </span>

      <div class="br-form-field__input">
        <slot />
      </div>

      <span v-if="$slots.suffix" class="br-form-field__suffix">
        <slot name="suffix" />
      </span>
    </div>

    <div v-if="message || charCount || hint" class="br-form-field__footer">
      <span
        v-if="message"
        class="br-form-field__message"
        :class="`br-form-field__message--${messageType}`"
      >
        <svg v-if="messageType === 'error'" viewBox="0 0 24 24" class="br-form-field__icon">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" fill="currentColor" />
        </svg>
        <svg v-else-if="messageType === 'success'" viewBox="0 0 24 24" class="br-form-field__icon">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" fill="currentColor" />
        </svg>
        {{ message }}
      </span>

      <span v-if="charCount" class="br-form-field__char-count">
        {{ charCount.current }}/{{ charCount.max }}
      </span>
    </div>

    <span v-if="hint" class="br-form-field__hint">
      {{ hint }}
    </span>
  </div>
</template>

<style lang="scss" scoped>
.br-form-field {
  display: flex;
  flex-direction: column;
  gap: var(--br-space-1);

  &--label-left {
    flex-direction: row;
    align-items: flex-start;
    gap: var(--br-space-3);

    .br-form-field__label {
      min-width: 120px;
      padding-top: var(--br-space-2);
    }

    .br-form-field__control {
      flex: 1;
    }
  }

  &__label {
    display: flex;
    align-items: center;
    gap: var(--br-space-1);
    font-size: var(--br-text-sm);
    font-weight: var(--br-font-medium);
    color: var(--br-dark-700);
  }

  &__required {
    color: var(--br-danger-500);
  }

  &__control {
    display: flex;
    align-items: stretch;
    position: relative;
  }

  &__input {
    flex: 1;
    display: flex;

    :deep(input),
    :deep(select),
    :deep(textarea) {
      width: 100%;
    }
  }

  &__prefix,
  &__suffix {
    display: flex;
    align-items: center;
    padding: 0 var(--br-space-3);
    background: var(--br-light-100);
    border: 1px solid var(--br-light-300);
    color: var(--br-dark-500);
    font-size: var(--br-text-sm);
  }

  &__prefix {
    border-right: none;
    border-radius: var(--br-radius-md) 0 0 var(--br-radius-md);
  }

  &__suffix {
    border-left: none;
    border-radius: 0 var(--br-radius-md) var(--br-radius-md) 0;
  }

  &--has-prefix :deep(input),
  &--has-prefix :deep(select) {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }

  &--has-suffix :deep(input),
  &--has-suffix :deep(select) {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  &__footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 20px;
  }

  &__message {
    display: flex;
    align-items: center;
    gap: var(--br-space-1);
    font-size: var(--br-text-sm);

    &--helper {
      color: var(--br-dark-500);
    }

    &--error {
      color: var(--br-danger-500);
    }

    &--success {
      color: var(--br-success-500);
    }
  }

  &__icon {
    width: 16px;
    height: 16px;
    flex-shrink: 0;
  }

  &__char-count {
    font-size: var(--br-text-xs);
    color: var(--br-dark-400);
  }

  &__hint {
    font-size: var(--br-text-xs);
    color: var(--br-dark-400);
    font-style: italic;
  }

  // States
  &--error {
    .br-form-field__label {
      color: var(--br-danger-600);
    }

    :deep(input),
    :deep(select),
    :deep(textarea) {
      border-color: var(--br-danger-500);
    }
  }

  &--success {
    :deep(input),
    :deep(select),
    :deep(textarea) {
      border-color: var(--br-success-500);
    }
  }

  &--disabled {
    opacity: 0.6;
    pointer-events: none;
  }
}
</style>
