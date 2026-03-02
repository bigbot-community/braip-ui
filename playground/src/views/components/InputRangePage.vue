<script setup lang="ts">
import { ref } from "vue";
import CodeExample from "../../components/CodeExample.vue";
import PropsTable from "../../components/PropsTable.vue";

const rangeValue = ref<[number, number]>([20, 80]);
const basicExampleCode = `<BrInputRange
  :value="rangeValue"
  text="Faixa de comissão"
  @input="handleRangeInput"
/>`;
const customExampleCode = `<BrInputRange
  :value="[10, 90]"
  :min="0"
  :max="100"
  :spacing="5"
  colorInput="var(--brandPrimary5)"
  text="Intervalo com passo de 5"
  height="140px"
/>`;

const inputRangeProps = [
  {
    name: "value",
    type: "[number, number]",
    default: "[0, 100]",
    description: "Valores mínimo e máximo selecionados",
  },
  {
    name: "min",
    type: "number",
    default: "0",
    description: "Valor mínimo permitido",
  },
  {
    name: "max",
    type: "number",
    default: "100",
    description: "Valor máximo permitido",
  },
  {
    name: "spacing",
    type: "number",
    default: "1",
    description: "Passo entre os valores do range",
  },
  {
    name: "text",
    type: "string",
    default: "'Input Range'",
    description: "Texto exibido acima do componente",
  },
  {
    name: "height",
    type: "string",
    default: "'120px'",
    description: "Altura do container",
  },
  {
    name: "padding",
    type: "string",
    default: "'17px 16px 15px'",
    description: "Espaçamento interno do container",
  },
  {
    name: "colorInput",
    type: "string",
    default: "'var(--brandPrimary6)'",
    description: "Cor aplicada no progresso e no thumb do range",
  },
  {
    name: "borderColor",
    type: "string",
    default: "'var(--neutralLightGrey6)'",
    description: "Cor da borda",
  },
  {
    name: "textColor",
    type: "string",
    default: "'var(--neutralLightGrey4)'",
    description: "Cor do texto",
  },
  {
    name: "textFontSize",
    type: "string",
    default: "'14px'",
    description: "Tamanho da fonte do título",
  },
  {
    name: "textValueFontSize",
    type: "string",
    default: "'12px'",
    description: "Tamanho da fonte dos valores",
  },
];

const handleRangeInput = (value: [number, number]) => {
  rangeValue.value = value;
};
</script>

<template>
  <div class="component-page">
    <header class="component-page__header">
      <BrBadge variant="primary">Atom</BrBadge>
      <h1 class="component-page__title">Input Range</h1>
      <p class="component-page__description">
        O componente Input Range permite selecionar um intervalo entre valor
        mínimo e máximo.
      </p>
    </header>

    <section class="component-page__section">
      <h2>Uso Básico</h2>
      <CodeExample
        title="Input Range Básico"
        description="Controle de intervalo com atualização reativa"
        :code="basicExampleCode"
      >
        <div class="input">
          <BrInputRange
            :value="rangeValue"
            text="Faixa de comissão"
            @input="handleRangeInput"
          />
        </div>
      </CodeExample>
    </section>

    <section class="component-page__section">
      <h2>Customização</h2>
      <CodeExample
        title="Range Personalizado"
        :code="customExampleCode"
      >
        <div class="input">
          <BrInputRange
            :value="[10, 90]"
            :min="0"
            :max="100"
            :spacing="5"
            colorInput="var(--brandPrimary5)"
            text="Intervalo com passo de 5"
            height="140px"
          />
        </div>
      </CodeExample>
    </section>

    <section class="component-page__section">
      <h2>API</h2>
      <h3>Props</h3>
      <PropsTable :props="inputRangeProps" />
    </section>
  </div>
</template>

<style lang="scss" scoped>
.component-page {
  &__header {
    margin-bottom: var(--br-space-10);
  }

  .input {
    width: 100%;
  }

  &__title {
    font-size: var(--br-text-h3);
    font-weight: var(--br-font-bold);
    color: var(--neutralDarkGrey);
    margin: var(--br-space-4) 0;
  }

  &__description {
    font-size: var(--br-text-lg);
    color: var(--neutralDarkGrey7);
    line-height: 1.6;
    margin: 0;
  }

  &__section {
    margin-bottom: var(--br-space-12);

    h2 {
      font-size: var(--br-text-h5);
      font-weight: var(--br-font-semibold);
      color: var(--neutralDarkGrey);
      margin: 0 0 var(--br-space-4);
      padding-bottom: var(--br-space-3);
      border-bottom: 1px solid var(--neutralLightGrey5);
    }

    h3 {
      font-size: var(--br-text-lg);
      font-weight: var(--br-font-semibold);
      color: var(--neutralDarkGrey);
      margin: var(--br-space-6) 0 var(--br-space-3);
    }

    p {
      color: var(--neutralDarkGrey7);
      margin: 0 0 var(--br-space-4);
      line-height: 1.6;

      code {
        font-family: "Fira Code", monospace;
        font-size: 0.9em;
        background: var(--brandPrimaryLightest);
        color: var(--brandPrimary6);
        padding: 2px 6px;
        border-radius: var(--br-radius-sm);
      }
    }
  }
}
</style>
