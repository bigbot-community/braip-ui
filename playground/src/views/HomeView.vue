<script setup lang="ts">
const components = [
  { name: 'Button', description: 'Botões interativos com múltiplas variantes', path: '/components/button', icon: '🔘' },
  { name: 'Input', description: 'Campos de entrada de texto', path: '/components/input', icon: '📝' },
  { name: 'Select', description: 'Dropdown para seleção de opções', path: '/components/select', icon: '📋' },
  { name: 'Textarea', description: 'Área de texto multilinha', path: '/components/textarea', icon: '📄' },
  { name: 'Badge', description: 'Badges e tags de status', path: '/components/badge', icon: '🏷️' },
  { name: 'Icon', description: 'Biblioteca de ícones SVG', path: '/components/icon', icon: '⭐' },
  { name: 'Spinner', description: 'Indicadores de carregamento', path: '/components/spinner', icon: '⏳' },
  { name: 'Title', description: 'Tipografia de títulos', path: '/components/title', icon: '📰' },
  { name: 'Switch', description: 'Toggle on/off', path: '/components/switch', icon: '🔀' },
  { name: 'Modal', description: 'Diálogos e painéis laterais', path: '/components/modal', icon: '🪟' },
]
</script>

<template>
  <div class="home">
    <!-- Hero -->
    <section class="hero">
      <div class="hero__badge">
        <BrBadge variant="primary">v0.1.0</BrBadge>
      </div>
      <h1 class="hero__title">
        <span class="hero__title-braip">Braip</span>
        <span class="hero__title-ui">UI</span>
      </h1>
      <p class="hero__subtitle">
        Biblioteca de componentes Vue 3 para construir interfaces modernas e acessíveis
      </p>
      <div class="hero__actions">
        <router-link to="/components/button">
          <BrButton variant="primary" size="lg">Começar</BrButton>
        </router-link>
        <a href="https://github.com/braip/braip-ui" target="_blank">
          <BrButton variant="outline" size="lg">GitHub</BrButton>
        </a>
      </div>
    </section>

    <!-- Features -->
    <section class="features">
      <div class="feature">
        <div class="feature__icon">🎨</div>
        <h3 class="feature__title">Design System</h3>
        <p class="feature__text">Tokens de design consistentes para cores, tipografia e espaçamentos</p>
      </div>
      <div class="feature">
        <div class="feature__icon">⚡</div>
        <h3 class="feature__title">Vue 3 + TypeScript</h3>
        <p class="feature__text">Desenvolvido com Composition API e tipagem completa</p>
      </div>
      <div class="feature">
        <div class="feature__icon">📦</div>
        <h3 class="feature__title">Tree-shaking</h3>
        <p class="feature__text">Importe apenas os componentes que você precisa</p>
      </div>
      <div class="feature">
        <div class="feature__icon">♿</div>
        <h3 class="feature__title">Acessível</h3>
        <p class="feature__text">Componentes seguem as melhores práticas de acessibilidade</p>
      </div>
    </section>

    <!-- Components Grid -->
    <section class="components-section">
      <h2 class="section-title">Componentes</h2>
      <div class="components-grid">
        <router-link
          v-for="component in components"
          :key="component.name"
          :to="component.path"
          class="component-card"
        >
          <span class="component-card__icon">{{ component.icon }}</span>
          <h3 class="component-card__title">{{ component.name }}</h3>
          <p class="component-card__description">{{ component.description }}</p>
        </router-link>
      </div>
    </section>

    <!-- Installation -->
    <section class="installation">
      <h2 class="section-title">Instalação</h2>
      <div class="code-block">
        <pre><code>npm i braip-ui</code></pre>
      </div>

      <!-- Vue 3 -->
      <div class="install-section">
        <h3 class="install-section__title">
          <span class="install-section__icon">⚡</span>
          Vue 3
        </h3>
        <div class="code-block">
          <pre><code>// main.ts
import App from './App.vue'
import { BraipUI } from 'braip-ui'
import 'braip-ui/styles'

const app = createApp(App)
app.use(BraipUI, {
  prefix: 'Br',  // opcional: prefixo dos componentes
  theme: 'light' // opcional: 'light' | 'dark'
})
app.mount('#app')</code></pre>
        </div>
      </div>

      <!-- Nuxt 3 -->
      <div class="install-section">
        <h3 class="install-section__title">
          <span class="install-section__icon">💚</span>
          Nuxt 3
        </h3>
        <p class="install-section__description">
          Crie um plugin em <code>plugins/braip-ui.ts</code>:
        </p>
        <div class="code-block">
          <pre><code>// plugins/braip-ui.ts
import { BraipUI } from 'braip-ui'
import 'braip-ui/styles'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(BraipUI, {
    prefix: 'Br',
    theme: 'light'
  })
})</code></pre>
        </div>
        <div class="install-section__badge">
          <BrBadge variant="success">SSR Ready</BrBadge>
        </div>
      </div>

      <!-- Usage -->
      <div class="install-section">
        <h3 class="install-section__title">
          <span class="install-section__icon">🚀</span>
          Uso
        </h3>
        <div class="code-block">
          <pre><code>&lt;template&gt;
  &lt;BrButton variant="primary"&gt;Clique aqui&lt;/BrButton&gt;
  &lt;BrInput v-model="nome" placeholder="Digite seu nome" /&gt;
  &lt;BrModal v-model="isOpen" title="Meu Modal"&gt;
    Conteúdo do modal
  &lt;/BrModal&gt;
