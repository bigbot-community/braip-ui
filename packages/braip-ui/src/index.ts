// =============================================================================
// BRAIP UI - MAIN ENTRY POINT
// =============================================================================
// Vue 3 Component Library
// https://github.com/braip/braip-ui
// =============================================================================

// Plugin
export { BraipUI, default } from "./plugin";

// Components
export * from "./components";

// Plugin Types (non-component types)
export type {
  BraipUIOptions,
  ComponentDefaults,
  UseModalReturn,
  UseThemeReturn,
  MaybeRef,
  ComponentSize,
  ComponentStatus,
} from "./types";

// Composables (future)
// export * from './composables'

// Directives (future)
// export * from './directives'

// Version
export const version = "0.1.0";
