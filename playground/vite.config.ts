import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@braiphub/ui': resolve(__dirname, '../packages/braip-ui/src'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern',
        loadPaths: [resolve(__dirname, '../packages/braip-ui/src/styles')],
        additionalData: `@use "tokens/index" as *;`,
      },
    },
  },
})
