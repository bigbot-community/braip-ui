<script setup lang="ts">
import { computed, provide, reactive } from 'vue'
import type { TabsProps } from './types'

const props = withDefaults(defineProps<TabsProps>(), {
  variant: 'default',
  size: 'md',
  fullWidth: false,
  centered: false,
  vertical: false,
  grow: false,
  closable: false,
  lazy: true,
})

const model = defineModel<string | number>()

const emit = defineEmits<{
  (e: 'tab-close', id: string | number): void
}>()

const classes = computed(() => [
  'br-tabs',
  `br-tabs--${props.variant}`,
  `br-tabs--${props.size}`,
  {
    'br-tabs--full-width': props.fullWidth,
    'br-tabs--centered': props.centered,
    'br-tabs--vertical': props.vertical,
    'br-tabs--grow': props.grow,
  },
])

function selectTab(id: string | number) {
  model.value = id
}

function closeTab(id: string | number, event: Event) {
  event.stopPropagation()
  emit('tab-close', id)
}

provide(
  'tabs',
  reactive({
    activeTab: model,
    selectTab,
    lazy: computed(() => props.lazy),
  })
)
</script>

<template>
  <div :class="classes">
    <div class="br-tabs__list" role="tablist">
      <template v-if="items && items.length">
        <button
          v-for="item in items"
          :key="item.id"
          type="button"
          role="tab"
          class="br-tabs__tab"
          :class="{
            'br-tabs__tab--active': model === item.id,
            'br-tabs__tab--disabled': item.disabled,
          }"
          :aria-selected="model === item.id"
          :disabled="item.disabled"
          @click="selectTab(item.id)"
        >
          <span v-if="item.icon" class="br-tabs__tab-icon">{{ item.icon }}</span>
          <span class="br-tabs__tab-label">{{ item.label }}</span>
          <span v-if="item.badge !== undefined" class="br-tabs__tab-badge">
            {{ item.badge }}
          </span>
          <button
            v-if="closable || item.closable"
            type="button"
            class="br-tabs__tab-close"
            @click="closeTab(item.id, $event)"
          >
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
            </svg>
          </button>
        </button>
      </template>
      <slot v-else name="tabs" />
    </div>

    <div class="br-tabs__panels">
      <template v-if="items && items.length">
        <div
          v-for="item in items"
          v-show="model === item.id"
          :key="item.id"
          role="tabpanel"
          class="br-tabs__panel"
        >
          <slot :name="`panel-${item.id}`" :item="item">
            {{ item.content }}
          </slot>
        </div>
      </template>
      <slot v-else />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.br-tabs {
  display: flex;
  flex-direction: column;

  &--vertical {
    flex-direction: row;

    .br-tabs__list {
      flex-direction: column;
      border-bottom: none;
      border-right: 1px solid var(--neutralLightGrey5);
    }

    .br-tabs__panels {
      flex: 1;
      padding-left: var(--br-space-4);
    }
  }

  &__list {
    display: flex;
    gap: var(--br-space-1);
    border-bottom: 1px solid var(--neutralLightGrey5);
  }

  &--centered &__list {
    justify-content: center;
  }

  &--grow &__list {
    .br-tabs__tab {
      flex: 1;
    }
  }

  &__tab {
    display: flex;
    align-items: center;
    gap: var(--br-space-2);
    padding: var(--br-space-3) var(--br-space-4);
    border: none;
    background: transparent;
    color: var(--neutralDarkGrey6);
    font-weight: var(--br-font-medium);
    cursor: pointer;
    white-space: nowrap;
    transition: all var(--br-transition-fast);
    position: relative;

    &:hover:not(:disabled) {
      color: var(--brandPrimary5);
      background: var(--neutralLightGrey7);
    }

    &--active {
      color: var(--brandPrimary6);
    }

    &--disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }

  &__tab-icon {
    font-size: 1.2em;
  }

  &__tab-badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 18px;
    height: 18px;
    padding: 0 6px;
    border-radius: var(--br-radius-full);
    background: var(--brandPrimaryLightest);
    color: var(--brandPrimaryDark7);
    font-size: var(--br-text-xs);
    font-weight: var(--br-font-semibold);
  }

  &__tab-close {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 16px;
    height: 16px;
    padding: 0;
    border: none;
    border-radius: var(--br-radius-sm);
    background: transparent;
    color: var(--neutralDarkGrey4);
    cursor: pointer;
    transition: all var(--br-transition-fast);

    svg {
      width: 12px;
      height: 12px;
    }

    &:hover {
      background: var(--neutralLightGrey5);
      color: var(--neutralDarkGrey6);
    }
  }

  &__panels {
    padding-top: var(--br-space-4);
  }

  &__panel {
    animation: fadeIn var(--br-transition-fast);
  }

  // Sizes
  &--sm {
    .br-tabs__tab {
      padding: var(--br-space-2) var(--br-space-3);
      font-size: var(--br-text-sm);
    }
  }

  &--lg {
    .br-tabs__tab {
      padding: var(--br-space-4) var(--br-space-5);
      font-size: var(--br-text-lg);
    }
  }

  // Variants
  &--default {
    .br-tabs__tab--active::after {
      content: '';
      position: absolute;
      bottom: -1px;
      left: 0;
      right: 0;
      height: 2px;
      background: var(--brandPrimary5);
    }
  }

  &--pills {
    .br-tabs__list {
      border-bottom: none;
      gap: var(--br-space-2);
    }

    .br-tabs__tab {
      border-radius: var(--br-radius-full);

      &--active {
        background: var(--brandPrimary5);
        color: var(--br-white);
      }
    }
  }

  &--underline {
    .br-tabs__list {
      border-bottom: none;
    }

    .br-tabs__tab {
      border-bottom: 2px solid transparent;

      &--active {
        border-bottom-color: var(--brandPrimary5);
      }
    }
  }

  &--enclosed {
    .br-tabs__list {
      border-bottom: none;
    }

    .br-tabs__tab {
      border: 1px solid transparent;
      border-bottom: 1px solid var(--neutralLightGrey5);
      border-radius: var(--br-radius-md) var(--br-radius-md) 0 0;
      margin-bottom: -1px;

      &--active {
        border-color: var(--neutralLightGrey5);
        border-bottom-color: var(--br-white);
        background: var(--br-white);
      }
    }

    .br-tabs__panels {
      border: 1px solid var(--neutralLightGrey5);
      border-top: none;
      border-radius: 0 0 var(--br-radius-md) var(--br-radius-md);
      padding: var(--br-space-4);
    }
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
