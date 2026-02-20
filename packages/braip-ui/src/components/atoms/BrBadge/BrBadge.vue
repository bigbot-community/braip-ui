<script setup lang="ts">
/**
 * BrBadge - Badge/Tag component for status indicators
 *
 * @example
 * <BrBadge>Default</BrBadge>
 * <BrBadge variant="success">Ativo</BrBadge>
 * <BrBadge variant="danger" size="lg">Erro</BrBadge>
 */

import { computed } from 'vue'
import type { BadgeProps } from './types'

// ---------------------------------------------------------------------------
// PROPS
// ---------------------------------------------------------------------------

const props = withDefaults(defineProps<BadgeProps>(), {
  variant: 'default',
  size: 'md',
  rounded: false,
})

// ---------------------------------------------------------------------------
// COMPUTED
// ---------------------------------------------------------------------------

const classes = computed(() => [
  'br-badge',
  `br-badge--${props.variant}`,
  `br-badge--${props.size}`,
  {
    'br-badge--rounded': props.rounded,
  },
])
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
    background: var(--br-light-200);
    color: var(--br-dark-700);
  }

  &--primary {
    background: var(--br-primary-100);
    color: var(--br-primary-700);
  }

  &--secondary {
    background: var(--br-secondary-100);
    color: var(--br-secondary-900);
  }

  &--success {
    background: var(--br-success-100);
    color: var(--br-success-800);
  }

  &--danger {
    background: var(--br-danger-100);
    color: var(--br-danger-700);
  }

  &--warning {
    background: var(--br-warning-100);
    color: var(--br-warning-800);
  }

  &--info {
    background: var(--br-info-100);
    color: var(--br-info-800);
  }

  // ---------------------------------------------------------------------------
  // MODIFIERS
  // ---------------------------------------------------------------------------

  &--rounded {
    border-radius: var(--br-radius-full);
  }
}
</style>
