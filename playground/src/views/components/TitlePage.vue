<script setup lang="ts">
import CodeExample from '../../components/CodeExample.vue'
import PropsTable from '../../components/PropsTable.vue'

const titleProps = [
  { name: 'level', type: "'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p'", default: "'h2'", description: 'Nível semântico do título' },
  { name: 'color', type: 'string', default: '-', description: 'Cor personalizada do título' },
]
</script>

<template>
  <div class="component-page">
    <header class="component-page__header">
      <BrBadge variant="primary">Atom</BrBadge>
      <h1 class="component-page__title">Title</h1>
      <p class="component-page__description">
        Componente de tipografia para títulos com hierarquia visual consistente.
      </p>
    </header>

    <!-- Levels -->
    <section class="component-page__section">
      <h2>Níveis</h2>
      <CodeExample
        title="Hierarquia de Títulos"
        code='<BrTitle level="h1">Título H1</BrTitle>
<BrTitle level="h2">Título H2</BrTitle>
<BrTitle level="h3">Título H3</BrTitle>
<BrTitle level="h4">Título H4</BrTitle>
<BrTitle level="h5">Título H5</BrTitle>
<BrTitle level="h6">Título H6</BrTitle>
<BrTitle level="p">Parágrafo estilizado</BrTitle>'
      >
        <div style="display: flex; flex-direction: column; gap: 8px;">
          <BrTitle level="h1">Título H1</BrTitle>
          <BrTitle level="h2">Título H2</BrTitle>
          <BrTitle level="h3">Título H3</BrTitle>
          <BrTitle level="h4">Título H4</BrTitle>
          <BrTitle level="h5">Título H5</BrTitle>
          <BrTitle level="h6">Título H6</BrTitle>
          <BrTitle level="p">Parágrafo estilizado</BrTitle>
        </div>
      </CodeExample>
    </section>

    <!-- API -->
    <section class="component-page__section">
      <h2>API</h2>
      <h3>Props</h3>
      <PropsTable :props="titleProps" />
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
    color: var(--br-dark-0);
    margin: var(--br-space-4) 0;
  }

  &__description {
    font-size: var(--br-text-lg);
    color: var(--br-dark-700);
    line-height: 1.6;
    margin: 0;
  }

  &__section {
    margin-bottom: var(--br-space-12);

    h2 {
      font-size: var(--br-text-h5);
      font-weight: var(--br-font-semibold);
      color: var(--br-dark-0);
      margin: 0 0 var(--br-space-4);
      padding-bottom: var(--br-space-3);
      border-bottom: 1px solid var(--br-light-300);
    }

    h3 {
      font-size: var(--br-text-lg);
      font-weight: var(--br-font-semibold);
      color: var(--br-dark-0);
      margin: var(--br-space-6) 0 var(--br-space-3);
    }
  }
}
</style>
