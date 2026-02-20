<script setup lang="ts">
import { computed } from "vue";
import type { RadioGroupProps } from "./types";
import BrRadio from "./BrRadio.vue";

const props = withDefaults(defineProps<RadioGroupProps>(), {
  direction: "vertical",
  size: "md",
  disabled: false,
  error: false,
});

const model = defineModel<string | number | boolean>();

const classes = computed(() => [
  "br-radio-group",
  `br-radio-group--${props.direction}`,
  {
    "br-radio-group--error": props.error,
  },
]);
</script>

<template>
  <div :class="classes" role="radiogroup" :aria-label="label">
    <span v-if="label" class="br-radio-group__label">{{ label }}</span>
    <div class="br-radio-group__options">
      <BrRadio
        v-for="option in options"
        :key="String(option.value)"
        v-model="model"
        :value="option.value"
        :label="option.label"
        :name="name"
        :size="size"
        :disabled="disabled || option.disabled"
        :error="error"
      />
    </div>
    <span v-if="error && errorMessage" class="br-radio-group__error">
      {{ errorMessage }}
    </span>
  </div>
</template>

<style lang="scss" scoped>
.br-radio-group {
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
