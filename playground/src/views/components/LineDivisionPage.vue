<script setup lang="ts">
import CodeExample from '../../components/CodeExample.vue'
import PropsTable from '../../components/PropsTable.vue'

const props = [
  { name: 'width', type: 'string', default: "'100%'", description: 'Largura da linha divisora' },
  { name: 'height', type: 'string', default: "'1px'", description: 'Espessura da linha' },
  { name: 'color', type: 'string', default: "'var(--neutralDarkGrey9)'", description: 'Cor da linha' },
  { name: 'opacity', type: 'number', default: '0.5', description: 'Opacidade da linha (0 a 1)' },
  { name: 'borderRadius', type: 'string', default: "'none'", description: 'Raio da borda da linha' },
]
</script>

<template>
  <div class="docs-page">
    <h1>LineDivision</h1>
    <p class="docs-page__description">
      Linha divisora para separar visualmente blocos de conteudo.
    </p>

    <h2>Uso basico</h2>
    <CodeExample :code="`<BrLineDivision />`">
      <div style="width: 100%;">
        <BrLineDivision />
      </div>
    </CodeExample>

    <h2>Espessura e cor</h2>
    <CodeExample
      :code="`<BrLineDivision height='2px' color='var(--brandPrimary6)' />
<BrLineDivision height='4px' color='var(--auxiliaryGreen6)' />`"
    >
      <div style="display: flex; flex-direction: column; gap: 16px; width: 100%;">
        <BrLineDivision height="2px" color="var(--brandPrimary6)" />
        <BrLineDivision height="4px" color="var(--auxiliaryGreen6)" />
      </div>
    </CodeExample>

    <h2>Largura e opacidade</h2>
    <CodeExample
      :code="`<BrLineDivision width='100%' :opacity='0.5' />
<BrLineDivision width='60%' :opacity='1' />`"
    >
      <div style="display: flex; flex-direction: column; gap: 16px; width: 100%;">
        <BrLineDivision width="100%" :opacity="0.5" />
        <BrLineDivision width="60%" :opacity="1" />
      </div>
    </CodeExample>

    <h2>Borda arredondada</h2>
    <CodeExample
      :code="`<BrLineDivision height='6px' borderRadius='999px' color='var(--auxiliaryOrange5)' />`"
    >
      <div style="width: 100%;">
        <BrLineDivision
          height="6px"
          borderRadius="999px"
          color="var(--auxiliaryOrange5)"
        />
      </div>
    </CodeExample>

    <h2>Props</h2>
    <PropsTable :props="props" />
  </div>
</template>
