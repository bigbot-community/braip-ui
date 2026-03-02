<script setup lang="ts">
import { ref } from 'vue'
import CodeExample from '../../components/CodeExample.vue'
import PropsTable from '../../components/PropsTable.vue'

const isLoading = ref(false)

function simulateLoading() {
  isLoading.value = true
  setTimeout(() => {
    isLoading.value = false
  }, 2000)
}

const buttonProps = [
  { name: 'variant', type: "'primary' | 'secondary' | 'outline' | 'ghost' | 'danger' | 'success'", default: "'primary'", description: 'Estilo visual do botão' },
  { name: 'size', type: "'sm' | 'md' | 'lg'", default: "'md'", description: 'Tamanho do botão' },
  { name: 'disabled', type: 'boolean', default: 'false', description: 'Desabilita o botão' },
  { name: 'loading', type: 'boolean', default: 'false', description: 'Exibe estado de carregamento' },
  { name: 'block', type: 'boolean', default: 'false', description: 'Botão ocupa largura total' },
  { name: 'type', type: "'button' | 'submit' | 'reset'", default: "'button'", description: 'Tipo HTML do botão' },
]

const buttonEvents = [
  { name: 'click', type: '(event: MouseEvent) => void', default: '-', description: 'Emitido ao clicar no botão' },
]
</script>

<template>
  <div class="component-page">
    <header class="component-page__header">
      <BrBadge variant="primary">Atom</BrBadge>
      <h1 class="component-page__title">Button</h1>
      <p class="component-page__description">
        Botões permitem que os usuários executem ações com um único toque.
        Eles são uma das formas mais diretas de interação na interface.
      </p>
    </header>

    <!-- Usage -->
    <section class="component-page__section">
      <h2>Uso Básico</h2>
      <CodeExample
        title="Botão Simples"
        description="O botão mais simples com a variante padrão"
        code="<BrButton>Clique aqui</BrButton>"
      >
        <BrButton>Clique aqui</BrButton>
      </CodeExample>
    </section>

    <!-- Variants -->
    <section class="component-page__section">
      <h2>Variantes</h2>
      <p>Use a prop <code>variant</code> para alterar o estilo visual do botão.</p>

      <CodeExample
        title="Todas as Variantes"
        code='<BrButton variant="primary">Primary</BrButton>
<BrButton variant="secondary">Secondary</BrButton>
<BrButton variant="outline">Outline</BrButton>
<BrButton variant="ghost">Ghost</BrButton>
<BrButton variant="danger">Danger</BrButton>
<BrButton variant="success">Success</BrButton>'
      >
        <BrButton variant="primary">Primary</BrButton>
        <BrButton variant="secondary">Secondary</BrButton>
        <BrButton variant="outline">Outline</BrButton>
        <BrButton variant="ghost">Ghost</BrButton>
        <BrButton variant="danger">Danger</BrButton>
        <BrButton variant="success">Success</BrButton>
      </CodeExample>
    </section>

    <!-- Sizes -->
    <section class="component-page__section">
      <h2>Tamanhos</h2>
      <p>Use a prop <code>size</code> para alterar o tamanho do botão.</p>

      <CodeExample
        title="Todos os Tamanhos"
        code='<BrButton size="sm">Pequeno</BrButton>
<BrButton size="md">Médio</BrButton>
<BrButton size="lg">Grande</BrButton>'
      >
        <BrButton size="sm">Pequeno</BrButton>
        <BrButton size="md">Médio</BrButton>
        <BrButton size="lg">Grande</BrButton>
      </CodeExample>
    </section>

    <!-- States -->
    <section class="component-page__section">
      <h2>Estados</h2>

      <CodeExample
        title="Disabled"
        description="Botão desabilitado não pode ser clicado"
        code='<BrButton disabled>Desabilitado</BrButton>
<BrButton variant="outline" disabled>Outline Disabled</BrButton>'
      >
        <BrButton disabled>Desabilitado</BrButton>
        <BrButton variant="outline" disabled>Outline Disabled</BrButton>
      </CodeExample>

      <CodeExample
        title="Loading"
        description="Exibe um spinner durante operações assíncronas"
        code='<BrButton :loading="isLoading" @click="simulateLoading">
  {{ isLoading ? "Carregando..." : "Clique para carregar" }}
</BrButton>'
      >
        <BrButton :loading="isLoading" @click="simulateLoading">
          {{ isLoading ? 'Carregando...' : 'Clique para carregar' }}
        </BrButton>
      </CodeExample>
    </section>

    <!-- Block -->
    <section class="component-page__section">
      <h2>Largura Total</h2>
      <p>Use a prop <code>block</code> para o botão ocupar toda a largura disponível.</p>

      <CodeExample
        title="Block Button"
        code='<BrButton block>Botão Block</BrButton>
<BrButton variant="outline" block>Outline Block</BrButton>'
      >
        <div style="width: 100%; display: flex; flex-direction: column; gap: 12px;">
          <BrButton block>Botão Block</BrButton>
          <BrButton variant="outline" block>Outline Block</BrButton>
        </div>
      </CodeExample>
    </section>

    <!-- API -->
    <section class="component-page__section">
      <h2>API</h2>

      <h3>Props</h3>
      <PropsTable :props="buttonProps" />

      <h3>Eventos</h3>
      <PropsTable :props="buttonEvents" />
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
