<script setup lang="ts">
import { IconProps } from "./types";
import { ref, watchEffect, watchSyncEffect } from "vue";

const props = withDefaults(defineProps<IconProps>(), {
  filled: false,
  height: "24px",
  width: "24px",
  currentColor: "currentColor",
});

const icon = ref<string | Record<string, any>>("");

let hasStroke = false;

async function getIcon() {
  const iconsImport = import.meta.glob<string>(
    "../../../assets/icons/**/*.svg",
    {
      import: "default",
      query: "?raw",
    },
  );

  const path = `../../../assets/icons/${props.name}.svg`;

  const loader = iconsImport[path];

  if (!loader) {
    console.error(`Icon '${props.name}' not found`);
    return;
  }

  const rawIcon = await loader();
  icon.value = rawIcon;
}

watchEffect(() => {
  getIcon();
});

watchSyncEffect(() => {
  if (props.filled) {
    icon.value = icon.value.replace(
      / fill=".*?"/g,
      ` fill="${props.currentColor}"`,
    );
  }

  if (props.width) {
    icon.value = icon.value.replace(/ width=".*?"/, ` width="${props.width}"`);
  }

  if (props.height) {
    icon.value = icon.value.replace(
      / height=".*?"/,
      ` height="${props.height}"`,
    );
  }
});
</script>

<template>
  <span class="icon-common" v-html="icon" />
</template>

<style scoped lang="scss">
.icon-common {
  display: flex;
  background: none;

  svg {
    width: v-bind(width);
    height: v-bind(height);
    margin-bottom: 0;
    vertical-align: middle;
  }

  &.icon-common--stroke {
    stroke: currentColor !important;
  }
}
</style>
