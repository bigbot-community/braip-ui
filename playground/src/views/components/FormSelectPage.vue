<script setup lang="ts">
import { ref } from 'vue'
import CodeExample from '../../components/CodeExample.vue'
import PropsTable from '../../components/PropsTable.vue'

const selectedItem = ref<{ value: string; label: string; state?: string } | null>(null)

const options = [
    { value: '1', label: 'Opção 1', state: 'default' },
    { value: '2', label: 'Opção 2', state: 'default' },
    { value: '3', label: 'Opção 3', state: 'default' },
    { value: '4', label: 'Opção 4', state: 'default' },
    { value: '5', label: 'Opção 5', state: 'default' },
]

const preSelected = { value: '2', label: 'Opção 2', state: 'default' }

const formSelectProps = [
    { name: 'label', type: 'string', default: "'Select'", description: 'Texto do label/placeholder' },
    { name: 'typeLabel', type: "'default' | 'dark'", default: "'default'", description: 'Estilo visual do label' },
    { name: 'preSelectedOption', type: 'IOptionType', default: '—', description: 'Opção pré-selecionada ao montar' },
    { name: 'options', type: 'IOptionType[]', default: '[]', description: 'Array de opções disponíveis', required: true },
    { name: 'message', type: 'string | null', default: 'null', description: 'Mensagem de status (null = sem mensagem)' },
    { name: 'messageError', type: 'string', default: "''", description: 'Mensagem de erro exibida abaixo do campo' },
    { name: 'isRequired', type: 'boolean', default: 'false', description: 'Marca o campo como obrigatório' },
    { name: 'scrollAmmount', type: 'number', default: '5', description: 'Nº mínimo de opções para habilitar scroll' },
]
</script>

<template>
    <div class="component-page">
        <header class="component-page__header">
            <BrBadge variant="secondary">Molecule</BrBadge>
            <h1 class="component-page__title">Form Select</h1>
            <p class="component-page__description">
                Select customizado com dropdown animado, suporte a pré-seleção, estados de erro e label flutuante.
            </p>
        </header>

        <section class="component-page__section">
            <h2>Uso Básico</h2>
            <CodeExample title="Select Simples" code='<BrFormSelect :options="options" label="Selecione uma opção" @item-selected="onSelect" />'>
                <div style="width: 320px;">
                    <BrFormSelect :options="options" label="Selecione uma opção" @item-selected="selectedItem = $event" />
                    <p v-if="selectedItem?.value" style="margin-top: 8px; font-size: 14px; color: var(--br-dark-700);">
                        Selecionado: <strong>{{ selectedItem.label }}</strong>
                    </p>
                </div>
            </CodeExample>
        </section>

        <section class="component-page__section">
            <h2>Pré-Seleção</h2>
            <CodeExample title="Com Opção Pré-Selecionada" description="Utilize preSelectedOption para definir um valor inicial" code='<BrFormSelect :options="options" :pre-selected-option="preSelected" label="Status" />'>
                <div style="width: 320px;">
                    <BrFormSelect :options="options" :pre-selected-option="preSelected" label="Status" />
                </div>
            </CodeExample>
        </section>

        <section class="component-page__section">
            <h2>Estado de Erro</h2>
            <CodeExample title="Mensagem de Erro" description="Exibida abaixo do select via messageError" code='<BrFormSelect :options="options" label="Campo" message-error="Campo obrigatório" />'>
                <div style="width: 320px;">
                    <BrFormSelect :options="options" label="Campo obrigatório" message-error="Este campo é obrigatório" />
                </div>
            </CodeExample>
        </section>

        <section class="component-page__section">
            <h2>Com Scroll</h2>
            <CodeExample title="Lista com Scroll" description="Ativado automaticamente quando o número de opções >= scrollAmmount (padrão: 5)" code='<BrFormSelect :options="manyOptions" label="Selecione" :scroll-ammount="5" />'>
                <div style="width: 320px;">
                    <BrFormSelect :options="options" label="Selecione" :scroll-ammount="3" />
                </div>
            </CodeExample>
        </section>

        <section class="component-page__section">
            <h2>API</h2>
            <h3>Props</h3>
            <PropsTable :props="formSelectProps" />

            <h3>Eventos</h3>
            <PropsTable :props="[
                { name: 'itemSelected', type: 'IOptionType', default: '—', description: 'Emitido ao selecionar/deselecionar uma opção' },
            ]" />

            <h3>Tipos</h3>
            <div class="code-snippet">
                <pre><code>interface IOptionType {
  value: string
  label: string
  state?: string
}</code></pre>
            </div>
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

.code-snippet {
    background: var(--br-dark-0);
    border-radius: var(--br-radius-lg);
    padding: var(--br-space-4) var(--br-space-6);
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
