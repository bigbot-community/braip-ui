# Button

Botões são usados para ações, como enviar formulários ou disparar eventos.

## Uso Básico

<div class="demo-container">
  <BrButton>Botão Padrão</BrButton>
</div>

```vue
<BrButton>Botão Padrão</BrButton>
```

## Variantes

<div class="demo-container">
  <BrButton variant="primary">Primary</BrButton>
  <BrButton variant="secondary">Secondary</BrButton>
  <BrButton variant="outline">Outline</BrButton>
  <BrButton variant="ghost">Ghost</BrButton>
  <BrButton variant="danger">Danger</BrButton>
  <BrButton variant="success">Success</BrButton>
</div>

```vue
<BrButton variant="primary">Primary</BrButton>
<BrButton variant="secondary">Secondary</BrButton>
<BrButton variant="outline">Outline</BrButton>
<BrButton variant="ghost">Ghost</BrButton>
<BrButton variant="danger">Danger</BrButton>
<BrButton variant="success">Success</BrButton>
```

## Tamanhos

<div class="demo-container">
  <BrButton size="sm">Pequeno</BrButton>
  <BrButton size="md">Médio</BrButton>
  <BrButton size="lg">Grande</BrButton>
</div>

```vue
<BrButton size="sm">Pequeno</BrButton>
<BrButton size="md">Médio</BrButton>
<BrButton size="lg">Grande</BrButton>
```

## Estados

### Desabilitado

<div class="demo-container">
  <BrButton disabled>Desabilitado</BrButton>
  <BrButton variant="secondary" disabled>Desabilitado</BrButton>
</div>

```vue
<BrButton disabled>Desabilitado</BrButton>
```

### Loading

<div class="demo-container">
  <BrButton loading>Carregando</BrButton>
  <BrButton variant="secondary" loading>Carregando</BrButton>
</div>

```vue
<BrButton loading>Carregando</BrButton>
```

### Largura Total

<div class="demo-container demo-container--vertical">
  <BrButton block>Botão de Largura Total</BrButton>
</div>

```vue
<BrButton block>Botão de Largura Total</BrButton>
```

## Props

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `variant` | `'primary' \| 'secondary' \| 'outline' \| 'ghost' \| 'danger' \| 'success'` | `'primary'` | Estilo visual do botão |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Tamanho do botão |
| `disabled` | `boolean` | `false` | Desabilita o botão |
| `loading` | `boolean` | `false` | Mostra estado de carregamento |
| `block` | `boolean` | `false` | Largura total |
| `type` | `'button' \| 'submit' \| 'reset'` | `'button'` | Tipo do elemento button |

## Eventos

| Evento | Payload | Descrição |
|--------|---------|-----------|
| `click` | `MouseEvent` | Disparado ao clicar no botão |

## Slots

| Slot | Descrição |
|------|-----------|
| `default` | Conteúdo do botão |

## Acessibilidade

- Usa o elemento nativo `<button>`
- Suporta navegação por teclado
- Estado `disabled` comunicado corretamente para leitores de tela
- Focus visível com outline

## Exemplos

### Botão com Ícone

```vue
<BrButton>
  <IconPlus />
  Adicionar Item
</BrButton>
```

### Formulário

```vue
<form @submit.prevent="handleSubmit">
  <BrButton type="submit" :loading="isSubmitting">
    {{ isSubmitting ? 'Enviando...' : 'Enviar' }}
  </BrButton>
</form>
```

### Ação Destrutiva

```vue
<BrButton variant="danger" @click="handleDelete">
  Excluir
</BrButton>
```
