<script setup lang="ts">
/**
 * BrTitle - Typography heading component
 *
 * @example
 * <BrTitle>Default Title</BrTitle>
 * <BrTitle tag="h2" level="2">Heading 2</BrTitle>
 * <BrTitle level="6" weight="semibold">Small Title</BrTitle>
 */

import { computed } from 'vue'
import type { TitleProps } from './types'

// ---------------------------------------------------------------------------
// PROPS
// ---------------------------------------------------------------------------

const props = withDefaults(defineProps<TitleProps>(), {
  tag: 'h1',
  level: '4',
  weight: 'semibold',
  color: 'var(--br-dark-0)',
  align: 'left',
  truncate: false,
  maxLines: undefined,
})

// ---------------------------------------------------------------------------
// COMPUTED
// ---------------------------------------------------------------------------

const classes = computed(() => [
  'br-title',
  `br-title--level-${props.level}`,
  `br-title--${props.weight}`,
  `br-title--${props.align}`,
  {
    'br-title--truncate': props.truncate,
    'br-title--clamp': props.maxLines,
  },
])

const styles = computed(() => ({
  color: props.color,
  '--max-lines': props.maxLines,
}))
</script>

<template>
  <component :is="tag" :class="classes" :style="styles">
    <slot />
  </component>
</template>

<style lang="scss" scoped>
.br-title {
  font-family: var(--br-font-secondary);
  margin: 0;
  padding: 0;
  transition: color var(--br-transition-fast);

  // ---------------------------------------------------------------------------
  // LEVELS (Based on design system)
  // ---------------------------------------------------------------------------

  &--level-1 {
    font-size: var(--br-text-h1);
    line-height: 1.2;
  }

  &--level-2 {
    font-size: var(--br-text-h2);
    line-height: 1.25;
  }

  &--level-3 {
    font-size: var(--br-text-h3);
    line-height: 1.3;
  }

  &--level-4 {
    font-size: var(--br-text-h4);
    line-height: 1.35;
  }

  &--level-5 {
    font-size: var(--br-text-h5);
    line-height: 1.4;
  }

  &--level-6 {
    font-size: var(--br-text-h6);
    line-height: 1.4;
  }

  &--level-7 {
    font-size: var(--br-text-h7);
    line-height: 1.4;
  }

  // ---------------------------------------------------------------------------
  // WEIGHTS
  // ---------------------------------------------------------------------------

  &--normal {
    font-weight: var(--br-font-normal);
  }

  &--medium {
    font-weight: var(--br-font-medium);
  }

  &--semibold {
    font-weight: var(--br-font-semibold);
  }

  &--bold {
    font-weight: var(--br-font-bold);
  }

  // ---------------------------------------------------------------------------
  // ALIGNMENT
  // ---------------------------------------------------------------------------

  &--left {
    text-align: left;
  }

  &--center {
    text-align: center;
  }

  &--right {
    text-align: right;
  }

  // ---------------------------------------------------------------------------
  // TRUNCATION
  // ---------------------------------------------------------------------------

  &--truncate {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  &--clamp {
    display: -webkit-box;
    -webkit-line-clamp: var(--max-lines);
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
}
</style>
