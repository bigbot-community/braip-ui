<script setup lang="ts">
import { ref } from 'vue'

const checked = ref(false)
const selectedItems = ref<string[]>(['vue'])

const options = [
  { value: 'vue', label: 'Vue.js' },
  { value: 'react', label: 'React' },
  { value: 'angular', label: 'Angular' },
]

const props = [
  { name: 'label', type: 'string', default: '-', description: 'Label do checkbox' },
  { name: 'size', type: "'sm' | 'md' | 'lg'", default: "'md'", description: 'Tamanho' },
  { name: 'disabled', type: 'boolean', default: 'false', description: 'Desabilitar' },
  { name: 'indeterminate', type: 'boolean', default: 'false', description: 'Estado indeterminado' },
  { name: 'error', type: 'boolean', default: 'false', description: 'Estado de erro' },
  { name: 'helperText', type: 'string', default: '-', description: 'Texto de ajuda' },
]
</script>

<template>
  <div class="docs-page">
      <h1>Checkbox</h1>
      <p class="docs-page__description">
        Componente de seleção múltipla para formulários.
      </p>

      <h2>Uso básico</h2>
      <CodeExample
        :code="`<BrCheckbox v-model='checked' label='Aceito os termos' />`"
      >
        <BrCheckbox v-model="checked" label="Aceito os termos" />
        <p style="margin-top: 12px; color: var(--neutralDarkGrey5);">Marcado: {{ checked }}</p>
      </CodeExample>

      <h2>Checkbox Group</h2>
      <CodeExample
        :code="`<BrCheckboxGroup
  v-model='selectedItems'
  label='Frameworks conhecidos'
  :options='options'
/>`"
      >
        <BrCheckboxGroup
          v-model="selectedItems"
          label="Frameworks conhecidos"
          :options="options"
        />
        <p style="margin-top: 12px; color: var(--neutralDarkGrey5);">Selecionados: {{ selectedItems.join(', ') || 'nenhum' }}</p>
      </CodeExample>

      <h2>Estados</h2>
      <CodeExample :code="`<BrCheckbox label='Normal' />\n<BrCheckbox label='Marcado' :modelValue='true' />\n<BrCheckbox label='Indeterminado' indeterminate />\n<BrCheckbox label='Desabilitado' disabled />\n<BrCheckbox label='Erro' error />`">
        <div style="display: flex; flex-direction: column; gap: 12px;">
          <BrCheckbox label="Normal" />
          <BrCheckbox label="Marcado" :modelValue="true" />
          <BrCheckbox label="Indeterminado" indeterminate />
          <BrCheckbox label="Desabilitado" disabled />
          <BrCheckbox label="Erro" error />
        </div>
      </CodeExample>

      <h2>Tamanhos</h2>
      <CodeExample :code="`<BrCheckbox size='sm' label='Small' />\n<BrCheckbox size='md' label='Medium' />\n<BrCheckbox size='lg' label='Large' />`">
        <div style="display: flex; gap: 24px; align-items: center;">
          <BrCheckbox size="sm" label="Small" />
          <BrCheckbox size="md" label="Medium" />
          <BrCheckbox size="lg" label="Large" />
        </div>
      </CodeExample>

      <h2>Props</h2>
    <PropsTable :props="props" />
  </div>
</template>
