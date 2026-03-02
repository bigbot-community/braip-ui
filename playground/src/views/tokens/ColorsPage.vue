<script setup lang="ts">
const colorGroups = [
  {
    name: 'Brand Primary (Purple)',
    description: 'Cor principal da marca',
    colors: [
      { name: '--brandPrimaryDarkest', value: 'rgb(44, 24, 100)' },
      { name: '--brandPrimaryDark9', value: 'rgb(65, 32, 151)' },
      { name: '--brandPrimaryDark8', value: 'rgb(87, 40, 201)' },
      { name: '--brandPrimaryDark7', value: 'rgb(109, 54, 251)' },
      { name: '--brandPrimary6', value: 'rgb(134, 93, 251)' },
      { name: '--brandPrimary5', value: 'rgb(158, 125, 255)' },
      { name: '--brandPrimary4', value: 'rgb(183, 157, 255)' },
      { name: '--brandPrimaryLight3', value: 'rgb(201, 178, 255)' },
      { name: '--brandPrimaryLight2', value: 'rgb(226, 215, 255)' },
      { name: '--brandPrimaryLightest', value: 'rgb(243, 241, 255)' },
    ],
  },
  {
    name: 'Brand Secondary (Green/Lime)',
    description: 'Cor secundária para destaques',
    colors: [
      { name: '--brandSecondaryDarkest', value: 'rgb(13, 53, 20)' },
      { name: '--brandSecondaryDark9', value: 'rgb(28, 85, 31)' },
      { name: '--brandSecondaryDark8', value: 'rgb(44, 122, 46)' },
      { name: '--brandSecondaryDark7', value: 'rgb(62, 157, 63)' },
      { name: '--brandSecondary6', value: 'rgb(81, 189, 81)' },
      { name: '--brandSecondary5', value: 'rgb(102, 221, 102)' },
      { name: '--brandSecondary4', value: 'rgb(130, 228, 130)' },
      { name: '--brandSecondaryLight3', value: 'rgb(158, 241, 156)' },
      { name: '--brandSecondaryLight2', value: 'rgb(191, 247, 184)' },
      { name: '--brandSecondaryLightest', value: 'rgb(222, 253, 225)' },
    ],
  },
  {
    name: 'Auxiliary Red (Danger)',
    description: 'Estados de erro e ações destrutivas',
    colors: [
      { name: '--auxiliaryRedDarkest', value: 'rgb(78, 0, 0)' },
      { name: '--auxiliaryRedDark9', value: 'rgb(120, 0, 0)' },
      { name: '--auxiliaryRedDark8', value: 'rgb(158, 11, 11)' },
      { name: '--auxiliaryRedDark7', value: 'rgb(202, 21, 21)' },
      { name: '--auxiliaryRed6', value: 'rgb(255, 46, 46)' },
      { name: '--auxiliaryRed5', value: 'rgb(255, 95, 95)' },
      { name: '--auxiliaryRed4', value: 'rgb(255, 125, 125)' },
      { name: '--auxiliaryRedLight3', value: 'rgb(255, 159, 159)' },
      { name: '--auxiliaryRedLight2', value: 'rgb(255, 192, 192)' },
      { name: '--auxiliaryRedLightest', value: 'rgb(255, 228, 228)' },
    ],
  },
  {
    name: 'Auxiliary Orange (Warning)',
    description: 'Alertas e avisos',
    colors: [
      { name: '--auxiliaryOrangeDarkest', value: 'rgb(119, 71, 0)' },
      { name: '--auxiliaryOrangeDark9', value: 'rgb(156, 94, 0)' },
      { name: '--auxiliaryOrangeDark8', value: 'rgb(186, 112, 0)' },
      { name: '--auxiliaryOrangeDark7', value: 'rgb(216, 129, 0)' },
      { name: '--auxiliaryOrange6', value: 'rgb(255, 157, 0)' },
      { name: '--auxiliaryOrange5', value: 'rgb(255, 168, 54)' },
      { name: '--auxiliaryOrange4', value: 'rgb(255, 196, 107)' },
      { name: '--auxiliaryOrangeLight3', value: 'rgb(255, 212, 147)' },
      { name: '--auxiliaryOrangeLight2', value: 'rgb(255, 226, 183)' },
      { name: '--auxiliaryOrangeLightest', value: 'rgb(254, 240, 215)' },
    ],
  },
  {
    name: 'Auxiliary Yellow (Attention)',
    description: 'Atenção e destaques informativos',
    colors: [
      { name: '--auxiliaryYellowDarkest', value: 'rgb(125, 106, 0)' },
      { name: '--auxiliaryYellowDark9', value: 'rgb(161, 136, 3)' },
      { name: '--auxiliaryYellowDark8', value: 'rgb(187, 156, 3)' },
      { name: '--auxiliaryYellowDark7', value: 'rgb(222, 184, 0)' },
      { name: '--auxiliaryYellow6', value: 'rgb(255, 214, 0)' },
      { name: '--auxiliaryYellow5', value: 'rgb(255, 226, 77)' },
      { name: '--auxiliaryYellow4', value: 'rgb(255, 232, 113)' },
      { name: '--auxiliaryYellowLight3', value: 'rgb(255, 238, 140)' },
      { name: '--auxiliaryYellowLight2', value: 'rgb(255, 243, 181)' },
      { name: '--auxiliaryYellowLightest', value: 'rgb(255, 249, 215)' },
    ],
  },
  {
    name: 'Auxiliary Blue (Info)',
    description: 'Informações e dicas',
    colors: [
      { name: '--auxiliaryBlueDarkest', value: 'rgb(9, 65, 121)' },
      { name: '--auxiliaryBlueDark9', value: 'rgb(10, 95, 180)' },
      { name: '--auxiliaryBlueDark8', value: 'rgb(16, 113, 205)' },
      { name: '--auxiliaryBlueDark7', value: 'rgb(29, 136, 243)' },
      { name: '--auxiliaryBlue6', value: 'rgb(51, 153, 255)' },
      { name: '--auxiliaryBlue5', value: 'rgb(104, 181, 255)' },
      { name: '--auxiliaryBlue4', value: 'rgb(137, 199, 255)' },
      { name: '--auxiliaryBlueLight3', value: 'rgb(173, 214, 255)' },
      { name: '--auxiliaryBlueLight2', value: 'rgb(194, 226, 255)' },
      { name: '--auxiliaryBlueLightest', value: 'rgb(226, 241, 255)' },
    ],
  },
  {
    name: 'Auxiliary Green (Success)',
    description: 'Estados de sucesso',
    colors: [
      { name: '--auxiliaryGreenDarkest', value: 'rgb(27, 91, 16)' },
      { name: '--auxiliaryGreenDark9', value: 'rgb(41, 122, 27)' },
      { name: '--auxiliaryGreenDark8', value: 'rgb(57, 153, 41)' },
      { name: '--auxiliaryGreenDark7', value: 'rgb(75, 182, 57)' },
      { name: '--auxiliaryGreen6', value: 'rgb(94, 195, 77)' },
      { name: '--auxiliaryGreen5', value: 'rgb(114, 215, 97)' },
      { name: '--auxiliaryGreen4', value: 'rgb(139, 227, 124)' },
      { name: '--auxiliaryGreenLight3', value: 'rgb(164, 244, 151)' },
      { name: '--auxiliaryGreenLight2', value: 'rgb(191, 255, 180)' },
      { name: '--auxiliaryGreenLightest', value: 'rgb(229, 255, 225)' },
    ],
  },
  {
    name: 'Auxiliary Pink',
    description: 'Tons de rosa para destaques especiais',
    colors: [
      { name: '--auxiliaryPinkDarkest', value: 'rgb(121, 0, 91)' },
      { name: '--auxiliaryPinkDark9', value: 'rgb(166, 19, 129)' },
      { name: '--auxiliaryPinkDark8', value: 'rgb(194, 33, 153)' },
      { name: '--auxiliaryPinkDark7', value: 'rgb(223, 50, 179)' },
      { name: '--auxiliaryPink6', value: 'rgb(255, 63, 206)' },
      { name: '--auxiliaryPink5', value: 'rgb(255, 104, 217)' },
      { name: '--auxiliaryPink4', value: 'rgb(255, 138, 225)' },
      { name: '--auxiliaryPinkLight3', value: 'rgb(255, 160, 231)' },
      { name: '--auxiliaryPinkLight2', value: 'rgb(255, 188, 238)' },
      { name: '--auxiliaryPinkLightest', value: 'rgb(255, 229, 249)' },
    ],
  },
  {
    name: 'Neutral Dark Grey',
    description: 'Tons escuros para textos e fundos escuros',
    colors: [
      { name: '--neutralDarkGrey', value: 'rgb(11, 11, 14)' },
      { name: '--neutralDarkGrey1', value: 'rgb(15, 17, 22)' },
      { name: '--neutralDarkGrey2', value: 'rgb(32, 34, 39)' },
      { name: '--neutralDarkGrey3', value: 'rgb(49, 51, 56)' },
      { name: '--neutralDarkGrey4', value: 'rgb(66, 68, 73)' },
      { name: '--neutralDarkGrey5', value: 'rgb(83, 85, 90)' },
      { name: '--neutralDarkGrey6', value: 'rgb(100, 102, 107)' },
      { name: '--neutralDarkGrey7', value: 'rgb(117, 119, 124)' },
      { name: '--neutralDarkGrey8', value: 'rgb(134, 136, 141)' },
      { name: '--neutralDarkGrey9', value: 'rgb(139, 139, 152)' },
    ],
  },
  {
    name: 'Neutral Light Grey',
    description: 'Tons claros para backgrounds e superfícies',
    colors: [
      { name: '--neutralLightGrey1', value: 'rgb(148, 151, 158)' },
      { name: '--neutralLightGrey2', value: 'rgb(163, 166, 174)' },
      { name: '--neutralLightGrey3', value: 'rgb(178, 181, 187)' },
      { name: '--neutralLightGrey4', value: 'rgb(204, 207, 214)' },
      { name: '--neutralLightGrey5', value: 'rgb(220, 223, 229)' },
      { name: '--neutralLightGrey6', value: 'rgb(233, 235, 238)' },
      { name: '--neutralLightGrey7', value: 'rgb(245, 245, 245)' },
      { name: '--neutralLightGrey8', value: 'rgb(252, 252, 252)' },
      { name: '--neutralLightGrey9', value: 'rgb(255, 255, 255)' },
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
