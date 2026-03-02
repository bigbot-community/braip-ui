<script lang="ts">
import { defineComponent, computed } from "vue";
export default defineComponent({
  name: "BrLineDivision",
  props: {
    width: {
      type: String,
      default: "100%",
    },
    height: {
      type: String,
      default: "1px",
    },
    color: {
      type: String,
      default: "var(--br-dark-1100)",
    },
    opacity: {
      type: Number,
      default: 0.5,
    },
    borderRadius: {
      type: String,
      default: "none",
    },
  },
  setup(props: any) {
    const cssVars = computed(() => {
      return {
        "--opacity": props.opacity,
        "--color": props.color,
        "--height": props.height,
        "--width": props.width,
        "--borderRadius": props.borderRadius,
      };
    });

    return {
      cssVars,
    };
  },
});
</script>

<template>
  <div class="wrapper-line" :style="cssVars"></div>
</template>

<style scoped lang="scss">
.wrapper-line {
  width: var(--width);
  height: var(--height);
  background: var(--color);
  opacity: var(--opacity);
  border-radius: var(--borderRadius);
}
</style>
