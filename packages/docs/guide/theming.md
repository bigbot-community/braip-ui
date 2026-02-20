# Temas

O Braip UI suporta tema claro e escuro através de CSS Custom Properties.

## Configuração de Tema

### Via Plugin

```ts
app.use(BraipUI, {
  theme: 'dark', // 'light' | 'dark'
})
```

### Via Atributo HTML

```html
<html data-br-theme="dark">
```

### Via JavaScript

```ts
// Alternar tema
document.documentElement.setAttribute('data-br-theme', 'dark')
```

## Customização de Cores

### Sobrescrevendo Tokens

Você pode sobrescrever os tokens de design no seu CSS:

```css
:root {
  /* Alterar cor primária */
  --br-primary-600: #your-color;

  /* Alterar fonte primária */
  --br-font-primary: 'Your Font', sans-serif;
}
```

### Criando Tema Customizado

```scss
// themes/custom.scss
[data-br-theme='custom'] {
  // Brand colors
  --br-primary-600: #ff6b35;
  --br-primary-700: #e55a2b;
  --br-primary-500: #ff8c5a;

  // Background
  --br-light-0: #fafafa;
  --br-light-100: #f5f5f5;

  // Text
  --br-dark-0: #1a1a1a;
}
```

## Tokens Disponíveis

### Cores de Marca

| Token | Descrição |
|-------|-----------|
| `--br-primary-*` | Cor primária (roxo) - 10 tons |
| `--br-secondary-*` | Cor secundária (verde) - 10 tons |

### Cores Semânticas

| Token | Uso |
|-------|-----|
| `--br-danger-*` | Erros, ações destrutivas |
| `--br-warning-*` | Alertas, cuidado |
| `--br-success-*` | Sucesso, confirmação |
| `--br-info-*` | Informação |

### Neutros

| Token | Descrição |
|-------|-----------|
| `--br-dark-*` | Tons escuros (0-1100) |
| `--br-light-*` | Tons claros (0-1100) |

## Modo Escuro

Para implementar modo escuro, defina as variáveis para o tema dark:

```scss
[data-br-theme='dark'] {
  // Inverter backgrounds
  --br-light-0: rgb(11, 11, 14);
  --br-light-100: rgb(13, 13, 18);
  --br-light-200: rgb(25, 25, 30);

  // Inverter textos
  --br-dark-0: rgb(255, 255, 255);
  --br-dark-700: rgb(190, 190, 221);

  // Bordas
  --br-border-color: rgb(52, 52, 56);
}
```

## Composable useTheme

```ts
// Em desenvolvimento
import { useTheme } from '@braiphub/ui'

const { theme, toggleTheme, setTheme } = useTheme()

// Alternar
toggleTheme()

// Definir específico
setTheme('dark')
```
