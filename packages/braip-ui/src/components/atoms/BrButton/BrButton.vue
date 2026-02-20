<script setup lang="ts">
/**
 * BrButton - Primary button component
 *
 * @example
 * <BrButton>Click me</BrButton>
 * <BrButton variant="secondary" size="lg">Large Button</BrButton>
 * <BrButton variant="outline" loading>Loading...</BrButton>
 */

import { computed } from 'vue'
import type { ButtonProps, ButtonVariant, ButtonSize } from './types'

// ---------------------------------------------------------------------------
// PROPS
// ---------------------------------------------------------------------------

const props = withDefaults(defineProps<ButtonProps>(), {
  variant: 'primary',
  size: 'md',
  type: 'button',
  disabled: false,
  loading: false,
  block: false,
})

// ---------------------------------------------------------------------------
// EMITS
// ---------------------------------------------------------------------------

const emit = defineEmits<{
  (e: 'click', event: MouseEvent): void
}>()

// ---------------------------------------------------------------------------
// COMPUTED
// ---------------------------------------------------------------------------

const classes = computed(() => [
  'br-button',
  `br-button--${props.variant}`,
  `br-button--${props.size}`,
  {
    'br-button--block': props.block,
    'br-button--loading': props.loading,
    'br-button--disabled': props.disabled || props.loading,
  },
])

const isDisabled = computed(() => props.disabled || props.loading)

// ---------------------------------------------------------------------------
// METHODS
// ---------------------------------------------------------------------------

function handleClick(event: MouseEvent) {
  if (!isDisabled.value) {
    emit('click', event)
  }
}
</script>

<template>
  <button
    :class="classes"
    :type="type"
    :disabled="isDisabled"
    @click="handleClick"
  >
    <span v-if="loading" class="br-button__loader">
      <svg
        class="br-button__spinner"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          stroke-width="3"
          stroke-linecap="round"
          stroke-dasharray="31.416"
          stroke-dashoffset="10"
        />
      </svg>
    </span>
    <span class="br-button__content" :class="{ 'br-button__content--hidden': loading }">
      <slot />
    </span>
  </button>
</template>

<style lang="scss" scoped>
.br-button {
  // Base styles
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--br-space-2);
  font-family: var(--br-font-primary);
  font-weight: var(--br-font-semibold);
  line-height: 1;
  border: 2px solid transparent;
  border-radius: var(--br-radius-md);
  cursor: pointer;
  transition: all var(--br-transition-fast);
  position: relative;
  white-space: nowrap;
  user-select: none;

  &:focus-visible {
    outline: 2px solid var(--br-primary-600);
    outline-offset: 2px;
  }

  // ---------------------------------------------------------------------------
  // SIZES
  // ---------------------------------------------------------------------------

  &--sm {
    height: 32px;
    padding: 0 var(--br-space-3);
    font-size: var(--br-text-xs);
  }

  &--md {
    height: 40px;
    padding: 0 var(--br-space-5);
    font-size: var(--br-text-sm);
  }

  &--lg {
    height: 48px;
    padding: 0 var(--br-space-6);
    font-size: var(--br-text-base);
  }

  // ---------------------------------------------------------------------------
  // VARIANTS
  // ---------------------------------------------------------------------------

  &--primary {
    background-color: var(--br-primary-600);
    color: var(--br-light-0);
    border-color: var(--br-primary-600);

    &:hover:not(:disabled) {
      background-color: var(--br-primary-700);
      border-color: var(--br-primary-700);
    }

    &:active:not(:disabled) {
      background-color: var(--br-primary-800);
      border-color: var(--br-primary-800);
    }
  }

  &--secondary {
    background-color: var(--br-secondary-600);
    color: var(--br-dark-0);
    border-color: var(--br-secondary-600);

    &:hover:not(:disabled) {
      background-color: var(--br-secondary-700);
      border-color: var(--br-secondary-700);
    }

    &:active:not(:disabled) {
      background-color: var(--br-secondary-800);
      border-color: var(--br-secondary-800);
    }
  }

  &--outline {
    background-color: transparent;
    color: var(--br-primary-600);
    border-color: var(--br-primary-600);

    &:hover:not(:disabled) {
      background-color: var(--br-primary-100);
    }

    &:active:not(:disabled) {
      background-color: var(--br-primary-200);
    }
  }

  &--ghost {
    background-color: transparent;
    color: var(--br-primary-600);
    border-color: transparent;

    &:hover:not(:disabled) {
      background-color: var(--br-primary-100);
    }

    &:active:not(:disabled) {
      background-color: var(--br-primary-200);
    }
  }

  &--danger {
    background-color: var(--br-danger-600);
    color: var(--br-light-0);
    border-color: var(--br-danger-600);

    &:hover:not(:disabled) {
      background-color: var(--br-danger-700);
      border-color: var(--br-danger-700);
    }

    &:active:not(:disabled) {
      background-color: var(--br-danger-800);
      border-color: var(--br-danger-800);
    }
  }

  &--success {
    background-color: var(--br-success-600);
    color: var(--br-light-0);
    border-color: var(--br-success-600);

    &:hover:not(:disabled) {
      background-color: var(--br-success-700);
      border-color: var(--br-success-700);
    }

    &:active:not(:disabled) {
      background-color: var(--br-success-800);
      border-color: var(--br-success-800);
    }
  }

  // ---------------------------------------------------------------------------
  // STATES
  // ---------------------------------------------------------------------------

  &--block {
    width: 100%;
  }

  &--disabled,
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    pointer-events: none;
  }

  &--loading {
    cursor: wait;
  }

  // ---------------------------------------------------------------------------
  // INTERNAL ELEMENTS
  // ---------------------------------------------------------------------------

  &__content {
    display: inline-flex;
    align-items: center;
    gap: var(--br-space-2);

    &--hidden {
      visibility: hidden;
    }
  }

  &__loader {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__spinner {
    width: 1.25em;
    height: 1.25em;
    animation: br-spin 1s linear infinite;
  }
}

@keyframes br-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
