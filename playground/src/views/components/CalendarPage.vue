<script setup lang="ts">
import CodeExample from "../../components/CodeExample.vue";
import PropsTable from "../../components/PropsTable.vue";

const calendarProps = [
  {
    name: "bgHeader",
    type: "string",
    default: "var(--neutralLightGrey9)",
    description: "Cor de fundo do header",
  },
  {
    name: "bgCalendar",
    type: "string",
    default: "var(--neutralLightGrey9)",
    description: "Cor de fundo do calendário",
  },
  {
    name: "colorCalendar",
    type: "string",
    default: "var(--neutralLightGrey5)",
    description: "Cor do texto no calendário",
  },
  {
    name: "borderColorCalendar",
    type: "string",
    default: "var(--neutralLightGrey6)",
    description: "Cor da borda do calendário",
  },
  {
    name: "bgNotCurrentMonth",
    type: "string",
    default: "var(--neutralLightGrey5)",
    description: "Cor de fundo dos dias fora do mês",
  },
  {
    name: "bgItem",
    type: "string",
    default: "linear-gradient(...)",
    description: "Background do item",
  },
  {
    name: "fontSizeItem",
    type: "string",
    default: "var(--br-text-base)",
    description: "Tamanho da fonte do item",
  },
  {
    name: "colorItem",
    type: "string",
    default: "var(--brandPrimaryLightest)",
    description: "Cor do texto do item",
  },
  {
    name: "dateSelectorColorRoot",
    type: "string",
    default: "var(--neutralLightGrey1)",
    description: "Cor base do seletor de data",
  },
  {
    name: "dateSelectorColorIndicator",
    type: "string",
    default: "var(--neutralDarkGrey1)",
    description: "Cor do texto do indicador",
  },
  {
    name: "dateSelectorColorIcon",
    type: "string",
    default: "var(--neutralLightGrey1)",
    description: "Cor do ícone do seletor",
  },
  {
    name: "dateSelectorFontSize",
    type: "string",
    default: "var(--fontSizeTextP2)",
    description: "Tamanho da fonte do indicador",
  },
  {
    name: "dateSelectorFontSizeMobile",
    type: "string",
    default: "var(--fontSizeTextP3)",
    description: "Tamanho da fonte no mobile",
  },
  {
    name: "dateSelectorFontWeight",
    type: "string",
    default: "500",
    description: "Peso da fonte do indicador",
  },
  {
    name: "bgFilter",
    type: "string",
    default: "var(--brandPrimaryLightest)",
    description: "Cor de fundo do filtro",
  },
  {
    name: "fontSizeFilter",
    type: "string",
    default: "var(--br-text-base)",
    description: "Tamanho da fonte do filtro",
  },
  {
    name: "fontWeightFilter",
    type: "string",
    default: "var(--br-font-medium)",
    description: "Peso da fonte do filtro",
  },
  {
    name: "bgActiveFilter",
    type: "string",
    default: "var(--neutralLightGrey9)",
    description: "Cor do filtro ativo",
  },
  {
    name: "initialIsDay",
    type: "boolean",
    default: "false",
    description: "Inicia no modo dia",
  },
  {
    name: "initialIsWeek",
    type: "boolean",
    default: "true",
    description: "Inicia no modo semana",
  },
  {
    name: "initialFilter",
    type: "'month' | 'week' | 'day'",
    default: "'month'",
    description: "Filtro inicial do calendário",
  },
  {
    name: "items",
    type: "string[]",
    default: "[]",
    description: "Itens exibidos em cada dia/horário",
  },
];

