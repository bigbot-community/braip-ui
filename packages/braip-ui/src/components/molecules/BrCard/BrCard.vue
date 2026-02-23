<script setup lang="ts">
import type { CardProps } from './types'

const props = withDefaults(defineProps<CardProps>(), {
  variant: 'elevated',
  size: 'md',
  clickable: false,
  imagePosition: 'top',
  disabled: false,
  loading: false,
  rounded: 'md',
  fullWidth: false,
})

const emit = defineEmits<{
  (e: 'click', event: MouseEvent): void
}>()

const classes = computed(() => [
  'br-card',
  `br-card--${props.variant}`,
  `br-card--${props.size}`,
  `br-card--rounded-${props.rounded}`,
  `br-card--image-${props.imagePosition}`,
  {
    'br-card--clickable': props.clickable,
    'br-card--disabled': props.disabled,
    'br-card--loading': props.loading,
    'br-card--full-width': props.fullWidth,
  },
])

const imageStyle = computed(() => {
  if (!props.imageHeight) return {}
  const height = typeof props.imageHeight === 'number' ? `${props.imageHeight}px` : props.imageHeight
  return { height }
})

function handleClick(event: MouseEvent) {
  if (props.disabled || props.loading) return
  emit('click', event)
}
</script>

<template>
  <div
    :class="classes"
    :role="clickable ? 'button' : undefined"
    :tabindex="clickable && !disabled ? 0 : undefined"
    @click="clickable ? handleClick($event) : undefined"
    @keydown.enter="clickable ? handleClick($event as unknown as MouseEvent) : undefined"
  >
    <div v-if="loading" class="br-card__loader">
      <div class="br-card__loader-spinner" />
    </div>

    <div v-if="image && (imagePosition === 'top' || imagePosition === 'left')" class="br-card__image" :style="imageStyle">
      <slot name="image">
        <img :src="image" alt="" />
      </slot>
    </div>

    <div class="br-card__content">
      <div v-if="title || subtitle || $slots.header" class="br-card__header">
        <slot name="header">
          <h3 v-if="title" class="br-card__title">{{ title }}</h3>
          <p v-if="subtitle" class="br-card__subtitle">{{ subtitle }}</p>
        </slot>
      </div>

      <div class="br-card__body">
        <slot />
      </div>

      <div v-if="$slots.footer" class="br-card__footer">
        <slot name="footer" />
      </div>
    </div>

    <div v-if="image && (imagePosition === 'bottom' || imagePosition === 'right')" class="br-card__image" :style="imageStyle">
      <slot name="image">
        <img :src="image" alt="" />
      </slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.br-card {
  position: relative;
  display: flex;
  flex-direction: column;
  background: var(--br-white);
  overflow: hidden;

  &--elevated {
    box-shadow: var(--br-shadow-md);
  }

  &--outlined {
    border: 1px solid var(--br-light-300);
  }

  &--filled {
    background: var(--br-light-100);
  }

  // Sizes
  &--sm {
    .br-card__content {
      padding: var(--br-space-3);
    }
  }

  &--md {
    .br-card__content {
      padding: var(--br-space-4);
    }
  }

  &--lg {
    .br-card__content {
      padding: var(--br-space-6);
    }
  }

  // Border radius
  &--rounded-none {
    border-radius: 0;
  }

  &--rounded-sm {
    border-radius: var(--br-radius-sm);
  }

  &--rounded-md {
    border-radius: var(--br-radius-md);
  }

  &--rounded-lg {
    border-radius: var(--br-radius-lg);
  }

  &--rounded-xl {
    border-radius: var(--br-radius-xl);
  }

  // Image positions
  &--image-left,
  &--image-right {
    flex-direction: row;
  }

  &--image-right {
    .br-card__image {
      order: 1;
    }
  }

  // States
  &--clickable {
    cursor: pointer;
    transition: transform var(--br-transition-fast), box-shadow var(--br-transition-fast);

    &:hover:not(.br-card--disabled) {
      transform: translateY(-2px);
      box-shadow: var(--br-shadow-lg);
    }

    &:active:not(.br-card--disabled) {
      transform: translateY(0);
    }
  }

  &--disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  &--loading {
    pointer-events: none;
  }

  &--full-width {
    width: 100%;
  }

  &__loader {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(255, 255, 255, 0.8);
    z-index: 10;
  }

  &__loader-spinner {
    width: 32px;
    height: 32px;
    border: 3px solid var(--br-light-300);
    border-top-color: var(--br-primary-500);
    border-radius: 50%;
    animation: spin 0.8s linear infinite;
  }

  &__image {
    flex-shrink: 0;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__content {
    display: flex;
    flex-direction: column;
    flex: 1;
  }

  &__header {
    margin-bottom: var(--br-space-3);
  }

  &__title {
    margin: 0;
    font-size: var(--br-text-lg);
    font-weight: var(--br-font-semibold);
    color: var(--br-dark-800);
    line-height: 1.3;
  }

  &__subtitle {
    margin: var(--br-space-1) 0 0;
    font-size: var(--br-text-sm);
    color: var(--br-dark-500);
  }

  &__body {
    flex: 1;
    color: var(--br-dark-600);
    font-size: var(--br-text-md);
    line-height: 1.5;
  }

  &__footer {
    margin-top: var(--br-space-4);
    padding-top: var(--br-space-3);
    border-top: 1px solid var(--br-light-200);
  }
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