&lt;/template&gt;</code></pre>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.home {
  padding-bottom: var(--br-space-16);
}

// =============================================================================
// HERO
// =============================================================================

.hero {
  text-align: center;
  padding: var(--br-space-16) 0;
  margin-bottom: var(--br-space-12);

  &__badge {
    margin-bottom: var(--br-space-4);
  }

  &__title {
    font-size: clamp(3rem, 8vw, 5rem);
    font-weight: var(--br-font-bold);
    margin: 0 0 var(--br-space-4);
    line-height: 1.1;
  }

  &__title-braip {
    color: var(--br-primary-600);
  }

  &__title-ui {
    color: var(--br-dark-700);
  }

  &__subtitle {
    font-size: var(--br-text-xl);
    color: var(--br-dark-700);
    margin: 0 0 var(--br-space-8);
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }

  &__actions {
    display: flex;
    gap: var(--br-space-4);
    justify-content: center;
    flex-wrap: wrap;

    a {
      text-decoration: none;
    }
  }
}

// =============================================================================
// FEATURES
// =============================================================================

.features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: var(--br-space-6);
  margin-bottom: var(--br-space-16);
}

.feature {
  text-align: center;
  padding: var(--br-space-8);
  background: var(--br-light-0);
  border-radius: var(--br-radius-xl);
  box-shadow: var(--br-shadow-sm);
  transition: all var(--br-transition-normal);

  &:hover {
    transform: translateY(-4px);
    box-shadow: var(--br-shadow-md);
  }

  &__icon {
    font-size: 2.5rem;
    margin-bottom: var(--br-space-4);
  }

  &__title {
    margin: 0 0 var(--br-space-2);
    font-size: var(--br-text-lg);
    font-weight: var(--br-font-semibold);
    color: var(--br-dark-0);
  }

  &__text {
    margin: 0;
    font-size: var(--br-text-sm);
    color: var(--br-dark-700);
    line-height: 1.6;
  }
}

// =============================================================================
// COMPONENTS GRID
// =============================================================================

.section-title {
  font-size: var(--br-text-h5);
  font-weight: var(--br-font-bold);
  color: var(--br-dark-0);
  margin: 0 0 var(--br-space-6);
}

.components-section {
  margin-bottom: var(--br-space-16);
}

.components-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: var(--br-space-4);
}

.component-card {
  display: block;
  padding: var(--br-space-6);
  background: var(--br-light-0);
  border: 1px solid var(--br-light-300);
  border-radius: var(--br-radius-lg);
  text-decoration: none;
  transition: all var(--br-transition-fast);

  &:hover {
    border-color: var(--br-primary-400);
    box-shadow: var(--br-shadow-md);
    transform: translateY(-2px);
  }

  &__icon {
    font-size: 1.5rem;
    display: block;
    margin-bottom: var(--br-space-3);
  }

  &__title {
    margin: 0 0 var(--br-space-2);
    font-size: var(--br-text-base);
    font-weight: var(--br-font-semibold);
    color: var(--br-dark-0);
  }

  &__description {
    margin: 0;
    font-size: var(--br-text-sm);
    color: var(--br-dark-700);
  }
}

// =============================================================================
// INSTALLATION
// =============================================================================

.installation {
  max-width: 700px;
}

.install-section {
  margin-top: var(--br-space-8);
  padding: var(--br-space-6);
  background: var(--br-light-0);
  border: 1px solid var(--br-light-300);
  border-radius: var(--br-radius-xl);

  &__title {
    display: flex;
    align-items: center;
    gap: var(--br-space-2);
    margin: 0 0 var(--br-space-4);
    font-size: var(--br-text-lg);
    font-weight: var(--br-font-semibold);
    color: var(--br-dark-0);
  }

  &__icon {
    font-size: 1.25rem;
  }

  &__description {
    margin: 0 0 var(--br-space-4);
    font-size: var(--br-text-sm);
    color: var(--br-dark-700);

    code {
      background: var(--br-light-200);
      padding: var(--br-space-1) var(--br-space-2);
      border-radius: var(--br-radius-sm);
      font-family: 'Fira Code', 'Monaco', monospace;
      font-size: var(--br-text-xs);
    }
  }

  &__badge {
    margin-top: var(--br-space-4);
  }

  .code-block {
    margin-bottom: 0;
  }
}

.code-block {
  background: var(--br-dark-0);
  border-radius: var(--br-radius-lg);
  padding: var(--br-space-4) var(--br-space-6);
  margin-bottom: var(--br-space-4);
  overflow-x: auto;

  pre {
    margin: 0;
  }

  code {
    font-family: 'Fira Code', 'Monaco', monospace;
    font-size: var(--br-text-sm);
    color: var(--br-light-200);
    line-height: 1.6;
  }
}
</style>
