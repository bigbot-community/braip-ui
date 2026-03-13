<script setup lang="ts">
import CodeExample from "../../components/CodeExample.vue";
import PropsTable from "../../components/PropsTable.vue";

const infoPopperProps = [
  {
    name: "content",
    type: "string",
    required: true,
    description: "Texto exibido no popper",
  },
  {
    name: "iconVisible",
    type: "boolean",
    default: "true",
    description: "Exibe o ícone padrão info-light.svg",
  },
  {
    name: "colorIcon",
    type: "string",
    default: "'var(--br-dark-700)'",
    description: "Cor do ícone padrão",
  },
  {
    name: "position",
    type: "'left' | 'right' | 'bottom'",
    default: "'right'",
    description: "Posição do popper em relação ao trigger",
  },
  {
    name: "width",
    type: "string",
    default: "'250px'",
    description: "Largura do popper",
  },
  {
    name: "popperRight",
    type: "string",
    default: "'50px'",
    description: "Offset da posição left/bottom",
  },
  {
    name: "popperLeft",
    type: "string",
    default: "'50px'",
    description: "Offset da posição right",
  },
];
</script>

<template>
  <div class="component-page">
    <header class="component-page__header">
      <BrBadge variant="primary">Atom</BrBadge>
      <h1 class="component-page__title">Info Popper</h1>
      <p class="component-page__description">
        Tooltip simples com trigger por ícone padrão ou slot customizado.
      </p>
    </header>

    <section class="component-page__section">
      <h2>Uso Básico</h2>
      <CodeExample
        title="InfoPopper com ícone padrão"
        :code="`<BrInfoPopper content='Mensagem padrão do popper' />`"
      >
        <BrInfoPopper content="Mensagem padrão do popper" />
      </CodeExample>
    </section>

    <section class="component-page__section">
      <h2>Posições</h2>
      <CodeExample
        title="Position 'right' e 'left'"
        :code="`<BrInfoPopper content='Popper na direita' position='right' width='180px' popperLeft='40px' />
<BrInfoPopper content='Popper na esquerda' position='left' width='180px' popperRight='40px' />`"
      >
        <div class="position-grid">
          <div class="position-box">
            <BrInfoPopper
              content="Popper na direita"
              position="right"
              width="180px"
              popperLeft="40px"
            />
          </div>
          <div class="position-box">
            <BrInfoPopper
              content="Popper na esquerda"
              position="left"
              width="180px"
              popperRight="40px"
            />
          </div>
        </div>
      </CodeExample>
    </section>

    <section class="component-page__section">
      <h2>Bottom e Slot</h2>
      <CodeExample
        title="Bottom com slot customizado"
        :code="`<BrInfoPopper content='Popper abaixo' position='bottom' width='200px'>
  <BrBadge variant='info'>Hover aqui</BrBadge>
</BrInfoPopper>

<BrInfoPopper :iconVisible='false' content='Sem ícone, apenas slot'>
  <BrButton variant='outline' size='sm'>Abrir popper</BrButton>
</BrInfoPopper>`"
      >
        <div class="slot-demo">
          <BrInfoPopper content="Usando um atomo detro do popper" width="200px">
            <BrBadge variant="info">Hover aqui</BrBadge>
          </BrInfoPopper>

          <BrInfoPopper
            :iconVisible="false"
            content="Sem ícone, apenas slot"
            position="bottom"
            width="100px"
          >
            <BrButton variant="outline" size="sm">Abrir popper</BrButton>
          </BrInfoPopper>
        </div>
      </CodeExample>
    </section>

    <section class="component-page__section">
      <h2>API</h2>
      <h3>Props</h3>
      <PropsTable :props="infoPopperProps" />
    </section>
  </div>
</template>

<style scoped lang="scss">
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

      code {
        font-family: "Fira Code", monospace;
        font-size: 0.9em;
        background: var(--br-primary-100);
        color: var(--br-primary-600);
        padding: 2px 6px;
        border-radius: var(--br-radius-sm);
      }
    }
  }
}

.position-grid {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: var(--br-space-4);
}

.position-box {
  width: 100%;
  min-height: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px dashed var(--br-light-400);
  border-radius: var(--br-radius-md);
  overflow: hidden;
  background: var(--br-light-50);
}

.slot-demo {
  width: 100%;
  display: flex;
  gap: var(--br-space-4);
  flex-wrap: wrap;
  align-items: center;
}
</style>
