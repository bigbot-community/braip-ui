<script setup lang="ts">
import { ref } from 'vue'
import CodeExample from '../../components/CodeExample.vue'
import PropsTable from '../../components/PropsTable.vue'

const collapsed = ref(false)

const menuItems = [
  { id: 'dashboard', label: 'Dashboard', icon: '📊' },
  { id: 'users', label: 'Usuários', icon: '👥', badge: 5 },
  { id: 'products', label: 'Produtos', icon: '📦' },
  { id: 'orders', label: 'Pedidos', icon: '🛒', badge: 12, badgeVariant: 'danger' as const },
  { id: 'settings', label: 'Configurações', icon: '⚙️' },
]

const menuWithSections = [
  { id: 'section1', label: 'Principal', divider: true },
  { id: 'dashboard', label: 'Dashboard', icon: '📊' },
  { id: 'analytics', label: 'Analytics', icon: '📈' },
  { id: 'section2', label: 'Gestão', divider: true },
  { id: 'users', label: 'Usuários', icon: '👥' },
  { id: 'products', label: 'Produtos', icon: '📦' },
]

const menuWithNested = [
  { id: 'home', label: 'Home', icon: '🏠' },
  {
    id: 'settings',
    label: 'Configurações',
    icon: '⚙️',
    children: [
      { id: 'profile', label: 'Perfil' },
      { id: 'security', label: 'Segurança' },
      { id: 'notifications', label: 'Notificações' },
    ]
  },
]

const props = [
  { name: 'items', type: 'SidebarItem[]', default: '[]', description: 'Itens de navegação' },
  { name: 'variant', type: "'default' | 'compact' | 'mini'", default: "'default'", description: 'Variante visual' },
  { name: 'collapsed', type: 'boolean', default: 'false', description: 'Estado colapsado' },
  { name: 'showToggle', type: 'boolean', default: 'true', description: 'Mostrar botão de colapsar' },
  { name: 'elevated', type: 'boolean', default: 'true', description: 'Sombra elevada' },
  { name: 'fixed', type: 'boolean', default: 'false', description: 'Posição fixa' },
  { name: 'width', type: 'string | number', default: '-', description: 'Largura da sidebar' },
  { name: 'collapsedWidth', type: 'string | number', default: '-', description: 'Largura quando colapsada' },
  { name: 'showBrand', type: 'boolean', default: 'true', description: 'Mostrar área de logo' },
  { name: 'brand', type: 'string', default: '-', description: 'Texto da marca' },
  { name: 'logo', type: 'string', default: '-', description: 'URL do logo' },
]
</script>

<template>
  <div class="docs-page">
      <h1>Sidebar</h1>
      <p class="docs-page__description">
        Menu lateral de navegação com suporte a colapso e itens aninhados.
      </p>

      <h2>Uso básico</h2>
      <CodeExample
        :code="`<BrSidebar brand='Minha App' :items='menuItems' />`"
      >
        <div style="display: flex; border: 1px solid var(--br-dark-200); border-radius: 8px; overflow: hidden; height: 400px;">
          <BrSidebar brand="Minha App" :items="menuItems" :showToggle="false" />
          <div style="flex: 1; padding: 16px; background: var(--br-dark-50);">
            <p>Conteúdo principal</p>
          </div>
        </div>
      </CodeExample>

      <h2>Colapsável</h2>
      <CodeExample :code="`<BrSidebar v-model:collapsed='collapsed' brand='App' :items='menuItems' />`">
        <div style="display: flex; border: 1px solid var(--br-dark-200); border-radius: 8px; overflow: hidden; height: 400px;">
          <BrSidebar v-model:collapsed="collapsed" brand="Minha App" :items="menuItems" />
          <div style="flex: 1; padding: 16px; background: var(--br-dark-50);">
            <p>Sidebar colapsada: {{ collapsed ? 'Sim' : 'Não' }}</p>
          </div>
        </div>
      </CodeExample>

      <h2>Com seções</h2>
      <CodeExample :code="`<BrSidebar :items='menuWithSections' />`">
        <div style="display: flex; border: 1px solid var(--br-dark-200); border-radius: 8px; overflow: hidden; height: 400px;">
          <BrSidebar brand="App" :items="menuWithSections" :showToggle="false" />
          <div style="flex: 1; padding: 16px; background: var(--br-dark-50);">
            <p>Sidebar com seções divididas</p>
          </div>
        </div>
      </CodeExample>

      <h2>Com itens aninhados</h2>
      <CodeExample :code="`<BrSidebar :items='menuWithNested' />`">
        <div style="display: flex; border: 1px solid var(--br-dark-200); border-radius: 8px; overflow: hidden; height: 350px;">
          <BrSidebar brand="App" :items="menuWithNested" :showToggle="false" />
          <div style="flex: 1; padding: 16px; background: var(--br-dark-50);">
            <p>Clique em Configurações para expandir</p>
          </div>
        </div>
      </CodeExample>

      <h2>Variantes</h2>
      <CodeExample :code="`<BrSidebar variant='default' />\n<BrSidebar variant='compact' />\n<BrSidebar variant='mini' />`">
        <div style="display: flex; gap: 16px; flex-wrap: wrap;">
          <div style="border: 1px solid var(--br-dark-200); border-radius: 8px; overflow: hidden; height: 300px;">
            <BrSidebar variant="default" brand="Default" :items="menuItems.slice(0, 3)" :showToggle="false" />
          </div>
          <div style="border: 1px solid var(--br-dark-200); border-radius: 8px; overflow: hidden; height: 300px;">
            <BrSidebar variant="compact" brand="Compact" :items="menuItems.slice(0, 3)" :showToggle="false" />
          </div>
          <div style="border: 1px solid var(--br-dark-200); border-radius: 8px; overflow: hidden; height: 300px;">
            <BrSidebar variant="mini" :items="menuItems.slice(0, 3)" :showToggle="false" />
          </div>
        </div>
      </CodeExample>

      <h2>Props</h2>
    <PropsTable :props="props" />
  </div>
</template>
