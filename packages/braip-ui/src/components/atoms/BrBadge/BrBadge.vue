<script setup lang="ts">
/**
 * BrBadge - Badge/Tag component for status indicators
 *
 * @example
 * <BrBadge>Default</BrBadge>
 * <BrBadge variant="success">Ativo</BrBadge>
 * <BrBadge variant="danger" size="lg">Erro</BrBadge>
 */

import { computed } from "vue";
import type { BadgeProps } from "./types";

// ---------------------------------------------------------------------------
// PROPS
// ---------------------------------------------------------------------------

const props = withDefaults(defineProps<BadgeProps>(), {
  variant: "default",
  size: "md",
  rounded: false,
});

// ---------------------------------------------------------------------------
// COMPUTED
// ---------------------------------------------------------------------------

const classes = computed(() => [
  "br-badge",
  `br-badge--${props.variant}`,
  `br-badge--${props.size}`,
  {
    "br-badge--rounded": props.rounded,
  },
]);
</script>

<template>
  <span :class="classes">
    <slot />
  </span>
</template>

<style lang="scss" scoped>
.br-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--br-space-1);
  font-family: var(--br-font-primary);
  font-weight: var(--br-font-medium);
  line-height: 1;
  white-space: nowrap;
  transition: all var(--br-transition-fast);

  // ---------------------------------------------------------------------------
  // SIZES
  // ---------------------------------------------------------------------------

  &--sm {
    padding: 2px 6px;
    font-size: 10px;
    border-radius: var(--br-radius-sm);
  }

  &--md {
    padding: 4px 10px;
    font-size: var(--br-text-xs);
    border-radius: var(--br-radius-md);
  }

  &--lg {
    padding: 6px 12px;
    font-size: var(--br-text-sm);
    border-radius: var(--br-radius-md);
  }

  // ---------------------------------------------------------------------------
  // VARIANTS
  // ---------------------------------------------------------------------------

  &--default {
    background: var(--neutralLightGrey6);
    color: var(--neutralDarkGrey7);
  }

  &--primary {
    background: var(--brandPrimaryLightest);
    color: var(--brandPrimaryDark7);
  }

  &--secondary {
    background: var(--brandSecondaryLightest);
    color: var(--brandSecondaryDark9);
  }

  &--success {
    background: var(--auxiliaryGreenLightest);
    color: var(--auxiliaryGreenDark8);
  }

  &--danger {
    background: var(--auxiliaryRedLightest);
    color: var(--auxiliaryRedDark7);
  }

  &--warning {
    background: var(--auxiliaryOrangeLightest);
    color: var(--auxiliaryOrangeDark8);
  }

  &--info {
    background: var(--auxiliaryBlueLightest);
    color: var(--auxiliaryBlueDark8);
  }

  // ---------------------------------------------------------------------------
  // MODIFIERS
  // ---------------------------------------------------------------------------

  &--rounded {
    border-radius: var(--br-radius-full);
  }
}
</style>
