<script setup lang="ts">
import CodeExample from '../../components/CodeExample.vue'
import PropsTable from '../../components/PropsTable.vue'

const currentStep = ref(1)

const steps = [
  { title: 'Dados pessoais', description: 'Informações básicas' },
  { title: 'Endereço', description: 'Localização' },
  { title: 'Pagamento', description: 'Forma de pagamento' },
  { title: 'Confirmação', description: 'Revisar pedido' },
]

const stepsWithError = [
  { title: 'Dados pessoais' },
  { title: 'Endereço', error: true, errorMessage: 'CEP inválido' },
  { title: 'Pagamento' },
]

const props = [
  { name: 'steps', type: 'StepperStep[]', required: true, description: 'Lista de passos' },
  { name: 'orientation', type: "'horizontal' | 'vertical'", default: "'horizontal'", description: 'Orientação do stepper' },
  { name: 'variant', type: "'default' | 'outlined' | 'simple'", default: "'default'", description: 'Variante visual' },
  { name: 'clickable', type: 'boolean', default: 'false', description: 'Permitir navegação por clique' },
  { name: 'showNumbers', type: 'boolean', default: 'true', description: 'Mostrar números dos passos' },
  { name: 'linear', type: 'boolean', default: 'true', description: 'Progressão linear obrigatória' },
  { name: 'alternativeLabel', type: 'boolean', default: 'false', description: 'Label abaixo do ícone' },
]
</script>

<template>
  <div class="docs-page">
      <h1>Stepper</h1>
      <p class="docs-page__description">
        Componente de stepper para guiar usuários através de processos em etapas.
      </p>

      <h2>Uso básico</h2>
      <CodeExample
        :code="`<BrStepper v-model='currentStep' :steps='steps' />`"
      >
        <BrStepper v-model="currentStep" :steps="steps" />
        <div style="margin-top: 16px; display: flex; gap: 8px;">
          <BrButton size="sm" variant="outlined" :disabled="currentStep === 0" @click="currentStep--">
            Anterior
          </BrButton>
          <BrButton size="sm" :disabled="currentStep === steps.length - 1" @click="currentStep++">
            Próximo
          </BrButton>
        </div>
        <p style="margin-top: 12px; color: var(--br-dark-500);">Passo atual: {{ currentStep + 1 }}</p>
      </CodeExample>

      <h2>Vertical</h2>
      <CodeExample :code="`<BrStepper :steps='steps' orientation='vertical' />`">
        <BrStepper :steps="steps" orientation="vertical" :modelValue="1" />
      </CodeExample>

      <h2>Navegação clicável</h2>
      <CodeExample :code="`<BrStepper :steps='steps' clickable :linear='false' />`">
        <BrStepper :steps="steps" clickable :linear="false" :modelValue="0" />
      </CodeExample>

      <h2>Com erros</h2>
      <CodeExample :code="`<BrStepper :steps='stepsWithError' :modelValue='1' />`">
        <BrStepper :steps="stepsWithError" :modelValue="1" />
      </CodeExample>

      <h2>Variantes</h2>
      <CodeExample :code="`<BrStepper :steps='steps' variant='default' />\n<BrStepper :steps='steps' variant='outlined' />\n<BrStepper :steps='steps' variant='simple' />`">
        <div style="display: flex; flex-direction: column; gap: 32px;">
          <div>
            <p style="margin-bottom: 8px; font-weight: 500;">Default</p>
            <BrStepper :steps="steps" variant="default" :modelValue="1" />
          </div>
          <div>
            <p style="margin-bottom: 8px; font-weight: 500;">Outlined</p>
            <BrStepper :steps="steps" variant="outlined" :modelValue="1" />
          </div>
          <div>
            <p style="margin-bottom: 8px; font-weight: 500;">Simple</p>
            <BrStepper :steps="steps" variant="simple" :modelValue="1" />
          </div>
        </div>
      </CodeExample>

      <h2>Label alternativo</h2>
      <CodeExample :code="`<BrStepper :steps='steps' alternativeLabel />`">
        <BrStepper :steps="steps" alternativeLabel :modelValue="1" />
      </CodeExample>

      <h2>Props</h2>
    <PropsTable :props="props" />
  </div>
</template>
