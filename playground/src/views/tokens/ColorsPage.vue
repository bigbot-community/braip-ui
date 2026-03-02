<script setup lang="ts">
const colorGroups = [
  {
    name: 'Brand Primary (Purple)',
    description: 'Cor principal da marca',
    colors: [
      { name: '--brandPrimaryDarkest', value: '#2C1864' },
      { name: '--brandPrimaryDark9', value: '#412097' },
      { name: '--brandPrimaryDark8', value: '#5728C9' },
      { name: '--brandPrimaryDark7', value: '#6D36FB' },
      { name: '--brandPrimary6', value: '#865DFB' },
      { name: '--brandPrimary5', value: '#9E7DFF' },
      { name: '--brandPrimary4', value: '#B79DFF' },
      { name: '--brandPrimaryLight3', value: '#C9B2FF' },
      { name: '--brandPrimaryLight2', value: '#E2D7FF' },
      { name: '--brandPrimaryLightest', value: '#F3F1FF' },
    ],
  },
  {
    name: 'Brand Secondary (Green/Lime)',
    description: 'Cor secundária para destaques',
    colors: [
      { name: '--brandSecondaryDarkest', value: '#0D3514' },
      { name: '--brandSecondaryDark9', value: '#1C551F' },
      { name: '--brandSecondaryDark8', value: '#2C7A2E' },
      { name: '--brandSecondaryDark7', value: '#3E9D3F' },
      { name: '--brandSecondary6', value: '#51BD51' },
      { name: '--brandSecondary5', value: '#66DD66' },
      { name: '--brandSecondary4', value: '#82E482' },
      { name: '--brandSecondaryLight3', value: '#9EF19C' },
      { name: '--brandSecondaryLight2', value: '#BFF7B8' },
      { name: '--brandSecondaryLightest', value: '#DEFDDE' },
    ],
  },
  {
    name: 'Auxiliary Red (Danger)',
    description: 'Estados de erro e ações destrutivas',
    colors: [
      { name: '--auxiliaryRedDarkest', value: '#4E0000' },
      { name: '--auxiliaryRedDark9', value: '#780000' },
      { name: '--auxiliaryRedDark8', value: '#9E0B0B' },
      { name: '--auxiliaryRedDark7', value: '#CA1515' },
      { name: '--auxiliaryRed6', value: '#FF2E2E' },
      { name: '--auxiliaryRed5', value: '#FF5F5F' },
      { name: '--auxiliaryRed4', value: '#FF7D7D' },
      { name: '--auxiliaryRedLight3', value: '#FF9F9F' },
      { name: '--auxiliaryRedLight2', value: '#FFC0C0' },
      { name: '--auxiliaryRedLightest', value: '#FFE4E4' },
    ],
  },
  {
    name: 'Auxiliary Orange (Warning)',
    description: 'Alertas e avisos',
    colors: [
      { name: '--auxiliaryOrangeDarkest', value: '#774700' },
      { name: '--auxiliaryOrangeDark9', value: '#9C5E00' },
      { name: '--auxiliaryOrangeDark8', value: '#BA7000' },
      { name: '--auxiliaryOrangeDark7', value: '#D88100' },
      { name: '--auxiliaryOrange6', value: '#FF9D00' },
      { name: '--auxiliaryOrange5', value: '#FFA836' },
      { name: '--auxiliaryOrange4', value: '#FFC46B' },
      { name: '--auxiliaryOrangeLight3', value: '#FFD493' },
      { name: '--auxiliaryOrangeLight2', value: '#FFE2B7' },
      { name: '--auxiliaryOrangeLightest', value: '#FEF0D7' },
    ],
  },
  {
    name: 'Auxiliary Yellow (Attention)',
    description: 'Atenção e destaques informativos',
    colors: [
      { name: '--auxiliaryYellowDarkest', value: '#7D6A00' },
      { name: '--auxiliaryYellowDark9', value: '#A18803' },
      { name: '--auxiliaryYellowDark8', value: '#BB9C03' },
      { name: '--auxiliaryYellowDark7', value: '#DEB800' },
      { name: '--auxiliaryYellow6', value: '#FFD600' },
      { name: '--auxiliaryYellow5', value: '#FFE24D' },
      { name: '--auxiliaryYellow4', value: '#FFE871' },
      { name: '--auxiliaryYellowLight3', value: '#FFEE8C' },
      { name: '--auxiliaryYellowLight2', value: '#FFF3B5' },
      { name: '--auxiliaryYellowLightest', value: '#FFF9D7' },
    ],
  },
  {
    name: 'Auxiliary Blue (Info)',
    description: 'Informações e dicas',
    colors: [
      { name: '--auxiliaryBlueDarkest', value: '#094179' },
      { name: '--auxiliaryBlueDark9', value: '#0A5FB4' },
      { name: '--auxiliaryBlueDark8', value: '#1071CD' },
      { name: '--auxiliaryBlueDark7', value: '#1D88F3' },
      { name: '--auxiliaryBlue6', value: '#3399FF' },
      { name: '--auxiliaryBlue5', value: '#68B5FF' },
      { name: '--auxiliaryBlue4', value: '#89C7FF' },
      { name: '--auxiliaryBlueLight3', value: '#ADD6FF' },
      { name: '--auxiliaryBlueLight2', value: '#C2E2FF' },
      { name: '--auxiliaryBlueLightest', value: '#E2F1FF' },
    ],
  },
  {
    name: 'Auxiliary Green (Success)',
    description: 'Estados de sucesso',
    colors: [
      { name: '--auxiliaryGreenDarkest', value: '#1B5B10' },
      { name: '--auxiliaryGreenDark9', value: '#297A1B' },
      { name: '--auxiliaryGreenDark8', value: '#399929' },
      { name: '--auxiliaryGreenDark7', value: '#4BB639' },
      { name: '--auxiliaryGreen6', value: '#5EC34D' },
      { name: '--auxiliaryGreen5', value: '#72D761' },
      { name: '--auxiliaryGreen4', value: '#8BE37C' },
      { name: '--auxiliaryGreenLight3', value: '#A4F497' },
      { name: '--auxiliaryGreenLight2', value: '#BFFFAC' },
      { name: '--auxiliaryGreenLightest', value: '#E5FFE1' },
    ],
  },
  {
    name: 'Auxiliary Pink',
    description: 'Tons de rosa para destaques especiais',
    colors: [
      { name: '--auxiliaryPinkDarkest', value: '#79005B' },
      { name: '--auxiliaryPinkDark9', value: '#A61381' },
      { name: '--auxiliaryPinkDark8', value: '#C22199' },
      { name: '--auxiliaryPinkDark7', value: '#DF32B3' },
      { name: '--auxiliaryPink6', value: '#FF3FCE' },
      { name: '--auxiliaryPink5', value: '#FF68D9' },
      { name: '--auxiliaryPink4', value: '#FF8AE1' },
      { name: '--auxiliaryPinkLight3', value: '#FFA0E7' },
      { name: '--auxiliaryPinkLight2', value: '#FFBCEE' },
      { name: '--auxiliaryPinkLightest', value: '#FFE5F9' },
    ],
  },
  {
    name: 'Neutral Dark Grey',
    description: 'Tons escuros para textos e fundos escuros',
    colors: [
      { name: '--neutralDarkGrey', value: '#0B0B0E' },
      { name: '--neutralDarkGrey1', value: '#0F1116' },
      { name: '--neutralDarkGrey2', value: '#202227' },
      { name: '--neutralDarkGrey3', value: '#313338' },
      { name: '--neutralDarkGrey4', value: '#424449' },
      { name: '--neutralDarkGrey5', value: '#53555A' },
      { name: '--neutralDarkGrey6', value: '#64666B' },
      { name: '--neutralDarkGrey7', value: '#75777C' },
      { name: '--neutralDarkGrey8', value: '#86888D' },
      { name: '--neutralDarkGrey9', value: '#8B8B98' },
    ],
  },
  {
    name: 'Neutral Light Grey',
    description: 'Tons claros para backgrounds e superfícies',
    colors: [
      { name: '--neutralLightGrey1', value: '#94979E' },
      { name: '--neutralLightGrey2', value: '#A3A6AE' },
      { name: '--neutralLightGrey3', value: '#B2B5BB' },
      { name: '--neutralLightGrey4', value: '#CCD0D6' },
      { name: '--neutralLightGrey5', value: '#DCE3E5' },
      { name: '--neutralLightGrey6', value: '#E9EBEE' },
      { name: '--neutralLightGrey7', value: '#F5F5F5' },
      { name: '--neutralLightGrey8', value: '#FCFCFC' },
      { name: '--neutralLightGrey9', value: '#FFFFFF' },
    ],
  },
]
</script>

