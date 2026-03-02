import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'

// Import Braip UI
import { BraipUI } from '@braiphub/ui'
import '@braiphub/ui/src/styles/main.scss'

// Custom styles
import './custom.scss'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {})
  },
  enhanceApp({ app }) {
    // Register Braip UI components
    app.use(BraipUI)
  },
} satisfies Theme
