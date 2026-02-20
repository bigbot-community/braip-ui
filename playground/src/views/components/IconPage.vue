<script setup lang="ts">
import CodeExample from '../../components/CodeExample.vue'
import PropsTable from '../../components/PropsTable.vue'

const icons = [
  'airplane',
  'anchor',
  'arrow-bottom-right-o',
  'arrow-bottom-right-r',
  'arrow-bottom-right',
  'arrow-down-o',
  'arrow-down-r',
  'arrow-down',
  'arrow-left-o',
  'arrow-left-r',
  'arrow-left',
  'arrow-long-up',
  'arrow-right-o',
  'arrow-right-r',
  'arrow-right',
  'arrow-top-left-o',
  'arrow-top-left-r',
  'arrow-top-left',
  'arrow-top-right-o',
  'arrow-top-right-r',
  'arrow-top-right',
  'arrow-up-o',
  'arrow-up-r',
  'arrow-up',
  'awards',
  'band-aid',
  'bee',
  'bitbucket',
  'block',
  'bowl',
  'boy',
  'briefcase',
  'browse',
  'brush',
  'calibrate',
  'cap',
  'card-clubs',
  'card-diamonds',
  'card-hearts',
  'card-spades',
  'check-o',
  'check-r',
  'check',
  'chevron-double-down-o',
  'chevron-double-down-r',
  'chevron-double-down',
  'chevron-double-left-o',
  'chevron-double-left-r',
  'chevron-double-left',
  'chevron-double-right-o',
  'chevron-double-right-r',
  'chevron-double-right',
  'pix',
  'push-chevron-left-o',
  'push-chevron-left-r',
  'push-chevron-left',
  'push-chevron-right-o',
  'push-chevron-right-r',
  'push-chevron-right',
  'push-chevron-up-o',
  'push-chevron-up-r',
  'push-chevron-up',
  'sync',
  'trending-down',
  'trending'
]

const iconProps = [
  { name: 'name', type: 'string', default: '-', description: 'Nome do arquivo do ícone (sem extensão) localizado em assets/icons', required: true },
  { name: 'size', type: "'xs' | 'sm' | 'md' | 'lg' | 'xl'", default: "'md'", description: 'Tamanho do ícone' },
  { name: 'color', type: 'string', default: "'currentColor'", description: 'Cor do ícone (herda cor do texto)' },
  { name: 'spin', type: 'boolean', default: 'false', description: 'Aplica animação de rotação' },
]
</script>

<template>
  <div class="component-page">
    <header class="component-page__header">
      <BrBadge variant="primary">Atom</BrBadge>
      <h1 class="component-page__title">Icon</h1>
      <p class="component-page__description">
        Biblioteca de ícones SVG otimizados para uso consistente em toda a interface.
      </p>
    </header>

    <!-- Icons Grid -->
    <section class="component-page__section">
      <h2>Ícones Disponíveis</h2>
      <div class="icons-grid">
        <div v-for="icon in icons" :key="icon" class="icon-card">
          <BrIcon :name="icon" size="lg" />
          <span class="icon-card__name">{{ icon }}</span>
        </div>
      </div>
    </section>

    <!-- Usage -->
    <section class="component-page__section">
      <h2>Uso Básico</h2>
      <CodeExample
        title="Ícone Simples"
        code='<BrIcon name="check" />
<BrIcon name="arrow-right" />
<BrIcon name="pix" />'
      >
        <BrIcon name="check" />
        <BrIcon name="arrow-right" />
        <BrIcon name="pix" />
      </CodeExample>
    </section>

    <!-- Sizes -->
    <section class="component-page__section">
      <h2>Tamanhos</h2>
      <CodeExample
        title="Todos os Tamanhos"
        code='<BrIcon name="user" size="sm" />
<BrIcon name="user" size="md" />
<BrIcon name="user" size="lg" />
<BrIcon name="user" size="xl" />'
      >
        <BrIcon name="user" size="sm" />
        <BrIcon name="user" size="md" />
        <BrIcon name="user" size="lg" />
        <BrIcon name="user" size="xl" />
      </CodeExample>
    </section>

    <!-- Colors -->
    <section class="component-page__section">
      <h2>Cores</h2>
      <p>O ícone herda a cor do texto do elemento pai por padrão.</p>
      <CodeExample
        title="Ícones Coloridos"
        code='<span style="color: var(--br-primary-600)">
  <BrIcon name="check" />
</span>
<span style="color: var(--br-success-600)">
  <BrIcon name="success" />
</span>
<span style="color: var(--br-danger-600)">
  <BrIcon name="error" />
</span>'
      >
        <span style="color: var(--br-primary-600)">
          <BrIcon name="check" size="lg" />
        </span>
        <span style="color: var(--br-success-600)">
          <BrIcon name="success" size="lg" />
        </span>
        <span style="color: var(--br-danger-600)">
          <BrIcon name="error" size="lg" />
        </span>
        <span style="color: var(--br-warning-600)">
          <BrIcon name="warning" size="lg" />
        </span>
      </CodeExample>
    </section>

    <!-- API -->
    <section class="component-page__section">
      <h2>API</h2>
      <h3>Props</h3>
      <PropsTable :props="iconProps" />
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
    color: var(--br-dark-0);
    margin: var(--br-space-4) 0;
  }

  &__description {
    font-size: var(--br-text-lg);
    color: var(--br-dark-700);
    line-height: 1.6;
    margin: 0;
  }

  &__section {
    margin-bottom: var(--br-space-12);

    h2 {
      font-size: var(--br-text-h5);
      font-weight: var(--br-font-semibold);
      color: var(--br-dark-0);
      margin: 0 0 var(--br-space-4);
      padding-bottom: var(--br-space-3);
      border-bottom: 1px solid var(--br-light-300);
    }

    h3 {
      font-size: var(--br-text-lg);
      font-weight: var(--br-font-semibold);
      color: var(--br-dark-0);
      margin: var(--br-space-6) 0 var(--br-space-3);
    }

    p {
      color: var(--br-dark-700);
      margin: 0 0 var(--br-space-4);
      line-height: 1.6;
    }
  }
}

.icons-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: var(--br-space-4);
  margin-bottom: var(--br-space-8);
}

.icon-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--br-space-2);
  padding: var(--br-space-4);
  background: var(--br-light-0);
  border: 1px solid var(--br-light-300);
  border-radius: var(--br-radius-lg);
  transition: all var(--br-transition-fast);

  &:hover {
    border-color: var(--br-primary-400);
    box-shadow: var(--br-shadow-sm);
  }

  &__name {
    font-size: var(--br-text-xs);
    color: var(--br-dark-700);
    text-align: center;
  }
}
</style>
