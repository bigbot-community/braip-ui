<script setup lang="ts">
import CodeExample from '../../components/CodeExample.vue'
import PropsTable from '../../components/PropsTable.vue'

const activeTab = ref('tab1')

const items = [
  { id: 'tab1', label: 'Tab 1', content: 'Conteúdo da primeira aba.' },
  { id: 'tab2', label: 'Tab 2', content: 'Conteúdo da segunda aba.' },
  { id: 'tab3', label: 'Tab 3', content: 'Conteúdo da terceira aba.' },
]

const itemsWithBadge = [
  { id: 'inbox', label: 'Inbox', badge: 5 },
  { id: 'sent', label: 'Enviados' },
  { id: 'drafts', label: 'Rascunhos', badge: 2 },
]

const props = [
  { name: 'items', type: 'TabItem[]', default: '[]', description: 'Lista de abas' },
  { name: 'variant', type: "'default' | 'pills' | 'underline' | 'enclosed'", default: "'default'", description: 'Variante visual' },
  { name: 'size', type: "'sm' | 'md' | 'lg'", default: "'md'", description: 'Tamanho das abas' },
  { name: 'fullWidth', type: 'boolean', default: 'false', description: 'Abas ocupam largura total' },
  { name: 'centered', type: 'boolean', default: 'false', description: 'Centralizar abas' },
  { name: 'vertical', type: 'boolean', default: 'false', description: 'Abas verticais' },
  { name: 'grow', type: 'boolean', default: 'false', description: 'Expandir abas para preencher' },
  { name: 'closable', type: 'boolean', default: 'false', description: 'Mostrar botão de fechar' },
  { name: 'lazy', type: 'boolean', default: 'true', description: 'Carregar conteúdo sob demanda' },
]
</script>

<template>
  <div class="docs-page">
      <h1>Tabs</h1>
      <p class="docs-page__description">
        Componente de abas para organizar conteúdo em seções navegáveis.
      </p>

      <h2>Uso básico</h2>
      <CodeExample
        :code="`<BrTabs v-model='activeTab' :items='items' />`"
      >
        <BrTabs v-model="activeTab" :items="items" />
      </CodeExample>

      <h2>Variantes</h2>
      <CodeExample :code="`<BrTabs :items='items' variant='default' />\n<BrTabs :items='items' variant='pills' />\n<BrTabs :items='items' variant='underline' />\n<BrTabs :items='items' variant='enclosed' />`">
        <div style="display: flex; flex-direction: column; gap: 24px;">
          <div>
            <p style="margin-bottom: 8px; font-weight: 500;">Default</p>
            <BrTabs :items="items" variant="default" />
          </div>
          <div>
            <p style="margin-bottom: 8px; font-weight: 500;">Pills</p>
            <BrTabs :items="items" variant="pills" />
          </div>
          <div>
            <p style="margin-bottom: 8px; font-weight: 500;">Underline</p>
            <BrTabs :items="items" variant="underline" />
          </div>
          <div>
            <p style="margin-bottom: 8px; font-weight: 500;">Enclosed</p>
            <BrTabs :items="items" variant="enclosed" />
          </div>
        </div>
      </CodeExample>

      <h2>Com badges</h2>
      <CodeExample :code="`<BrTabs :items='itemsWithBadge' />`">
        <BrTabs :items="itemsWithBadge" />
      </CodeExample>

      <h2>Tamanhos</h2>
      <CodeExample :code="`<BrTabs :items='items' size='sm' />\n<BrTabs :items='items' size='md' />\n<BrTabs :items='items' size='lg' />`">
        <div style="display: flex; flex-direction: column; gap: 16px;">
          <BrTabs :items="items" size="sm" />
          <BrTabs :items="items" size="md" />
          <BrTabs :items="items" size="lg" />
        </div>
      </CodeExample>

      <h2>Largura total</h2>
      <CodeExample :code="`<BrTabs :items='items' fullWidth />`">
        <BrTabs :items="items" fullWidth />
      </CodeExample>

      <h2>Centralizadas</h2>
      <CodeExample :code="`<BrTabs :items='items' centered />`">
        <BrTabs :items="items" centered />
      </CodeExample>

      <h2>Abas verticais</h2>
      <CodeExample :code="`<BrTabs :items='items' vertical />`">
        <BrTabs :items="items" vertical />
      </CodeExample>

      <h2>Props</h2>
    <PropsTable :props="props" />
  </div>
</template>
