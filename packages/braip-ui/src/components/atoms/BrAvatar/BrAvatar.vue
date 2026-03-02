<script setup lang="ts">
import type { AvatarProps } from './types'

const props = withDefaults(defineProps<AvatarProps>(), {
  size: "md",
  shape: "circle",
  showStatus: false,
  status: "offline",
});

const imageError = ref(false);

const classes = computed(() => [
  "br-avatar",
  `br-avatar--${props.size}`,
  `br-avatar--${props.shape}`,
]);

const displayInitials = computed(() => {
  if (props.initials) return props.initials.slice(0, 2).toUpperCase();
  if (props.alt) {
    const words = props.alt.split(" ");
    if (words.length >= 2) {
      return (words[0][0] + words[1][0]).toUpperCase();
    }
    return props.alt.slice(0, 2).toUpperCase();
  }
  return "?";
});

const showImage = computed(() => props.src && !imageError.value);

function handleImageError() {
  imageError.value = true;
}
</script>

<template>
  <div :class="classes">
    <img
      v-if="showImage"
      :src="src"
      :alt="alt"
      class="br-avatar__image"
      @error="handleImageError"
    />
    <span v-else class="br-avatar__initials">{{ displayInitials }}</span>

    <span
      v-if="showStatus"
      class="br-avatar__status"
      :class="`br-avatar__status--${status}`"
    />
  </div>
</template>

<style lang="scss" scoped>
.br-avatar {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: var(--brandPrimaryLightest);
  color: var(--brandPrimary6);
  font-weight: var(--br-font-semibold);
  overflow: hidden;
  flex-shrink: 0;

  // Sizes
  &--xs {
    width: 24px;
    height: 24px;
    font-size: var(--br-text-xs);
  }

  &--sm {
    width: 32px;
    height: 32px;
    font-size: var(--br-text-sm);
  }

  &--md {
    width: 40px;
    height: 40px;
    font-size: var(--br-text-base);
  }

  &--lg {
    width: 48px;
    height: 48px;
    font-size: var(--br-text-lg);
  }

  &--xl {
    width: 64px;
    height: 64px;
    font-size: var(--br-text-xl);
  }

  &--2xl {
    width: 96px;
    height: 96px;
    font-size: var(--br-text-2xl);
  }

  // Shapes
  &--circle {
    border-radius: var(--br-radius-full);
  }

  &--square {
    border-radius: var(--br-radius-lg);
  }

  &__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__initials {
    user-select: none;
  }

  &__status {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 25%;
    height: 25%;
    min-width: 8px;
    min-height: 8px;
    border-radius: var(--br-radius-full);
    border: 2px solid var(--neutralLightGrey9);

    &--online {
      background: var(--auxiliaryGreen6);
    }

    &--offline {
      background: var(--neutralDarkGrey5);
    }

    &--away {
      background: var(--auxiliaryOrange6);
    }

    &--busy {
      background: var(--auxiliaryRed6);
    }
  }
}
</style>
