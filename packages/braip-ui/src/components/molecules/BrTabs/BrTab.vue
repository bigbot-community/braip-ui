<script setup lang="ts">
import type { TabProps } from './types'

const props = withDefaults(defineProps<TabProps>(), {
  disabled: false,
  closable: false,
})

const emit = defineEmits<{
  (e: 'close'): void
}>()

const tabs = inject<{
  activeTab: { value: string | number }
  selectTab: (id: string | number) => void
}>('tabs')

const isActive = computed(() => tabs?.activeTab.value === props.id)

const classes = computed(() => [
  'br-tabs__tab',
  {
    'br-tabs__tab--active': isActive.value,
    'br-tabs__tab--disabled': props.disabled,
  },
])

function handleClick() {
  if (props.disabled) return
  tabs?.selectTab(props.id)
}

function handleClose(event: Event) {
  event.stopPropagation()
  emit('close')
}
</script>

<template>
  <button
    type="button"
    role="tab"
    :class="classes"
    :aria-selected="isActive"
    :disabled="disabled"
    @click="handleClick"
  >
    <span v-if="icon" class="br-tabs__tab-icon">
      <slot name="icon">{{ icon }}</slot>
    </span>
    <span class="br-tabs__tab-label">
      <slot>{{ label }}</slot>
    </span>
    <span v-if="badge !== undefined" class="br-tabs__tab-badge">
      {{ badge }}
    </span>
    <button
      v-if="closable"
      type="button"
      class="br-tabs__tab-close"
      @click="handleClose"
    >
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
      </svg>
    </button>
  </button>
</template>
