<script setup lang="ts">
import { ref } from 'vue'
import CodeExample from '../../components/CodeExample.vue'
import PropsTable from '../../components/PropsTable.vue'

const selectedValue = ref<string | number | null>(null)
const options = [
  { id: 1, text: 'Opção 1' },
  { id: 2, text: 'Opção 2' },
  { id: 3, text: 'Opção 3' },
  { id: 4, text: 'Opção 4 (desabilitada)', disabled: true },
  { id: 5, text: 'Opção 5' },
]

const selectProps = [
  { name: 'modelValue', type: 'string | number | null', default: 'null', description: 'Valor selecionado (v-model)' },
  { name: 'options', type: 'SelectOption[]', default: '[]', description: 'Array de opções disponíveis', required: true },
  { name: 'placeholder', type: 'string', default: "'Selecione...'", description: 'Texto placeholder' },
  { name: 'size', type: "'sm' | 'md' | 'lg'", default: "'md'", description: 'Tamanho do select' },
  { name: 'disabled', type: 'boolean', default: 'false', description: 'Desabilita o select' },
  { name: 'error', type: 'boolean', default: 'false', description: 'Estado de erro' },
  { name: 'searchable', type: 'boolean', default: 'false', description: 'Habilita busca/filtro' },
  { name: 'clearable', type: 'boolean', default: 'false', description: 'Permite limpar seleção' },
]
</script>

<template>
  <div class="component-page">
    <header class="component-page__header">
      <BrBadge variant="primary">Atom</BrBadge>
      <h1 class="component-page__title">Select</h1>
      <p class="component-page__description">
        O componente Select permite que usuários escolham uma opção de uma lista dropdown.
      </p>
    </header>

    <!-- Usage -->
    <section class="component-page__section">
      <h2>Uso Básico</h2>
      <CodeExample
        title="Select Simples"
        code='const options = [
  { id: 1, text: "Opção 1" },
  { id: 2, text: "Opção 2" },
  { id: 3, text: "Opção 3" },
]

<BrSelect v-model="selected" :options="options" />'
      >
        <div style="width: 300px;">
          <BrSelect v-model="selectedValue" :options="options" placeholder="Selecione uma opção" />
          <p style="margin-top: 8px; font-size: 14px; color: var(--neutralDarkGrey7);">
            Selecionado: {{ selectedValue ?? 'Nenhum' }}
          </p>
        </div>
      </CodeExample>
    </section>

    <!-- Features -->
    <section class="component-page__section">
      <h2>Funcionalidades</h2>

      <CodeExample
        title="Com Busca"
        description="Habilite a busca para filtrar opções"
        code='<BrSelect :options="options" searchable placeholder="Digite para buscar..." />'
      >
        <div style="width: 300px;">
          <BrSelect :options="options" searchable placeholder="Digite para buscar..." />
        </div>
      </CodeExample>

      <CodeExample
        title="Com Limpar"
        description="Permite limpar a seleção"
        code='<BrSelect v-model="selected" :options="options" clearable />'
      >
        <div style="width: 300px;">
          <BrSelect v-model="selectedValue" :options="options" clearable />
        </div>
      </CodeExample>

      <CodeExample
        title="Busca e Limpar"
        description="Combinando funcionalidades"
        code='<BrSelect :options="options" searchable clearable />'
      >
        <div style="width: 300px;">
          <BrSelect :options="options" searchable clearable placeholder="Buscar e limpar..." />
        </div>
      </CodeExample>
    </section>

    <!-- Sizes -->
    <section class="component-page__section">
      <h2>Tamanhos</h2>
      <CodeExample
        title="Todos os Tamanhos"
        code='<BrSelect :options="options" size="sm" placeholder="Pequeno" />
<BrSelect :options="options" size="md" placeholder="Médio" />
<BrSelect :options="options" size="lg" placeholder="Grande" />'
      >
        <div style="display: flex; flex-direction: column; gap: 12px; width: 300px;">
          <BrSelect :options="options" size="sm" placeholder="Pequeno" />
          <BrSelect :options="options" size="md" placeholder="Médio" />
          <BrSelect :options="options" size="lg" placeholder="Grande" />
        </div>
      </CodeExample>
    </section>

    <!-- States -->
    <section class="component-page__section">
      <h2>Estados</h2>
      <CodeExample
        title="Estados do Select"
        code='<BrSelect :options="options" placeholder="Normal" />
<BrSelect :options="options" placeholder="Com erro" error />
<BrSelect :options="options" placeholder="Desabilitado" disabled />'
      >
        <div style="display: flex; flex-direction: column; gap: 12px; width: 300px;">
          <BrSelect :options="options" placeholder="Normal" />
          <BrSelect :options="options" placeholder="Com erro" error />
          <BrSelect :options="options" placeholder="Desabilitado" disabled />
        </div>
      </CodeExample>
    </section>

    <!-- API -->
    <section class="component-page__section">
      <h2>API</h2>
      <h3>Props</h3>
      <PropsTable :props="selectProps" />
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
