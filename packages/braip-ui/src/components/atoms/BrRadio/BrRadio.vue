<script setup lang="ts">
import { computed } from 'vue'
import type { RadioProps } from './types'

const props = withDefaults(defineProps<RadioProps>(), {
  size: 'md',
  disabled: false,
  error: false,
})

const model = defineModel<string | number | boolean>()

const classes = computed(() => [
  'br-radio',
  `br-radio--${props.size}`,
  {
    'br-radio--disabled': props.disabled,
    'br-radio--error': props.error,
    'br-radio--checked': model.value === props.value,
  },
])

const inputId = computed(() => `radio-${props.name}-${props.value}`)

function handleChange() {
  if (!props.disabled) {
    model.value = props.value
  }
}
</script>

<template>
  <label :class="classes" :for="inputId">
    <input
      :id="inputId"
      type="radio"
      :name="name"
      :value="value"
      :checked="model === value"
      :disabled="disabled"
      class="br-radio__input"
      @change="handleChange"
    />
    <span class="br-radio__control">
      <span class="br-radio__dot" />
    </span>
    <span v-if="label || $slots.default" class="br-radio__label">
      <slot>{{ label }}</slot>
    </span>
    <span v-if="helperText" class="br-radio__helper">{{ helperText }}</span>
  </label>
</template>

<style lang="scss" scoped>
.br-radio {
  display: inline-flex;
  align-items: flex-start;
  gap: var(--br-space-2);
  cursor: pointer;
  user-select: none;

  &__input {
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
  }

  &__control {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    border: 2px solid var(--br-dark-300);
    border-radius: 50%;
    background: var(--br-white);
    transition: all var(--br-transition-fast);
  }

  &__dot {
    border-radius: 50%;
    background: transparent;
    transition: all var(--br-transition-fast);
  }

  &__label {
    color: var(--br-dark-700);
    line-height: 1.4;
  }

  &__helper {
    display: block;
    width: 100%;
    margin-top: var(--br-space-1);
    font-size: var(--br-text-sm);
    color: var(--br-dark-500);
  }

  // Sizes
  &--sm {
    .br-radio__control {
      width: 16px;
      height: 16px;
    }
    .br-radio__dot {
      width: 8px;
      height: 8px;
    }
    .br-radio__label {
      font-size: var(--br-text-sm);
    }
  }

  &--md {
    .br-radio__control {
      width: 20px;
      height: 20px;
    }
    .br-radio__dot {
      width: 10px;
      height: 10px;
    }
    .br-radio__label {
      font-size: var(--br-text-md);
    }
  }

  &--lg {
    .br-radio__control {
      width: 24px;
      height: 24px;
    }
    .br-radio__dot {
      width: 12px;
      height: 12px;
    }
    .br-radio__label {
      font-size: var(--br-text-lg);
    }
  }

  // States
  &:hover:not(&--disabled) {
    .br-radio__control {
      border-color: var(--br-primary-500);
    }
  }

  &--checked {
    .br-radio__control {
      border-color: var(--br-primary-500);
    }
    .br-radio__dot {
      background: var(--br-primary-500);
    }
  }

  &--error {
    .br-radio__control {
      border-color: var(--br-danger-500);
    }
    &.br-radio--checked .br-radio__dot {
      background: var(--br-danger-500);
    }
    .br-radio__helper {
      color: var(--br-danger-500);
    }
  }

  &--disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
}
</style>
