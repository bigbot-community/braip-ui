<script setup lang="ts">
import CodeExample from '../../components/CodeExample.vue'
import PropsTable from '../../components/PropsTable.vue'

const textValue = ref('')
const emailValue = ref('')
const passwordValue = ref('')

const inputProps = [
  { name: 'modelValue', type: 'string | number', default: '-', description: 'Valor do input (v-model)' },
  { name: 'type', type: "'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'search' | 'date' | 'time'", default: "'text'", description: 'Tipo do input HTML' },
  { name: 'placeholder', type: 'string', default: '-', description: 'Texto placeholder' },
  { name: 'size', type: "'sm' | 'md' | 'lg'", default: "'md'", description: 'Tamanho do input' },
  { name: 'disabled', type: 'boolean', default: 'false', description: 'Desabilita o input' },
  { name: 'readonly', type: 'boolean', default: 'false', description: 'Input somente leitura' },
  { name: 'error', type: 'boolean', default: 'false', description: 'Estado de erro' },
]
</script>

<template>
  <div class="component-page">
    <header class="component-page__header">
      <BrBadge variant="primary">Atom</BrBadge>
      <h1 class="component-page__title">Input</h1>
      <p class="component-page__description">
        O componente Input permite capturar texto do usuário em formulários e interfaces.
      </p>
    </header>

    <!-- Usage -->
    <section class="component-page__section">
      <h2>Uso Básico</h2>
      <CodeExample
        title="Input Simples"
        description="Input com v-model para two-way binding"
        code='<BrInput v-model="value" placeholder="Digite algo..." />'
      >
        <BrInput v-model="textValue" placeholder="Digite algo..." />
      </CodeExample>
    </section>

    <!-- Types -->
    <section class="component-page__section">
      <h2>Tipos</h2>
      <p>Use a prop <code>type</code> para definir o tipo de entrada.</p>

      <CodeExample
        title="Diferentes Tipos"
        code='<BrInput type="text" placeholder="Texto" />
<BrInput type="email" placeholder="E-mail" />
<BrInput type="password" placeholder="Senha" />
<BrInput type="number" placeholder="Número" />'
      >
        <div style="display: flex; flex-direction: column; gap: 12px; width: 300px;">
          <BrInput v-model="textValue" type="text" placeholder="Texto" />
          <BrInput v-model="emailValue" type="email" placeholder="E-mail" />
          <BrInput v-model="passwordValue" type="password" placeholder="Senha" />
          <BrInput type="number" placeholder="Número" />
        </div>
      </CodeExample>
    </section>

    <!-- Sizes -->
    <section class="component-page__section">
      <h2>Tamanhos</h2>
      <CodeExample
        title="Todos os Tamanhos"
        code='<BrInput size="sm" placeholder="Pequeno" />
<BrInput size="md" placeholder="Médio" />
<BrInput size="lg" placeholder="Grande" />'
      >
        <div style="display: flex; flex-direction: column; gap: 12px; width: 300px;">
          <BrInput size="sm" placeholder="Pequeno" />
          <BrInput size="md" placeholder="Médio" />
          <BrInput size="lg" placeholder="Grande" />
        </div>
      </CodeExample>
    </section>

    <!-- States -->
    <section class="component-page__section">
      <h2>Estados</h2>
      <CodeExample
        title="Estados de Input"
        code='<BrInput placeholder="Normal" />
<BrInput placeholder="Com erro" error />
<BrInput placeholder="Desabilitado" disabled />
<BrInput placeholder="Somente leitura" readonly value="Valor fixo" />'
      >
        <div style="display: flex; flex-direction: column; gap: 12px; width: 300px;">
          <BrInput placeholder="Normal" />
          <BrInput placeholder="Com erro" error />
          <BrInput placeholder="Desabilitado" disabled />
          <BrInput placeholder="Somente leitura" readonly model-value="Valor fixo" />
        </div>
      </CodeExample>
    </section>

    <!-- API -->
    <section class="component-page__section">
      <h2>API</h2>
      <h3>Props</h3>
      <PropsTable :props="inputProps" />
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

    p {
      color: var(--neutralDarkGrey7);
      margin: 0 0 var(--br-space-4);
      line-height: 1.6;

      code {
        font-family: 'Fira Code', monospace;
        font-size: 0.9em;
        background: var(--brandPrimaryLightest);
        color: var(--brandPrimary6);
        padding: 2px 6px;
        border-radius: var(--br-radius-sm);
      }
    }
  }
}
</style>
