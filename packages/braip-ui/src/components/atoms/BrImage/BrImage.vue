<script setup lang="ts">
import { computed, ref, onMounted } from 'vue'
import type { ImageProps } from './types'

const props = withDefaults(defineProps<ImageProps>(), {
  fit: 'cover',
  lazy: true,
  showPlaceholder: true,
  rounded: false,
})

const isLoaded = ref(false)
const hasError = ref(false)
const imageRef = ref<HTMLImageElement | null>(null)

const classes = computed(() => [
  'br-image',
  {
    'br-image--loading': !isLoaded.value && props.showPlaceholder,
    'br-image--error': hasError.value,
    'br-image--rounded': props.rounded === true,
    [`br-image--rounded-${props.rounded}`]: typeof props.rounded === 'string',
  },
])

const imageStyles = computed(() => ({
  width: typeof props.width === 'number' ? `${props.width}px` : props.width,
  height: typeof props.height === 'number' ? `${props.height}px` : props.height,
  objectFit: props.fit,
}))

const currentSrc = computed(() => {
  if (hasError.value && props.fallback) return props.fallback
  return props.src
})

function handleLoad() {
  isLoaded.value = true
}

function handleError() {
  hasError.value = true
  if (!props.fallback) {
    isLoaded.value = true
  }
}

onMounted(() => {
  if (!props.lazy && imageRef.value) {
    imageRef.value.loading = 'eager'
  }
})
</script>

<template>
  <div :class="classes" :style="{ width: imageStyles.width, height: imageStyles.height }">
    <div v-if="!isLoaded && showPlaceholder" class="br-image__placeholder">
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
      </svg>
    </div>
    <img
      ref="imageRef"
      :src="currentSrc"
      :alt="alt"
      :loading="lazy ? 'lazy' : 'eager'"
      class="br-image__img"
      :style="imageStyles"
      @load="handleLoad"
      @error="handleError"
    />
  </div>
</template>

<style lang="scss" scoped>
.br-image {
  position: relative;
  display: inline-block;
  overflow: hidden;
  background: var(--br-light-200);

  &--rounded {
    border-radius: var(--br-radius-md);
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

  &--rounded-full {
    border-radius: var(--br-radius-full);
  }

  &__placeholder {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--br-light-200);
    color: var(--br-dark-500);

    svg {
      width: 40%;
      height: 40%;
      max-width: 48px;
      max-height: 48px;
    }
  }

  &__img {
    display: block;
    width: 100%;
    height: 100%;
    transition: opacity var(--br-transition-normal);
  }

  &--loading &__img {
    opacity: 0;
  }
}
</style>
