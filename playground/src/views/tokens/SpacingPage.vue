<script setup lang="ts">
const spacings = [
  { name: '--br-space-1', value: '0.25rem', px: '4px' },
  { name: '--br-space-2', value: '0.5rem', px: '8px' },
  { name: '--br-space-3', value: '0.75rem', px: '12px' },
  { name: '--br-space-4', value: '1rem', px: '16px' },
  { name: '--br-space-5', value: '1.25rem', px: '20px' },
  { name: '--br-space-6', value: '1.5rem', px: '24px' },
  { name: '--br-space-8', value: '2rem', px: '32px' },
  { name: '--br-space-10', value: '2.5rem', px: '40px' },
  { name: '--br-space-12', value: '3rem', px: '48px' },
  { name: '--br-space-16', value: '4rem', px: '64px' },
]

const radiuses = [
  { name: '--br-radius-none', value: '0' },
  { name: '--br-radius-sm', value: '0.25rem' },
  { name: '--br-radius-md', value: '0.375rem' },
  { name: '--br-radius-lg', value: '0.5rem' },
  { name: '--br-radius-xl', value: '0.75rem' },
  { name: '--br-radius-2xl', value: '1rem' },
  { name: '--br-radius-full', value: '9999px' },
]

const shadows = [
  { name: '--br-shadow-sm', value: '0 1px 2px rgba(0,0,0,0.05)' },
  { name: '--br-shadow-md', value: '0 4px 6px rgba(0,0,0,0.1)' },
  { name: '--br-shadow-lg', value: '0 10px 15px rgba(0,0,0,0.1)' },
  { name: '--br-shadow-xl', value: '0 20px 25px rgba(0,0,0,0.1)' },
]
</script>

<template>
  <div class="tokens-page">
    <header class="tokens-page__header">
      <BrBadge variant="info">Tokens</BrBadge>
      <h1 class="tokens-page__title">Espaçamentos</h1>
      <p class="tokens-page__description">
        Sistema de espaçamentos, bordas arredondadas e sombras para consistência visual.
      </p>
    </header>

    <!-- Spacing -->
    <section class="tokens-section">
      <h2>Espaçamentos</h2>
      <p>Escala de espaçamentos baseada em múltiplos de 4px.</p>
      <div class="spacing-list">
        <div v-for="space in spacings" :key="space.name" class="spacing-item">
          <div class="spacing-item__visual">
            <div class="spacing-item__bar" :style="{ width: space.px }" />
          </div>
          <div class="spacing-item__info">
            <code>{{ space.name }}</code>
            <span>{{ space.value }} ({{ space.px }})</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Border Radius -->
    <section class="tokens-section">
      <h2>Border Radius</h2>
      <div class="radius-grid">
        <div v-for="radius in radiuses" :key="radius.name" class="radius-card">
          <div
            class="radius-card__preview"
            :style="{ borderRadius: `var(${radius.name})` }"
          />
          <code>{{ radius.name }}</code>
          <span>{{ radius.value }}</span>
        </div>
      </div>
    </section>

    <!-- Shadows -->
    <section class="tokens-section">
      <h2>Sombras</h2>
      <div class="shadow-grid">
        <div v-for="shadow in shadows" :key="shadow.name" class="shadow-card">
          <div
            class="shadow-card__preview"
            :style="{ boxShadow: `var(${shadow.name})` }"
          />
          <code>{{ shadow.name }}</code>
        </div>
      </div>
    </section>

    <!-- Usage -->
    <section class="usage-section">
      <h2>Uso</h2>
      <div class="code-block">
        <pre><code>.my-card {
  padding: var(--br-space-4);
  margin-bottom: var(--br-space-6);
  border-radius: var(--br-radius-lg);
  box-shadow: var(--br-shadow-md);
}

.my-button {
  padding: var(--br-space-2) var(--br-space-4);
  border-radius: var(--br-radius-md);
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

.tokens-section {
  margin-bottom: var(--br-space-10);

  h2 {
    font-size: var(--br-text-h5);
    font-weight: var(--br-font-semibold);
    color: var(--neutralDarkGrey);
    margin: 0 0 var(--br-space-2);
  }

  p {
    font-size: var(--br-text-sm);
    color: var(--neutralDarkGrey7);
    margin: 0 0 var(--br-space-4);
  }
}

.spacing-list {
  display: flex;
  flex-direction: column;
  gap: var(--br-space-3);
}

.spacing-item {
  display: flex;
  align-items: center;
  gap: var(--br-space-4);
  padding: var(--br-space-3);
  background: var(--neutralLightGrey9);
  border: 1px solid var(--neutralLightGrey5);
  border-radius: var(--br-radius-md);

  &__visual {
    width: 100px;
    display: flex;
    align-items: center;
  }

  &__bar {
    height: 16px;
    background: var(--brandPrimary6);
    border-radius: var(--br-radius-sm);
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

.radius-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: var(--br-space-4);
}

.radius-card {
  background: var(--neutralLightGrey9);
  border: 1px solid var(--neutralLightGrey5);
  border-radius: var(--br-radius-lg);
  padding: var(--br-space-4);
  text-align: center;

  &__preview {
    width: 60px;
    height: 60px;
    background: var(--brandPrimary6);
    margin: 0 auto var(--br-space-3);
  }

  code {
    display: block;
    font-family: 'Fira Code', monospace;
    font-size: var(--br-text-xs);
    color: var(--neutralDarkGrey);
    margin-bottom: var(--br-space-1);
  }

  span {
    font-size: var(--br-text-xs);
    color: var(--neutralDarkGrey7);
  }
}

.shadow-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: var(--br-space-6);
}

.shadow-card {
  text-align: center;

  &__preview {
    width: 100%;
    height: 80px;
    background: var(--neutralLightGrey9);
    border-radius: var(--br-radius-lg);
    margin-bottom: var(--br-space-3);
  }

  code {
    font-family: 'Fira Code', monospace;
    font-size: var(--br-text-xs);
    color: var(--neutralDarkGrey);
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
