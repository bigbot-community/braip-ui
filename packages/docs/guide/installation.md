# Instalação

## Gerenciadores de Pacotes

::: code-group

```bash [pnpm]
pnpm add @braiphub/ui
```

```bash [npm]
npm install @braiphub/ui
```

```bash [yarn]
yarn add @braiphub/ui
```

:::

## Dependências

O Braip UI requer Vue 3.4 ou superior como peer dependency:

```json
{
  "peerDependencies": {
    "vue": "^3.4.0"
  }
}
```

## Importando Estilos

### Estilos Completos

Importe todos os estilos da biblioteca:

```ts
import '@braiphub/ui/styles'
```

### Apenas Tokens

Se você quiser usar apenas os design tokens (cores, tipografia, espaçamento):

```scss
// Em seu arquivo SCSS
@use '@braiphub/ui/src/styles/tokens';
```

### CSS Variables

Os tokens são expostos como CSS custom properties:

```css
.my-element {
  color: var(--br-primary-600);
  font-size: var(--br-text-base);
  padding: var(--br-space-4);
}
```

## Configuração do Vite

Se você estiver usando Vite, adicione a configuração para processar SCSS:

```ts
// vite.config.ts
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      scss: {
        // Opcional: importar tokens globalmente
        additionalData: `@use "@braiphub/ui/src/styles/tokens" as *;`,
      },
    },
  },
})
```

## Verificando a Instalação

Após a instalação, teste se tudo está funcionando:

```vue
<script setup lang="ts">
import { BrButton } from '@braiphub/ui'
</script>

<template>
  <BrButton @click="console.log('Funcionando!')">
    Testar Instalação
  </BrButton>
</template>
```

Se o botão aparecer com os estilos corretos, a instalação foi bem-sucedida!
