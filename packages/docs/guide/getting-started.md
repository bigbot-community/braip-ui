# Começando

Braip UI é uma biblioteca de componentes Vue 3 construída com TypeScript e Composition API.

## Pré-requisitos

- Node.js 18+
- Vue 3.4+

## Instalação

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

## Configuração

### Plugin Global (Recomendado)

Registre todos os componentes globalmente:

```ts
// main.ts
import { BraipUI } from '@braiphub/ui'
import '@braiphub/ui/styles'
import App from './App.vue'

const app = createApp(App)

app.use(BraipUI, {
  // Opções (todas opcionais)
  prefix: 'Br',      // Prefixo dos componentes
  theme: 'light',    // 'light' | 'dark'
  locale: 'pt-BR',   // 'pt-BR' | 'en-US' | 'es-ES'
})

app.mount('#app')
```

### Importação Individual (Tree-Shaking)

Importe apenas os componentes necessários:

```vue
<script setup lang="ts">
import { BrButton } from '@braiphub/ui'
</script>

<template>
  <BrButton>Clique aqui</BrButton>
</template>

<style>
@import '@braiphub/ui/styles';
</style>
```

## Uso com Nuxt 3

Crie um plugin em `plugins/braip-ui.ts`:

```ts
// plugins/braip-ui.ts
import { BraipUI } from '@braiphub/ui'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(BraipUI)
})
```

Adicione os estilos em `nuxt.config.ts`:

```ts
// nuxt.config.ts
export default defineNuxtConfig({
  css: ['@braiphub/ui/styles'],
})
```

## TypeScript

A biblioteca inclui declarações de tipos. Para melhor IntelliSense, adicione ao `tsconfig.json`:

```json
{
  "compilerOptions": {
    "types": ["@braiphub/ui"]
  }
}
```

## Próximos Passos

- [Instalação detalhada](/guide/installation)
- [Customização de temas](/guide/theming)
- [Componentes disponíveis](/components/atoms/button)
