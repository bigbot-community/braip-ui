// =============================================================================
// BRAIP UI - TYPE DEFINITIONS
// =============================================================================

import type { Ref } from "vue";

// Re-export component types
export type {
  ButtonVariant,
  ButtonSize,
  ButtonProps,
} from "../components/atoms/BrButton/types";

export type {
  InputSize,
  InputType,
  InputProps,
} from "../components/atoms/BrInput/types";

export type {
  SelectSize,
  SelectOption,
  SelectProps,
} from "../components/atoms/BrSelect/types";

export type {
  BadgeVariant,
  BadgeSize,
  BadgeProps,
} from "../components/atoms/BrBadge/types";

// export type {
//   IconName,
//   IconSize,
//   IconProps,
// } from '../components/atoms/BrIcon/types'

export type {
  SpinnerSize,
  SpinnerStatus,
  SpinnerProps,
} from "../components/atoms/BrSpinner/types";

export type {
  SwitchSize,
  SwitchProps,
} from "../components/atoms/BrSwitch/types";

export type {
  TextareaResize,
  TextareaProps,
} from "../components/atoms/BrTextarea/types";

export type {
  ModalVariant,
  ModalSize,
  ModalProps,
} from "../components/molecules/BrModal/types";

// ---------------------------------------------------------------------------
// PLUGIN OPTIONS
// ---------------------------------------------------------------------------

export interface BraipUIOptions {
  /**
   * Prefix for component names
   * @default 'Br'
   */
  prefix?: string;

  /**
   * Theme mode
   * @default 'light'
   */
  theme?: "light" | "dark";

  /**
   * Locale for i18n
   * @default 'pt-BR'
   */
  locale?: "pt-BR" | "en-US" | "es-ES";

  /**
   * Default props for components
   */
  defaults?: ComponentDefaults;
}

export interface ComponentDefaults {
  // Add component default overrides here
}

// ---------------------------------------------------------------------------
// COMPOSABLES
// ---------------------------------------------------------------------------

export interface UseModalReturn {
  isOpen: Ref<boolean>;
  open: () => void;
  close: () => void;
  toggle: () => void;
}

export interface UseThemeReturn {
  theme: Ref<"light" | "dark">;
  toggleTheme: () => void;
  setTheme: (theme: "light" | "dark") => void;
}

// ---------------------------------------------------------------------------
// UTILITY TYPES
// ---------------------------------------------------------------------------

export type MaybeRef<T> = T | Ref<T>;

export type ComponentSize = "xs" | "sm" | "md" | "lg" | "xl";

export type ComponentStatus =
  | "default"
  | "success"
  | "warning"
  | "danger"
  | "info";
