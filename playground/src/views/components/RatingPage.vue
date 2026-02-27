<script setup lang="ts">
import { ref } from 'vue'

const rating = ref(3)
const halfRating = ref(3.5)

const props = [
  { name: 'max', type: 'number', default: '5', description: 'Número máximo de estrelas' },
  { name: 'size', type: "'sm' | 'md' | 'lg' | 'xl'", default: "'md'", description: 'Tamanho' },
  { name: 'allowHalf', type: 'boolean', default: 'false', description: 'Permitir meia estrela' },
  { name: 'readonly', type: 'boolean', default: 'false', description: 'Somente leitura' },
  { name: 'disabled', type: 'boolean', default: 'false', description: 'Desabilitado' },
  { name: 'showValue', type: 'boolean', default: 'false', description: 'Mostrar valor numérico' },
  { name: 'icon', type: "'star' | 'heart' | 'circle'", default: "'star'", description: 'Tipo de ícone' },
  { name: 'clearable', type: 'boolean', default: 'false', description: 'Permite limpar clicando novamente' },
]
</script>

<template>
  <div class="docs-page">
      <h1>Rating</h1>
      <p class="docs-page__description">
        Componente de avaliação com estrelas interativas.
      </p>

      <h2>Uso básico</h2>
      <CodeExample :code="`<BrRating v-model='rating' />`">
        <BrRating v-model="rating" />
        <p style="margin-top: 12px; color: var(--br-dark-500);">Valor: {{ rating }}</p>
      </CodeExample>

      <h2>Com valor exibido</h2>
      <CodeExample :code="`<BrRating v-model='rating' showValue />`">
        <BrRating v-model="rating" showValue />
      </CodeExample>

      <h2>Meia estrela</h2>
      <CodeExample :code="`<BrRating v-model='halfRating' allowHalf showValue />`">
        <BrRating v-model="halfRating" allowHalf showValue />
      </CodeExample>

      <h2>Tamanhos</h2>
      <CodeExample :code="`<BrRating size='sm' :modelValue='4' />\n<BrRating size='md' :modelValue='4' />\n<BrRating size='lg' :modelValue='4' />\n<BrRating size='xl' :modelValue='4' />`">
        <div style="display: flex; flex-direction: column; gap: 12px;">
          <BrRating size="sm" :modelValue="4" />
          <BrRating size="md" :modelValue="4" />
          <BrRating size="lg" :modelValue="4" />
          <BrRating size="xl" :modelValue="4" />
        </div>
      </CodeExample>

      <h2>Ícones diferentes</h2>
      <CodeExample :code="`<BrRating icon='star' :modelValue='4' />\n<BrRating icon='heart' :modelValue='4' activeColor='#e91e63' />\n<BrRating icon='circle' :modelValue='4' />`">
        <div style="display: flex; flex-direction: column; gap: 12px;">
          <BrRating icon="star" :modelValue="4" size="lg" />
          <BrRating icon="heart" :modelValue="4" size="lg" activeColor="#e91e63" />
          <BrRating icon="circle" :modelValue="4" size="lg" />
        </div>
      </CodeExample>

      <h2>Somente leitura</h2>
      <CodeExample :code="`<BrRating :modelValue='4.5' allowHalf readonly showValue />`">
        <BrRating :modelValue="4.5" allowHalf readonly showValue size="lg" />
      </CodeExample>

      <h2>Props</h2>
    <PropsTable :props="props" />
  </div>
</template>
