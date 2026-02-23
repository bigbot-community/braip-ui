<script setup lang="ts">
import type { AccordionProps } from './types'
import BrAccordionItem from './BrAccordionItem.vue'

const props = withDefaults(defineProps<AccordionProps>(), {
  multiple: false,
  variant: 'default',
  iconPosition: 'right',
  disabled: false,
})

const openItems = ref<Set<string | number>>(new Set())

const classes = computed(() => [
  'br-accordion',
  `br-accordion--${props.variant}`,
  {
    'br-accordion--disabled': props.disabled,
  },
])

function toggleItem(id: string | number) {
  if (props.disabled) return

  if (openItems.value.has(id)) {
    openItems.value.delete(id)
  } else {
    if (!props.multiple) {
      openItems.value.clear()
    }
    openItems.value.add(id)
  }
  openItems.value = new Set(openItems.value)
}

function isItemOpen(id: string | number) {
  return openItems.value.has(id)
}

provide(
  'accordion',
  reactive({
    iconPosition: computed(() => props.iconPosition),
    disabled: computed(() => props.disabled),
    toggleItem,
    isItemOpen,
  })
)
</script>

<template>
  <div :class="classes">
    <template v-if="items && items.length">
      <BrAccordionItem
        v-for="item in items"
        :key="item.id"
        :id="item.id"
        :title="item.title"
        :icon="item.icon"
        :disabled="item.disabled"
      >
        <template v-if="item.content">
          {{ item.content }}
        </template>
        <slot v-else :name="`item-${item.id}`" :item="item" />
      </BrAccordionItem>
    </template>
    <slot v-else />
  </div>
</template>

<style lang="scss" scoped>
.br-accordion {
  width: 100%;

  &--default {
    border: 1px solid var(--br-light-300);
    border-radius: var(--br-radius-md);
    overflow: hidden;
  }

  &--bordered {
    :deep(.br-accordion-item) {
      border: 1px solid var(--br-light-300);
      border-radius: var(--br-radius-md);
      margin-bottom: var(--br-space-2);

      &:last-child {
        margin-bottom: 0;
      }
    }
  }

  &--separated {
    :deep(.br-accordion-item) {
      background: var(--br-light-100);
      border-radius: var(--br-radius-md);
      margin-bottom: var(--br-space-2);

      &:last-child {
        margin-bottom: 0;
      }
    }
  }

  &--disabled {
    opacity: 0.6;
    pointer-events: none;
  }
}
</style>
