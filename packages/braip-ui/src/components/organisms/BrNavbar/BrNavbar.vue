<script setup lang="ts">
import type { NavbarProps } from './types'

const props = withDefaults(defineProps<NavbarProps>(), {
  variant: 'default',
  position: 'static',
  showMobileToggle: true,
  elevated: true,
  dense: false,
})

const isMobileMenuOpen = ref(false)

const classes = computed(() => [
  'br-navbar',
  `br-navbar--${props.variant}`,
  `br-navbar--${props.position}`,
  {
    'br-navbar--elevated': props.elevated,
    'br-navbar--dense': props.dense,
    'br-navbar--mobile-open': isMobileMenuOpen.value,
  },
])

const style = computed(() => {
  if (props.color && props.variant === 'colored') {
    return { '--navbar-color': props.color }
  }
  return {}
})

function toggleMobileMenu() {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

function closeMobileMenu() {
  isMobileMenuOpen.value = false
}
</script>

<template>
  <nav :class="classes" :style="style">
    <div class="br-navbar__container">
      <!-- Brand/Logo -->
      <div class="br-navbar__brand">
        <slot name="brand">
          <img v-if="logo" :src="logo" alt="" class="br-navbar__logo" />
          <span v-if="brand" class="br-navbar__brand-text">{{ brand }}</span>
        </slot>
      </div>

      <!-- Desktop Navigation -->
      <div class="br-navbar__nav">
        <slot name="nav">
          <template v-if="items && items.length">
            <template v-for="item in items" :key="item.id">
              <div v-if="item.children && item.children.length" class="br-navbar__dropdown">
                <button
                  type="button"
                  class="br-navbar__item br-navbar__dropdown-trigger"
                  :disabled="item.disabled"
                >
                  <span v-if="item.icon" class="br-navbar__item-icon">{{ item.icon }}</span>
                  <span>{{ item.label }}</span>
                  <svg class="br-navbar__dropdown-arrow" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M7 10l5 5 5-5z" />
                  </svg>
                </button>
                <div class="br-navbar__dropdown-menu">
                  <component
                    :is="child.to ? 'router-link' : child.href ? 'a' : 'button'"
                    v-for="child in item.children"
                    :key="child.id"
                    class="br-navbar__dropdown-item"
                    :to="child.to"
                    :href="child.href"
                    :disabled="child.disabled"
                    @click="child.onClick"
                  >
                    <span v-if="child.icon" class="br-navbar__item-icon">{{ child.icon }}</span>
                    <span>{{ child.label }}</span>
                  </component>
                </div>
              </div>
              <component
                v-else
                :is="item.to ? 'router-link' : item.href ? 'a' : 'button'"
                class="br-navbar__item"
                :to="item.to"
                :href="item.href"
                :disabled="item.disabled"
                @click="item.onClick"
              >
                <span v-if="item.icon" class="br-navbar__item-icon">{{ item.icon }}</span>
                <span>{{ item.label }}</span>
                <span v-if="item.badge" class="br-navbar__item-badge">{{ item.badge }}</span>
              </component>
            </template>
          </template>
        </slot>
      </div>

      <!-- Actions slot -->
      <div class="br-navbar__actions">
        <slot name="actions" />
      </div>

      <!-- Mobile Menu Toggle -->
      <button
        v-if="showMobileToggle"
        type="button"
        class="br-navbar__mobile-toggle"
        :aria-expanded="isMobileMenuOpen"
        @click="toggleMobileMenu"
      >
        <span class="br-navbar__mobile-toggle-bar" />
        <span class="br-navbar__mobile-toggle-bar" />
        <span class="br-navbar__mobile-toggle-bar" />
      </button>
    </div>

    <!-- Mobile Menu -->
    <div v-if="showMobileToggle" class="br-navbar__mobile-menu">
      <slot name="mobile-nav">
        <template v-if="items && items.length">
          <component
            :is="item.to ? 'router-link' : item.href ? 'a' : 'button'"
            v-for="item in items"
            :key="item.id"
            class="br-navbar__mobile-item"
            :to="item.to"
            :href="item.href"
            :disabled="item.disabled"
            @click="closeMobileMenu(); item.onClick?.()"
          >
            <span v-if="item.icon" class="br-navbar__item-icon">{{ item.icon }}</span>
            <span>{{ item.label }}</span>
          </component>
        </template>
      </slot>
      <slot name="mobile-actions" />
    </div>
  </nav>
</template>

<style lang="scss" scoped>
.br-navbar {
  width: 100%;
  background: var(--br-white);
  z-index: 1000;

  &--fixed {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
  }

  &--sticky {
    position: sticky;
    top: 0;
  }

  &--elevated {
    box-shadow: var(--br-shadow-sm);
  }

  &--transparent {
    background: transparent;
  }

  &--colored {
    background: var(--navbar-color, var(--br-primary-500));

    .br-navbar__item,
    .br-navbar__brand-text {
      color: var(--br-white);
    }

    .br-navbar__mobile-toggle-bar {
      background: var(--br-white);
    }
  }

  &__container {
    display: flex;
    align-items: center;
    gap: var(--br-space-4);
    max-width: 1280px;
    margin: 0 auto;
    padding: var(--br-space-3) var(--br-space-4);
  }

  &--dense &__container {
    padding: var(--br-space-2) var(--br-space-4);
  }

  &__brand {
    display: flex;
    align-items: center;
    gap: var(--br-space-2);
    flex-shrink: 0;
  }

  &__logo {
    height: 32px;
    width: auto;
  }

  &__brand-text {
    font-size: var(--br-text-lg);
    font-weight: var(--br-font-bold);
    color: var(--br-dark-800);
  }

  &__nav {
    display: flex;
    align-items: center;
    gap: var(--br-space-1);
    flex: 1;

    @media (max-width: 768px) {
      display: none;
    }
  }

  &__item {
    display: flex;
    align-items: center;
    gap: var(--br-space-2);
    padding: var(--br-space-2) var(--br-space-3);
    border: none;
    border-radius: var(--br-radius-md);
    background: transparent;
    font-size: var(--br-text-sm);
    font-weight: var(--br-font-medium);
    color: var(--br-dark-600);
    text-decoration: none;
    cursor: pointer;
    transition: all var(--br-transition-fast);

    &:hover:not(:disabled) {
      background: var(--br-light-100);
      color: var(--br-dark-800);
    }

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    &.router-link-active {
      color: var(--br-primary-600);
      background: var(--br-primary-50);
    }
  }

  &__item-icon {
    font-size: 1.2em;
  }

  &__item-badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 18px;
    height: 18px;
    padding: 0 6px;
    border-radius: var(--br-radius-full);
    background: var(--br-danger-500);
    color: var(--br-white);
    font-size: var(--br-text-xs);
    font-weight: var(--br-font-semibold);
  }

  &__dropdown {
    position: relative;

    &:hover .br-navbar__dropdown-menu {
      opacity: 1;
      visibility: visible;
      transform: translateY(0);
    }
  }

  &__dropdown-trigger {
    display: flex;
    align-items: center;
    gap: var(--br-space-1);
  }

  &__dropdown-arrow {
    width: 16px;
    height: 16px;
    transition: transform var(--br-transition-fast);
  }

  &__dropdown:hover &__dropdown-arrow {
    transform: rotate(180deg);
  }

  &__dropdown-menu {
    position: absolute;
    top: 100%;
    left: 0;
    min-width: 180px;
    padding: var(--br-space-2);
    background: var(--br-white);
    border-radius: var(--br-radius-md);
    box-shadow: var(--br-shadow-lg);
    opacity: 0;
    visibility: hidden;
    transform: translateY(-8px);
    transition: all var(--br-transition-fast);
    z-index: 1001;
  }

  &__dropdown-item {
    display: flex;
    align-items: center;
    gap: var(--br-space-2);
    width: 100%;
    padding: var(--br-space-2) var(--br-space-3);
    border: none;
    border-radius: var(--br-radius-sm);
    background: transparent;
    font-size: var(--br-text-sm);
    color: var(--br-dark-600);
    text-decoration: none;
    cursor: pointer;

    &:hover:not(:disabled) {
      background: var(--br-light-100);
    }
  }

  &__actions {
    display: flex;
    align-items: center;
    gap: var(--br-space-2);
    margin-left: auto;

    @media (max-width: 768px) {
      display: none;
    }
  }

  &__mobile-toggle {
    display: none;
    flex-direction: column;
    justify-content: center;
    gap: 4px;
    width: 32px;
    height: 32px;
    padding: 6px;
    border: none;
    border-radius: var(--br-radius-md);
    background: transparent;
    cursor: pointer;

    @media (max-width: 768px) {
      display: flex;
      margin-left: auto;
    }
  }

  &__mobile-toggle-bar {
    width: 100%;
    height: 2px;
    background: var(--br-dark-600);
    border-radius: 1px;
    transition: all var(--br-transition-fast);
  }

  &--mobile-open &__mobile-toggle-bar:nth-child(1) {
    transform: translateY(6px) rotate(45deg);
  }

  &--mobile-open &__mobile-toggle-bar:nth-child(2) {
    opacity: 0;
  }

  &--mobile-open &__mobile-toggle-bar:nth-child(3) {
    transform: translateY(-6px) rotate(-45deg);
  }

  &__mobile-menu {
    display: none;
    flex-direction: column;
    padding: var(--br-space-4);
    border-top: 1px solid var(--br-light-200);

    @media (max-width: 768px) {
      .br-navbar--mobile-open & {
        display: flex;
      }
    }
  }

  &__mobile-item {
    display: flex;
    align-items: center;
    gap: var(--br-space-2);
    padding: var(--br-space-3);
    border: none;
    border-radius: var(--br-radius-md);
    background: transparent;
    font-size: var(--br-text-md);
    color: var(--br-dark-700);
    text-decoration: none;
    cursor: pointer;

    &:hover {
      background: var(--br-light-100);
    }

    &.router-link-active {
      color: var(--br-primary-600);
      background: var(--br-primary-50);
    }
  }
}
</style>
