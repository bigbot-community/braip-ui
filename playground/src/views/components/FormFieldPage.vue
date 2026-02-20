<script setup lang="ts">
import { ref } from 'vue'
import CodeExample from '../../components/CodeExample.vue'
import PropsTable from '../../components/PropsTable.vue'

const inputValue = ref('')
const charCount = ref(0)

const props = [
  { name: 'label', type: 'string', default: '-', description: 'Label do campo' },
  { name: 'labelPosition', type: "'top' | 'left' | 'floating'", default: "'top'", description: 'Posição do label' },
  { name: 'required', type: 'boolean', default: 'false', description: 'Indicador de campo obrigatório' },
  { name: 'helperText', type: 'string', default: '-', description: 'Texto de ajuda' },
  { name: 'errorMessage', type: 'string', default: '-', description: 'Mensagem de erro' },
  { name: 'successMessage', type: 'string', default: '-', description: 'Mensagem de sucesso' },
  { name: 'error', type: 'boolean', default: 'false', description: 'Estado de erro' },
  { name: 'success', type: 'boolean', default: 'false', description: 'Estado de sucesso' },
  { name: 'charCount', type: '{ current: number, max: number }', default: '-', description: 'Contador de caracteres' },
  { name: 'hint', type: 'string', default: '-', description: 'Dica (mostrada no foco)' },
  { name: 'disabled', type: 'boolean', default: 'false', description: 'Estado desabilitado' },
]
</script>

<template>
  <div class="docs-page">
      <h1>FormField</h1>
      <p class="docs-page__description">
        Wrapper para campos de formulário com label, validação e mensagens de ajuda.
      </p>

      <h2>Uso básico</h2>
      <CodeExample
        :code="`<BrFormField label='Nome completo'>\n  <BrInput v-model='value' placeholder='Digite seu nome' />\n</BrFormField>`"
      >
        <BrFormField label="Nome completo" style="max-width: 400px;">
          <BrInput v-model="inputValue" placeholder="Digite seu nome" />
        </BrFormField>
      </CodeExample>

      <h2>Campo obrigatório</h2>
      <CodeExample
        :code="`<BrFormField label='Email' required helperText='Usaremos para contato'>\n  <BrInput type='email' placeholder='seu@email.com' />\n</BrFormField>`"
      >
        <BrFormField label="Email" required helperText="Usaremos para contato" style="max-width: 400px;">
          <BrInput type="email" placeholder="seu@email.com" />
        </BrFormField>
      </CodeExample>

      <h2>Estados de validação</h2>
      <CodeExample :code="`<BrFormField label='Campo com erro' error errorMessage='Este campo é obrigatório' />\n<BrFormField label='Campo com sucesso' success successMessage='Email válido!' />`">
        <div style="display: flex; flex-direction: column; gap: 16px; max-width: 400px;">
          <BrFormField label="Campo com erro" error errorMessage="Este campo é obrigatório">
            <BrInput placeholder="Campo inválido" error />
          </BrFormField>
          <BrFormField label="Campo com sucesso" success successMessage="Email válido!">
            <BrInput placeholder="Campo válido" modelValue="usuario@email.com" />
          </BrFormField>
        </div>
      </CodeExample>

      <h2>Contador de caracteres</h2>
      <CodeExample
        :code="`<BrFormField\n  label='Descrição'\n  :charCount='{ current: charCount, max: 100 }'\n>\n  <BrTextarea v-model='value' @input='charCount = value.length' />\n</BrFormField>`"
      >
        <BrFormField
          label="Descrição"
          :charCount="{ current: charCount, max: 100 }"
          style="max-width: 400px;"
        >
          <BrInput
            v-model="inputValue"
            placeholder="Digite uma descrição..."
            @input="charCount = inputValue.length"
          />
        </BrFormField>
      </CodeExample>

      <h2>Posição do label</h2>
      <CodeExample :code="`<BrFormField label='Label em cima' labelPosition='top' />\n<BrFormField label='Label à esquerda' labelPosition='left' />`">
        <div style="display: flex; flex-direction: column; gap: 16px; max-width: 500px;">
          <BrFormField label="Label em cima" labelPosition="top">
            <BrInput placeholder="labelPosition='top'" />
          </BrFormField>
          <BrFormField label="Label à esquerda" labelPosition="left">
            <BrInput placeholder="labelPosition='left'" />
          </BrFormField>
        </div>
      </CodeExample>

      <h2>Props</h2>
    <PropsTable :props="props" />
  </div>
</template>
