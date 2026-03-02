<script setup lang="ts">
import type { TabPanelProps } from './types'

const props = withDefaults(defineProps<TabPanelProps>(), {
  lazy: true,
});

const tabs = inject<{
  activeTab: { value: string | number };
  lazy: { value: boolean };
}>("tabs");

const hasBeenActive = ref(false);
const isActive = computed(() => tabs?.activeTab.value === props.tabId);
const shouldRender = computed(() => {
  const isLazy = props.lazy ?? tabs?.lazy.value ?? true;
  if (!isLazy) return true;
  return isActive.value || hasBeenActive.value;
});

watch(isActive, (active) => {
  if (active) hasBeenActive.value = true;
});
</script>

<template>
  <div
    v-if="shouldRender"
    v-show="isActive"
    role="tabpanel"
    class="br-tabs__panel"
  >
    <slot />
  </div>
</template>
