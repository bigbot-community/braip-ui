<script setup lang="ts">
/**
 * BrSpinner - Loading spinner component
 *
 * @example
 * <BrSpinner />
 * <BrSpinner size="lg" color="var(--brandPrimary6)" />
 * <BrSpinner status="success" />
 */

import type { SpinnerProps } from './types'

// ---------------------------------------------------------------------------
// PROPS
// ---------------------------------------------------------------------------

const props = withDefaults(defineProps<SpinnerProps>(), {
  size: "md",
  color: "var(--brandPrimary6)",
  status: "loading",
});

// ---------------------------------------------------------------------------
// COMPUTED
// ---------------------------------------------------------------------------

const sizeMap = {
  sm: 16,
  md: 24,
  lg: 32,
  xl: 48,
};

const spinnerSize = computed(() => sizeMap[props.size]);

const styles = computed(() => ({
  "--spinner-size": `${spinnerSize.value}px`,
  "--spinner-color": props.color,
}));
</script>

<template>
  <div class="br-spinner" :style="styles">
    <span v-if="status === 'loading'" class="br-spinner__circle" />
    <svg
      v-else-if="status === 'success'"
      class="br-spinner__check"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"
        fill="currentColor"
      />
    </svg>
    <svg
      v-else-if="status === 'error'"
      class="br-spinner__error"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
        fill="currentColor"
      />
    </svg>
  </div>
</template>

<style lang="scss" scoped>
.br-spinner {
  display: inline-flex;
  align-items: center;
  justify-content: center;

  &__circle {
    width: var(--spinner-size);
    height: var(--spinner-size);
    border-radius: 50%;
    background: conic-gradient(
      from 0deg,
      transparent 0%,
      var(--spinner-color) 100%
    );
    mask: radial-gradient(
      farthest-side,
      transparent calc(100% - 3px),
      #000 calc(100% - 3px)
    );
    -webkit-mask: radial-gradient(
      farthest-side,
      transparent calc(100% - 3px),
      #000 calc(100% - 3px)
    );
    animation: br-spin 1s linear infinite;
  }

  &__check,
  &__error {
    width: var(--spinner-size);
    height: var(--spinner-size);
    color: var(--spinner-color);
    animation: br-fade-in 0.3s ease-out;
  }

  &__check {
    color: var(--auxiliaryGreen6);
  }

  &__error {
    color: var(--auxiliaryRed6);
  }
}

@keyframes br-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes br-fade-in {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
</style>
