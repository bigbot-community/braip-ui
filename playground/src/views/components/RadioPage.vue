<script setup lang="ts">
import { ref } from 'vue'

const selected = ref('option1')
const selectedGroup = ref('vue')

const options = [
  { value: 'vue', label: 'Vue.js' },
  { value: 'react', label: 'React' },
  { value: 'angular', label: 'Angular' },
]

const props = [
  { name: 'value', type: 'string | number | boolean', required: true, description: 'Valor do radio' },
  { name: 'label', type: 'string', default: '-', description: 'Label do radio' },
  { name: 'name', type: 'string', default: '-', description: 'Nome do grupo' },
  { name: 'size', type: "'sm' | 'md' | 'lg'", default: "'md'", description: 'Tamanho' },
  { name: 'disabled', type: 'boolean', default: 'false', description: 'Desabilitar' },
  { name: 'error', type: 'boolean', default: 'false', description: 'Estado de erro' },
]
</script>

<template>
  <div class="docs-page">
      <h1>Radio</h1>
      <p class="docs-page__description">
        Componentes de seleção única para formulários.
      </p>

      <h2>Uso básico</h2>
      <CodeExample
        :code="`<BrRadio v-model='selected' value='option1' label='Opção 1' name='demo' />
<BrRadio v-model='selected' value='option2' label='Opção 2' name='demo' />
<BrRadio v-model='selected' value='option3' label='Opção 3' name='demo' />`"
      >
        <div style="display: flex; flex-direction: column; gap: 8px;">
          <BrRadio v-model="selected" value="option1" label="Opção 1" name="demo" />
          <BrRadio v-model="selected" value="option2" label="Opção 2" name="demo" />
          <BrRadio v-model="selected" value="option3" label="Opção 3" name="demo" />
        </div>
        <p style="margin-top: 12px; color: var(--neutralDarkGrey5);">Selecionado: {{ selected }}</p>
      </CodeExample>

      <h2>Radio Group</h2>
      <CodeExample
        :code="`<BrRadioGroup
  v-model='selectedGroup'
  name='framework'
  label='Framework favorito'
  :options='options'
/>`"
      >
        <BrRadioGroup
          v-model="selectedGroup"
          name="framework"
          label="Framework favorito"
          :options="options"
        />
        <p style="margin-top: 12px; color: var(--neutralDarkGrey5);">Selecionado: {{ selectedGroup }}</p>
      </CodeExample>

      <h2>Tamanhos</h2>
      <CodeExample :code="`<BrRadio size='sm' label='Small' />\n<BrRadio size='md' label='Medium' />\n<BrRadio size='lg' label='Large' />`">
        <div style="display: flex; gap: 24px; align-items: center;">
          <BrRadio size="sm" value="sm" label="Small" name="sizes" />
          <BrRadio size="md" value="md" label="Medium" name="sizes" />
          <BrRadio size="lg" value="lg" label="Large" name="sizes" />
        </div>
      </CodeExample>

      <h2>Props</h2>
    <PropsTable :props="props" />
  </div>
</template>
