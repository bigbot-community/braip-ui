---
layout: home

hero:
  name: Braip UI
  text: Componentes Vue 3
  tagline: Biblioteca de componentes moderna, acessível e customizável para aplicações Vue 3
  image:
    src: /logo.svg
    alt: Braip UI
  actions:
    - theme: brand
      text: Começar
      link: /guide/getting-started
    - theme: alt
      text: Componentes
      link: /components/atoms/button
    - theme: alt
      text: GitHub
      link: https://github.com/braip/braip-ui

features:
  - icon: 🚀
    title: Vue 3 + TypeScript
    details: Construído com Composition API e tipagem completa para uma excelente experiência de desenvolvimento.
  - icon: 🎨
    title: Design System Braip
    details: Tokens de design consistentes extraídos do sistema visual Braip.
  - icon: 📦
    title: Tree-Shaking
    details: Importe apenas o que você precisa. Bundle otimizado para produção.
  - icon: ♿
    title: Acessibilidade
    details: Componentes construídos seguindo as melhores práticas de acessibilidade (WCAG).
  - icon: 🌗
    title: Temas
    details: Suporte a tema claro e escuro com CSS Custom Properties.
  - icon: 📚
    title: Documentado
    details: Documentação completa com exemplos interativos e API detalhada.
---

## Instalação Rápida

```bash
# npm
npm install @braiphub/ui

# pnpm
pnpm add @braiphub/ui

# yarn
yarn add @braiphub/ui
```

## Uso Básico

```ts
// main.ts
import { BraipUI } from '@braiphub/ui'
import '@braiphub/ui/styles'
import App from './App.vue'

const app = createApp(App)
app.use(BraipUI)
app.mount('#app')
```

```vue
<template>
  <BrButton variant="primary">Clique aqui</BrButton>
</template>
```
