<script setup lang="ts">
import type { CheckboxProps } from './types'

const props = withDefaults(defineProps<CheckboxProps>(), {
  size: "md",
  disabled: false,
  indeterminate: false,
  error: false,
  trueValue: true,
  falseValue: false,
});

const model = defineModel<string | number | boolean | Array<string | number>>();
const inputRef = ref<HTMLInputElement | null>(null);

const isChecked = computed(() => {
  if (Array.isArray(model.value)) {
    return model.value.includes(props.trueValue as never);
  }
  return model.value === props.trueValue;
});

const classes = computed(() => [
  "br-checkbox",
  `br-checkbox--${props.size}`,
  {
    "br-checkbox--disabled": props.disabled,
    "br-checkbox--error": props.error,
    "br-checkbox--checked": isChecked.value,
    "br-checkbox--indeterminate": props.indeterminate,
  },
]);

watch(
  () => props.indeterminate,
  (val) => {
    if (inputRef.value) {
      inputRef.value.indeterminate = val;
    }
  },
  { immediate: true },
);

function handleChange() {
  if (props.disabled) return;

  if (Array.isArray(model.value)) {
    const newValue = [...model.value];
    const index = newValue.indexOf(props.trueValue as never);
    if (index > -1) {
      newValue.splice(index, 1);
    } else {
      newValue.push(props.trueValue as never);
    }
    model.value = newValue;
  } else {
    model.value = isChecked.value ? props.falseValue : props.trueValue;
  }
}
</script>

<template>
  <label :class="classes">
    <input
      ref="inputRef"
      type="checkbox"
      :checked="isChecked"
      :disabled="disabled"
      class="br-checkbox__input"
      @change="handleChange"
    />
    <span class="br-checkbox__control">
      <svg
        v-if="isChecked && !indeterminate"
        viewBox="0 0 24 24"
        class="br-checkbox__icon"
      >
        <path
          d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"
          fill="currentColor"
        />
      </svg>
      <svg
        v-else-if="indeterminate"
        viewBox="0 0 24 24"
        class="br-checkbox__icon"
      >
        <path d="M19 13H5v-2h14v2z" fill="currentColor" />
      </svg>
    </span>
    <span v-if="label || $slots.default" class="br-checkbox__label">
      <slot>{{ label }}</slot>
    </span>
    <span v-if="helperText" class="br-checkbox__helper">{{ helperText }}</span>
  </label>
</template>

<style lang="scss" scoped>
.br-checkbox {
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
    border: 2px solid var(--neutralDarkGrey3);
    border-radius: var(--br-radius-sm);
    background: var(--br-white);
    transition: all var(--br-transition-fast);
  }

  &__icon {
    width: 100%;
    height: 100%;
    color: var(--br-white);
  }

  &__label {
    color: var(--neutralDarkGrey7);
    line-height: 1.4;
  }

  &__helper {
    display: block;
    width: 100%;
    margin-top: var(--br-space-1);
    font-size: var(--br-text-sm);
    color: var(--neutralDarkGrey5);
  }

  // Sizes
  &--sm {
    .br-checkbox__control {
      width: 16px;
      height: 16px;
    }
    .br-checkbox__label {
      font-size: var(--br-text-sm);
    }
  }

  &--md {
    .br-checkbox__control {
      width: 20px;
      height: 20px;
    }
    .br-checkbox__label {
      font-size: var(--br-text-md);
    }
  }

  &--lg {
    .br-checkbox__control {
      width: 24px;
      height: 24px;
    }
    .br-checkbox__label {
      font-size: var(--br-text-lg);
    }
  }

  // States
  &:hover:not(&--disabled) {
    .br-checkbox__control {
      border-color: var(--brandPrimary5);
    }
  }

  &--checked,
  &--indeterminate {
    .br-checkbox__control {
      background: var(--brandPrimary5);
      border-color: var(--brandPrimary5);
    }
  }

  &--error {
    .br-checkbox__control {
      border-color: var(--auxiliaryRed5);
    }
    &.br-checkbox--checked .br-checkbox__control,
    &.br-checkbox--indeterminate .br-checkbox__control {
      background: var(--auxiliaryRed5);
      border-color: var(--auxiliaryRed5);
    }
    .br-checkbox__helper {
      color: var(--auxiliaryRed5);
    }
  }

  &--disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
}
</style>
