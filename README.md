# BigBotUI

Biblioteca de componentes Vue 3.

## Requisitos

- Node.js 18+
- pnpm 9+

## Setup

```bash
# Instalar dependências
pnpm install

# Desenvolvimento da biblioteca
pnpm dev

# Playground de desenvolvimento
pnpm playground

# Documentação
pnpm docs:dev

# Build da biblioteca
pnpm build

# Build da documentação
pnpm build:docs
```

## Uso da Biblioteca

### Instalação

```bash
pnpm add @braiphub/ui
```

### Configuração

```ts
// main.ts
import { createApp } from 'vue'
import { BraipUI } from '@braiphub/ui'
import '@braiphub/ui/styles'
import App from './App.vue'

const app = createApp(App)
app.use(BraipUI)
app.mount('#app')
```

### Exemplo

```vue
<template>
  <BrButton variant="primary" @click="handleClick">
    Clique aqui
  </BrButton>
</template>
```


## Design Tokens

A biblioteca inclui tokens de design extraídos do Braip:

- **Cores**: Primary, Secondary, Danger, Warning, Success, Info
- **Tipografia**: Poppins, Sora
- **Espaçamento**: Escala de 4px
- **Border Radius**: sm, md, lg, xl, full
- **Sombras**: sm, md, lg, xl, 2xl

## Scripts

| Comando | Descrição |
|---------|-----------|
| `pnpm dev` | Modo watch da biblioteca |
| `pnpm build` | Build da biblioteca |
| `pnpm playground` | Ambiente de desenvolvimento |
| `pnpm docs:dev` | Documentação em desenvolvimento |
| `pnpm build:docs` | Build da documentação |
| `pnpm test` | Executar testes |
| `pnpm lint` | Verificar código |

## Licença

MIT
