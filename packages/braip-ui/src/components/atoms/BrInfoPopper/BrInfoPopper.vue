<script lang="ts">
import {
  computed,
  defineComponent,
  nextTick,
  onBeforeUnmount,
  onMounted,
  ref,
  useSlots,
  watch,
} from "vue";
import type {
  InfoPopperPosition,
  InfoPopperProps,
} from "./types";

export default defineComponent({
  name: "BrInfoPopper",
  props: {
    content: {
      type: String,
      required: true,
    },
    iconVisible: {
      type: Boolean,
      default: true,
    },
    colorIcon: {
      type: String,
      default: "var(--br-dark-700)",
    },
    position: {
      type: String as () => InfoPopperPosition,
      default: "right",
      validator: (value: InfoPopperPosition) => {
        return ["left", "right", "bottom"].includes(value);
      },
    },
    width: {
      type: String,
      default: "250px",
    },
    popperRight: {
      type: String,
      default: "50px",
    },
    popperLeft: {
      type: String,
      default: "50px",
    },
  },
  setup(props: InfoPopperProps) {
    const slots = useSlots();
    const popperVisible = ref(false);
    const popperRef = ref<HTMLElement | null>(null);

    const hasDefaultSlot = computed(() => Boolean(slots.default));
    const shouldShowIcon = computed(
      () => !hasDefaultSlot.value && props.iconVisible,
    );

    const cssVars = computed(() => {
      return {
        "--colorIcon": props.colorIcon,
        "--width": props.width,
        "--popperRight": props.popperRight,
        "--popperLeft": props.popperLeft,
      };
    });

    const showPopper = () => {
      popperVisible.value = true;
    };

    const hidePopper = () => {
      popperVisible.value = false;
    };

    const adjustPopperPosition = () => {
      const popper = popperRef.value;
      if (!popper) {
        return;
      }

      popper.style.left = "";

      const screenWidth = window.innerWidth;
      const rect = popper.getBoundingClientRect();
      const popperWidth = rect.width;
      const totalPopperLocation = rect.left + popperWidth;

      if (totalPopperLocation > screenWidth) {
        popper.style.left = `-${totalPopperLocation - screenWidth}px`;
      }
    };

    watch(
      () => popperVisible.value,
      async (visible) => {
        if (!visible) {
          return;
        }

        await nextTick();
        adjustPopperPosition();
      },
    );

    watch(
      () => [
        props.content,
        props.width,
        props.position,
        props.popperLeft,
        props.popperRight,
      ],
      async () => {
        if (!popperVisible.value) {
          return;
        }

        await nextTick();
        adjustPopperPosition();
      },
    );

    onMounted(() => {
      adjustPopperPosition();
      window.addEventListener("resize", adjustPopperPosition);
    });

    onBeforeUnmount(() => {
      window.removeEventListener("resize", adjustPopperPosition);
    });

    return {
      popperVisible,
      popperRef,
      hasDefaultSlot,
      shouldShowIcon,
      cssVars,
      showPopper,
      hidePopper,
      adjustPopperPosition,
    };
  },
});
</script>

<template>
  <div class="wrapper-popper" :style="cssVars">
    <span class="reference">
      <div
        v-if="popperVisible"
        ref="popperRef"
        class="popper"
        :class="[{ visible: popperVisible }, position]"
      >
        {{ content }}
      </div>

      <div
        v-if="hasDefaultSlot"
        class="slot-wrapper"
        @mouseover="showPopper"
        @mouseleave="hidePopper"
      >
        <slot />
      </div>

      <button
        v-if="shouldShowIcon"
        type="button"
        class="icon-trigger"
        title="info-light.svg"
        :aria-label="content"
        @mouseover="showPopper"
        @mouseleave="hidePopper"
      >
        <span class="icon-trigger__svg" aria-hidden="true" />
      </button>
    </span>
  </div>
</template>

<style scoped lang="scss">
.wrapper-popper {
  display: inline-flex;
  position: relative;
  cursor: pointer;
}

.popper {
  text-align: center;
  max-width: var(--width);
  width: var(--width);
  height: auto;
  padding: 4px 8px;
  line-height: 16px;
  font-size: var(--br-text-xs);
  background-color: var(--br-dark-100);
  color: var(--br-light-0);
  border: none;
  border-radius: 2px;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.25);
  top: -120%;
  transform: translate(-50%, -80%);
  position: absolute;
  transition: all 0.2s;
  z-index: 30;
  opacity: 0;
}

.popper.left {
  right: var(--popperRight);
  top: 50%;
  transform: translateY(-50%);
}

.popper.bottom {
  right: var(--popperRight);
  bottom: 50%;
  transform: translateY(140%);
}

.popper.right {
  left: var(--popperLeft);
  top: 50%;
  transform: translateY(-50%);
}

.popper.visible {
  opacity: 1;
  z-index: 35;
}

.reference {
  display: flex;
  cursor: pointer;
  font-family: var(--br-font-primary);
  font-style: normal;
  font-weight: var(--br-font-normal);
  font-size: 12px;
  line-height: 19px;
  text-align: center;
}

.slot-wrapper {
  display: flex;
}

.icon-trigger {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 18px;
  padding: 0;
  border: 0;
  border-radius: 50%;
  background: transparent;
  cursor: pointer;

  &__svg {
    width: 18px;
    height: 18px;
    display: inline-flex;
    background-color: var(--colorIcon);
    -webkit-mask: url("../../../assets/icons/info-light.svg") no-repeat center /
      contain;
    mask: url("../../../assets/icons/info-light.svg") no-repeat center / contain;
  }
}

@media (max-width: 600px) {
  .popper {
    max-width: 200px;
    transform: translate(-70%, -70%);
  }
}
</style>
