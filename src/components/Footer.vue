<script setup>
import { site } from '../data/site'

const year = new Date().getFullYear()
</script>

<template>
  <footer class="site-footer">
    <div class="container site-footer__inner">
      <div>
        <p class="site-footer__status">Open to full-stack roles.</p>
        <p class="site-footer__meta">
          {{ site.location }} ({{ site.timezone }}) ·
          <a :href="`mailto:${site.email}`">{{ site.email }}</a>
        </p>
      </div>
      <ul class="inline-list">
        <li><a :href="site.github" target="_blank" rel="noopener noreferrer">GitHub</a></li>
        <li><a :href="site.linkedin" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
        <li><a :href="site.cv" target="_blank" rel="noopener">CV (PDF)</a></li>
      </ul>
    </div>
    <div class="container">
      <p class="site-footer__copy">© {{ year }} {{ site.name }}</p>
    </div>
  </footer>
</template>

<style scoped>
.site-footer {
  margin-top: auto;
  padding-block: var(--space-5) var(--space-4);
  border-top: 1px solid var(--color-rule);
  font-size: var(--text-small);
}

.site-footer__inner {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  gap: var(--space-3);
}

.site-footer__status {
  margin-bottom: 0.25rem;
  font-family: var(--font-heading);
  font-size: 1.25rem;
  font-weight: 600;
}

.site-footer__meta {
  margin: 0;
  color: var(--color-muted);
}

.site-footer__copy {
  margin: var(--space-4) 0 0;
  color: var(--color-muted);
}
</style>
