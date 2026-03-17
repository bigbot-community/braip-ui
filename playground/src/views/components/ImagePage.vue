<script setup lang="ts">

const props = [
  { name: 'src', type: 'string', required: true, description: 'URL da imagem' },
  { name: 'alt', type: 'string', required: true, description: 'Texto alternativo' },
  { name: 'width', type: 'string | number', default: '-', description: 'Largura da imagem' },
  { name: 'height', type: 'string | number', default: '-', description: 'Altura da imagem' },
  { name: 'fit', type: "'cover' | 'contain' | 'fill' | 'none'", default: "'cover'", description: 'Modo de ajuste' },
  { name: 'lazy', type: 'boolean', default: 'true', description: 'Carregamento lazy' },
  { name: 'rounded', type: "boolean | 'sm' | 'md' | 'lg' | 'xl' | 'full'", default: 'false', description: 'Borda arredondada' },
  { name: 'fallback', type: 'string', default: '-', description: 'URL de imagem fallback' },
]
</script>

<template>
  <div class="docs-page">
      <h1>Image</h1>
      <p class="docs-page__description">
        Componente de imagem com lazy loading, placeholder e fallback.
      </p>

      <h2>Uso básico</h2>
      <CodeExample
        :code="`<BrImage
  src='https://picsum.photos/300/200'
  alt='Demo image'
  width='300'
  height='200'
/>`"
      >
        <BrImage
          src="https://picsum.photos/300/200"
          alt="Demo image"
          width="300"
          height="200"
        />
      </CodeExample>

      <h2>Arredondamento</h2>
      <CodeExample
        :code="`<BrImage src='...' rounded='sm' />
<BrImage src='...' rounded='md' />
<BrImage src='...' rounded='lg' />
<BrImage src='...' rounded='full' />`"
      >
        <div style="display: flex; gap: 16px; flex-wrap: wrap;">
          <BrImage src="https://picsum.photos/100/100?1" alt="sm" width="100" height="100" rounded="sm" />
          <BrImage src="https://picsum.photos/100/100?2" alt="md" width="100" height="100" rounded="md" />
          <BrImage src="https://picsum.photos/100/100?3" alt="lg" width="100" height="100" rounded="lg" />
          <BrImage src="https://picsum.photos/100/100?4" alt="full" width="100" height="100" rounded="full" />
        </div>
      </CodeExample>

      <h2>Props</h2>
    <PropsTable :props="props" />
  </div>
</template>
