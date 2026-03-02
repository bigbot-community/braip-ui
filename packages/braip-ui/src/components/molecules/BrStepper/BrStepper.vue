<script setup lang="ts">
import { computed } from 'vue'
import type { StepperProps } from './types'

const props = withDefaults(defineProps<StepperProps>(), {
  orientation: 'horizontal',
  variant: 'default',
  clickable: false,
  showNumbers: true,
  linear: true,
  alternativeLabel: false,
})

const model = defineModel<number>({ default: 0 })

const emit = defineEmits<{
  (e: 'step-click', step: number): void
}>()

const classes = computed(() => [
  'br-stepper',
  `br-stepper--${props.orientation}`,
  `br-stepper--${props.variant}`,
  {
    'br-stepper--clickable': props.clickable,
    'br-stepper--alternative-label': props.alternativeLabel,
  },
])

function getStepStatus(index: number) {
  if (index < model.value) return 'completed'
  if (index === model.value) return 'active'
  return 'pending'
}

function canNavigateTo(index: number) {
  if (!props.clickable) return false
  if (props.linear && index > model.value) return false
  return true
}

function handleStepClick(index: number) {
  if (!canNavigateTo(index)) return
  if (props.steps[index].error) return

  model.value = index
  emit('step-click', index)
}
</script>

<template>
  <div :class="classes">
    <div
      v-for="(step, index) in steps"
      :key="index"
      class="br-stepper__step"
      :class="{
        'br-stepper__step--completed': getStepStatus(index) === 'completed',
        'br-stepper__step--active': getStepStatus(index) === 'active',
        'br-stepper__step--pending': getStepStatus(index) === 'pending',
        'br-stepper__step--error': step.error,
        'br-stepper__step--clickable': canNavigateTo(index),
      }"
      :role="clickable ? 'button' : undefined"
      :tabindex="canNavigateTo(index) ? 0 : undefined"
      @click="handleStepClick(index)"
      @keydown.enter="handleStepClick(index)"
    >
      <div class="br-stepper__indicator">
        <span class="br-stepper__icon">
          <svg v-if="getStepStatus(index) === 'completed' && !step.error" viewBox="0 0 24 24" fill="currentColor">
            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
          </svg>
          <svg v-else-if="step.error" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
          </svg>
          <template v-else-if="showNumbers">
            {{ index + 1 }}
          </template>
        </span>
        <div v-if="index < steps.length - 1" class="br-stepper__connector" />
      </div>

      <div class="br-stepper__content">
        <span class="br-stepper__title">
          {{ step.title }}
          <span v-if="step.optional" class="br-stepper__optional">(Opcional)</span>
        </span>
        <span v-if="step.description || step.errorMessage" class="br-stepper__description">
          {{ step.error ? step.errorMessage : step.description }}
        </span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.br-stepper {
  display: flex;

  &--horizontal {
    flex-direction: row;
    align-items: flex-start;

    .br-stepper__step {
      flex: 1;
      flex-direction: column;
      align-items: center;
    }

    .br-stepper__indicator {
      display: flex;
      align-items: center;
      width: 100%;
    }

    .br-stepper__connector {
      flex: 1;
      height: 2px;
      margin: 0 var(--br-space-2);
    }

    .br-stepper__content {
      text-align: center;
      margin-top: var(--br-space-2);
    }
  }

  &--vertical {
    flex-direction: column;

    .br-stepper__step {
      flex-direction: row;
      align-items: flex-start;
    }

    .br-stepper__indicator {
      flex-direction: column;
      align-items: center;
    }

    .br-stepper__connector {
      width: 2px;
      min-height: 40px;
      margin: var(--br-space-2) 0;
    }

    .br-stepper__content {
      margin-left: var(--br-space-3);
      padding-bottom: var(--br-space-4);
    }
  }

  &--alternative-label.br-stepper--horizontal {
    .br-stepper__content {
      position: absolute;
      top: 100%;
      left: 50%;
      transform: translateX(-50%);
      width: max-content;
      max-width: 150px;
    }
  }

  &__step {
    display: flex;
    position: relative;
  }

  &__indicator {
    position: relative;
  }

  &__icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: var(--neutralLightGrey5);
    color: var(--neutralDarkGrey5);
    font-size: var(--br-text-sm);
    font-weight: var(--br-font-medium);
    flex-shrink: 0;
    transition: all var(--br-transition-fast);

    svg {
      width: 18px;
      height: 18px;
    }
  }

  &__connector {
    background: var(--neutralLightGrey5);
    transition: background var(--br-transition-fast);
  }

  &__content {
    display: flex;
    flex-direction: column;
    gap: var(--br-space-1);
  }

  &__title {
    font-size: var(--br-text-sm);
    font-weight: var(--br-font-medium);
    color: var(--neutralDarkGrey7);
  }

  &__optional {
    font-weight: var(--br-font-normal);
    color: var(--neutralDarkGrey4);
  }

  &__description {
    font-size: var(--br-text-xs);
    color: var(--neutralDarkGrey5);
  }

  // States
  &__step--completed {
    .br-stepper__icon {
      background: var(--brandPrimary5);
      color: var(--br-white);
    }

    .br-stepper__connector {
      background: var(--brandPrimary5);
    }
  }

  &__step--active {
    .br-stepper__icon {
      background: var(--brandPrimary5);
      color: var(--br-white);
      box-shadow: 0 0 0 4px var(--brandPrimaryLightest);
    }

    .br-stepper__title {
      color: var(--brandPrimary6);
    }
  }

  &__step--error {
    .br-stepper__icon {
      background: var(--auxiliaryRed5);
      color: var(--br-white);
    }

    .br-stepper__title {
      color: var(--auxiliaryRed6);
    }

    .br-stepper__description {
      color: var(--auxiliaryRed5);
    }
  }

  &__step--clickable {
    cursor: pointer;

    &:hover .br-stepper__icon {
      transform: scale(1.1);
    }
  }

  // Variants
  &--outlined {
    .br-stepper__icon {
      background: transparent;
      border: 2px solid var(--neutralLightGrey5);
    }

    .br-stepper__step--completed .br-stepper__icon,
    .br-stepper__step--active .br-stepper__icon {
      border-color: var(--brandPrimary5);
      background: transparent;
      color: var(--brandPrimary5);
    }

    .br-stepper__step--error .br-stepper__icon {
      border-color: var(--auxiliaryRed5);
      background: transparent;
      color: var(--auxiliaryRed5);
    }
  }

  &--simple {
    .br-stepper__icon {
      width: 12px;
      height: 12px;
      font-size: 0;
    }

    .br-stepper__step--completed .br-stepper__icon,
    .br-stepper__step--active .br-stepper__icon {
      background: var(--brandPrimary5);
    }
  }
}
</style>
