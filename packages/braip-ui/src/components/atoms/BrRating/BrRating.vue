<script setup lang="ts">
import type { RatingProps } from './types'

const props = withDefaults(defineProps<RatingProps>(), {
  max: 5,
  size: 'md',
  allowHalf: false,
  readonly: false,
  disabled: false,
  showValue: false,
  icon: 'star',
  clearable: false,
})

const model = defineModel<number>({ default: 0 })
const hoverValue = ref<number | null>(null)

const displayValue = computed(() => {
  if (hoverValue.value !== null && !props.readonly && !props.disabled) {
    return hoverValue.value
  }
  return model.value
})

const classes = computed(() => [
  'br-rating',
  `br-rating--${props.size}`,
  {
    'br-rating--readonly': props.readonly,
    'br-rating--disabled': props.disabled,
  },
])

const stars = computed(() => {
  const items = []
  for (let i = 1; i <= props.max; i++) {
    const filled = displayValue.value >= i
    const halfFilled = props.allowHalf && displayValue.value >= i - 0.5 && displayValue.value < i
    items.push({
      index: i,
      filled,
      halfFilled,
    })
  }
  return items
})

function handleMouseMove(index: number, event: MouseEvent) {
  if (props.readonly || props.disabled) return

  if (props.allowHalf) {
    const target = event.currentTarget as HTMLElement
    const rect = target.getBoundingClientRect()
    const isHalf = event.clientX - rect.left < rect.width / 2
    hoverValue.value = isHalf ? index - 0.5 : index
  } else {
    hoverValue.value = index
  }
}

function handleMouseLeave() {
  hoverValue.value = null
}

function handleClick(index: number, event: MouseEvent) {
  if (props.readonly || props.disabled) return

  let newValue: number
  if (props.allowHalf) {
    const target = event.currentTarget as HTMLElement
    const rect = target.getBoundingClientRect()
    const isHalf = event.clientX - rect.left < rect.width / 2
    newValue = isHalf ? index - 0.5 : index
  } else {
    newValue = index
  }

  if (props.clearable && model.value === newValue) {
    model.value = 0
  } else {
    model.value = newValue
  }
}

const iconPaths = {
  star: 'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z',
  heart: 'M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z',
  circle: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z',
}
</script>

<template>
  <div :class="classes" @mouseleave="handleMouseLeave">
    <div class="br-rating__stars">
      <button
        v-for="star in stars"
        :key="star.index"
        type="button"
        class="br-rating__star"
        :class="{
          'br-rating__star--filled': star.filled,
          'br-rating__star--half': star.halfFilled,
        }"
        :style="{
          '--active-color': activeColor,
          '--inactive-color': inactiveColor,
        }"
        :disabled="disabled"
        @mousemove="handleMouseMove(star.index, $event)"
        @click="handleClick(star.index, $event)"
      >
        <svg viewBox="0 0 24 24" class="br-rating__icon">
          <defs v-if="star.halfFilled">
            <linearGradient :id="`half-${star.index}`">
              <stop offset="50%" stop-color="currentColor" />
              <stop offset="50%" stop-color="var(--br-light-400)" />
            </linearGradient>
          </defs>
          <path
            :d="iconPaths[icon]"
            :fill="star.halfFilled ? `url(#half-${star.index})` : 'currentColor'"
          />
        </svg>
      </button>
    </div>
    <span v-if="showValue" class="br-rating__value">
      {{ model.toFixed(allowHalf ? 1 : 0) }}
    </span>
  </div>
</template>

<style lang="scss" scoped>
.br-rating {
  display: inline-flex;
  align-items: center;
  gap: var(--br-space-2);

  &__stars {
    display: flex;
    gap: var(--br-space-1);
  }

  &__star {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    border: none;
    background: transparent;
    cursor: pointer;
    color: var(--inactive-color, var(--br-light-400));
    transition: transform var(--br-transition-fast), color var(--br-transition-fast);

    &:hover:not(:disabled) {
      transform: scale(1.1);
    }

    &--filled,
    &--half {
      color: var(--active-color, var(--br-warning-500));
    }

    &:disabled {
      cursor: not-allowed;
    }
  }

  &__icon {
    width: 100%;
    height: 100%;
  }

  &__value {
    font-weight: var(--br-font-medium);
    color: var(--br-dark-600);
  }

  // Sizes
  &--sm {
    .br-rating__star {
      width: 16px;
      height: 16px;
    }
    .br-rating__value {
      font-size: var(--br-text-sm);
    }
  }

  &--md {
    .br-rating__star {
      width: 24px;
      height: 24px;
    }
    .br-rating__value {
      font-size: var(--br-text-md);
    }
  }

  &--lg {
    .br-rating__star {
      width: 32px;
      height: 32px;
    }
    .br-rating__value {
      font-size: var(--br-text-lg);
    }
  }

  &--xl {
    .br-rating__star {
      width: 40px;
      height: 40px;
    }
    .br-rating__value {
      font-size: var(--br-text-xl);
    }
  }

  // States
  &--readonly {
    .br-rating__star {
      cursor: default;
      &:hover {
        transform: none;
      }
    }
  }

  &--disabled {
    opacity: 0.5;
  }
}
</style>
