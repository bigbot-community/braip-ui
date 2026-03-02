<script setup lang="ts">
import { computed } from "vue";
import type { DropdownItemProps } from "./types";

const props = withDefaults(defineProps<DropdownItemProps>(), {
  state: "default",
  text: "",
  textColor: "var(--brandPrimary6)",
  isSelected: false,
  isTextAssistant: false,
  textAssistant: "Lorem",
});

const emit = defineEmits<{
  (e: "onclick"): void;
}>();

const isStateActivated = computed(() => props.state === "activated");

const classes = computed(() => [
  "br-dropdown-item",
  props.state,
  { "br-dropdown-item--selected": props.isSelected },
]);
</script>

<template>
  <div :class="classes" @click="emit('onclick')">
    <div class="br-dropdown-item__text">
      <span class="br-dropdown-item__label">{{ text }}</span>
      <span v-if="isTextAssistant" class="br-dropdown-item__assistant">
        {{ textAssistant }}
      </span>
    </div>
    <svg
      v-if="isStateActivated"
      class="br-dropdown-item__check"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5 12l5 5L20 7"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </div>
</template>

<style scoped lang="scss">
.br-dropdown-item {
  display: flex;
  width: 100%;
  padding: 12px 15px;
  box-sizing: border-box;
  align-items: center;
  gap: 16px;
  font-size: 14px;
  font-family: var(--br-font-primary, inherit);
  cursor: pointer;
  transition: background 0.15s ease;

  &__text {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    gap: 8px;
  }

  &__label {
    flex: 1;
    color: inherit;
  }

  &__assistant {
    font-size: 12px;
    color: var(--neutralLightGrey1, #9ca3af);
    white-space: nowrap;
  }

  &__check {
    width: 16px;
    height: 16px;
    flex-shrink: 0;
    color: var(--brandPrimary6, #6d36fb);
  }

  &.default {
    color: var(--br-dark-700, #374151);
  }

  &:hover {
    background: rgba(44, 22, 100, 0.08);
  }

  &.activated {
    background: rgba(110, 54, 251, 0.07);
    color: var(--brandPrimary6, #6d36fb);
    border-radius: 4px;
  }

  &.disabled {
    color: var(--br-dark-1100, #9ca3af);
    cursor: not-allowed;
    pointer-events: none;

    &:hover {
      background: none;
    }
  }

  &--selected {
    padding: 0;
    cursor: default;

    &:hover {
      background: none;
    }
  }
}
</style>
