<script setup lang="ts">
import { computed, ref } from "vue";
import type { VideoProps } from "./types";

const props = withDefaults(defineProps<VideoProps>(), {
  autoplay: false,
  loop: false,
  muted: false,
  controls: true,
  preload: "metadata",
  rounded: false,
});

const emit = defineEmits<{
  (e: "play"): void;
  (e: "pause"): void;
  (e: "ended"): void;
  (e: "error", error: Event): void;
}>();

const videoRef = ref<HTMLVideoElement | null>(null);
const isPlaying = ref(false);

const classes = computed(() => [
  "br-video",
  {
    "br-video--rounded": props.rounded === true,
    [`br-video--rounded-${props.rounded}`]: typeof props.rounded === "string",
  },
]);

const videoStyles = computed(() => ({
  width: typeof props.width === "number" ? `${props.width}px` : props.width,
  height: typeof props.height === "number" ? `${props.height}px` : props.height,
}));

function play() {
  videoRef.value?.play();
}

function pause() {
  videoRef.value?.pause();
}

function toggle() {
  if (isPlaying.value) {
    pause();
  } else {
    play();
  }
}

function handlePlay() {
  isPlaying.value = true;
  emit("play");
}

function handlePause() {
  isPlaying.value = false;
  emit("pause");
}

function handleEnded() {
  isPlaying.value = false;
  emit("ended");
}

function handleError(event: Event) {
  emit("error", event);
}

defineExpose({
  play,
  pause,
  toggle,
  videoRef,
});
</script>

<template>
  <div :class="classes" :style="videoStyles">
    <video
      ref="videoRef"
      :src="src"
      :poster="poster"
      :autoplay="autoplay"
      :loop="loop"
      :muted="muted"
      :controls="controls"
      :preload="preload"
      class="br-video__player"
      @play="handlePlay"
      @pause="handlePause"
      @ended="handleEnded"
      @error="handleError"
    >
      <slot />
    </video>
  </div>
</template>

<style lang="scss" scoped>
.br-video {
  position: relative;
  display: inline-block;
  overflow: hidden;
  background: var(--neutralDarkGrey);

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

  &__player {
    display: block;
    width: 100%;
    height: 100%;
  }
}
</style>
