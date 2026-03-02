<script setup lang="ts">
import { ref } from 'vue'
import CodeExample from '../../components/CodeExample.vue'
import PropsTable from '../../components/PropsTable.vue'

const selectedDate = ref<Date | null>(new Date())
const selectedDates = ref<Date[]>([])
const dateRange = ref<{ start: Date | null, end: Date | null }>({ start: null, end: null })

const highlightedDates = [
  { date: new Date(), color: '#4caf50', label: 'Hoje' },
  { date: new Date(Date.now() + 86400000 * 3), color: '#ff9800', label: 'Evento' },
]

const props = [
  { name: 'minDate', type: 'Date | string', default: '-', description: 'Data mínima selecionável' },
  { name: 'maxDate', type: 'Date | string', default: '-', description: 'Data máxima selecionável' },
  { name: 'disabledDates', type: 'Array<Date | string>', default: '[]', description: 'Datas desabilitadas' },
  { name: 'view', type: "'day' | 'month' | 'year'", default: "'day'", description: 'Visualização inicial' },
  { name: 'firstDayOfWeek', type: '0 | 1 | 2 | 3 | 4 | 5 | 6', default: '0', description: 'Primeiro dia da semana (0=Dom)' },
  { name: 'showWeekNumbers', type: 'boolean', default: 'false', description: 'Mostrar números das semanas' },
  { name: 'multiple', type: 'boolean', default: 'false', description: 'Seleção múltipla' },
  { name: 'range', type: 'boolean', default: 'false', description: 'Seleção de período' },
  { name: 'locale', type: 'string', default: "'pt-BR'", description: 'Localidade para formatação' },
  { name: 'readonly', type: 'boolean', default: 'false', description: 'Modo somente leitura' },
  { name: 'disabled', type: 'boolean', default: 'false', description: 'Estado desabilitado' },
  { name: 'highlightedDates', type: 'Array<{ date, color?, label? }>', default: '[]', description: 'Datas destacadas' },
]
</script>

<template>
  <div class="docs-page">
      <h1>Calendar</h1>
      <p class="docs-page__description">
        Componente de calendário para seleção de datas.
      </p>

      <h2>Uso básico</h2>
      <CodeExample
        :code="`<BrCalendar v-model='selectedDate' />`"
      >
        <BrCalendar v-model="selectedDate" />
        <p style="margin-top: 12px; color: var(--neutralDarkGrey5);">
          Selecionado: {{ selectedDate?.toLocaleDateString('pt-BR') || 'Nenhuma' }}
        </p>
      </CodeExample>

      <h2>Semana começando na segunda</h2>
      <CodeExample :code="`<BrCalendar :firstDayOfWeek='1' />`">
        <BrCalendar :firstDayOfWeek="1" />
      </CodeExample>

      <h2>Com números das semanas</h2>
      <CodeExample :code="`<BrCalendar showWeekNumbers />`">
        <BrCalendar showWeekNumbers />
      </CodeExample>

      <h2>Seleção múltipla</h2>
      <CodeExample :code="`<BrCalendar v-model='selectedDates' multiple />`">
        <BrCalendar v-model="selectedDates" multiple />
        <p style="margin-top: 12px; color: var(--neutralDarkGrey5);">
          Selecionados: {{ selectedDates.length }} data(s)
        </p>
      </CodeExample>

      <h2>Seleção de período</h2>
      <CodeExample :code="`<BrCalendar v-model='dateRange' range />`">
        <BrCalendar v-model="dateRange" range />
        <p style="margin-top: 12px; color: var(--neutralDarkGrey5);">
          Período: {{ dateRange.start?.toLocaleDateString('pt-BR') || '-' }}
          até {{ dateRange.end?.toLocaleDateString('pt-BR') || '-' }}
        </p>
      </CodeExample>

      <h2>Datas destacadas</h2>
      <CodeExample :code="`<BrCalendar :highlightedDates='highlightedDates' />`">
        <BrCalendar :highlightedDates="highlightedDates" />
      </CodeExample>

      <h2>Limites de data</h2>
      <CodeExample :code="`<BrCalendar :minDate='new Date()' :maxDate='new Date(Date.now() + 30 * 86400000)' />`">
        <BrCalendar
          :minDate="new Date()"
          :maxDate="new Date(Date.now() + 30 * 86400000)"
        />
        <p style="margin-top: 8px; color: var(--neutralDarkGrey5); font-size: 14px;">
          Apenas próximos 30 dias disponíveis
        </p>
      </CodeExample>

      <h2>Props</h2>
    <PropsTable :props="props" />
  </div>
</template>
