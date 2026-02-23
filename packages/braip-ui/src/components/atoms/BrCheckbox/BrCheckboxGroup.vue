<script setup lang="ts">
import type { CheckboxGroupProps } from './types'
import BrCheckbox from './BrCheckbox.vue'

const props = withDefaults(defineProps<CheckboxGroupProps>(), {
  direction: 'vertical',
  size: 'md',
  disabled: false,
  error: false,
})

const model = defineModel<Array<string | number>>({ default: () => [] })

const classes = computed(() => [
  'br-checkbox-group',
  `br-checkbox-group--${props.direction}`,
  {
    'br-checkbox-group--error': props.error,
  },
])

function isDisabled(option: (typeof props.options)[0]) {
  if (props.disabled || option.disabled) return true

  // Check max limit
  if (props.max && model.value.length >= props.max && !model.value.includes(option.value)) {
    return true
  }

  // Check min limit (prevent unchecking if at minimum)
  if (props.min && model.value.length <= props.min && model.value.includes(option.value)) {
    return true
  }

  return false
}
</script>

<template>
  <div :class="classes" role="group" :aria-label="label">
    <span v-if="label" class="br-checkbox-group__label">{{ label }}</span>
    <div class="br-checkbox-group__options">
      <BrCheckbox
        v-for="option in options"
        :key="String(option.value)"
        v-model="model"
        :label="option.label"
        :true-value="option.value"
        :size="size"
        :disabled="isDisabled(option)"
        :error="error"
      />
    </div>
    <span v-if="error && errorMessage" class="br-checkbox-group__error">
      {{ errorMessage }}
    </span>
  </div>
</template>

<style lang="scss" scoped>
.br-checkbox-group {
  display: flex;
  flex-direction: column;
  gap: var(--br-space-2);

  &__label {
    font-size: var(--br-text-sm);
    font-weight: var(--br-font-medium);
    color: var(--br-dark-700);
  }

  &__options {
    display: flex;
    gap: var(--br-space-3);
  }

  &--vertical &__options {
    flex-direction: column;
  }

  &--horizontal &__options {
    flex-direction: row;
    flex-wrap: wrap;
  }

  &__error {
    font-size: var(--br-text-sm);
    color: var(--br-danger-500);
  }
}
</style>
