<script setup lang="ts">
interface Prop {
  name: string
  type: string
  default?: string
  description: string
  required?: boolean
}

interface Props {
  props: Prop[]
}

defineProps<Props>()
</script>

<template>
  <div class="props-table">
    <table>
      <thead>
        <tr>
          <th>Propriedade</th>
          <th>Tipo</th>
          <th>Padrão</th>
          <th>Descrição</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="prop in props" :key="prop.name">
          <td class="props-table__name">
            <code>{{ prop.name }}</code>
            <span v-if="prop.required" class="props-table__required">*</span>
          </td>
          <td class="props-table__type">
            <code>{{ prop.type }}</code>
          </td>
          <td class="props-table__default">
            <code v-if="prop.default">{{ prop.default }}</code>
            <span v-else class="props-table__none">-</span>
          </td>
          <td class="props-table__description">{{ prop.description }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style lang="scss" scoped>
.props-table {
  overflow-x: auto;
  margin: var(--br-space-6) 0;
  border: 1px solid var(--neutralLightGrey5);
  border-radius: var(--br-radius-lg);
  background: var(--neutralLightGrey9);

  table {
    width: 100%;
    border-collapse: collapse;
    font-size: var(--br-text-sm);
  }

  thead {
    background: var(--neutralLightGrey7);

    th {
      padding: var(--br-space-4);
      text-align: left;
      font-weight: var(--br-font-semibold);
      color: var(--neutralDarkGrey7);
      border-bottom: 1px solid var(--neutralLightGrey5);
    }
  }

  tbody {
    tr {
      &:not(:last-child) {
        border-bottom: 1px solid var(--neutralLightGrey6);
      }

      &:hover {
        background: var(--neutralLightGrey8);
      }
    }

    td {
      padding: var(--br-space-4);
      vertical-align: top;
    }
  }

  &__name {
    code {
      font-family: 'Fira Code', monospace;
      font-size: var(--br-text-sm);
      color: var(--brandPrimary6);
      background: var(--brandPrimaryLightest);
      padding: var(--br-space-1) var(--br-space-2);
      border-radius: var(--br-radius-sm);
    }
  }

  &__required {
    color: var(--auxiliaryRed6);
    margin-left: var(--br-space-1);
  }

  &__type {
    code {
      font-family: 'Fira Code', monospace;
      font-size: var(--br-text-xs);
      color: var(--auxiliaryBlue6);
      background: var(--auxiliaryBlueLightest);
      padding: var(--br-space-1) var(--br-space-2);
      border-radius: var(--br-radius-sm);
    }
  }

  &__default {
    code {
      font-family: 'Fira Code', monospace;
      font-size: var(--br-text-xs);
      color: var(--neutralDarkGrey7);
      background: var(--neutralLightGrey6);
      padding: var(--br-space-1) var(--br-space-2);
      border-radius: var(--br-radius-sm);
    }
  }

  &__none {
    color: var(--neutralDarkGrey5);
  }

  &__description {
    color: var(--neutralDarkGrey7);
    line-height: 1.5;
  }
}
</style>
