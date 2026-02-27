<script setup lang="ts">
import CodeExample from "../../components/CodeExample.vue";
import PropsTable from "../../components/PropsTable.vue";

const basicExampleCode = `<BrText type="title-h3" text="Título principal" />
<BrText type="text-p4" text="Texto descritivo do componente." />`;

const weightsExampleCode = `<BrText type="text-p3" weight="regular" text="Peso regular" />
<BrText type="text-p3" weight="medium" text="Peso medium" />
<BrText type="text-p3" weight="semi-bold" text="Peso semi-bold" />`;

const singleLineExampleCode = `<BrText
  type="text-p4"
  :single-line="true"
  text="Esse texto é longo para demonstrar o comportamento de truncamento em apenas uma linha."
/>`;

const customExampleCode = `<BrText
  type="title-h6"
  text="Texto personalizado"
  color="var(--br-primary-600)"
  font-family="Sora"
  text-align="center"
/>`;

const textProps = [
  {
    name: "type",
    type: "'title-h1' | ... | 'text-p7'",
    default: "'title-h1'",
    description: "Define o tamanho e a hierarquia tipográfica",
  },
  {
    name: "weight",
    type: "'regular' | 'medium' | 'semi-bold' | 'extra-bold'",
    default: "'medium'",
    description: "Define o peso da fonte",
  },
  {
    name: "text",
    type: "string",
    default: "'Typography'",
    description: "Conteúdo textual exibido no componente",
  },
  {
    name: "color",
    type: "string",
    default: "'var(--br-dark-0)'",
    description: "Cor do texto",
  },
  {
    name: "singleLine",
    type: "boolean",
    default: "false",
    description: "Aplica truncamento para exibir o texto em apenas uma linha",
  },
  {
    name: "fontFamily",
    type: "'Poppins' | 'Sora'",
    default: "'Poppins'",
    description: "Família tipográfica usada no texto",
  },
  {
    name: "textAlign",
    type: "string",
    default: "'left'",
    description: "Alinhamento do texto",
  },
];
</script>

<template>
  <div class="component-page">
    <header class="component-page__header">
      <BrBadge variant="primary">Atom</BrBadge>
      <h1 class="component-page__title">Text</h1>
      <p class="component-page__description">
        Componente tipográfico para títulos e textos com variações de tamanho, peso e alinhamento.
      </p>
    </header>

    <section class="component-page__section">
      <h2>Uso Básico</h2>
      <CodeExample title="Título e parágrafo" :code="basicExampleCode">
        <div class="examples-column">
          <BrText type="title-h3" text="Título principal" />
          <BrText type="text-p4" text="Texto descritivo do componente." />
        </div>
      </CodeExample>
    </section>

    <section class="component-page__section">
      <h2>Pesos de Fonte</h2>
      <CodeExample title="Variação de weight" :code="weightsExampleCode">
        <div class="examples-column">
          <BrText type="text-p3" weight="regular" text="Peso regular" />
          <BrText type="text-p3" weight="medium" text="Peso medium" />
          <BrText type="text-p3" weight="semi-bold" text="Peso semi-bold" />
        </div>
      </CodeExample>
    </section>

    <section class="component-page__section">
      <h2>Texto em Linha Única</h2>
      <CodeExample title="Truncamento com reticências" :code="singleLineExampleCode">
        <BrText
          type="text-p4"
          :single-line="true"
          text="Esse texto é longo para demonstrar o comportamento de truncamento em apenas uma linha."
        />
      </CodeExample>
    </section>

    <section class="component-page__section">
      <h2>Customização</h2>
      <CodeExample title="Cor, fonte e alinhamento" :code="customExampleCode">
        <BrText
          type="title-h6"
          text="Texto personalizado"
          color="var(--br-primary-600)"
          font-family="Sora"
          text-align="center"
        />
      </CodeExample>
    </section>

    <section class="component-page__section">
      <h2>API</h2>
      <h3>Props</h3>
      <PropsTable :props="textProps" />
    </section>
  </div>
</template>

<style lang="scss" scoped>
.component-page {
  &__header {
    margin-bottom: var(--br-space-10);
  }

  &__title {
    font-size: var(--br-text-h3);
    font-weight: var(--br-font-bold);
    color: var(--br-dark-0);
    margin: var(--br-space-4) 0;
  }

  &__description {
    font-size: var(--br-text-lg);
    color: var(--br-dark-700);
    line-height: 1.6;
    margin: 0;
  }

  &__section {
    margin-bottom: var(--br-space-12);

    h2 {
      font-size: var(--br-text-h5);
      font-weight: var(--br-font-semibold);
      color: var(--br-dark-0);
      margin: 0 0 var(--br-space-4);
      padding-bottom: var(--br-space-3);
      border-bottom: 1px solid var(--br-light-300);
    }

    h3 {
      font-size: var(--br-text-lg);
      font-weight: var(--br-font-semibold);
      color: var(--br-dark-0);
      margin: var(--br-space-6) 0 var(--br-space-3);
    }
  }
}

.examples-column {
  display: flex;
  flex-direction: column;
  gap: var(--br-space-3);
}
</style>
