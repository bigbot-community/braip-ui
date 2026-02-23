# Padrao de criacao de componentes

Este documento descreve o padrao de criacao de componentes neste pacote, com base na estrutura atual das pastas.

## Estrutura geral

- `components/`
  - `atoms/`
  - `molecules/`
  - `organisms/`
  - `index.ts` (reexporta atoms, molecules, organisms)

Cada categoria possui um `index.ts` que reexporta os componentes daquela pasta. Ex.: `components/atoms/index.ts`.

## Estrutura de um componente

Cada componente vive em uma pasta propria e segue este padrao:

- `BrNome/`
  - `BrNome.vue` (implementacao do componente)
  - `types.ts` (tipos e props)
  - `index.ts` (export default + reexport de tipos)
  - `*.test.ts` (opcional, testes)

Exemplo real: `BrButton` e `BrInput` seguem essa estrutura.

## Variacoes comuns

Alguns componentes possuem subcomponentes na mesma pasta e os exportam no `index.ts`.
Exemplos: `BrAccordion` + `BrAccordionItem`, `BrTabs` + `BrTab` + `BrTabPanel`,
`BrCheckbox` + `BrCheckboxGroup`, `BrRadio` + `BrRadioGroup`.

Nesses casos, o `index.ts` exporta todos os arquivos `.vue` relacionados:

```ts
export { default as BrAccordion } from './BrAccordion.vue'
export { default as BrAccordionItem } from './BrAccordionItem.vue'
export * from './types'
```

## Padrao do arquivo `index.ts`

O arquivo `index.ts` do componente deve exportar o componente e seus tipos:

```ts
export { default as BrNome } from './BrNome.vue'
export * from './types'
```

## Padrao do arquivo `types.ts`

- Defina `type`/`interface` para props e tipos auxiliares.
- Documente as props com JSDoc e `@default` quando aplicavel.

Exemplo:

```ts
export type InputSize = 'sm' | 'md' | 'lg'

export interface InputProps {
  /**
   * Input size
   * @default 'md'
   */
  size?: InputSize
}
```

## Padrao do arquivo `.vue`

- Use `script setup` com TypeScript.
- Use `withDefaults(defineProps<...>(), { ... })` para defaults.
- Use `defineEmits` e `defineModel` quando necessario.
- Separe blocos por comentarios de secao (PROPS, EMITS, COMPUTED, METHODS, EXPOSE).
- Estilos em `style scoped` com SCSS.
- Classes seguem o padrao `br-nome` e modificadores `br-nome--estado`.

Estrutura tipica:

```vue
<script setup lang="ts">
import type { NomeProps } from './types'

const props = withDefaults(defineProps<NomeProps>(), {
  // defaults
})

const emit = defineEmits<{
  (e: 'evento', payload: unknown): void
}>()

const classes = computed(() => [
  'br-nome',
  { 'br-nome--estado': true },
])
</script>

<template>
  <div :class="classes">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.br-nome {
  /* estilos */
}
</style>
```

## Reexports na raiz

Para expor um novo componente, adicione a exportacao no `index.ts` da categoria e o reexport no `components/index.ts` ja cobre o resto.

Exemplo (atoms):

```ts
export * from './BrNome'
```

## Registro no plugin

O plugin global registra automaticamente tudo que e exportado em `components/index.ts`.
Se o componente foi exportado na categoria correta, ele passa a ser registrado sem passos extras.

## Checklist rapido

- Criar pasta `BrNome` dentro da categoria correta.
- Adicionar `BrNome.vue`, `types.ts`, `index.ts`.
- Exportar no `index.ts` da categoria.
- (Opcional) Criar `BrNome.test.ts`.
- Validar estilos e tokens (`styles/tokens`).
