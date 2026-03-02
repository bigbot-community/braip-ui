<script setup lang="ts">
const colorGroups = [
  {
    name: 'Primary',
    description: 'Cor principal da marca',
    colors: [
      { name: '--br-primary-900', value: '#2C1664' },
      { name: '--br-primary-700', value: '#572BC9' },
      { name: '--br-primary-600', value: '#6D36FB' },
      { name: '--br-primary-400', value: '#A786FD' },
      { name: '--br-primary-200', value: '#E2D7FE' },
      { name: '--br-primary-100', value: '#F4F0FF' },
    ],
  },
  {
    name: 'Secondary',
    description: 'Cor secundária para destaques',
    colors: [
      { name: '--br-secondary-900', value: '#3D6614' },
      { name: '--br-secondary-700', value: '#7ACC29' },
      { name: '--br-secondary-600', value: '#99FF33' },
      { name: '--br-secondary-400', value: '#C2FF85' },
      { name: '--br-secondary-200', value: '#EBFFD6' },
      { name: '--br-secondary-100', value: '#F5FFEB' },
    ],
  },
  {
    name: 'Danger',
    description: 'Estados de erro e ações destrutivas',
    colors: [
      { name: '--br-danger-900', value: '#750000' },
      { name: '--br-danger-700', value: '#CA1515' },
      { name: '--br-danger-600', value: '#FF2E2E' },
      { name: '--br-danger-400', value: '#FF9797' },
      { name: '--br-danger-200', value: '#FFD7D7' },
      { name: '--br-danger-100', value: '#FFEFEF' },
    ],
  },
  {
    name: 'Warning',
    description: 'Alertas e avisos',
    colors: [
      { name: '--br-warning-900', value: '#9C5E00' },
      { name: '--br-warning-700', value: '#D88100' },
      { name: '--br-warning-600', value: '#FF9900' },
      { name: '--br-warning-400', value: '#FFC46B' },
      { name: '--br-warning-200', value: '#FFE2B7' },
      { name: '--br-warning-100', value: '#FFF3E0' },
    ],
  },
  {
    name: 'Success',
    description: 'Estados de sucesso',
    colors: [
      { name: '--br-success-900', value: '#297A1B' },
      { name: '--br-success-700', value: '#4BB639' },
      { name: '--br-success-600', value: '#5EC34D' },
      { name: '--br-success-400', value: '#8BE37C' },
      { name: '--br-success-200', value: '#BFFFB4' },
      { name: '--br-success-100', value: '#E5FFE1' },
    ],
  },
  {
    name: 'Info',
    description: 'Informações e dicas',
    colors: [
      { name: '--br-info-900', value: '#0A5FB4' },
      { name: '--br-info-700', value: '#1D88F3' },
      { name: '--br-info-600', value: '#3399FF' },
      { name: '--br-info-400', value: '#96CAFF' },
      { name: '--br-info-200', value: '#C2E2FF' },
      { name: '--br-info-100', value: '#E9F4FF' },
    ],
  },
  {
    name: 'Light',
    description: 'Tons claros para backgrounds',
    colors: [
      { name: '--br-light-0', value: '#FFFFFF' },
      { name: '--br-light-100', value: '#F7F7FC' },
      { name: '--br-light-200', value: '#EBEBF8' },
      { name: '--br-light-400', value: '#BEBEDD' },
      { name: '--br-light-600', value: '#9494B8' },
      { name: '--br-light-700', value: '#8383A4' },
    ],
  },
  {
    name: 'Dark',
    description: 'Tons escuros para textos',
    colors: [
      { name: '--br-dark-0', value: '#0B0B0E' },
      { name: '--br-dark-100', value: '#0D0D12' },
      { name: '--br-dark-200', value: '#19191E' },
      { name: '--br-dark-400', value: '#343438' },
      { name: '--br-dark-600', value: '#505057' },
      { name: '--br-dark-700', value: '#5B5B61' },
    ],
  },
]
</script>

<template>
  <div class="tokens-page">
    <header class="tokens-page__header">
      <BrBadge variant="info">Tokens</BrBadge>
      <h1 class="tokens-page__title">Cores</h1>
      <p class="tokens-page__description">
        Sistema de cores consistente para toda a interface, incluindo cores primárias, secundárias, semânticas e neutras.
      </p>
    </header>

    <section v-for="group in colorGroups" :key="group.name" class="color-section">
      <h2 class="color-section__title">{{ group.name }}</h2>
      <p class="color-section__description">{{ group.description }}</p>
      <div class="color-grid">
        <div v-for="color in group.colors" :key="color.name" class="color-card">
          <div class="color-card__preview" :style="{ background: `var(${color.name})` }" />
          <div class="color-card__info">
            <code class="color-card__name">{{ color.name }}</code>
            <span class="color-card__value">{{ color.value }}</span>
          </div>
        </div>
      </div>
    </section>

    <section class="usage-section">
      <h2>Uso</h2>
      <div class="code-block">
        <pre><code>/* No CSS/SCSS */
.my-element {
  color: var(--br-primary-600);
  background: var(--br-light-100);
  border-color: var(--br-danger-600);
}</code></pre>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.tokens-page {
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
}

.color-section {
  margin-bottom: var(--br-space-10);

  &__title {
    font-size: var(--br-text-h5);
    font-weight: var(--br-font-semibold);
    color: var(--br-dark-0);
    margin: 0 0 var(--br-space-2);
  }

  &__description {
    font-size: var(--br-text-sm);
    color: var(--br-dark-700);
    margin: 0 0 var(--br-space-4);
  }
}

.color-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: var(--br-space-4);
}

.color-card {
  background: var(--br-light-0);
  border: 1px solid var(--br-light-300);
  border-radius: var(--br-radius-lg);
  overflow: hidden;

  &__preview {
    height: 80px;
  }

  &__info {
    padding: var(--br-space-3);
  }

  &__name {
    display: block;
    font-family: 'Fira Code', monospace;
    font-size: var(--br-text-xs);
    color: var(--br-dark-0);
    margin-bottom: var(--br-space-1);
  }

  &__value {
    font-size: var(--br-text-xs);
    color: var(--br-dark-700);
  }
}

.usage-section {
  margin-top: var(--br-space-12);

  h2 {
    font-size: var(--br-text-h5);
    font-weight: var(--br-font-semibold);
    color: var(--br-dark-0);
    margin: 0 0 var(--br-space-4);
  }
}

.code-block {
  background: var(--br-dark-0);
  border-radius: var(--br-radius-lg);
  padding: var(--br-space-4) var(--br-space-6);
  overflow-x: auto;

  pre {
    margin: 0;
  }

  code {
    font-family: 'Fira Code', monospace;
    font-size: var(--br-text-sm);
    color: var(--br-light-200);
    line-height: 1.6;
  }
}
</style>
