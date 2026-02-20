// =============================================================================
// BRAIP UI - VUE PLUGIN
// =============================================================================

import type { App, Plugin } from "vue";
import type { BraipUIOptions } from "./types";

// Import all components
import * as components from "./components";

// Import styles
import "./styles/main.scss";

// ---------------------------------------------------------------------------
// DEFAULT OPTIONS
// ---------------------------------------------------------------------------

const defaultOptions: BraipUIOptions = {
  prefix: "Br",
  theme: "light",
  locale: "pt-BR",
};

// ---------------------------------------------------------------------------
// PLUGIN DEFINITION
// ---------------------------------------------------------------------------

export const BraipUI: Plugin = {
  install(app: App, options: BraipUIOptions = {}) {
    const mergedOptions = { ...defaultOptions, ...options };

    // Register all components globally
    Object.entries(components).forEach(([name, component]) => {
      // Apply prefix if specified
      const componentName = mergedOptions.prefix
        ? `${mergedOptions.prefix}${name.replace(/^Br/, "")}`
        : name;

      app.component(componentName, component);
    });

    // Provide options globally
    app.provide("braip-ui-options", mergedOptions);

    // Provide theme
    app.provide("braip-ui-theme", mergedOptions.theme);

    // Set theme class on document
    if (typeof document !== "undefined") {
      document.documentElement.setAttribute(
        "data-br-theme",
        mergedOptions.theme || "light",
      );
    }
  },
};

// ---------------------------------------------------------------------------
// EXPORTS
// ---------------------------------------------------------------------------

export default BraipUI;
export { defaultOptions };
export type { BraipUIOptions };
