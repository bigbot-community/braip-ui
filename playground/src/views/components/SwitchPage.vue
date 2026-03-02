<script setup lang="ts">
import { ref } from 'vue'

const switchValue = ref(false)
const switchValue2 = ref(true)

const switchProps = [
  { name: 'modelValue', type: 'boolean', default: 'false', description: 'Valor do switch (v-model)' },
  { name: 'size', type: "'sm' | 'md' | 'lg'", default: "'md'", description: 'Tamanho do switch' },
  { name: 'disabled', type: 'boolean', default: 'false', description: 'Desabilita o switch' },
]
</script>

<template>
  <div class="component-page">
    <header class="component-page__header">
      <BrBadge variant="primary">Atom</BrBadge>
      <h1 class="component-page__title">Switch</h1>
      <p class="component-page__description">
        Toggle switch para alternar entre estados ligado/desligado.
      </p>
    </header>

    <!-- Usage -->
    <section class="component-page__section">
      <h2>Uso Básico</h2>
      <CodeExample
        title="Switch Simples"
        code='<BrSwitch v-model="value" />'
      >
        <div style="display: flex; align-items: center; gap: 12px;">
          <BrSwitch v-model="switchValue" />
          <span style="font-size: 14px; color: var(--neutralDarkGrey7);">
            {{ switchValue ? 'Ligado' : 'Desligado' }}
          </span>
        </div>
      </CodeExample>
    </section>

    <!-- Sizes -->
    <section class="component-page__section">
      <h2>Tamanhos</h2>
      <CodeExample
        title="Todos os Tamanhos"
        code='<BrSwitch size="sm" />
<BrSwitch size="md" />
<BrSwitch size="lg" />'
      >
        <BrSwitch v-model="switchValue2" size="sm" />
        <BrSwitch v-model="switchValue2" size="md" />
        <BrSwitch v-model="switchValue2" size="lg" />
      </CodeExample>
    </section>

    <!-- States -->
    <section class="component-page__section">
      <h2>Estados</h2>
      <CodeExample
        title="Estados do Switch"
        code='<BrSwitch :model-value="false" />
<BrSwitch :model-value="true" />
<BrSwitch :model-value="false" disabled />
<BrSwitch :model-value="true" disabled />'
      >
        <BrSwitch :model-value="false" />
        <BrSwitch :model-value="true" />
        <BrSwitch :model-value="false" disabled />
        <BrSwitch :model-value="true" disabled />
      </CodeExample>
    </section>

    <!-- API -->
    <section class="component-page__section">
      <h2>API</h2>
      <h3>Props</h3>
      <PropsTable :props="switchProps" />
    </section>
  </div>
</template>

<style lang="scss" scoped>
.component-page {
  &__header {
    margin-bottom: var(--br-space-10);
  }

  &__title {
    font-size: var(--br-text-h3);
    font-weight: var(--br-font-bold);
    color: var(--neutralDarkGrey);
    margin: var(--br-space-4) 0;
  }

  &__description {
    font-size: var(--br-text-lg);
    color: var(--neutralDarkGrey7);
    line-height: 1.6;
    margin: 0;
  }

  &__section {
    margin-bottom: var(--br-space-12);

    h2 {
      font-size: var(--br-text-h5);
      font-weight: var(--br-font-semibold);
      color: var(--neutralDarkGrey);
      margin: 0 0 var(--br-space-4);
      padding-bottom: var(--br-space-3);
      border-bottom: 1px solid var(--neutralLightGrey5);
    }

    h3 {
      font-size: var(--br-text-lg);
      font-weight: var(--br-font-semibold);
      color: var(--neutralDarkGrey);
      margin: var(--br-space-6) 0 var(--br-space-3);
    }
  }
}
</style>
