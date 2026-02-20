<script setup lang="ts">
import CodeExample from '../../components/CodeExample.vue'
import PropsTable from '../../components/PropsTable.vue'

const props = [
  { name: 'src', type: 'string', required: true, description: 'URL do vídeo' },
  { name: 'poster', type: 'string', default: '-', description: 'Imagem de poster' },
  { name: 'width', type: 'string | number', default: '-', description: 'Largura do vídeo' },
  { name: 'height', type: 'string | number', default: '-', description: 'Altura do vídeo' },
  { name: 'autoplay', type: 'boolean', default: 'false', description: 'Reprodução automática' },
  { name: 'loop', type: 'boolean', default: 'false', description: 'Repetir vídeo' },
  { name: 'muted', type: 'boolean', default: 'false', description: 'Iniciar mudo' },
  { name: 'controls', type: 'boolean', default: 'true', description: 'Mostrar controles' },
  { name: 'rounded', type: "boolean | 'sm' | 'md' | 'lg' | 'xl'", default: 'false', description: 'Borda arredondada' },
]
</script>

<template>
  <div class="docs-page">
      <h1>Video</h1>
      <p class="docs-page__description">
        Player de vídeo com controles nativos e opções de personalização.
      </p>

      <h2>Uso básico</h2>
      <CodeExample
        :code="`<BrVideo
  src='https://www.w3schools.com/html/mov_bbb.mp4'
  width='400'
  controls
  rounded='md'
/>`"
      >
        <BrVideo
          src="https://www.w3schools.com/html/mov_bbb.mp4"
          width="400"
          controls
          rounded="md"
        />
      </CodeExample>

      <h2>Com Poster</h2>
      <CodeExample
        :code="`<BrVideo
  src='https://www.w3schools.com/html/mov_bbb.mp4'
  poster='https://picsum.photos/400/225'
  width='400'
/>`"
      >
        <BrVideo
          src="https://www.w3schools.com/html/mov_bbb.mp4"
          poster="https://picsum.photos/400/225"
          width="400"
          rounded="lg"
        />
      </CodeExample>

      <h2>Props</h2>
    <PropsTable :props="props" />
  </div>
</template>
