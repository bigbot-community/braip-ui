# Espaçamento

Sistema de espaçamento consistente para margens, padding e gaps.

## Escala de Espaçamento

| Token | Valor | Visual |
|-------|-------|--------|
| `--br-space-0` | 0 | |
| `--br-space-px` | 1px | <div style="width: 1px; height: 16px; background: var(--vp-c-brand-1); display: inline-block;"></div> |
| `--br-space-0-5` | 2px | <div style="width: 2px; height: 16px; background: var(--vp-c-brand-1); display: inline-block;"></div> |
| `--br-space-1` | 4px | <div style="width: 4px; height: 16px; background: var(--vp-c-brand-1); display: inline-block;"></div> |
| `--br-space-2` | 8px | <div style="width: 8px; height: 16px; background: var(--vp-c-brand-1); display: inline-block;"></div> |
| `--br-space-3` | 12px | <div style="width: 12px; height: 16px; background: var(--vp-c-brand-1); display: inline-block;"></div> |
| `--br-space-4` | 16px | <div style="width: 16px; height: 16px; background: var(--vp-c-brand-1); display: inline-block;"></div> |
| `--br-space-5` | 20px | <div style="width: 20px; height: 16px; background: var(--vp-c-brand-1); display: inline-block;"></div> |
| `--br-space-6` | 24px | <div style="width: 24px; height: 16px; background: var(--vp-c-brand-1); display: inline-block;"></div> |
| `--br-space-8` | 32px | <div style="width: 32px; height: 16px; background: var(--vp-c-brand-1); display: inline-block;"></div> |
| `--br-space-10` | 40px | <div style="width: 40px; height: 16px; background: var(--vp-c-brand-1); display: inline-block;"></div> |
| `--br-space-12` | 48px | <div style="width: 48px; height: 16px; background: var(--vp-c-brand-1); display: inline-block;"></div> |
| `--br-space-16` | 64px | <div style="width: 64px; height: 16px; background: var(--vp-c-brand-1); display: inline-block;"></div> |

## Border Radius

| Token | Valor | Visual |
|-------|-------|--------|
| `--br-radius-none` | 0 | <div style="width: 40px; height: 24px; background: var(--vp-c-brand-1); border-radius: 0;"></div> |
| `--br-radius-sm` | 4px | <div style="width: 40px; height: 24px; background: var(--vp-c-brand-1); border-radius: 4px;"></div> |
| `--br-radius-md` | 8px | <div style="width: 40px; height: 24px; background: var(--vp-c-brand-1); border-radius: 8px;"></div> |
| `--br-radius-lg` | 12px | <div style="width: 40px; height: 24px; background: var(--vp-c-brand-1); border-radius: 12px;"></div> |
| `--br-radius-xl` | 16px | <div style="width: 40px; height: 24px; background: var(--vp-c-brand-1); border-radius: 16px;"></div> |
| `--br-radius-full` | 9999px | <div style="width: 40px; height: 24px; background: var(--vp-c-brand-1); border-radius: 9999px;"></div> |

## Sombras

| Token | Uso |
|-------|-----|
| `--br-shadow-sm` | Elevação sutil |
| `--br-shadow-md` | Cards, dropdowns |
| `--br-shadow-lg` | Modais, popovers |
| `--br-shadow-xl` | Elementos flutuantes |
| `--br-shadow-2xl` | Destaque máximo |

## Z-Index

| Token | Valor | Uso |
|-------|-------|-----|
| `--br-z-dropdown` | 1000 | Dropdowns |
| `--br-z-sticky` | 1020 | Headers fixos |
| `--br-z-fixed` | 1030 | Elementos fixos |
| `--br-z-modal-backdrop` | 1040 | Fundo do modal |
| `--br-z-modal` | 1050 | Modal |
| `--br-z-popover` | 1060 | Popovers |
| `--br-z-tooltip` | 1070 | Tooltips |
| `--br-z-toast` | 1080 | Notificações |

## Uso

```css
.card {
  padding: var(--br-space-4);
  margin-bottom: var(--br-space-6);
  border-radius: var(--br-radius-lg);
  box-shadow: var(--br-shadow-md);
}

.modal {
  z-index: var(--br-z-modal);
}

.button-group {
  gap: var(--br-space-2);
}
```
