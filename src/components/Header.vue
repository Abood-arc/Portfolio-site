<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <header class="site-header">
    <div class="container site-header__inner">
      <RouterLink to="/" class="monogram" aria-label="Muhammad Abdullah Afaq, home">AA</RouterLink>
      <nav aria-label="Primary">
        <ul class="nav">
          <li><RouterLink to="/work" class="nav__link">Work</RouterLink></li>
          <li><RouterLink to="/about" class="nav__link">About</RouterLink></li>
          <li><RouterLink to="/contact" class="button nav__cta">Contact</RouterLink></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.site-header {
  border-bottom: 1px solid var(--color-rule);
}

.site-header__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-3);
  min-height: 4.5rem;
}

.monogram {
  font-family: var(--font-heading);
  font-size: 1.375rem;
  font-weight: 600;
  letter-spacing: 0.02em;
  color: var(--color-text);
  text-decoration: none;
}

.monogram:hover {
  color: var(--color-link-hover);
}

.nav {
  display: flex;
  align-items: center;
  gap: clamp(1rem, 4vw, 2rem);
  margin: 0;
  padding: 0;
  list-style: none;
}

.nav__link {
  display: inline-block;
  padding-block: 0.5rem;
  border-bottom: 2px solid transparent;
  font-size: var(--text-small);
  font-weight: 500;
  color: var(--color-text);
  text-decoration: none;
}

.nav__link:hover {
  color: var(--color-link-hover);
}

.nav__link.router-link-active {
  border-bottom-color: var(--color-accent);
}

.nav__cta {
  padding: 0.5rem 1rem;
}
</style>
