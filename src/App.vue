<script setup>
import { RouterView } from 'vue-router'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <a class="skip-link" href="#main">Skip to content</a>
  <Header />
  <main id="main" class="site-main" tabindex="-1">
    <RouterView />
  </main>
  <Footer />
</template>

<style scoped>
.site-main {
  flex: 1 0 auto;
}

.site-main:focus {
  outline: none;
}
</style>
