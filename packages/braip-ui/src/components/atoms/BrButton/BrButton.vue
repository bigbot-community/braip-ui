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
    outline: 2px solid var(--brandPrimary6);
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
    background-color: var(--brandPrimary6);
    color: var(--neutralLightGrey9);
    border-color: var(--brandPrimary6);

    &:hover:not(:disabled) {
      background-color: var(--brandPrimaryDark7);
      border-color: var(--brandPrimaryDark7);
    }

    &:active:not(:disabled) {
      background-color: var(--brandPrimaryDark8);
      border-color: var(--brandPrimaryDark8);
    }
  }

  &--secondary {
    background-color: var(--brandSecondary6);
    color: var(--neutralDarkGrey);
    border-color: var(--brandSecondary6);

    &:hover:not(:disabled) {
      background-color: var(--brandSecondaryDark7);
      border-color: var(--brandSecondaryDark7);
    }

    &:active:not(:disabled) {
      background-color: var(--brandSecondaryDark8);
      border-color: var(--brandSecondaryDark8);
    }
  }

  &--outline {
    background-color: transparent;
    color: var(--brandPrimary6);
    border-color: var(--brandPrimary6);

    &:hover:not(:disabled) {
      background-color: var(--brandPrimaryLightest);
    }

    &:active:not(:disabled) {
      background-color: var(--brandPrimaryLight2);
    }
  }

  &--ghost {
    background-color: transparent;
    color: var(--brandPrimary6);
    border-color: transparent;

    &:hover:not(:disabled) {
      background-color: var(--brandPrimaryLightest);
    }

    &:active:not(:disabled) {
      background-color: var(--brandPrimaryLight2);
    }
  }

  &--danger {
    background-color: var(--auxiliaryRed6);
    color: var(--neutralLightGrey9);
    border-color: var(--auxiliaryRed6);

    &:hover:not(:disabled) {
      background-color: var(--auxiliaryRedDark7);
      border-color: var(--auxiliaryRedDark7);
    }

    &:active:not(:disabled) {
      background-color: var(--auxiliaryRedDark8);
      border-color: var(--auxiliaryRedDark8);
    }
  }

  &--success {
    background-color: var(--auxiliaryGreen6);
    color: var(--neutralLightGrey9);
    border-color: var(--auxiliaryGreen6);

    &:hover:not(:disabled) {
      background-color: var(--auxiliaryGreenDark7);
      border-color: var(--auxiliaryGreenDark7);
    }

    &:active:not(:disabled) {
      background-color: var(--auxiliaryGreenDark8);
      border-color: var(--auxiliaryGreenDark8);
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
