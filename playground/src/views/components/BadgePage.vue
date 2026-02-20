<script setup lang="ts">
import CodeExample from '../../components/CodeExample.vue'
import PropsTable from '../../components/PropsTable.vue'

const badgeProps = [
  { name: 'variant', type: "'default' | 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info'", default: "'default'", description: 'Estilo visual do badge' },
  { name: 'size', type: "'sm' | 'md' | 'lg'", default: "'md'", description: 'Tamanho do badge' },
]
</script>

<template>
  <div class="component-page">
    <header class="component-page__header">
      <BrBadge variant="primary">Atom</BrBadge>
      <h1 class="component-page__title">Badge</h1>
      <p class="component-page__description">
        Badges são usados para destacar informações importantes, status ou categorias.
      </p>
    </header>

    <!-- Variants -->
    <section class="component-page__section">
      <h2>Variantes</h2>
      <CodeExample
        title="Todas as Variantes"
        code='<BrBadge>Default</BrBadge>
<BrBadge variant="primary">Primary</BrBadge>
<BrBadge variant="secondary">Secondary</BrBadge>
<BrBadge variant="success">Success</BrBadge>
<BrBadge variant="danger">Danger</BrBadge>
<BrBadge variant="warning">Warning</BrBadge>
<BrBadge variant="info">Info</BrBadge>'
      >
        <BrBadge>Default</BrBadge>
        <BrBadge variant="primary">Primary</BrBadge>
        <BrBadge variant="secondary">Secondary</BrBadge>
        <BrBadge variant="success">Success</BrBadge>
        <BrBadge variant="danger">Danger</BrBadge>
        <BrBadge variant="warning">Warning</BrBadge>
        <BrBadge variant="info">Info</BrBadge>
      </CodeExample>
    </section>

    <!-- Sizes -->
    <section class="component-page__section">
      <h2>Tamanhos</h2>
      <CodeExample
        title="Todos os Tamanhos"
        code='<BrBadge size="sm" variant="primary">Pequeno</BrBadge>
<BrBadge size="md" variant="primary">Médio</BrBadge>
<BrBadge size="lg" variant="primary">Grande</BrBadge>'
      >
        <BrBadge size="sm" variant="primary">Pequeno</BrBadge>
        <BrBadge size="md" variant="primary">Médio</BrBadge>
        <BrBadge size="lg" variant="primary">Grande</BrBadge>
      </CodeExample>
    </section>

    <!-- Use Cases -->
    <section class="component-page__section">
      <h2>Casos de Uso</h2>
      <CodeExample
        title="Status"
        description="Indicando diferentes estados"
        code='<BrBadge variant="success">Ativo</BrBadge>
<BrBadge variant="warning">Pendente</BrBadge>
<BrBadge variant="danger">Cancelado</BrBadge>
<BrBadge variant="info">Em análise</BrBadge>'
      >
        <BrBadge variant="success">Ativo</BrBadge>
        <BrBadge variant="warning">Pendente</BrBadge>
        <BrBadge variant="danger">Cancelado</BrBadge>
        <BrBadge variant="info">Em análise</BrBadge>
      </CodeExample>

      <CodeExample
        title="Categorias"
        description="Classificando conteúdo"
        code='<BrBadge variant="primary">Marketing</BrBadge>
<BrBadge variant="secondary">Vendas</BrBadge>
<BrBadge>Suporte</BrBadge>'
      >
        <BrBadge variant="primary">Marketing</BrBadge>
        <BrBadge variant="secondary">Vendas</BrBadge>
        <BrBadge>Suporte</BrBadge>
      </CodeExample>
    </section>

    <!-- API -->
    <section class="component-page__section">
      <h2>API</h2>
      <h3>Props</h3>
      <PropsTable :props="badgeProps" />
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

    p {
      color: var(--br-dark-700);
      margin: 0 0 var(--br-space-4);
      line-height: 1.6;
    }
  }
}
</style>
