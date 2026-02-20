<script setup lang="ts">
import { computed } from 'vue'
import type { ProgressbarProps } from './types'

const props = withDefaults(defineProps<ProgressbarProps>(), {
  value: 0,
  max: 100,
  size: 'md',
  variant: 'primary',
  showLabel: false,
  labelPosition: 'right',
  striped: false,
  animated: false,
  indeterminate: false,
  rounded: true,
})

const percentage = computed(() => {
  if (props.indeterminate) return 0
  return Math.min(100, Math.max(0, (props.value / props.max) * 100))
})

const classes = computed(() => [
  'br-progressbar',
  `br-progressbar--${props.size}`,
  `br-progressbar--${props.variant}`,
  {
    'br-progressbar--striped': props.striped,
    'br-progressbar--animated': props.animated,
    'br-progressbar--indeterminate': props.indeterminate,
    'br-progressbar--rounded': props.rounded,
    [`br-progressbar--label-${props.labelPosition}`]: props.showLabel,
  },
])

const barStyle = computed(() => ({
  width: props.indeterminate ? '100%' : `${percentage.value}%`,
}))
</script>

<template>
  <div :class="classes">
    <span v-if="showLabel && labelPosition === 'top'" class="br-progressbar__label">
      {{ Math.round(percentage) }}%
    </span>
    <div class="br-progressbar__track">
      <div class="br-progressbar__bar" :style="barStyle">
        <span v-if="showLabel && labelPosition === 'inside'" class="br-progressbar__label">
          {{ Math.round(percentage) }}%
        </span>
      </div>
    </div>
    <span v-if="showLabel && labelPosition === 'right'" class="br-progressbar__label">
      {{ Math.round(percentage) }}%
    </span>
  </div>
</template>

<style lang="scss" scoped>
.br-progressbar {
  display: flex;
  align-items: center;
  gap: var(--br-space-2);
  width: 100%;

  &--label-top {
    flex-direction: column;
    align-items: flex-start;
  }

  &__track {
    flex: 1;
    background: var(--br-light-300);
    overflow: hidden;
  }

  &__bar {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: width var(--br-transition-normal);
  }

  &__label {
    font-size: var(--br-text-sm);
    font-weight: var(--br-font-medium);
    color: var(--br-dark-600);
    white-space: nowrap;
  }

  // Sizes
  &--xs {
    .br-progressbar__track {
      height: 4px;
    }
  }

  &--sm {
    .br-progressbar__track {
      height: 8px;
    }
  }

  &--md {
    .br-progressbar__track {
      height: 12px;
    }
  }

  &--lg {
    .br-progressbar__track {
      height: 20px;
    }
    .br-progressbar__bar {
      font-size: var(--br-text-xs);
    }
  }

  // Rounded
  &--rounded {
    .br-progressbar__track {
      border-radius: var(--br-radius-full);
    }
    .br-progressbar__bar {
      border-radius: var(--br-radius-full);
    }
  }

  // Variants
  &--primary .br-progressbar__bar {
    background: var(--br-primary-500);
  }

  &--success .br-progressbar__bar {
    background: var(--br-success-500);
  }

  &--warning .br-progressbar__bar {
    background: var(--br-warning-500);
  }

  &--danger .br-progressbar__bar {
    background: var(--br-danger-500);
  }

  &--info .br-progressbar__bar {
    background: var(--br-info-500);
  }

  // Inside label
  &--label-inside {
    .br-progressbar__label {
      color: var(--br-white);
      font-size: var(--br-text-xs);
      padding: 0 var(--br-space-2);
    }
  }

  // Striped
  &--striped .br-progressbar__bar {
    background-image: linear-gradient(
      45deg,
      rgba(255, 255, 255, 0.15) 25%,
      transparent 25%,
      transparent 50%,
      rgba(255, 255, 255, 0.15) 50%,
      rgba(255, 255, 255, 0.15) 75%,
      transparent 75%,
      transparent
    );
    background-size: 1rem 1rem;
  }

  // Animated
  &--animated .br-progressbar__bar {
    animation: progress-bar-stripes 1s linear infinite;
  }

  // Indeterminate
  &--indeterminate .br-progressbar__bar {
    width: 30% !important;
    animation: progress-bar-indeterminate 1.5s ease-in-out infinite;
  }
}

@keyframes progress-bar-stripes {
  from {
    background-position: 1rem 0;
  }
  to {
    background-position: 0 0;
  }
}

@keyframes progress-bar-indeterminate {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(400%);
  }
}
</style>
