<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <header class="header">
    <div class="container header-inner">
      <RouterLink to="/" class="logo transition-colors">Muhammad Abdullah</RouterLink>
      <nav class="nav">
        <RouterLink to="/work" class="nav-link transition-colors">Work</RouterLink>
        <RouterLink to="/about" class="nav-link transition-colors">About</RouterLink>
        <RouterLink to="/contact" class="nav-link transition-colors">Contact</RouterLink>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.header {
  padding: 2rem 0;
  border-bottom: 1px solid var(--border-color);
}

.header-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-family: var(--font-heading);
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--text-dark);
}

.logo:hover {
  color: var(--accent-ochre);
}

.nav {
  display: flex;
  gap: 2rem;
}

.nav-link {
  font-size: 1rem;
  font-weight: 500;
  color: var(--text-muted);
}

.nav-link:hover,
.nav-link.router-link-active {
  color: var(--accent-ochre);
}
</style>