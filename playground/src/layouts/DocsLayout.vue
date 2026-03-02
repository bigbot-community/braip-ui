<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const sidebarCollapsed = ref(false)
const mobileMenuOpen = ref(false)

interface MenuItem {
  label: string
  path?: string
  icon?: string
  children?: MenuItem[]
}

const menuItems: MenuItem[] = [
  {
    label: 'Início',
    path: '/',
    icon: 'home',
  },
  {
    label: 'Design Tokens',
    icon: 'palette',
    children: [
      { label: 'Cores', path: '/tokens/colors' },
      { label: 'Tipografia', path: '/tokens/typography' },
      { label: 'Espaçamentos', path: '/tokens/spacing' },
    ],
  },
  {
    label: 'Componentes',
    icon: 'components',
    children: [
      {
        label: 'Atoms',
        children: [
          { label: 'Avatar', path: '/components/avatar' },
          { label: 'Badge', path: '/components/badge' },
          { label: 'Button', path: '/components/button' },
          { label: 'Checkbox', path: '/components/checkbox' },
          { label: 'Icon', path: '/components/icon' },
          { label: 'Image', path: '/components/image' },
          { label: 'Input', path: '/components/input' },
          { label: 'Input Range', path: '/components/input-range' },
          { label: 'LineDivision', path: '/components/line-division' },
          { label: 'Progressbar', path: '/components/progressbar' },
          { label: 'Radio', path: '/components/radio' },
          { label: 'Rating', path: '/components/rating' },
          { label: 'Dropdown Item', path: '/components/dropdown-item' },
          { label: 'Select', path: '/components/select' },
          { label: 'Spinner', path: '/components/spinner' },
          { label: 'Switch', path: '/components/switch' },
          { label: 'Textarea', path: '/components/textarea' },
          { label: 'Title', path: '/components/title' },
          { label: 'Video', path: '/components/video' },
        ],
      },
      {
        label: 'Molecules',
        children: [
          { label: 'Accordion', path: '/components/accordion' },
          { label: 'Calendar', path: '/components/calendar' },
          { label: 'Card', path: '/components/card' },
          { label: 'Form Select', path: '/components/form-select' },
          { label: 'FormField', path: '/components/form-field' },
          { label: 'Modal', path: '/components/modal' },
          { label: 'Stepper', path: '/components/stepper' },
          { label: 'Tabs', path: '/components/tabs' },
        ],
      },
      {
        label: 'Organisms',
        children: [
          { label: 'Navbar', path: '/components/navbar' },
          { label: 'Sidebar', path: '/components/sidebar' },
        ],
      },
    ],
  },
]

const expandedGroups = ref<string[]>(['Componentes', 'Atoms', 'Molecules', 'Organisms', 'Design Tokens'])

function toggleGroup(label: string) {
  const index = expandedGroups.value.indexOf(label)
  if (index > -1) {
    expandedGroups.value.splice(index, 1)
  } else {
    expandedGroups.value.push(label)
  }
}

function isActive(path: string) {
  return route.path === path
}

function isGroupExpanded(label: string) {
  return expandedGroups.value.includes(label)
}
</script>

<template>
  <div class="docs-layout" :class="{ 'docs-layout--collapsed': sidebarCollapsed }">
    <!-- Header -->
    <header class="docs-header">
      <div class="docs-header__left">
        <button class="docs-header__menu-btn" @click="mobileMenuOpen = !mobileMenuOpen">
          <BrIcon name="menu" size="md" />
        </button>
        <router-link to="/" class="docs-header__logo">
          <span class="docs-header__logo-text">Braip</span>
          <span class="docs-header__logo-ui">UI</span>
        </router-link>
      </div>
      <div class="docs-header__right">
        <span class="docs-header__version">v0.1.0</span>
      </div>
    </header>

    <!-- Sidebar -->
    <aside class="docs-sidebar" :class="{ 'docs-sidebar--open': mobileMenuOpen }">
      <div class="docs-sidebar__overlay" @click="mobileMenuOpen = false" />
      <nav class="docs-sidebar__nav">
        <template v-for="item in menuItems" :key="item.label">
          <div v-if="item.children" class="docs-nav-group">
            <button class="docs-nav-group__header" :class="{ 'docs-nav-group__header--expanded': isGroupExpanded(item.label) }" @click="toggleGroup(item.label)">
              <span class="docs-nav-group__label">{{ item.label }}</span>
              <BrIcon name="chevron-down" size="sm" class="docs-nav-group__icon" :class="{ 'docs-nav-group__icon--rotated': isGroupExpanded(item.label) }" />
            </button>
            <div v-show="isGroupExpanded(item.label)" class="docs-nav-group__content">
              <template v-for="child in item.children" :key="child.label">
                <div v-if="child.children" class="docs-nav-subgroup">
                  <button class="docs-nav-subgroup__header" :class="{ 'docs-nav-subgroup__header--expanded': isGroupExpanded(child.label) }" @click="toggleGroup(child.label)">
                    <span>{{ child.label }}</span>
                    <BrIcon name="chevron-down" size="sm" class="docs-nav-subgroup__icon" :class="{ 'docs-nav-subgroup__icon--rotated': isGroupExpanded(child.label) }" />
                  </button>
                  <div v-show="isGroupExpanded(child.label)" class="docs-nav-subgroup__content">
                    <router-link v-for="subChild in child.children" :key="subChild.path" :to="subChild.path!" class="docs-nav-link docs-nav-link--nested" :class="{ 'docs-nav-link--active': isActive(subChild.path!) }" @click="mobileMenuOpen = false">
                      {{ subChild.label }}
                    </router-link>
                  </div>
                </div>
                <router-link v-else :to="child.path!" class="docs-nav-link" :class="{ 'docs-nav-link--active': isActive(child.path!) }" @click="mobileMenuOpen = false">
                  {{ child.label }}
                </router-link>
              </template>
            </div>
          </div>
          <router-link v-else :to="item.path!" class="docs-nav-link docs-nav-link--root" :class="{ 'docs-nav-link--active': isActive(item.path!) }" @click="mobileMenuOpen = false">
            {{ item.label }}
          </router-link>
        </template>
      </nav>
    </aside>

    <!-- Main Content -->
    <main class="docs-main">
      <div class="docs-content">
        <router-view />
      </div>
    </main>
  </div>
