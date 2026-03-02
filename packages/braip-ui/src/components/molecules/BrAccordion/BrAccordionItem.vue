<script setup lang="ts">
import { computed, inject, ref, useId } from "vue";
import type { AccordionItemProps } from "./types";

const props = withDefaults(defineProps<AccordionItemProps>(), {
  disabled: false,
});

const accordion = inject<{
  iconPosition: { value: "left" | "right" };
  disabled: { value: boolean };
  toggleItem: (id: string | number) => void;
  isItemOpen: (id: string | number) => boolean;
}>("accordion");

// useId() generates deterministic IDs that match between SSR and client hydration
const itemId = ref(props.id ?? useId());
const contentRef = ref<HTMLElement | null>(null);

const isOpen = computed(() => {
  if (props.open !== undefined) return props.open;
  return accordion?.isItemOpen(itemId.value) ?? false;
});

const isDisabled = computed(() => props.disabled || accordion?.disabled.value);
const iconPosition = computed(() => accordion?.iconPosition.value ?? "right");

const classes = computed(() => [
  "br-accordion-item",
  {
    "br-accordion-item--open": isOpen.value,
    "br-accordion-item--disabled": isDisabled.value,
    "br-accordion-item--icon-left": iconPosition.value === "left",
  },
]);

function toggle() {
  if (isDisabled.value) return;
  accordion?.toggleItem(itemId.value);
}

const contentHeight = computed(() => {
  if (!isOpen.value) return "0px";
  return contentRef.value ? `${contentRef.value.scrollHeight}px` : "auto";
});
</script>

<template>
  <div :class="classes">
    <button
      type="button"
      class="br-accordion-item__header"
      :aria-expanded="isOpen"
      :disabled="isDisabled"
      @click="toggle"
    >
      <svg
        v-if="iconPosition === 'left'"
        class="br-accordion-item__icon"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
      </svg>
      <span v-if="icon" class="br-accordion-item__custom-icon">
        <slot name="icon">{{ icon }}</slot>
      </span>
      <span class="br-accordion-item__title">
        <slot name="title">{{ title }}</slot>
      </span>
      <svg
        v-if="iconPosition === 'right'"
        class="br-accordion-item__icon"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" />
      </svg>
    </button>
    <div
      class="br-accordion-item__content-wrapper"
      :style="{ height: contentHeight }"
    >
      <div ref="contentRef" class="br-accordion-item__content">
        <slot />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.br-accordion-item {
  &__header {
    display: flex;
    align-items: center;
    width: 100%;
    padding: var(--br-space-4);
    border: none;
    background: transparent;
    cursor: pointer;
    text-align: left;
    font-size: var(--br-text-md);
    font-weight: var(--br-font-medium);
    color: var(--neutralDarkGrey7);
    transition: background-color var(--br-transition-fast);

    &:hover:not(:disabled) {
      background: var(--neutralLightGrey7);
    }

    &:disabled {
      cursor: not-allowed;
      opacity: 0.5;
    }
  }

  &__icon {
    width: 20px;
    height: 20px;
    flex-shrink: 0;
    color: var(--neutralDarkGrey5);
    transition: transform var(--br-transition-fast);
  }

  &__custom-icon {
    margin-right: var(--br-space-2);
  }

  &__title {
    flex: 1;
  }

  &__content-wrapper {
    overflow: hidden;
    transition: height var(--br-transition-normal);
  }

  &__content {
    padding: 0 var(--br-space-4) var(--br-space-4);
    color: var(--neutralDarkGrey6);
    font-size: var(--br-text-sm);
    line-height: 1.6;
  }

  // Open state
  &--open {
    .br-accordion-item__icon {
      transform: rotate(180deg);
    }

    &.br-accordion-item--icon-left .br-accordion-item__icon {
      transform: rotate(90deg);
    }
  }

  // Icon left
  &--icon-left {
    .br-accordion-item__icon {
      margin-right: var(--br-space-2);
    }
  }

  // Borders between items (for default variant)
  &:not(:last-child) {
    border-bottom: 1px solid var(--neutralLightGrey5);
  }
}
</style>
