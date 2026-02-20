# Bordas

Tokens para arredondamento de bordas (Border Radius) e espessuras.

## Border Radius (Arredondamento)

Utilize os tokens de arredondamento para suavizar os cantos dos elementos.

| Token | Valor | Visual |
|-------|-------|--------|
| `--br-radius-none` | 0 | <div style="width: 40px; height: 24px; background: var(--br-primary-500); border-radius: 0;"></div> |
| `--br-radius-sm` | 4px | <div style="width: 40px; height: 24px; background: var(--br-primary-500); border-radius: 4px;"></div> |
| `--br-radius-md` | 8px | <div style="width: 40px; height: 24px; background: var(--br-primary-500); border-radius: 8px;"></div> |
| `--br-radius-lg` | 12px | <div style="width: 40px; height: 24px; background: var(--br-primary-500); border-radius: 12px;"></div> |
| `--br-radius-xl` | 16px | <div style="width: 40px; height: 24px; background: var(--br-primary-500); border-radius: 16px;"></div> |
| `--br-radius-full` | 9999px | <div style="width: 40px; height: 24px; background: var(--br-primary-500); border-radius: 9999px;"></div> |

## Espessura da Borda

Espessuras padrão para bordas.

| Token | Valor | Visual |
|-------|-------|--------|
| `--br-border-width-sm` | 1px | <div style="width: 40px; height: 24px; border: 1px solid var(--br-primary-500);"></div> |
| `--br-border-width-md` | 2px | <div style="width: 40px; height: 24px; border: 2px solid var(--br-primary-500);"></div> |
| `--br-border-width-lg` | 4px | <div style="width: 40px; height: 24px; border: 4px solid var(--br-primary-500);"></div> |

## Estilo da Borda

O estilo padrão de borda no Design System é `solid`.

## Uso

```css
.card {
  border: var(--br-border-width-sm) solid var(--br-light-300);
  border-radius: var(--br-radius-lg);
}

.button {
  border-radius: var(--br-radius-full);
}
```
