<script setup lang="ts">
import CodeExample from '../../components/CodeExample.vue'
import PropsTable from '../../components/PropsTable.vue'

const props = [
  { name: 'variant', type: "'elevated' | 'outlined' | 'filled'", default: "'elevated'", description: 'Variante visual do card' },
  { name: 'size', type: "'sm' | 'md' | 'lg'", default: "'md'", description: 'Tamanho do padding' },
  { name: 'clickable', type: 'boolean', default: 'false', description: 'Tornar card clicável' },
  { name: 'title', type: 'string', default: '-', description: 'Título do card' },
  { name: 'subtitle', type: 'string', default: '-', description: 'Subtítulo do card' },
  { name: 'image', type: 'string', default: '-', description: 'URL da imagem' },
  { name: 'imagePosition', type: "'top' | 'bottom' | 'left' | 'right'", default: "'top'", description: 'Posição da imagem' },
  { name: 'imageHeight', type: 'string | number', default: '-', description: 'Altura da imagem' },
  { name: 'rounded', type: "'none' | 'sm' | 'md' | 'lg' | 'xl'", default: "'md'", description: 'Borda arredondada' },
  { name: 'loading', type: 'boolean', default: 'false', description: 'Estado de carregamento' },
]
</script>

<template>
  <div class="docs-page">
      <h1>Card</h1>
      <p class="docs-page__description">
        Componente de card para exibir conteúdo em containers estilizados.
      </p>

      <h2>Uso básico</h2>
      <CodeExample
        :code="`<BrCard title='Título do Card' subtitle='Subtítulo opcional'>\n  <p>Conteúdo do card aqui.</p>\n</BrCard>`"
      >
        <BrCard title="Título do Card" subtitle="Subtítulo opcional" style="max-width: 400px;">
          <p>Conteúdo do card aqui.</p>
        </BrCard>
      </CodeExample>

      <h2>Variantes</h2>
      <CodeExample :code="`<BrCard variant='elevated' title='Elevated' />\n<BrCard variant='outlined' title='Outlined' />\n<BrCard variant='filled' title='Filled' />`">
        <div style="display: flex; gap: 16px; flex-wrap: wrap;">
          <BrCard variant="elevated" title="Elevated" style="width: 200px;">
            <p>Card com sombra elevada.</p>
          </BrCard>
          <BrCard variant="outlined" title="Outlined" style="width: 200px;">
            <p>Card com borda.</p>
          </BrCard>
          <BrCard variant="filled" title="Filled" style="width: 200px;">
            <p>Card com fundo preenchido.</p>
          </BrCard>
        </div>
      </CodeExample>

      <h2>Com imagem</h2>
      <CodeExample
        :code="`<BrCard\n  title='Card com Imagem'\n  subtitle='Descrição'\n  image='https://picsum.photos/400/200'\n  imageHeight='200'\n/>`"
      >
        <BrCard
          title="Card com Imagem"
          subtitle="Descrição do card"
          image="https://picsum.photos/400/200"
          :imageHeight="200"
          style="max-width: 400px;"
        >
          <p>Conteúdo adicional do card.</p>
        </BrCard>
      </CodeExample>

      <h2>Card clicável</h2>
      <CodeExample :code="`<BrCard title='Card Clicável' clickable @click='handleClick' />`">
        <BrCard title="Card Clicável" clickable style="max-width: 300px;">
          <p>Clique neste card para interagir.</p>
        </BrCard>
      </CodeExample>

      <h2>Tamanhos</h2>
      <CodeExample :code="`<BrCard size='sm' title='Small' />\n<BrCard size='md' title='Medium' />\n<BrCard size='lg' title='Large' />`">
        <div style="display: flex; gap: 16px; flex-wrap: wrap; align-items: flex-start;">
          <BrCard size="sm" title="Small" style="width: 180px;">
            <p>Padding pequeno.</p>
          </BrCard>
          <BrCard size="md" title="Medium" style="width: 180px;">
            <p>Padding médio.</p>
          </BrCard>
          <BrCard size="lg" title="Large" style="width: 180px;">
            <p>Padding grande.</p>
          </BrCard>
        </div>
      </CodeExample>

      <h2>Props</h2>
    <PropsTable :props="props" />
  </div>
</template>
