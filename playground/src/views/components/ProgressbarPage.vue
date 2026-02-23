<script setup lang="ts">
import CodeExample from '../../components/CodeExample.vue'
import PropsTable from '../../components/PropsTable.vue'

const progress = ref(65)

const props = [
  { name: 'value', type: 'number', default: '0', description: 'Valor atual (0-100)' },
  { name: 'max', type: 'number', default: '100', description: 'Valor máximo' },
  { name: 'size', type: "'xs' | 'sm' | 'md' | 'lg'", default: "'md'", description: 'Tamanho da barra' },
  { name: 'variant', type: "'primary' | 'success' | 'warning' | 'danger' | 'info'", default: "'primary'", description: 'Variante de cor' },
  { name: 'showLabel', type: 'boolean', default: 'false', description: 'Mostrar porcentagem' },
  { name: 'labelPosition', type: "'inside' | 'right' | 'top'", default: "'right'", description: 'Posição do label' },
  { name: 'striped', type: 'boolean', default: 'false', description: 'Estilo listrado' },
  { name: 'animated', type: 'boolean', default: 'false', description: 'Animação das listras' },
  { name: 'indeterminate', type: 'boolean', default: 'false', description: 'Estado indeterminado' },
]
</script>

<template>
  <div class="docs-page">
      <h1>Progressbar</h1>
      <p class="docs-page__description">
        Barra de progresso para indicar status de carregamento ou conclusão.
      </p>

      <h2>Uso básico</h2>
      <CodeExample :code="`<BrProgressbar :value='65' />`">
        <BrProgressbar :value="65" />
      </CodeExample>

      <h2>Com Label</h2>
      <CodeExample :code="`<BrProgressbar :value='65' showLabel />\n<BrProgressbar :value='65' showLabel labelPosition='top' />\n<BrProgressbar :value='65' showLabel labelPosition='inside' size='lg' />`">
        <div style="display: flex; flex-direction: column; gap: 16px;">
          <BrProgressbar :value="65" showLabel />
          <BrProgressbar :value="65" showLabel labelPosition="top" />
          <BrProgressbar :value="65" showLabel labelPosition="inside" size="lg" />
        </div>
      </CodeExample>

      <h2>Variantes</h2>
      <CodeExample :code="`<BrProgressbar :value='60' variant='primary' />\n<BrProgressbar :value='60' variant='success' />\n<BrProgressbar :value='60' variant='warning' />\n<BrProgressbar :value='60' variant='danger' />\n<BrProgressbar :value='60' variant='info' />`">
        <div style="display: flex; flex-direction: column; gap: 12px;">
          <BrProgressbar :value="60" variant="primary" />
          <BrProgressbar :value="60" variant="success" />
          <BrProgressbar :value="60" variant="warning" />
          <BrProgressbar :value="60" variant="danger" />
          <BrProgressbar :value="60" variant="info" />
        </div>
      </CodeExample>

      <h2>Tamanhos</h2>
      <CodeExample :code="`<BrProgressbar :value='50' size='xs' />\n<BrProgressbar :value='50' size='sm' />\n<BrProgressbar :value='50' size='md' />\n<BrProgressbar :value='50' size='lg' />`">
        <div style="display: flex; flex-direction: column; gap: 12px;">
          <BrProgressbar :value="50" size="xs" />
          <BrProgressbar :value="50" size="sm" />
          <BrProgressbar :value="50" size="md" />
          <BrProgressbar :value="50" size="lg" />
        </div>
      </CodeExample>

      <h2>Estilos especiais</h2>
      <CodeExample :code="`<BrProgressbar :value='70' striped />\n<BrProgressbar :value='70' striped animated />\n<BrProgressbar indeterminate />`">
        <div style="display: flex; flex-direction: column; gap: 12px;">
          <BrProgressbar :value="70" striped />
          <BrProgressbar :value="70" striped animated />
          <BrProgressbar indeterminate />
        </div>
      </CodeExample>

      <h2>Props</h2>
    <PropsTable :props="props" />
  </div>
</template>
