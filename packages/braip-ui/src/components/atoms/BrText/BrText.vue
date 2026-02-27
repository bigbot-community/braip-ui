<script lang="ts">
import { computed, defineComponent } from "vue";
export default defineComponent({
  name: "BrText",
  props: {
    type: {
      type: String,
      default: "title-h1",
      validator(value: string) {
        return [
          "title-h1",
          "title-h2",
          "title-h3",
          "title-h4",
          "title-h5",
          "title-h6",
          "title-h7",
          "text-p1",
          "text-p2",
          "text-p3",
          "text-p4",
          "text-p5",
          "text-p6",
          "text-p7",
        ].includes(value);
      },
    },
    weight: {
      type: String,
      default: "medium",
      validator(value: string) {
        return ["regular", "medium", "semi-bold", "extra-bold"].includes(value);
      },
    },
    text: {
      type: String,
      default: () => {
        return "Typography";
      },
    },
    color: {
      type: String,
      default: "var(--br-dark-0)",
    },
    singleLine: {
      type: Boolean,
      default: false,
    },
    fontFamily: {
      type: String,
      default: "Poppins",
      validator(value: string) {
        return ["Sora", "Poppins"].includes(value);
      },
    },
    textAlign: {
      type: String,
      default: "left",
    },
  },
  setup(props) {
    const typographyColor = computed(() => {
      return props.color?.trim() || "var(--br-dark-0)";
    });

    const typographyFontFamily = computed(() => {
      return props.fontFamily;
    });

    const typographyTextAlign = computed(() => {
      return props.textAlign;
    });

    const component = computed(() => {
      const components = {
        "title-h1": "h1",
        "title-h2": "h2",
        "title-h3": "h3",
        "title-h4": "h4",
        "title-h5": "h5",
        "title-h6": "h6",
        "title-h7": "p",
        "text-p1": "p",
        "text-p2": "p",
        "text-p3": "p",
        "text-p4": "p",
        "text-p5": "p",
        "text-p6": "p",
        "text-p7": "p",
      };

      return components[props.type as keyof typeof components];
    });

    return {
      typographyColor,
      typographyFontFamily,
      typographyTextAlign,
      component,
    };
  },
});
</script>

<template>
  <component
    :is="component"
    :class="[
      `${type}`,
      `${type}-${weight}`,
      `typography `,
      { 'single-line': singleLine },
    ]"
  >
    {{ text }}
  </component>
</template>

<style scoped lang="scss">
@use "sass:map";
$font-weights: (
  regular: 400,
  medium: 500,
  semi-bold: 600,
);

$title-styles: (
  h1: (
    font-size: 64px,
    line-height: 100px,
  ),
  h2: (
    font-size: 56px,
    line-height: 140%,
  ),
  h3: (
    font-size: 48px,
    line-height: 140%,
  ),
  h4: (
    font-size: 40px,
    line-height: 140%,
  ),
  h5: (
    font-size: 36px,
    line-height: 140%,
  ),
  h6: (
    font-size: 32px,
    line-height: 140%,
  ),
  h7: (
    font-size: 24px,
    line-height: 140%,
  ),
);

$text-styles: (
  p1: (
    font-size: 24px,
    line-height: 140%,
  ),
  p2: (
    font-size: 20px,
    line-height: 140%,
  ),
  p3: (
    font-size: 18px,
    line-height: 160%,
  ),
  p4: (
    font-size: 16px,
    line-height: 160%,
  ),
  p5: (
    font-size: 14px,
    line-height: 160%,
  ),
  p6: (
    font-size: 12px,
    line-height: 160%,
  ),
  p7: (
    font-size: 11px,
    line-height: 160%,
  ),
);

.title {
  @each $style, $properties in $title-styles {
    &-#{$style} {
      font-feature-settings:
        "clig" off,
        "liga" off;
      font-style: normal;
      color: currentColor;

      &-medium {
        font-weight: map.get($font-weights, medium);
      }
      &-semi-bold {
        font-weight: map.get($font-weights, semi-bold);
      }

      @each $property, $value in $properties {
        @if $property != font-weight {
          & {
            #{$property}: $value;
          }
        }
      }
    }
  }
}

.text {
  @each $style, $properties in $text-styles {
    &-#{$style} {
      font-feature-settings:
        "clig" off,
        "liga" off;
      font-style: normal;
      color: currentColor;

      &-regular {
        font-weight: map.get($font-weights, regular);
      }

      &-medium {
        font-weight: map.get($font-weights, medium);
      }

      &-semi-bold {
        font-weight: map.get($font-weights, semi-bold);
      }

      @each $property, $value in $properties {
        @if $property != font-weight {
          & {
            #{$property}: $value;
          }
        }
      }
    }
  }
}

.typography {
  font-family: v-bind(typographyFontFamily);
  color: v-bind(typographyColor);
  text-align: v-bind(typographyTextAlign);
  transition: color var(--br-transition-fast);
}

.single-line {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 336px;
}
</style>