<template>
  <div class="tokens-page">
    <header class="tokens-page__header">
      <BrBadge variant="info">Tokens</BrBadge>
      <h1 class="tokens-page__title">Cores</h1>
      <p class="tokens-page__description">
        Sistema de cores consistente para toda a interface, incluindo cores primárias, secundárias, semânticas e neutras.
      </p>
    </header>

    <section v-for="group in colorGroups" :key="group.name" class="color-section">
      <h2 class="color-section__title">{{ group.name }}</h2>
      <p class="color-section__description">{{ group.description }}</p>
      <div class="color-grid">
        <div v-for="color in group.colors" :key="color.name" class="color-card">
          <div class="color-card__preview" :style="{ background: `var(${color.name})` }" />
          <div class="color-card__info">
            <code class="color-card__name">{{ color.name }}</code>
            <span class="color-card__value">{{ color.value }}</span>
          </div>
        </div>
      </div>
    </section>

    <section class="usage-section">
      <h2>Uso</h2>
      <div class="code-block">
        <pre><code>/* No CSS/SCSS */
.my-element {
  color: var(--brandPrimary6);
  background: var(--neutralLightGrey7);
  border-color: var(--auxiliaryRed6);
}</code></pre>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.tokens-page {
  &__header {
    margin-bottom: var(--br-space-10);
  }

  &__title {
    font-size: var(--br-text-h3);
    font-weight: var(--br-font-bold);
    color: var(--neutralDarkGrey);
    margin: var(--br-space-4) 0;
  }

  &__description {
    font-size: var(--br-text-lg);
    color: var(--neutralDarkGrey7);
    line-height: 1.6;
    margin: 0;
  }
}

