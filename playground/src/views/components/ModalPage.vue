<script setup lang="ts">
import CodeExample from '../../components/CodeExample.vue'
import PropsTable from '../../components/PropsTable.vue'

const showBasicModal = ref(false)
const showAsideModal = ref(false)
const showSmModal = ref(false)
const showLgModal = ref(false)
const showFooterModal = ref(false)

const modalProps = [
  { name: 'modelValue', type: 'boolean', default: 'false', description: 'Controla visibilidade do modal (v-model)' },
  { name: 'title', type: 'string', default: "''", description: 'Título do modal' },
  { name: 'variant', type: "'center' | 'aside'", default: "'center'", description: 'Estilo do modal (centralizado ou lateral)' },
  { name: 'size', type: "'sm' | 'md' | 'lg' | 'xl'", default: "'md'", description: 'Tamanho do modal' },
  { name: 'closable', type: 'boolean', default: 'true', description: 'Exibe botão de fechar' },
  { name: 'closeOnClickOutside', type: 'boolean', default: 'true', description: 'Fecha ao clicar fora' },
  { name: 'closeOnEscape', type: 'boolean', default: 'true', description: 'Fecha ao pressionar ESC' },
  { name: 'showHeader', type: 'boolean', default: 'true', description: 'Exibe cabeçalho' },
  { name: 'showFooter', type: 'boolean', default: 'false', description: 'Exibe rodapé com botões padrão' },
  { name: 'persistent', type: 'boolean', default: 'false', description: 'Impede fechamento (para confirmações)' },
]

const modalEvents = [
  { name: 'close', type: '() => void', default: '-', description: 'Emitido quando o modal é fechado' },
  { name: 'confirm', type: '() => void', default: '-', description: 'Emitido ao clicar em confirmar' },
  { name: 'cancel', type: '() => void', default: '-', description: 'Emitido ao clicar em cancelar' },
]
</script>

<template>
  <div class="component-page">
    <header class="component-page__header">
      <BrBadge variant="secondary">Molecule</BrBadge>
      <h1 class="component-page__title">Modal</h1>
      <p class="component-page__description">
        Diálogos modais para exibir conteúdo em overlay, disponível em variantes centralizada e lateral.
      </p>
    </header>

    <!-- Usage -->
    <section class="component-page__section">
      <h2>Uso Básico</h2>
      <CodeExample
        title="Modal Simples"
        code='<BrButton @click="showModal = true">Abrir Modal</BrButton>

<BrModal v-model="showModal" title="Título do Modal">
  <p>Conteúdo do modal aqui.</p>
</BrModal>'
      >
        <BrButton @click="showBasicModal = true">Abrir Modal</BrButton>
      </CodeExample>
    </section>

    <!-- Variants -->
    <section class="component-page__section">
      <h2>Variantes</h2>

      <CodeExample
        title="Modal Central"
        description="Padrão - aparece centralizado na tela"
        code='<BrModal v-model="show" variant="center" title="Modal Central">
  <p>Conteúdo centralizado.</p>
</BrModal>'
      >
        <BrButton @click="showBasicModal = true">Modal Central</BrButton>
      </CodeExample>

      <CodeExample
        title="Modal Lateral (Aside)"
        description="Aparece deslizando do lado direito"
        code='<BrModal v-model="show" variant="aside" title="Painel Lateral">
  <p>Conteúdo do painel lateral.</p>
</BrModal>'
      >
        <BrButton variant="secondary" @click="showAsideModal = true">Modal Lateral</BrButton>
      </CodeExample>
    </section>

    <!-- Sizes -->
    <section class="component-page__section">
      <h2>Tamanhos</h2>
      <CodeExample
        title="Diferentes Tamanhos"
        code='<BrModal size="sm" title="Pequeno">...</BrModal>
<BrModal size="md" title="Médio">...</BrModal>
<BrModal size="lg" title="Grande">...</BrModal>
<BrModal size="xl" title="Extra Grande">...</BrModal>'
      >
        <BrButton size="sm" @click="showSmModal = true">Pequeno (sm)</BrButton>
        <BrButton @click="showBasicModal = true">Médio (md)</BrButton>
        <BrButton size="lg" @click="showLgModal = true">Grande (lg)</BrButton>
      </CodeExample>
    </section>

    <!-- Footer -->
    <section class="component-page__section">
      <h2>Com Rodapé</h2>
      <CodeExample
        title="Footer com Ações"
        description="Use showFooter para exibir botões de confirmar/cancelar"
        code='<BrModal
  v-model="show"
  title="Confirmação"
  show-footer
  @confirm="handleConfirm"
  @cancel="handleCancel"
>
  <p>Deseja confirmar esta ação?</p>
</BrModal>'
      >
        <BrButton @click="showFooterModal = true">Modal com Footer</BrButton>
      </CodeExample>
    </section>

    <!-- API -->
    <section class="component-page__section">
      <h2>API</h2>

      <h3>Props</h3>
      <PropsTable :props="modalProps" />

      <h3>Eventos</h3>
      <PropsTable :props="modalEvents" />

      <h3>Slots</h3>
      <div class="slots-list">
        <div class="slot-item">
          <code>default</code>
          <span>Conteúdo principal do modal</span>
        </div>
        <div class="slot-item">
          <code>header</code>
          <span>Substitui o cabeçalho padrão</span>
        </div>
        <div class="slot-item">
          <code>footer</code>
          <span>Substitui o rodapé padrão</span>
        </div>
      </div>
    </section>

    <!-- Modals -->
    <BrModal v-model="showBasicModal" title="Modal Central">
      <p>Este é um modal centralizado com tamanho médio.</p>
      <p>Você pode fechar clicando fora, pressionando ESC ou no botão X.</p>
    </BrModal>

    <BrModal v-model="showAsideModal" variant="aside" title="Painel Lateral" size="lg">
      <p>Este é um modal lateral (aside).</p>
      <p>Ideal para formulários, filtros ou detalhes de itens.</p>
      <div style="margin-top: 16px;">
        <BrInput placeholder="Campo de exemplo" />
      </div>
    </BrModal>

    <BrModal v-model="showSmModal" title="Modal Pequeno" size="sm">
      <p>Modal com tamanho pequeno (sm).</p>
    </BrModal>

    <BrModal v-model="showLgModal" title="Modal Grande" size="lg">
      <p>Modal com tamanho grande (lg).</p>
      <p>Mais espaço para conteúdo extenso.</p>
    </BrModal>

    <BrModal
      v-model="showFooterModal"
      title="Confirmar Ação"
      show-footer
      @confirm="showFooterModal = false"
      @cancel="showFooterModal = false"
    >
      <p>Você tem certeza que deseja continuar com esta ação?</p>
      <p style="color: var(--neutralDarkGrey7); font-size: 14px;">Esta ação não pode ser desfeita.</p>
    </BrModal>
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
  }
}

.slots-list {
  display: flex;
  flex-direction: column;
  gap: var(--br-space-3);
}

.slot-item {
  display: flex;
  align-items: center;
  gap: var(--br-space-4);
  padding: var(--br-space-3) var(--br-space-4);
  background: var(--neutralLightGrey7);
  border-radius: var(--br-radius-md);

  code {
    font-family: 'Fira Code', monospace;
    font-size: var(--br-text-sm);
    color: var(--brandPrimary6);
    background: var(--brandPrimaryLightest);
    padding: var(--br-space-1) var(--br-space-2);
    border-radius: var(--br-radius-sm);
  }

  span {
    font-size: var(--br-text-sm);
    color: var(--neutralDarkGrey7);
  }
}
</style>
