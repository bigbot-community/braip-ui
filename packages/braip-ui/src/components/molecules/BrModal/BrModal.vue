<script setup lang="ts">
/**
 * BrModal - Modal dialog component
 *
 * @example
 * <BrModal v-model="isOpen" title="Meu Modal">
 *   <p>Conteúdo do modal</p>
 * </BrModal>
 *
 * <BrModal v-model="isOpen" variant="aside" title="Painel Lateral">
 *   <p>Conteúdo do painel</p>
 * </BrModal>
 */

import type { ModalProps } from './types'

// ---------------------------------------------------------------------------
// PROPS
// ---------------------------------------------------------------------------

const props = withDefaults(defineProps<ModalProps>(), {
  title: "",
  variant: "center",
  size: "md",
  closable: true,
  closeOnClickOutside: true,
  closeOnEscape: true,
  showHeader: true,
  showFooter: false,
  persistent: false,
});

// ---------------------------------------------------------------------------
// MODEL
// ---------------------------------------------------------------------------

const isOpen = defineModel<boolean>({ default: false });

// ---------------------------------------------------------------------------
// EMITS
// ---------------------------------------------------------------------------

const emit = defineEmits<{
  (e: "close"): void;
  (e: "confirm"): void;
  (e: "cancel"): void;
}>();

// ---------------------------------------------------------------------------
// COMPUTED
// ---------------------------------------------------------------------------

const classes = computed(() => [
  "br-modal",
  `br-modal--${props.variant}`,
  `br-modal--${props.size}`,
  {
    "br-modal--open": isOpen.value,
  },
]);

// ---------------------------------------------------------------------------
// METHODS
// ---------------------------------------------------------------------------

function close() {
  if (!props.persistent) {
    isOpen.value = false;
    emit("close");
  }
}

function handleBackdropClick() {
  if (props.closeOnClickOutside) {
    close();
  }
}

function handleEscape(event: KeyboardEvent) {
  if (event.key === "Escape" && props.closeOnEscape && isOpen.value) {
    close();
  }
}

function handleConfirm() {
  emit("confirm");
}

function handleCancel() {
  emit("cancel");
  close();
}

// ---------------------------------------------------------------------------
// WATCHERS
// ---------------------------------------------------------------------------

watch(isOpen, (value) => {
  // SSR guard: document is undefined on server
  if (typeof document === "undefined") return;
  document.body.style.overflow = value ? "hidden" : "";
});

// ---------------------------------------------------------------------------
// SSR-SAFE TELEPORT
// ---------------------------------------------------------------------------

// Teleport is disabled during SSR and enabled after client hydration
const isMounted = ref(false);

// ---------------------------------------------------------------------------
// LIFECYCLE
// ---------------------------------------------------------------------------

onMounted(() => {
  isMounted.value = true;
  document.addEventListener("keydown", handleEscape);
});

onUnmounted(() => {
  document.removeEventListener("keydown", handleEscape);
  document.body.style.overflow = "";
});
</script>

<template>
  <!-- Teleport disabled during SSR to prevent hydration issues -->
  <Teleport to="body" :disabled="!isMounted">
    <Transition name="br-modal-fade">
      <div v-if="isOpen" :class="classes">
        <!-- Backdrop -->
        <div class="br-modal__backdrop" @click="handleBackdropClick" />

        <!-- Modal Content -->
        <Transition
          :name="variant === 'aside' ? 'br-modal-slide' : 'br-modal-scale'"
        >
          <div v-if="isOpen" class="br-modal__container">
            <!-- Header -->
            <header v-if="showHeader" class="br-modal__header">
              <slot name="header">
                <h2 class="br-modal__title">{{ title }}</h2>
              </slot>
              <button
                v-if="closable"
                type="button"
                class="br-modal__close"
                aria-label="Fechar"
                @click="close"
              >
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path
                    d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
                  />
                </svg>
              </button>
            </header>

            <!-- Body -->
            <div class="br-modal__body">
              <slot />
            </div>

            <!-- Footer -->
            <footer v-if="showFooter || $slots.footer" class="br-modal__footer">
              <slot name="footer">
                <button
                  type="button"
                  class="br-modal__btn br-modal__btn--cancel"
                  @click="handleCancel"
                >
                  Cancelar
                </button>
                <button
                  type="button"
                  class="br-modal__btn br-modal__btn--confirm"
                  @click="handleConfirm"
                >
                  Confirmar
                </button>
              </slot>
            </footer>
          </div>
        </Transition>
      </div>
    </Transition>
  </Teleport>
</template>

