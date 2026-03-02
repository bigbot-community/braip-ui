<script setup lang="ts">
import { computed, ref, provide } from "vue";
import type { SidebarProps } from "./types";

const props = withDefaults(defineProps<SidebarProps>(), {
  variant: "default",
  collapsed: false,
  showToggle: true,
  elevated: true,
  fixed: false,
  width: 260,
  collapsedWidth: 64,
  showBrand: true,
});

const isCollapsed = defineModel<boolean>("collapsed", { default: false });
const expandedItems = ref<Set<string | number>>(new Set());

const classes = computed(() => [
  "br-sidebar",
  `br-sidebar--${props.variant}`,
  {
    "br-sidebar--collapsed": isCollapsed.value,
    "br-sidebar--elevated": props.elevated,
    "br-sidebar--fixed": props.fixed,
  },
]);

const style = computed(() => ({
  width:
    typeof (isCollapsed.value ? props.collapsedWidth : props.width) === "number"
      ? `${isCollapsed.value ? props.collapsedWidth : props.width}px`
      : isCollapsed.value
        ? props.collapsedWidth
        : props.width,
}));

function toggleCollapse() {
  isCollapsed.value = !isCollapsed.value;
}

function toggleExpanded(id: string | number) {
  if (expandedItems.value.has(id)) {
    expandedItems.value.delete(id);
  } else {
    expandedItems.value.add(id);
  }
  expandedItems.value = new Set(expandedItems.value);
}

function isExpanded(id: string | number) {
  return expandedItems.value.has(id);
}

provide("sidebar", {
  isCollapsed,
  toggleExpanded,
  isExpanded,
});
</script>

<template>
  <aside :class="classes" :style="style">
    <!-- Brand Area -->
    <div v-if="showBrand" class="br-sidebar__brand">
      <slot name="brand">
        <img v-if="logo" :src="logo" alt="" class="br-sidebar__logo" />
        <span v-if="brand && !isCollapsed" class="br-sidebar__brand-text">{{
          brand
        }}</span>
      </slot>
    </div>

    <!-- Navigation -->
    <nav class="br-sidebar__nav">
      <slot name="nav">
        <template v-if="items && items.length">
          <template v-for="item in items" :key="item.id">
            <!-- Divider/Section Header -->
            <div v-if="item.divider" class="br-sidebar__divider">
              <span v-if="!isCollapsed">{{ item.label }}</span>
            </div>

            <!-- Item with children -->
            <div
              v-else-if="item.children && item.children.length"
              class="br-sidebar__group"
            >
              <button
                type="button"
                class="br-sidebar__item br-sidebar__group-trigger"
                :class="{ 'br-sidebar__item--expanded': isExpanded(item.id) }"
                :disabled="item.disabled"
                @click="toggleExpanded(item.id)"
              >
                <span v-if="item.icon" class="br-sidebar__item-icon">{{
                  item.icon
                }}</span>
                <span v-if="!isCollapsed" class="br-sidebar__item-label">{{
                  item.label
                }}</span>
                <svg
                  v-if="!isCollapsed"
                  class="br-sidebar__group-arrow"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"
                  />
                </svg>
              </button>
              <div
                v-if="!isCollapsed"
                class="br-sidebar__group-items"
                :class="{
                  'br-sidebar__group-items--expanded': isExpanded(item.id),
                }"
              >
                <component
                  :is="child.to ? 'router-link' : child.href ? 'a' : 'button'"
                  v-for="child in item.children"
                  :key="child.id"
                  class="br-sidebar__item br-sidebar__item--nested"
                  :to="child.to"
                  :href="child.href"
                  :disabled="child.disabled"
                  @click="child.onClick"
                >
                  <span v-if="child.icon" class="br-sidebar__item-icon">{{
                    child.icon
                  }}</span>
                  <span class="br-sidebar__item-label">{{ child.label }}</span>
                  <span
                    v-if="child.badge"
                    class="br-sidebar__item-badge"
                    :class="`br-sidebar__item-badge--${child.badgeVariant || 'primary'}`"
                  >
                    {{ child.badge }}
                  </span>
                </component>
              </div>
            </div>

            <!-- Regular item -->
            <component
              :is="item.to ? 'router-link' : item.href ? 'a' : 'button'"
              v-else
              class="br-sidebar__item"
              :to="item.to"
              :href="item.href"
              :disabled="item.disabled"
              :title="isCollapsed ? item.label : undefined"
              @click="item.onClick"
            >
              <span v-if="item.icon" class="br-sidebar__item-icon">{{
                item.icon
              }}</span>
              <span v-if="!isCollapsed" class="br-sidebar__item-label">{{
                item.label
              }}</span>
              <span
                v-if="item.badge && !isCollapsed"
                class="br-sidebar__item-badge"
                :class="`br-sidebar__item-badge--${item.badgeVariant || 'primary'}`"
              >
                {{ item.badge }}
              </span>
            </component>
          </template>
        </template>
      </slot>
    </nav>

    <!-- Footer -->
    <div class="br-sidebar__footer">
      <slot name="footer" />

      <button
        v-if="showToggle"
        type="button"
        class="br-sidebar__toggle"
        @click="toggleCollapse"
      >
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path
            v-if="isCollapsed"
            d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"
          />
          <path v-else d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
        </svg>
      </button>
    </div>
  </aside>