.color-section {
  margin-bottom: var(--br-space-10);

  &__title {
    font-size: var(--br-text-h5);
    font-weight: var(--br-font-semibold);
    color: var(--neutralDarkGrey);
    margin: 0 0 var(--br-space-2);
  }

  &__description {
    font-size: var(--br-text-sm);
    color: var(--neutralDarkGrey7);
    margin: 0 0 var(--br-space-4);
  }
}

.color-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: var(--br-space-4);
}

.color-card {
  background: var(--neutralLightGrey9);
  border: 1px solid var(--neutralLightGrey5);
  border-radius: var(--br-radius-lg);
  overflow: hidden;

  &__preview {
    height: 80px;
  }

  &__info {
    padding: var(--br-space-3);
  }

  &__name {
    display: block;
    font-family: 'Fira Code', monospace;
    font-size: var(--br-text-xs);
    color: var(--neutralDarkGrey);
    margin-bottom: var(--br-space-1);
  }

  &__value {
    font-size: var(--br-text-xs);
    color: var(--neutralDarkGrey7);
  }
}

.usage-section {
  margin-top: var(--br-space-12);

  h2 {
    font-size: var(--br-text-h5);
    font-weight: var(--br-font-semibold);
    color: var(--neutralDarkGrey);
    margin: 0 0 var(--br-space-4);
  }
}

.code-block {
  background: var(--neutralDarkGrey);
  border-radius: var(--br-radius-lg);
  padding: var(--br-space-4) var(--br-space-6);
  overflow-x: auto;

  pre {
    margin: 0;
  }

  code {
    font-family: 'Fira Code', monospace;
    font-size: var(--br-text-sm);
    color: var(--neutralLightGrey6);
    line-height: 1.6;
  }
}
</style>