<style lang="scss" scoped>
.br-modal {
  position: fixed;
  inset: 0;
  z-index: var(--br-z-modal);
  display: flex;

  // ---------------------------------------------------------------------------
  // VARIANTS
  // ---------------------------------------------------------------------------

  &--center {
    align-items: center;
    justify-content: center;
    padding: var(--br-space-4);
  }

  &--aside {
    justify-content: flex-end;
  }

  // ---------------------------------------------------------------------------
  // SIZES
  // ---------------------------------------------------------------------------

  &--sm .br-modal__container {
    max-width: 400px;
  }

  &--md .br-modal__container {
    max-width: 560px;
  }

  &--lg .br-modal__container {
    max-width: 800px;
  }

  &--xl .br-modal__container {
    max-width: 1140px;
  }

  &--aside {
    &.br-modal--sm .br-modal__container {
      width: 320px;
    }

    &.br-modal--md .br-modal__container {
      width: 480px;
    }

    &.br-modal--lg .br-modal__container {
      width: 640px;
    }

    &.br-modal--xl .br-modal__container {
      width: 800px;
    }
  }

  // ---------------------------------------------------------------------------
  // BACKDROP
  // ---------------------------------------------------------------------------

  &__backdrop {
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
  }

  // ---------------------------------------------------------------------------
  // CONTAINER
  // ---------------------------------------------------------------------------

  &__container {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    max-height: 90vh;
    background: var(--neutralLightGrey9);
    border-radius: var(--br-radius-lg);
    box-shadow: var(--br-shadow-xl);
    overflow: hidden;
  }

  &--aside &__container {
    height: 100%;
    max-height: 100%;
    border-radius: var(--br-radius-lg) 0 0 var(--br-radius-lg);
  }

  // ---------------------------------------------------------------------------
  // HEADER
  // ---------------------------------------------------------------------------

  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--br-space-4);
    padding: var(--br-space-6);
    border-bottom: 1px solid var(--neutralLightGrey5);
  }

  &__title {
    flex: 1;
    margin: 0;
    font-family: var(--br-font-primary);
    font-size: var(--br-text-lg);
    font-weight: var(--br-font-semibold);
    color: var(--neutralDarkGrey);
  }

  &__close {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    padding: 0;
    border: none;
    border-radius: var(--br-radius-sm);
    background: transparent;
    color: var(--neutralDarkGrey8);
    cursor: pointer;
    transition: all var(--br-transition-fast);

    svg {
      width: 20px;
      height: 20px;
    }

    &:hover {
      background: var(--neutralLightGrey6);
      color: var(--neutralDarkGrey7);
    }
  }

  // ---------------------------------------------------------------------------
  // BODY
  // ---------------------------------------------------------------------------

  &__body {
    flex: 1;
    padding: var(--br-space-6);
    overflow-y: auto;
  }

  // ---------------------------------------------------------------------------
  // FOOTER
  // ---------------------------------------------------------------------------

  &__footer {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: var(--br-space-3);
    padding: var(--br-space-6);
    border-top: 1px solid var(--neutralLightGrey5);
  }

  &__btn {
    padding: var(--br-space-3) var(--br-space-6);
    font-family: var(--br-font-primary);
    font-size: var(--br-text-sm);
    font-weight: var(--br-font-semibold);
    border: none;
    border-radius: var(--br-radius-md);
    cursor: pointer;
    transition: all var(--br-transition-fast);

    &--cancel {
      background: var(--brandPrimaryLightest);
      color: var(--brandPrimary6);

      &:hover {
        background: var(--brandPrimaryLight2);
      }
    }

    &--confirm {
      background: var(--brandPrimary6);
      color: var(--neutralLightGrey9);

      &:hover {
        background: var(--brandPrimaryDark7);
      }
    }
  }
}

// ---------------------------------------------------------------------------
// TRANSITIONS
// ---------------------------------------------------------------------------

.br-modal-fade-enter-active,
.br-modal-fade-leave-active {
  transition: opacity 0.3s ease;
}

.br-modal-fade-enter-from,
.br-modal-fade-leave-to {
  opacity: 0;
}

.br-modal-scale-enter-active,
.br-modal-scale-leave-active {
  transition:
    opacity 0.3s ease,
    transform 0.3s ease;
}

.br-modal-scale-enter-from,
.br-modal-scale-leave-to {
  opacity: 0;
  transform: scale(0.95);
}

.br-modal-slide-enter-active,
.br-modal-slide-leave-active {
  transition: transform 0.3s ease;
}

.br-modal-slide-enter-from,
.br-modal-slide-leave-to {
  transform: translateX(100%);
}
</style>
