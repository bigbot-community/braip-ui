<script setup lang="ts">
/**
 * BrSwitch - Toggle switch component
 *
 * @example
 * <BrSwitch v-model="isActive" />
 * <BrSwitch v-model="isEnabled" size="lg" />
 * <BrSwitch v-model="value" disabled />
 */

import { computed } from "vue";
import type { SwitchProps } from "./types";

// ---------------------------------------------------------------------------
// PROPS
// ---------------------------------------------------------------------------

const props = withDefaults(defineProps<SwitchProps>(), {
  size: "md",
  disabled: false,
});

// ---------------------------------------------------------------------------
// MODEL
// ---------------------------------------------------------------------------

const model = defineModel<boolean>({ default: false });

// ---------------------------------------------------------------------------
// COMPUTED
// ---------------------------------------------------------------------------

const classes = computed(() => [
  "br-switch",
  `br-switch--${props.size}`,
  {
    "br-switch--checked": model.value,
    "br-switch--disabled": props.disabled,
  },
]);

// ---------------------------------------------------------------------------
// METHODS
// ---------------------------------------------------------------------------

function toggle() {
  if (!props.disabled) {
    model.value = !model.value;
  }
}
</script>

<template>
  <button
    type="button"
    role="switch"
    :class="classes"
    :aria-checked="model"
    :disabled="disabled"
    @click="toggle"
  >
    <span class="br-switch__track">
      <span class="br-switch__thumb" />
    </span>
  </button>
</template>

<style lang="scss" scoped>
.br-switch {
  display: inline-flex;
  align-items: center;
  padding: 0;
  border: none;
  background: transparent;
  cursor: pointer;
  transition: all var(--br-transition-fast);

  &__track {
    position: relative;
    display: flex;
    align-items: center;
    background: var(--br-dark-1100);
    border-radius: var(--br-radius-full);
    transition: background var(--br-transition-fast);
  }

  &__thumb {
    position: absolute;
    background: var(--br-light-0);
    border-radius: 50%;
    box-shadow: var(--br-shadow-sm);
    transition: transform var(--br-transition-fast);
  }

  // ---------------------------------------------------------------------------
  // SIZES
  // ---------------------------------------------------------------------------

  &--sm {
    .br-switch__track {
      width: 36px;
      height: 20px;
    }

    .br-switch__thumb {
      width: 16px;
      height: 16px;
      left: 2px;
    }

    &.br-switch--checked .br-switch__thumb {
      transform: translateX(16px);
    }
  }

  &--md {
    .br-switch__track {
      width: 44px;
      height: 24px;
    }

    .br-switch__thumb {
      width: 20px;
      height: 20px;
      left: 2px;
    }

    &.br-switch--checked .br-switch__thumb {
      transform: translateX(20px);
    }
  }

  &--lg {
    .br-switch__track {
      width: 52px;
      height: 28px;
    }

    .br-switch__thumb {
      width: 24px;
      height: 24px;
      left: 2px;
    }

    &.br-switch--checked .br-switch__thumb {
      transform: translateX(24px);
    }
  }

  // ---------------------------------------------------------------------------
  // STATES
  // ---------------------------------------------------------------------------

  &--checked {
    .br-switch__track {
      background: var(--br-primary-600);
    }
  }

  &--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &:focus-visible {
    outline: 2px solid var(--br-primary-600);
    outline-offset: 2px;
    border-radius: var(--br-radius-full);
  }

  &:hover:not(&--disabled) {
    .br-switch__track {
      background: var(--br-dark-900);
    }

    &.br-switch--checked .br-switch__track {
      background: var(--br-primary-700);
    }
  }
}
</style>
