<script setup lang="ts">
import { ref } from 'vue'
import CodeExample from '../../components/CodeExample.vue'
import PropsTable from '../../components/PropsTable.vue'

const openItems = ref<(string | number)[]>(['1'])

const items = [
  { id: '1', title: 'Seção 1', content: 'Conteúdo da primeira seção do accordion.' },
  { id: '2', title: 'Seção 2', content: 'Conteúdo da segunda seção do accordion.' },
  { id: '3', title: 'Seção 3', content: 'Conteúdo da terceira seção do accordion.' },
]

const props = [
  { name: 'items', type: 'AccordionItem[]', default: '[]', description: 'Lista de itens do accordion' },
  { name: 'multiple', type: 'boolean', default: 'false', description: 'Permitir múltiplos itens abertos' },
  { name: 'variant', type: "'default' | 'bordered' | 'separated'", default: "'default'", description: 'Variante visual' },
  { name: 'iconPosition', type: "'left' | 'right'", default: "'right'", description: 'Posição do ícone de expansão' },
  { name: 'disabled', type: 'boolean', default: 'false', description: 'Desabilitar todos os itens' },
]
</script>

<template>
  <div class="docs-page">
      <h1>Accordion</h1>
      <p class="docs-page__description">
        Componente de accordion para exibir conteúdo colapsável em seções.
      </p>

      <h2>Uso básico</h2>
      <CodeExample
        :code="`<BrAccordion v-model='openItems' :items='items' />`"
      >
        <BrAccordion v-model="openItems" :items="items" />
      </CodeExample>

      <h2>Múltiplos abertos</h2>
      <CodeExample
        :code="`<BrAccordion :items='items' multiple />`"
      >
        <BrAccordion :items="items" multiple />
      </CodeExample>

      <h2>Variantes</h2>
      <CodeExample :code="`<BrAccordion :items='items' variant='default' />\n<BrAccordion :items='items' variant='bordered' />\n<BrAccordion :items='items' variant='separated' />`">
        <div style="display: flex; flex-direction: column; gap: 24px;">
          <div>
            <p style="margin-bottom: 8px; font-weight: 500;">Default</p>
            <BrAccordion :items="items" variant="default" />
          </div>
          <div>
            <p style="margin-bottom: 8px; font-weight: 500;">Bordered</p>
            <BrAccordion :items="items" variant="bordered" />
          </div>
          <div>
            <p style="margin-bottom: 8px; font-weight: 500;">Separated</p>
            <BrAccordion :items="items" variant="separated" />
          </div>
        </div>
      </CodeExample>

      <h2>Posição do ícone</h2>
      <CodeExample :code="`<BrAccordion :items='items' iconPosition='left' />`">
        <BrAccordion :items="items" iconPosition="left" />
      </CodeExample>

      <h2>Props</h2>
    <PropsTable :props="props" />
  </div>
</template>
