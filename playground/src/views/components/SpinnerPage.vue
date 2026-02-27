<script setup lang="ts">

const spinnerProps = [
  { name: 'size', type: "'sm' | 'md' | 'lg' | 'xl'", default: "'md'", description: 'Tamanho do spinner' },
  { name: 'status', type: "'loading' | 'success' | 'error'", default: "'loading'", description: 'Status visual do spinner' },
]
</script>

<template>
  <div class="component-page">
    <header class="component-page__header">
      <BrBadge variant="primary">Atom</BrBadge>
      <h1 class="component-page__title">Spinner</h1>
      <p class="component-page__description">
        Indicadores de carregamento para feedback visual durante operações assíncronas.
      </p>
    </header>

    <!-- Usage -->
    <section class="component-page__section">
      <h2>Uso Básico</h2>
      <CodeExample
        title="Spinner Simples"
        code="<BrSpinner />"
      >
        <BrSpinner />
      </CodeExample>
    </section>

    <!-- Sizes -->
    <section class="component-page__section">
      <h2>Tamanhos</h2>
      <CodeExample
        title="Todos os Tamanhos"
        code='<BrSpinner size="sm" />
<BrSpinner size="md" />
<BrSpinner size="lg" />
<BrSpinner size="xl" />'
      >
        <BrSpinner size="sm" />
        <BrSpinner size="md" />
        <BrSpinner size="lg" />
        <BrSpinner size="xl" />
      </CodeExample>
    </section>

    <!-- Status -->
    <section class="component-page__section">
      <h2>Status</h2>
      <p>Use a prop <code>status</code> para indicar diferentes estados.</p>
      <CodeExample
        title="Status do Spinner"
        code='<BrSpinner status="loading" />
<BrSpinner status="success" />
<BrSpinner status="error" />'
      >
        <div style="display: flex; gap: 24px; align-items: center;">
          <div style="text-align: center;">
            <BrSpinner status="loading" size="lg" />
            <p style="margin-top: 8px; font-size: 12px; color: var(--br-dark-700);">Loading</p>
          </div>
          <div style="text-align: center;">
            <BrSpinner status="success" size="lg" />
            <p style="margin-top: 8px; font-size: 12px; color: var(--br-dark-700);">Success</p>
          </div>
          <div style="text-align: center;">
            <BrSpinner status="error" size="lg" />
            <p style="margin-top: 8px; font-size: 12px; color: var(--br-dark-700);">Error</p>
          </div>
        </div>
      </CodeExample>
    </section>

    <!-- API -->
    <section class="component-page__section">
      <h2>API</h2>
      <h3>Props</h3>
      <PropsTable :props="spinnerProps" />
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

      code {
        font-family: 'Fira Code', monospace;
        font-size: 0.9em;
        background: var(--br-primary-100);
        color: var(--br-primary-600);
        padding: 2px 6px;
        border-radius: var(--br-radius-sm);
      }
    }
  }
}
</style>
