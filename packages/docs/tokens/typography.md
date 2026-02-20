# Tipografia

O sistema tipográfico do Braip UI utiliza as fontes Poppins e Sora.

## Fontes

| Token | Fonte | Uso |
|-------|-------|-----|
| `--br-font-primary` | Poppins | Textos gerais |
| `--br-font-secondary` | Sora | Títulos especiais |
| `--br-font-mono` | JetBrains Mono | Código |

## Tamanhos - Headings

| Token | Tamanho | Exemplo |
|-------|---------|---------|
| `--br-text-h1` | 64px | <span style="font-size: 32px; font-weight: 700">Heading 1</span> |
| `--br-text-h2` | 56px | <span style="font-size: 28px; font-weight: 700">Heading 2</span> |
| `--br-text-h3` | 48px | <span style="font-size: 24px; font-weight: 700">Heading 3</span> |
| `--br-text-h4` | 40px | <span style="font-size: 20px; font-weight: 700">Heading 4</span> |
| `--br-text-h5` | 36px | <span style="font-size: 18px; font-weight: 700">Heading 5</span> |
| `--br-text-h6` | 32px | <span style="font-size: 16px; font-weight: 700">Heading 6</span> |
| `--br-text-h7` | 24px | <span style="font-size: 14px; font-weight: 600">Heading 7</span> |

## Tamanhos - Body

| Token | Tamanho | Uso |
|-------|---------|-----|
| `--br-text-xl` | 24px | Texto destacado |
| `--br-text-lg` | 20px | Texto grande |
| `--br-text-md` | 18px | Texto médio |
| `--br-text-base` | 16px | **Texto padrão** |
| `--br-text-sm` | 14px | Texto pequeno |
| `--br-text-xs` | 12px | Caption |
| `--br-text-2xs` | 11px | Micro texto |

## Pesos

| Token | Valor | Exemplo |
|-------|-------|---------|
| `--br-font-light` | 300 | <span style="font-weight: 300">Light</span> |
| `--br-font-normal` | 400 | <span style="font-weight: 400">Normal</span> |
| `--br-font-medium` | 500 | <span style="font-weight: 500">Medium</span> |
| `--br-font-semibold` | 600 | <span style="font-weight: 600">Semibold</span> |
| `--br-font-bold` | 700 | <span style="font-weight: 700">Bold</span> |

## Line Height

| Token | Valor | Uso |
|-------|-------|-----|
| `--br-leading-none` | 1 | Títulos grandes |
| `--br-leading-tight` | 1.25 | Títulos |
| `--br-leading-snug` | 1.375 | Subtítulos |
| `--br-leading-normal` | 1.5 | **Texto padrão** |
| `--br-leading-relaxed` | 1.625 | Texto longo |
| `--br-leading-loose` | 2 | Espaçado |

## Uso

```css
.title {
  font-family: var(--br-font-primary);
  font-size: var(--br-text-h3);
  font-weight: var(--br-font-bold);
  line-height: var(--br-leading-tight);
}

.body {
  font-family: var(--br-font-primary);
  font-size: var(--br-text-base);
  font-weight: var(--br-font-normal);
  line-height: var(--br-leading-normal);
}

.caption {
  font-size: var(--br-text-xs);
  color: var(--br-dark-700);
}
```
