<script setup lang="ts">
import CodeExample from '../../components/CodeExample.vue'
import PropsTable from '../../components/PropsTable.vue'

const dropdownItemProps = [
    { name: 'state', type: "'default' | 'activated' | 'disabled'", default: "'default'", description: 'Estado visual do item' },
    { name: 'text', type: 'string', default: "''", description: 'Texto principal exibido no item' },
    { name: 'textColor', type: 'string', default: "'var(--brandPrimary6)'", description: 'Cor do texto principal' },
    { name: 'isSelected', type: 'boolean', default: 'false', description: 'Modo compacto sem hover (usado dentro do select)' },
    { name: 'isTextAssistant', type: 'boolean', default: 'false', description: 'Exibe o texto auxiliar' },
    { name: 'textAssistant', type: 'string', default: "'Lorem'", description: 'Texto auxiliar exibido à direita' },
]
</script>

<template>
    <div class="component-page">
        <header class="component-page__header">
            <BrBadge variant="primary">Atom</BrBadge>
            <h1 class="component-page__title">Dropdown Item</h1>
            <p class="component-page__description">
                Item individual de dropdown com suporte a estados, texto auxiliar e modo selecionado.
                Usado internamente pelo <code>BrFormSelect</code>.
            </p>
        </header>

        <section class="component-page__section">
            <h2>Estados</h2>
            <CodeExample title="Default" code='<BrDropdownItem text="Opção padrão" state="default" />'>
                <div style="width: 280px; border: 1px solid var(--br-light-300); border-radius: 8px; overflow: hidden;">
                    <BrDropdownItem text="Opção padrão" state="default" />
                </div>
            </CodeExample>

            <CodeExample title="Activated" description="Item selecionado no dropdown — exibe ícone de check" code='<BrDropdownItem text="Opção ativa" state="activated" />'>
                <div style="width: 280px; border: 1px solid var(--br-light-300); border-radius: 8px; overflow: hidden;">
                    <BrDropdownItem text="Opção ativa" state="activated" />
                </div>
            </CodeExample>

            <CodeExample title="Disabled" description="Item desabilitado — sem interação" code='<BrDropdownItem text="Opção desabilitada" state="disabled" />'>
                <div style="width: 280px; border: 1px solid var(--br-light-300); border-radius: 8px; overflow: hidden;">
                    <BrDropdownItem text="Opção desabilitada" state="disabled" />
                </div>
            </CodeExample>
        </section>

        <section class="component-page__section">
            <h2>Com Texto Auxiliar</h2>
            <CodeExample title="Text Assistant" description="Texto secundário exibido à direita do item" code='<BrDropdownItem text="Opção 1" :is-text-assistant="true" text-assistant="Info extra" />'>
                <div style="width: 320px; border: 1px solid var(--br-light-300); border-radius: 8px; overflow: hidden;">
                    <BrDropdownItem text="Opção 1" :is-text-assistant="true" text-assistant="Info extra" />
                    <BrDropdownItem text="Opção 2" state="activated" :is-text-assistant="true" text-assistant="Ativo" />
                    <BrDropdownItem text="Opção 3" :is-text-assistant="true" text-assistant="Desc." />
                </div>
            </CodeExample>
        </section>

        <section class="component-page__section">
            <h2>Modo Selecionado</h2>
            <CodeExample title="Is Selected" description="Modo compacto sem padding e sem hover — usado dentro do trigger do BrFormSelect" code='<BrDropdownItem text="Item selecionado" :is-selected="true" />'>
                <div style="width: 280px; border: 1px solid var(--br-light-300); border-radius: 8px; padding: 12px 16px;">
                    <BrDropdownItem text="Item selecionado" :is-selected="true" />
                </div>
            </CodeExample>
        </section>

        <section class="component-page__section">
            <h2>API</h2>
            <h3>Props</h3>
            <PropsTable :props="dropdownItemProps" />

            <h3>Eventos</h3>
            <PropsTable :props="[{ name: 'onclick', type: 'void', default: '—', description: 'Emitido ao clicar no item' }]" />
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

        code {
            font-family: 'Fira Code', monospace;
            font-size: 0.9em;
            background: var(--br-primary-100);
            color: var(--br-primary-600);
            padding: 2px 6px;
            border-radius: var(--br-radius-sm);
        }
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