const basicExample = "<BrCalendarMonth />";
const dayExample = `<BrCalendarMonth
  initial-filter="day"
  :initial-is-day="true"
  :initial-is-week="false"
  :items="['Reunião', 'Entrega', 'Call']"
/>`;
const visualExample = `<BrCalendarMonth
  bg-filter="var(--neutralLightGrey9)"
  bg-active-filter="var(--brandPrimaryLightest)"
  font-size-filter="14px"
  font-weight-filter="600"
  date-selector-color-icon="var(--brandPrimary6)"
/>`;
const calendarBgExample = `<BrCalendarMonth
  bg-header="var(--neutralLightGrey10)"
  bg-calendar="var(--neutralLightGrey10)"
  color-calendar="var(--neutralDarkGrey5)"
  border-color-calendar="var(--neutralLightGrey6)"
  bg-not-current-month="var(--neutralLightGrey7)"
/>`;
const calendarBgAltExample = `<BrCalendarMonth
  bg-header="#0b0913"
  bg-calendar="#000"
  color-calendar="#c7b6ff"
  border-color-calendar="#2a2140"
  bg-not-current-month="#0a0810"
  bg-item="#1f1c2a"
  color-item="#e3d8ff"
  bg-filter="#090812"
  bg-active-filter="#141027"
  font-size-filter="14px"
  font-weight-filter="600"
  date-selector-color-root="#b9a6ff"
  date-selector-color-indicator="#e3d8ff"
  date-selector-color-icon="#865dfb"
  date-selector-font-size="18px"
  date-selector-font-size-mobile="14px"
  date-selector-font-weight="600"
/>`;
</script>

<template>
  <div class="component-page">
    <header class="component-page__header">
      <h1 class="component-page__title">Calendar</h1>
      <p class="component-page__description">
        Organismo de calendário mensal com filtros.
      </p>
    </header>

    <section class="component-page__section">
      <h2>Uso básico</h2>
      <CodeExample :code="basicExample">
        <BrCalendarMonth />
      </CodeExample>
    </section>

    <section class="component-page__section">
      <h2>Modo dia</h2>
      <CodeExample title="Filtro dia e itens customizados" :code="dayExample">
        <BrCalendarMonth
          initial-filter="day"
          :initial-is-day="true"
          :initial-is-week="false"
          :items="['Reunião', 'Entrega', 'Call']"
        />
      </CodeExample>
    </section>

    <section class="component-page__section">
      <h2>Customização visual</h2>
      <CodeExample title="Cores e tipografia" :code="visualExample">
        <BrCalendarMonth
          bg-filter="var(--neutralLightGrey9)"
          bg-active-filter="var(--brandPrimaryLightest)"
          font-size-filter="14px"
          font-weight-filter="600"
          date-selector-color-icon="var(--brandPrimary6)"
        />
      </CodeExample>
    </section>

    <section class="component-page__section">
      <h2>Cores do calendário</h2>
      <CodeExample title="Background do calendário" :code="calendarBgExample">
        <BrCalendarMonth
          bg-header="var(--neutralLightGrey10)"
          bg-calendar="var(--neutralLightGrey10)"
          color-calendar="var(--neutralDarkGrey5)"
          border-color-calendar="var(--neutralLightGrey6)"
          bg-not-current-month="var(--neutralLightGrey7)"
        />
      </CodeExample>
    </section>

    <section class="component-page__section">
      <h2>Paleta noturna</h2>
      <CodeExample title="Cores alternativas" :code="calendarBgAltExample">
        <BrCalendarMonth
          bg-header="#0b0913"
          bg-calendar="#000"
          color-calendar="#c7b6ff"
          border-color-calendar="#2a2140"
          bg-not-current-month="#0a0810"
          bg-item="#1f1c2a"
          color-item="#e3d8ff"
          bg-filter="#090812"
          bg-active-filter="#141027"
          font-size-filter="14px"
          font-weight-filter="600"
          date-selector-color-root="#b9a6ff"
          date-selector-color-indicator="#e3d8ff"
          date-selector-color-icon="#865dfb"
          date-selector-font-size="18px"
          date-selector-font-size-mobile="14px"
          date-selector-font-weight="600"
        />
      </CodeExample>
    </section>

    <section class="component-page__section">
      <h2>API</h2>
      <h3>Props</h3>
      <PropsTable :props="calendarProps" />
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
    }
  }
}
</style>
