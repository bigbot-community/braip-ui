<script setup lang="ts">
const colorGroups = [
  {
    name: 'Primary',
    description: 'Cor principal da marca',
    colors: [
      { name: '--br-primary-900', value: '#1C3D29' },
      { name: '--br-primary-700', value: '#2D6341' },
      { name: '--br-primary-600', value: '#3C8555' },
      { name: '--br-primary-400', value: '#7CB992' },
      { name: '--br-primary-200', value: '#C6E5D2' },
      { name: '--br-primary-100', value: '#E8F5ED' },
    ],
  },
  {
    name: 'Secondary',
    description: 'Cor secundária para destaques',
    colors: [
      { name: '--br-secondary-900', value: '#2D3748' },
      { name: '--br-secondary-700', value: '#4A5568' },
      { name: '--br-secondary-600', value: '#718096' },
      { name: '--br-secondary-400', value: '#A0AEC0' },
      { name: '--br-secondary-200', value: '#E2E8F0' },
      { name: '--br-secondary-100', value: '#F7FAFC' },
    ],
  },
  {
    name: 'Danger',
    description: 'Estados de erro e ações destrutivas',
    colors: [
      { name: '--br-danger-900', value: '#63171B' },
      { name: '--br-danger-700', value: '#9B2C2C' },
      { name: '--br-danger-600', value: '#C53030' },
      { name: '--br-danger-400', value: '#FC8181' },
      { name: '--br-danger-200', value: '#FED7D7' },
      { name: '--br-danger-100', value: '#FFF5F5' },
    ],
  },
  {
    name: 'Warning',
    description: 'Alertas e avisos',
    colors: [
      { name: '--br-warning-900', value: '#744210' },
      { name: '--br-warning-700', value: '#B7791F' },
      { name: '--br-warning-600', value: '#D69E2E' },
      { name: '--br-warning-400', value: '#F6E05E' },
      { name: '--br-warning-200', value: '#FEFCBF' },
      { name: '--br-warning-100', value: '#FFFFF0' },
    ],
  },
  {
    name: 'Success',
    description: 'Estados de sucesso',
    colors: [
      { name: '--br-success-900', value: '#1C4532' },
      { name: '--br-success-700', value: '#276749' },
      { name: '--br-success-600', value: '#38A169' },
      { name: '--br-success-400', value: '#68D391' },
      { name: '--br-success-200', value: '#C6F6D5' },
      { name: '--br-success-100', value: '#F0FFF4' },
    ],
  },
  {
    name: 'Info',
    description: 'Informações e dicas',
    colors: [
      { name: '--br-info-900', value: '#1A365D' },
      { name: '--br-info-700', value: '#2B6CB0' },
      { name: '--br-info-600', value: '#3182CE' },
      { name: '--br-info-400', value: '#63B3ED' },
      { name: '--br-info-200', value: '#BEE3F8' },
      { name: '--br-info-100', value: '#EBF8FF' },
    ],
  },
  {
    name: 'Light',
    description: 'Tons claros para backgrounds',
    colors: [
      { name: '--br-light-0', value: '#FFFFFF' },
      { name: '--br-light-50', value: '#FAFAFA' },
      { name: '--br-light-100', value: '#F4F4F5' },
      { name: '--br-light-200', value: '#E4E4E7' },
      { name: '--br-light-300', value: '#D4D4D8' },
    ],
  },
  {
    name: 'Dark',
    description: 'Tons escuros para textos',
    colors: [
      { name: '--br-dark-0', value: '#18181B' },
      { name: '--br-dark-500', value: '#71717A' },
      { name: '--br-dark-700', value: '#3F3F46' },
      { name: '--br-dark-900', value: '#27272A' },
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
