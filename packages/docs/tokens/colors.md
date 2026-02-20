# Cores

O sistema de cores do Braip UI é baseado em CSS Custom Properties.

## Cores de Marca

### Primary (Roxo)

<div class="color-grid">
  <div class="color-swatch">
    <div class="color-swatch__preview" style="background: rgb(22, 11, 50)"></div>
    <div class="color-swatch__info">
      <div class="color-swatch__name">Primary Darkest</div>
      <div class="color-swatch__value">--br-primary-darkest</div>
    </div>
  </div>
  <div class="color-swatch">
    <div class="color-swatch__preview" style="background: rgb(109, 54, 251)"></div>
    <div class="color-swatch__info">
      <div class="color-swatch__name">Primary 600</div>
      <div class="color-swatch__value">--br-primary-600</div>
    </div>
  </div>
  <div class="color-swatch">
    <div class="color-swatch__preview" style="background: rgb(244, 240, 255)"></div>
    <div class="color-swatch__info">
      <div class="color-swatch__name">Primary 100</div>
      <div class="color-swatch__value">--br-primary-100</div>
    </div>
  </div>
</div>

### Secondary (Verde/Lime)

<div class="color-grid">
  <div class="color-swatch">
    <div class="color-swatch__preview" style="background: rgb(31, 51, 10)"></div>
    <div class="color-swatch__info">
      <div class="color-swatch__name">Secondary Darkest</div>
      <div class="color-swatch__value">--br-secondary-darkest</div>
    </div>
  </div>
  <div class="color-swatch">
    <div class="color-swatch__preview" style="background: rgb(153, 255, 51)"></div>
    <div class="color-swatch__info">
      <div class="color-swatch__name">Secondary 600</div>
      <div class="color-swatch__value">--br-secondary-600</div>
    </div>
  </div>
  <div class="color-swatch">
    <div class="color-swatch__preview" style="background: rgb(245, 255, 235)"></div>
    <div class="color-swatch__info">
      <div class="color-swatch__name">Secondary 100</div>
      <div class="color-swatch__value">--br-secondary-100</div>
    </div>
  </div>
</div>

## Cores Semânticas

### Danger (Vermelho)

<div class="color-grid">
  <div class="color-swatch">
    <div class="color-swatch__preview" style="background: rgb(255, 46, 46)"></div>
    <div class="color-swatch__info">
      <div class="color-swatch__name">Danger 600</div>
      <div class="color-swatch__value">--br-danger-600</div>
    </div>
  </div>
</div>

### Warning (Laranja)

<div class="color-grid">
  <div class="color-swatch">
    <div class="color-swatch__preview" style="background: rgb(255, 153, 0)"></div>
    <div class="color-swatch__info">
      <div class="color-swatch__name">Warning 600</div>
      <div class="color-swatch__value">--br-warning-600</div>
    </div>
  </div>
</div>

### Success (Verde)

<div class="color-grid">
  <div class="color-swatch">
    <div class="color-swatch__preview" style="background: rgb(94, 195, 77)"></div>
    <div class="color-swatch__info">
      <div class="color-swatch__name">Success 600</div>
      <div class="color-swatch__value">--br-success-600</div>
    </div>
  </div>
</div>

### Info (Azul)

<div class="color-grid">
  <div class="color-swatch">
    <div class="color-swatch__preview" style="background: rgb(51, 153, 255)"></div>
    <div class="color-swatch__info">
      <div class="color-swatch__name">Info 600</div>
      <div class="color-swatch__value">--br-info-600</div>
    </div>
  </div>
</div>

## Uso

```css
.my-element {
  /* Cor de fundo */
  background-color: var(--br-primary-600);

  /* Cor do texto */
  color: var(--br-light-0);

  /* Borda */
  border-color: var(--br-danger-600);
}
```

```scss
// Com SCSS
.my-element {
  background: $br-primary;
  color: $br-text-inverse;
}
```

## Escala Completa

Cada cor possui 10 tons, de `darkest` a `100`:

| Token | Uso |
|-------|-----|
| `--br-{color}-darkest` | Tom mais escuro |
| `--br-{color}-900` | Muito escuro |
| `--br-{color}-800` | Escuro |
| `--br-{color}-700` | Médio escuro |
| `--br-{color}-600` | **Cor principal** |
| `--br-{color}-500` | Médio claro |
| `--br-{color}-400` | Claro |
| `--br-{color}-300` | Muito claro |
| `--br-{color}-200` | Ultra claro |
| `--br-{color}-100` | Quase branco |