</template>

<style lang="scss" scoped>
.br-sidebar {
  display: flex;
  flex-direction: column;
  height: 100%;
  background: var(--br-white);
  border-right: 1px solid var(--neutralLightGrey6);
  transition: width var(--br-transition-normal);
  overflow: hidden;

  &--elevated {
    box-shadow: var(--br-shadow-md);
    border-right: none;
  }

  &--fixed {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    z-index: 999;
  }

  &__brand {
    display: flex;
    align-items: center;
    gap: var(--br-space-3);
    padding: var(--br-space-4);
    border-bottom: 1px solid var(--neutralLightGrey6);
    min-height: 64px;
  }

  &__logo {
    width: 32px;
    height: 32px;
    flex-shrink: 0;
    object-fit: contain;
  }

  &__brand-text {
    font-size: var(--br-text-lg);
    font-weight: var(--br-font-bold);
    color: var(--neutralDarkGrey7);
    white-space: nowrap;
    overflow: hidden;
  }

  &--collapsed &__brand {
    justify-content: center;
    padding: var(--br-space-4) var(--br-space-2);
  }

  &__nav {
    flex: 1;
    padding: var(--br-space-2);
    overflow-y: auto;
    overflow-x: hidden;
  }

  &__divider {
    padding: var(--br-space-3) var(--br-space-3) var(--br-space-2);
    font-size: var(--br-text-xs);
    font-weight: var(--br-font-semibold);
    color: var(--neutralDarkGrey4);
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  &__group {
    margin-bottom: var(--br-space-1);
  }

  &__group-items {
    max-height: 0;
    overflow: hidden;
    transition: max-height var(--br-transition-normal);

    &--expanded {
      max-height: 500px;
    }
  }

  &__group-arrow {
    width: 20px;
    height: 20px;
    margin-left: auto;
    color: var(--neutralDarkGrey4);
    transition: transform var(--br-transition-fast);
  }

  &__item--expanded &__group-arrow {
    transform: rotate(90deg);
  }

  &__item {
    display: flex;
    align-items: center;
    gap: var(--br-space-3);
    width: 100%;
    padding: var(--br-space-3);
    border: none;
    border-radius: var(--br-radius-md);
    background: transparent;
    font-size: var(--br-text-sm);
    font-weight: var(--br-font-medium);
    color: var(--neutralDarkGrey6);
    text-decoration: none;
    cursor: pointer;
    transition: all var(--br-transition-fast);
    white-space: nowrap;

    &:hover:not(:disabled) {
      background: var(--neutralLightGrey7);
      color: var(--neutralDarkGrey7);
    }

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    &.router-link-active {
      background: var(--brandPrimaryLightest);
      color: var(--brandPrimary6);

      .br-sidebar__item-icon {
        color: var(--brandPrimary5);
      }
    }

    &--nested {
      padding-left: var(--br-space-6);
    }
  }

  &--collapsed &__item {
    justify-content: center;
    padding: var(--br-space-3) var(--br-space-2);
  }

  &__item-icon {
    font-size: 1.25em;
    flex-shrink: 0;
    color: var(--neutralDarkGrey5);
  }

  &__item-label {
    flex: 1;
    text-align: left;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  &__item-badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 20px;
    height: 20px;
    padding: 0 6px;
    border-radius: var(--br-radius-full);
    font-size: var(--br-text-xs);
    font-weight: var(--br-font-semibold);

    &--primary {
      background: var(--brandPrimaryLightest);
      color: var(--brandPrimaryDark7);
    }

    &--success {
      background: var(--auxiliaryGreenLightest);
      color: var(--auxiliaryGreenDark7);
    }

    &--warning {
      background: var(--auxiliaryOrangeLightest);
      color: var(--auxiliaryOrangeDark7);
    }

    &--danger {
      background: var(--auxiliaryRedLightest);
      color: var(--auxiliaryRedDark7);
    }
  }

  &__footer {
    padding: var(--br-space-3);
    border-top: 1px solid var(--neutralLightGrey6);
  }

  &__toggle {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: var(--br-space-2);
    border: none;
    border-radius: var(--br-radius-md);
    background: var(--neutralLightGrey7);
    color: var(--neutralDarkGrey5);
    cursor: pointer;
    transition: all var(--br-transition-fast);

    svg {
      width: 20px;
      height: 20px;
    }

    &:hover {
      background: var(--neutralLightGrey6);
      color: var(--neutralDarkGrey7);
    }
  }

  // Compact variant
  &--compact {
    .br-sidebar__item {
      padding: var(--br-space-2) var(--br-space-3);
      font-size: var(--br-text-xs);
    }

    .br-sidebar__item-icon {
      font-size: 1.1em;
    }
  }
}
</style>
