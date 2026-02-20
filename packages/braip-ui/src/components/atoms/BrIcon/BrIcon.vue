<script setup lang="ts">
/**
 * BrIcon - SVG Icon component
 *
 * @example
 * <BrIcon name="check" />
 * <BrIcon name="close" size="lg" color="var(--br-danger-600)" />
 */

import { computed, defineAsyncComponent } from 'vue'
import type { IconProps } from './types'

// ---------------------------------------------------------------------------
// PROPS
// ---------------------------------------------------------------------------

const props = withDefaults(defineProps<IconProps>(), {
  size: 'md',
  color: 'currentColor',
  spin: false,
})

// ---------------------------------------------------------------------------
// COMPUTED
// ---------------------------------------------------------------------------

const sizeMap = {
  xs: 12,
  sm: 16,
  md: 20,
  lg: 24,
  xl: 32,
}

const iconSize = computed(() => sizeMap[props.size])

const classes = computed(() => [
  'br-icon',
  {
    'br-icon--spin': props.spin,
  },
])

const styles = computed(() => ({
  width: `${iconSize.value}px`,
  height: `${iconSize.value}px`,
  color: props.color,
  fontSize: `${iconSize.value}px`,
}))

// ---------------------------------------------------------------------------
// ICON LOADING
// ---------------------------------------------------------------------------

const IconComponent = computed(() => {
  return defineAsyncComponent({
    loader: () => import(`../../../../assets/icons/${props.name}.svg?component`),
    onError: (error) => {
      console.error(`Error loading icon: ${props.name}`, error)
    },
  })
})
</script>

<template>
  <span :class="classes" :style="styles" :aria-label="ariaLabel">
    <component :is="IconComponent" class="br-icon__svg" />
  </span>
</template>

<style lang="scss" scoped>
.br-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  line-height: 1;

  &__svg {
    width: 1em;
    height: 1em;
    fill: currentColor;
  }

  &--spin {
    animation: br-icon-spin 1s linear infinite;
  }
}

@keyframes br-icon-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
