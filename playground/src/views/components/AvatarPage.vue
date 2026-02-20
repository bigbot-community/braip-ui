<script setup lang="ts">
import CodeExample from '../../components/CodeExample.vue'
import PropsTable from '../../components/PropsTable.vue'

const props = [
  { name: 'src', type: 'string', default: '-', description: 'URL da imagem do avatar' },
  { name: 'alt', type: 'string', default: '-', description: 'Texto alternativo' },
  { name: 'initials', type: 'string', default: '-', description: 'Iniciais quando não há imagem' },
  { name: 'size', type: "'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'", default: "'md'", description: 'Tamanho do avatar' },
  { name: 'shape', type: "'circle' | 'square'", default: "'circle'", description: 'Formato do avatar' },
  { name: 'showStatus', type: 'boolean', default: 'false', description: 'Mostrar indicador de status' },
  { name: 'status', type: "'online' | 'offline' | 'away' | 'busy'", default: '-', description: 'Status do usuário' },
]
</script>

<template>
  <div class="docs-page">
      <h1>Avatar</h1>
      <p class="docs-page__description">
        O componente Avatar exibe uma imagem de perfil ou iniciais do usuário com suporte a status.
      </p>

      <h2>Uso básico</h2>
      <CodeExample
        :code="`<BrAvatar src='https://i.pravatar.cc/150?img=1' alt='User' />
<BrAvatar initials='MC' />
<BrAvatar />`"
      >
        <div style="display: flex; gap: 16px; align-items: center;">
          <BrAvatar src="https://i.pravatar.cc/150?img=1" alt="User" />
          <BrAvatar initials="MC" />
          <BrAvatar />
        </div>
      </CodeExample>

      <h2>Tamanhos</h2>
      <CodeExample
        :code="`<BrAvatar size='xs' initials='XS' />
<BrAvatar size='sm' initials='SM' />
<BrAvatar size='md' initials='MD' />
<BrAvatar size='lg' initials='LG' />
<BrAvatar size='xl' initials='XL' />
<BrAvatar size='2xl' initials='2X' />`"
      >
        <div style="display: flex; gap: 16px; align-items: center;">
          <BrAvatar size="xs" initials="XS" />
          <BrAvatar size="sm" initials="SM" />
          <BrAvatar size="md" initials="MD" />
          <BrAvatar size="lg" initials="LG" />
          <BrAvatar size="xl" initials="XL" />
          <BrAvatar size="2xl" initials="2X" />
        </div>
      </CodeExample>

      <h2>Formato</h2>
      <CodeExample
        :code="`<BrAvatar shape='circle' initials='CI' />
<BrAvatar shape='square' initials='SQ' />`"
      >
        <div style="display: flex; gap: 16px; align-items: center;">
          <BrAvatar shape="circle" initials="CI" size="lg" />
          <BrAvatar shape="square" initials="SQ" size="lg" />
        </div>
      </CodeExample>

      <h2>Com Status</h2>
      <CodeExample
        :code="`<BrAvatar showStatus status='online' initials='ON' />
<BrAvatar showStatus status='away' initials='AW' />
<BrAvatar showStatus status='busy' initials='BS' />
<BrAvatar showStatus status='offline' initials='OF' />`"
      >
        <div style="display: flex; gap: 16px; align-items: center;">
          <BrAvatar showStatus status="online" initials="ON" size="lg" />
          <BrAvatar showStatus status="away" initials="AW" size="lg" />
          <BrAvatar showStatus status="busy" initials="BS" size="lg" />
          <BrAvatar showStatus status="offline" initials="OF" size="lg" />
        </div>
      </CodeExample>

      <h2>Props</h2>
    <PropsTable :props="props" />
  </div>
</template>