</template>

<style lang="scss" scoped>
.docs-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: var(--br-light-100);
}

.docs-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 var(--br-space-6);
  background: var(--br-light-0);
  border-bottom: 1px solid var(--br-light-300);
  z-index: var(--br-z-fixed);

  &__left {
    display: flex;
    align-items: center;
    gap: var(--br-space-4);
  }

  &__menu-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border: none;
    border-radius: var(--br-radius-md);
    background: transparent;
    color: var(--br-dark-700);
    cursor: pointer;
    transition: all var(--br-transition-fast);

    &:hover {
      background: var(--br-light-200);
    }

    @media (min-width: 1024px) {
      display: none;
    }
  }

  &__logo {
    display: flex;
    align-items: center;
    gap: var(--br-space-1);
    text-decoration: none;
    font-size: var(--br-text-xl);
    font-weight: var(--br-font-bold);
  }

  &__logo-text {
    color: var(--br-primary-600);
  }

  &__logo-ui {
    color: var(--br-dark-700);
  }

  &__right {
    display: flex;
    align-items: center;
    gap: var(--br-space-4);
  }

  &__version {
    padding: var(--br-space-1) var(--br-space-3);
    font-size: var(--br-text-xs);
    font-weight: var(--br-font-medium);
    color: var(--br-primary-600);
    background: var(--br-primary-100);
    border-radius: var(--br-radius-full);
  }
}

.docs-sidebar {
  position: fixed;
  top: 64px;
  left: 0;
  bottom: 0;
  width: 280px;
  background: var(--br-light-0);
  border-right: 1px solid var(--br-light-300);
  overflow-y: auto;
  z-index: var(--br-z-fixed);
  transform: translateX(-100%);
  transition: transform var(--br-transition-normal);

  @media (min-width: 1024px) {
    transform: translateX(0);
  }

  &--open {
    transform: translateX(0);
  }

  &__overlay {
    display: none;
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: -1;

    .docs-sidebar--open & {
      display: block;

      @media (min-width: 1024px) {
        display: none;
      }
    }
  }

  &__nav {
    padding: var(--br-space-4);
  }
}

.docs-nav-group {
  margin-bottom: var(--br-space-2);

  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: var(--br-space-3) var(--br-space-4);
    border: none;
    border-radius: var(--br-radius-md);
    background: transparent;
    font-family: var(--br-font-primary);
    font-size: var(--br-text-sm);
    font-weight: var(--br-font-semibold);
    color: var(--br-dark-700);
    cursor: pointer;
    transition: all var(--br-transition-fast);

    &:hover {
      background: var(--br-light-100);
    }
  }

  &__label {
    text-transform: uppercase;
    letter-spacing: 0.05em;
    font-size: var(--br-text-xs);
  }

  &__icon {
    transition: transform var(--br-transition-fast);

    &--rotated {
      transform: rotate(180deg);
    }
  }

  &__content {
    padding-left: var(--br-space-2);
  }
}

.docs-nav-subgroup {
  margin-bottom: var(--br-space-1);

  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: var(--br-space-2) var(--br-space-4);
    border: none;
    border-radius: var(--br-radius-md);
    background: transparent;
    font-family: var(--br-font-primary);
    font-size: var(--br-text-sm);
    font-weight: var(--br-font-medium);
    color: var(--br-dark-600);
    cursor: pointer;
    transition: all var(--br-transition-fast);

    &:hover {
      background: var(--br-light-100);
    }
  }

  &__icon {
    transition: transform var(--br-transition-fast);

    &--rotated {
      transform: rotate(180deg);
    }
  }

  &__content {
    padding-left: var(--br-space-2);
  }
}

.docs-nav-link {
  display: block;
  padding: var(--br-space-2) var(--br-space-4);
  font-size: var(--br-text-sm);
  color: var(--br-dark-700);
  text-decoration: none;
  border-radius: var(--br-radius-md);
  transition: all var(--br-transition-fast);

  &:hover {
    background: var(--br-light-100);
    color: var(--br-primary-600);
  }

  &--active {
    background: var(--br-primary-100);
    color: var(--br-primary-600);
    font-weight: var(--br-font-medium);
  }

  &--root {
    font-weight: var(--br-font-medium);
    margin-bottom: var(--br-space-2);
  }

  &--nested {
    padding-left: var(--br-space-6);
    font-size: var(--br-text-sm);
  }
}

.docs-main {
  flex: 1;
  margin-top: 64px;
  padding: var(--br-space-8);

  @media (min-width: 1024px) {
    margin-left: 280px;
  }
}

.docs-content {
  max-width: 1000px;
  margin: 0 auto;
}
</style>
