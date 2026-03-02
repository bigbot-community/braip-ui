<script setup lang="ts">
import DocsLayout from './layouts/DocsLayout.vue'
</script>

<template>
  <DocsLayout />
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-family: var(--br-font-primary);
  font-size: 16px;
  line-height: 1.5;
  color: var(--neutralDarkGrey);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  min-height: 100vh;
  background: var(--neutralLightGrey7);
}

a {
  color: inherit;
}

button {
  font-family: inherit;
}
</style>
