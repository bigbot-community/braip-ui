<script lang="ts">
import { computed, defineComponent, onMounted, ref, watch } from "vue";
import type { InputRangeProps } from "./types";

export default defineComponent({
  name: "BrInputRange",
  props: {
    value: {
      type: Array,
      default: () => [0, 100],
    },
    min: {
      type: Number,
      default: 0,
    },
    max: {
      type: Number,
      default: 100,
    },
    spacing: {
      type: Number,
      default: 1,
    },
    height: {
      type: String,
      default: "120px",
    },
    padding: {
      type: String,
      default: "17px 16px 15px",
    },
    colorInput: {
      type: String,
      default: "var(--brandPrimary6)",
    },
    borderColor: {
      type: String,
      default: "var(--neutralLightGrey6)",
    },
    text: {
      type: String,
      default: "Input Range",
    },
    textColor: {
      type: String,
      default: "var(--neutralLightGrey4)",
    },
    textFontSize: {
      type: String,
      default: "14px",
    },
    textValueFontSize: {
      type: String,
      default: "12px",
    },
  },
  emits: ["input"],
  setup(
    props: InputRangeProps,
    { emit }: { emit: (event: "input", value: [number, number]) => void },
  ) {
    const internalValue = ref<[number, number]>([
      props.value[0],
      props.value[1],
    ]);
    const minInputRef = ref<HTMLInputElement | null>(null);
    const maxInputRef = ref<HTMLInputElement | null>(null);

    const cssVars = computed(() => ({
      "--height": props.height,
      "--padding": props.padding,
      "--color--input": props.colorInput,
      "--border--color": props.borderColor,
      "--text--color": props.textColor,
      "--text--font-size": props.textFontSize,
      "--value--font-size": props.textValueFontSize,
    }));

    watch(
      () => props.value,
      (newValue) => {
        internalValue.value = [newValue[0], newValue[1]];
      },
    );

    const updateProgress = () => {
      const minValue = Number.isFinite(internalValue.value[0])
        ? internalValue.value[0]
        : props.min;
      const maxValue = Number.isFinite(internalValue.value[1])
        ? internalValue.value[1]
        : props.max;
      const clampedMin = Math.max(
        props.min,
        Math.min(minValue, maxValue - props.spacing),
      );
      const clampedMax = Math.min(
        props.max,
        Math.max(maxValue, clampedMin + props.spacing),
      );
      internalValue.value = [clampedMin, clampedMax];

      const total = props.max - props.min || 1;
      const percentageMin = ((clampedMin - props.min) / total) * 100;
      const percentageMax = ((clampedMax - props.min) / total) * 100;

      const gradient = `linear-gradient(to right, #ddd ${percentageMin}%, ${props.colorInput} ${percentageMin}%, ${props.colorInput} ${percentageMax}%, #ddd ${percentageMax}%)`;

      const minInput = minInputRef.value;
      const maxInput = maxInputRef.value;

      if (minInput) minInput.style.background = gradient;
      if (maxInput) maxInput.style.background = gradient;

      emit("input", [clampedMin, clampedMax]);
    };

    onMounted(() => {
      updateProgress();
    });

    return {
      updateProgress,
      internalValue,
      minInputRef,
      maxInputRef,
      cssVars,
    };
  },
});
</script>

<template>
  <section :style="cssVars" class="br-input-range">
    <p class="br-input-range__text">
      {{ text }}
    </p>
    <div class="br-input-range__input">
      <input
        ref="minInputRef"
        v-model.number="internalValue[0]"
        class="bar__input min"
        type="range"
        :min="min"
        :max="max"
        :step="spacing"
        @input="updateProgress"
      />
      <input
        ref="maxInputRef"
        v-model.number="internalValue[1]"
        class="bar__input max"
        type="range"
        :min="min"
        :max="max"
        :step="spacing"
        @input="updateProgress"
      />
      <div class="br-input-range__input--values">
        <p class="min">{{ internalValue[0] }}%</p>
        <p class="max">{{ internalValue[1] }}%</p>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@mixin flexDirection($direction) {
  display: flex;
  flex-direction: $direction;
}

.br-input-range {
  @include flexDirection(column);
  justify-content: center;
  gap: 24px;
  height: var(--height);
  padding: var(--padding);
  border: 1px solid var(--border--color);
  border-radius: 4px;

  &__text {
    font-size: var(--text--font-size);
    line-height: 22.4px;
    color: var(--text--color);
  }

  &__input {
    position: relative;
    width: 100%;
    @include flexDirection(column);
    align-items: center;
    gap: 16px;

    .bar__input {
      position: absolute;
      width: 100%;
      height: 8px;
      cursor: pointer;
      appearance: none;
      border-radius: 5px;

      &::-webkit-slider-thumb {
        position: relative;
        appearance: none;
        width: 20px;
        height: 20px;
        background-color: var(--color--input);
        border-radius: 50%;
        cursor: pointer;
        z-index: 1;
      }
    }

    &--values {
      position: relative;
      top: 25px;
      width: 100%;
      padding-bottom: 16px;

      @include flexDirection(row);
      align-items: center;
      justify-content: space-between;

      .min,
      .max {
        font-size: var(--value--font-size);
        color: var(--text--color);
      }
    }
  }
}
</style>
