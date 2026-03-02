<script setup lang="ts">
const fontSizes = [
  { name: '--br-text-xs', value: '0.75rem', px: '12px' },
  { name: '--br-text-sm', value: '0.875rem', px: '14px' },
  { name: '--br-text-base', value: '1rem', px: '16px' },
  { name: '--br-text-lg', value: '1.125rem', px: '18px' },
  { name: '--br-text-xl', value: '1.25rem', px: '20px' },
  { name: '--br-text-2xl', value: '1.5rem', px: '24px' },
  { name: '--br-text-h6', value: '1rem', px: '16px' },
  { name: '--br-text-h5', value: '1.25rem', px: '20px' },
  { name: '--br-text-h4', value: '1.5rem', px: '24px' },
  { name: '--br-text-h3', value: '1.875rem', px: '30px' },
  { name: '--br-text-h2', value: '2.25rem', px: '36px' },
  { name: '--br-text-h1', value: '3rem', px: '48px' },
]

const fontWeights = [
  { name: '--br-font-normal', value: '400' },
  { name: '--br-font-medium', value: '500' },
  { name: '--br-font-semibold', value: '600' },
  { name: '--br-font-bold', value: '700' },
]
</script>

<template>
  <div class="tokens-page">
    <header class="tokens-page__header">
      <BrBadge variant="info">Tokens</BrBadge>
      <h1 class="tokens-page__title">Tipografia</h1>
      <p class="tokens-page__description">
        Sistema tipográfico com tamanhos e pesos consistentes para hierarquia visual clara.
      </p>
    </header>

    <!-- Font Family -->
    <section class="typography-section">
      <h2>Família Tipográfica</h2>
      <div class="font-family-card">
        <p class="font-family-card__sample">
          Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz
        </p>
        <p class="font-family-card__numbers">0 1 2 3 4 5 6 7 8 9</p>
        <code>--br-font-primary: 'Inter', sans-serif</code>
      </div>
    </section>

    <!-- Font Sizes -->
    <section class="typography-section">
      <h2>Tamanhos</h2>
      <div class="size-list">
        <div v-for="size in fontSizes" :key="size.name" class="size-item">
          <span class="size-item__sample" :style="{ fontSize: `var(${size.name})` }">
            The quick brown fox
          </span>
          <div class="size-item__info">
            <code>{{ size.name }}</code>
            <span>{{ size.value }} ({{ size.px }})</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Font Weights -->
    <section class="typography-section">
      <h2>Pesos</h2>
      <div class="weight-list">
        <div v-for="weight in fontWeights" :key="weight.name" class="weight-item">
          <span class="weight-item__sample" :style="{ fontWeight: weight.value }">
            The quick brown fox jumps over the lazy dog
          </span>
          <div class="weight-item__info">
            <code>{{ weight.name }}</code>
            <span>{{ weight.value }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Usage -->
    <section class="usage-section">
      <h2>Uso</h2>
      <div class="code-block">
        <pre><code>.my-title {
  font-size: var(--br-text-h3);
  font-weight: var(--br-font-bold);
  font-family: var(--br-font-primary);
}

.my-text {
  font-size: var(--br-text-base);
  font-weight: var(--br-font-normal);
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
    color: var(--neutralDarkGrey);
    margin: var(--br-space-4) 0;
  }

  &__description {
    font-size: var(--br-text-lg);
    color: var(--neutralDarkGrey7);
    line-height: 1.6;
    margin: 0;
  }
}

.typography-section {
  margin-bottom: var(--br-space-10);

  h2 {
    font-size: var(--br-text-h5);
    font-weight: var(--br-font-semibold);
    color: var(--neutralDarkGrey);
    margin: 0 0 var(--br-space-4);
    padding-bottom: var(--br-space-3);
    border-bottom: 1px solid var(--neutralLightGrey5);
  }
}

.font-family-card {
  background: var(--neutralLightGrey9);
  border: 1px solid var(--neutralLightGrey5);
  border-radius: var(--br-radius-lg);
  padding: var(--br-space-6);

  &__sample {
    font-size: var(--br-text-2xl);
    color: var(--neutralDarkGrey);
    margin: 0 0 var(--br-space-2);
  }

  &__numbers {
    font-size: var(--br-text-xl);
    color: var(--neutralDarkGrey7);
    margin: 0 0 var(--br-space-4);
  }

  code {
    font-family: 'Fira Code', monospace;
    font-size: var(--br-text-sm);
    color: var(--brandPrimary6);
    background: var(--brandPrimaryLightest);
    padding: var(--br-space-1) var(--br-space-2);
    border-radius: var(--br-radius-sm);
  }
}

.size-list,
.weight-list {
  display: flex;
  flex-direction: column;
  gap: var(--br-space-4);
}

.size-item,
.weight-item {
  background: var(--neutralLightGrey9);
  border: 1px solid var(--neutralLightGrey5);
  border-radius: var(--br-radius-lg);
  padding: var(--br-space-4);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: var(--br-space-4);

  &__sample {
    color: var(--neutralDarkGrey);
    flex: 1;
    min-width: 200px;
  }

  &__info {
    display: flex;
    align-items: center;
    gap: var(--br-space-4);

    code {
      font-family: 'Fira Code', monospace;
      font-size: var(--br-text-xs);
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
}

.usage-section {
  margin-top: var(--br-space-12);

  h2 {
    font-size: var(--br-text-h5);
    font-weight: var(--br-font-semibold);
    color: var(--neutralDarkGrey);
    margin: 0 0 var(--br-space-4);
  }
}

.code-block {
  background: var(--neutralDarkGrey);
  border-radius: var(--br-radius-lg);
  padding: var(--br-space-4) var(--br-space-6);
  overflow-x: auto;

  pre {
    margin: 0;
  }

  code {
    font-family: 'Fira Code', monospace;
    font-size: var(--br-text-sm);
    color: var(--neutralLightGrey6);
    line-height: 1.6;
  }
}
</style>
