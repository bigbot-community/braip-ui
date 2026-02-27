<script setup lang="ts">
import { ref } from 'vue'

const textValue = ref('')

const textareaProps = [
  { name: 'modelValue', type: 'string', default: "''", description: 'Valor do textarea (v-model)' },
  { name: 'placeholder', type: 'string', default: '-', description: 'Texto placeholder' },
  { name: 'rows', type: 'number', default: '4', description: 'Número de linhas visíveis' },
  { name: 'maxlength', type: 'number', default: '-', description: 'Limite máximo de caracteres' },
  { name: 'showCount', type: 'boolean', default: 'false', description: 'Exibe contador de caracteres' },
  { name: 'resize', type: "'none' | 'vertical' | 'horizontal' | 'both'", default: "'vertical'", description: 'Comportamento de redimensionamento' },
  { name: 'disabled', type: 'boolean', default: 'false', description: 'Desabilita o textarea' },
  { name: 'readonly', type: 'boolean', default: 'false', description: 'Somente leitura' },
  { name: 'error', type: 'boolean', default: 'false', description: 'Estado de erro' },
]
</script>

<template>
  <div class="component-page">
    <header class="component-page__header">
      <BrBadge variant="primary">Atom</BrBadge>
      <h1 class="component-page__title">Textarea</h1>
      <p class="component-page__description">
        Campo de texto multilinha para entrada de conteúdo extenso.
      </p>
    </header>

    <!-- Usage -->
    <section class="component-page__section">
      <h2>Uso Básico</h2>
      <CodeExample
        title="Textarea Simples"
        code='<BrTextarea v-model="text" placeholder="Digite seu texto..." />'
      >
        <div style="width: 400px;">
          <BrTextarea v-model="textValue" placeholder="Digite seu texto..." />
        </div>
      </CodeExample>
    </section>

    <!-- Character Count -->
    <section class="component-page__section">
      <h2>Contador de Caracteres</h2>
      <CodeExample
        title="Com Limite de Caracteres"
        description="Mostra contador quando showCount está ativo"
        code='<BrTextarea
  v-model="text"
  placeholder="Máximo 200 caracteres"
  :maxlength="200"
  show-count
/>'
      >
        <div style="width: 400px;">
          <BrTextarea
            v-model="textValue"
            placeholder="Máximo 200 caracteres"
            :maxlength="200"
            show-count
          />
        </div>
      </CodeExample>
    </section>

    <!-- Rows -->
    <section class="component-page__section">
      <h2>Altura</h2>
      <CodeExample
        title="Diferentes Alturas"
        code='<BrTextarea :rows="2" placeholder="2 linhas" />
<BrTextarea :rows="4" placeholder="4 linhas" />
<BrTextarea :rows="6" placeholder="6 linhas" />'
      >
        <div style="display: flex; flex-direction: column; gap: 16px; width: 400px;">
          <BrTextarea :rows="2" placeholder="2 linhas" />
          <BrTextarea :rows="4" placeholder="4 linhas" />
          <BrTextarea :rows="6" placeholder="6 linhas" />
        </div>
      </CodeExample>
    </section>

    <!-- States -->
    <section class="component-page__section">
      <h2>Estados</h2>
      <CodeExample
        title="Estados do Textarea"
        code='<BrTextarea placeholder="Normal" />
<BrTextarea placeholder="Com erro" error />
<BrTextarea placeholder="Desabilitado" disabled />
<BrTextarea placeholder="Somente leitura" readonly model-value="Conteúdo fixo" />'
      >
        <div style="display: flex; flex-direction: column; gap: 16px; width: 400px;">
          <BrTextarea placeholder="Normal" />
          <BrTextarea placeholder="Com erro" error />
          <BrTextarea placeholder="Desabilitado" disabled />
          <BrTextarea placeholder="Somente leitura" readonly model-value="Conteúdo fixo que não pode ser alterado" />
        </div>
      </CodeExample>
    </section>

    <!-- API -->
    <section class="component-page__section">
      <h2>API</h2>
      <h3>Props</h3>
      <PropsTable :props="textareaProps" />
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
  }
}
</style>
