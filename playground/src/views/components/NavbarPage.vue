<script setup lang="ts">

const menuItems = [
  { id: 'home', label: 'Home', href: '#' },
  { id: 'products', label: 'Produtos', href: '#' },
  { id: 'about', label: 'Sobre', href: '#' },
  { id: 'contact', label: 'Contato', href: '#' },
]

const menuWithDropdown = [
  { id: 'home', label: 'Home', href: '#' },
  {
    id: 'products',
    label: 'Produtos',
    children: [
      { id: 'prod1', label: 'Produto 1', href: '#' },
      { id: 'prod2', label: 'Produto 2', href: '#' },
      { id: 'prod3', label: 'Produto 3', href: '#' },
    ]
  },
  { id: 'about', label: 'Sobre', href: '#' },
]

const props = [
  { name: 'items', type: 'NavbarItem[]', default: '[]', description: 'Itens de navegação' },
  { name: 'brand', type: 'string', default: '-', description: 'Texto da marca/logo' },
  { name: 'logo', type: 'string', default: '-', description: 'URL do logo' },
  { name: 'variant', type: "'default' | 'transparent' | 'colored'", default: "'default'", description: 'Variante visual' },
  { name: 'position', type: "'static' | 'fixed' | 'sticky'", default: "'static'", description: 'Posição da navbar' },
  { name: 'showMobileToggle', type: 'boolean', default: 'true', description: 'Mostrar toggle mobile' },
  { name: 'elevated', type: 'boolean', default: 'true', description: 'Sombra elevada' },
  { name: 'dense', type: 'boolean', default: 'false', description: 'Modo compacto' },
  { name: 'color', type: 'string', default: '-', description: 'Cor primária (variante colored)' },
]
</script>

<template>
  <div class="docs-page">
      <h1>Navbar</h1>
      <p class="docs-page__description">
        Barra de navegação responsiva com suporte a dropdown e menu mobile.
      </p>

      <h2>Uso básico</h2>
      <CodeExample
        :code="`<BrNavbar brand='Minha App' :items='menuItems' />`"
      >
        <div style="position: relative; border: 1px solid var(--neutralDarkGrey2); border-radius: 8px; overflow: hidden;">
          <BrNavbar brand="Minha App" :items="menuItems" />
        </div>
      </CodeExample>

      <h2>Com dropdown</h2>
      <CodeExample
        :code="`<BrNavbar brand='Minha App' :items='menuWithDropdown' />`"
      >
        <div style="position: relative; border: 1px solid var(--neutralDarkGrey2); border-radius: 8px; overflow: hidden;">
          <BrNavbar brand="Minha App" :items="menuWithDropdown" />
        </div>
      </CodeExample>

      <h2>Variantes</h2>
      <CodeExample :code="`<BrNavbar variant='default' brand='Default' />\n<BrNavbar variant='transparent' brand='Transparent' />\n<BrNavbar variant='colored' brand='Colored' color='#1976d2' />`">
        <div style="display: flex; flex-direction: column; gap: 16px;">
          <div style="border: 1px solid var(--neutralDarkGrey2); border-radius: 8px; overflow: hidden;">
            <BrNavbar variant="default" brand="Default" :items="menuItems" />
          </div>
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 8px; padding: 8px;">
            <BrNavbar variant="transparent" brand="Transparent" :items="menuItems" />
          </div>
          <div style="border-radius: 8px; overflow: hidden;">
            <BrNavbar variant="colored" brand="Colored" :items="menuItems" color="#1976d2" />
          </div>
        </div>
      </CodeExample>

      <h2>Modo compacto</h2>
      <CodeExample :code="`<BrNavbar brand='Compacto' :items='menuItems' dense />`">
        <div style="border: 1px solid var(--neutralDarkGrey2); border-radius: 8px; overflow: hidden;">
          <BrNavbar brand="Compacto" :items="menuItems" dense />
        </div>
      </CodeExample>

      <h2>Sem sombra</h2>
      <CodeExample :code="`<BrNavbar brand='Sem Sombra' :items='menuItems' :elevated='false' />`">
        <div style="border: 1px solid var(--neutralDarkGrey2); border-radius: 8px; overflow: hidden;">
          <BrNavbar brand="Sem Sombra" :items="menuItems" :elevated="false" />
        </div>
      </CodeExample>

      <h2>Props</h2>
    <PropsTable :props="props" />
  </div>
</template>
