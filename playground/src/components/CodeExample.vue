<script setup lang="ts">
import { ref, computed } from 'vue'
import { useClipboard } from '@vueuse/core'

interface Props {
  title?: string
  description?: string
  code: string
}

const props = defineProps<Props>()

const showCode = ref(false)
const { copy, copied } = useClipboard()

const formattedCode = computed(() => {
  return props.code.trim()
})

function copyCode() {
  copy(formattedCode.value)
}
</script>

<template>
  <div class="code-example">
    <div v-if="title || description" class="code-example__header">
      <h3 v-if="title" class="code-example__title">{{ title }}</h3>
      <p v-if="description" class="code-example__description">{{ description }}</p>
    </div>

    <div class="code-example__preview">
      <slot />
    </div>

    <div class="code-example__actions">
      <button class="code-example__btn" :class="{ 'code-example__btn--active': showCode }" @click="showCode = !showCode">
        <BrIcon :name="showCode ? 'close' : 'eye'" size="sm" />
        <span>{{ showCode ? 'Ocultar' : 'Código' }}</span>
      </button>
      <button class="code-example__btn" @click="copyCode">
        <BrIcon :name="copied ? 'check' : 'edit'" size="sm" />
        <span>{{ copied ? 'Copiado!' : 'Copiar' }}</span>
      </button>
    </div>

    <Transition name="slide">
      <div v-if="showCode" class="code-example__code">
        <pre><code>{{ formattedCode }}</code></pre>
      </div>
    </Transition>
  </div>
</template>

<style lang="scss" scoped>
.code-example {
  background: var(--br-light-0);
  border: 1px solid var(--br-light-300);
  border-radius: var(--br-radius-lg);
  margin-bottom: var(--br-space-6);

  &__header {
    padding: var(--br-space-4) var(--br-space-6);
    border-bottom: 1px solid var(--br-light-200);
  }

  &__title {
    margin: 0 0 var(--br-space-1);
    font-size: var(--br-text-base);
    font-weight: var(--br-font-semibold);
    color: var(--br-dark-0);
  }

  &__description {
    margin: 0;
    font-size: var(--br-text-sm);
    color: var(--br-dark-700);
  }

  &__preview {
    padding: var(--br-space-8);
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: var(--br-space-4);
    background: var(--br-light-50);
  }

  &__actions {
    display: flex;
    gap: var(--br-space-2);
    padding: var(--br-space-3) var(--br-space-4);
    border-top: 1px solid var(--br-light-200);
    background: var(--br-light-100);
  }

  &__btn {
    display: inline-flex;
    align-items: center;
    gap: var(--br-space-2);
    padding: var(--br-space-2) var(--br-space-3);
    border: none;
    border-radius: var(--br-radius-md);
    background: transparent;
    font-family: var(--br-font-primary);
    font-size: var(--br-text-xs);
    font-weight: var(--br-font-medium);
    color: var(--br-dark-700);
    cursor: pointer;
    transition: all var(--br-transition-fast);

    &:hover {
      background: var(--br-light-200);
      color: var(--br-primary-600);
    }

    &--active {
      background: var(--br-primary-100);
      color: var(--br-primary-600);
    }
  }

  &__code {
    padding: var(--br-space-4);
    background: var(--br-dark-0);
    overflow-x: auto;

    pre {
      margin: 0;
      font-family: 'Fira Code', 'Monaco', 'Consolas', monospace;
      font-size: var(--br-text-sm);
      line-height: 1.6;
    }

    code {
      color: var(--br-light-200);
      white-space: pre;
    }
  }
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.2s ease;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  max-height: 0;
}

.slide-enter-to,
.slide-leave-from {
  opacity: 1;
  max-height: 500px;
}
</style>
