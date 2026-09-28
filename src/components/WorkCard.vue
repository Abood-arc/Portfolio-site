<script setup>
import { RouterLink } from 'vue-router'

defineProps({
  project: { type: Object, required: true },
  variant: {
    type: String,
    default: 'row',
    validator: (value) => ['lead', 'row'].includes(value),
  },
  headingLevel: { type: String, default: 'h3' },
})
</script>

<template>
  <article class="work-card" :class="`work-card--${variant}`">
    <RouterLink :to="`/work/${project.slug}`" class="work-card__media" tabindex="-1" aria-hidden="true">
      <img :src="project.image.src" alt="" :loading="variant === 'lead' ? 'eager' : 'lazy'" decoding="async" />
    </RouterLink>
    <div class="work-card__body">
      <p class="label">{{ project.kind }} · {{ project.status }}</p>
      <component :is="headingLevel" class="work-card__title">
        <RouterLink :to="`/work/${project.slug}`">{{ project.title }}</RouterLink>
      </component>
      <p class="work-card__subtitle">{{ project.subtitle }}</p>
      <p class="work-card__summary">{{ project.summary }}</p>
      <p class="work-card__stack">{{ project.stack.join(' · ') }}</p>
      <RouterLink :to="`/work/${project.slug}`" class="work-card__more">
        Read the case study<span class="visually-hidden">: {{ project.title }}</span> →
      </RouterLink>
    </div>
  </article>
</template>

<style scoped>
.work-card {
  padding-block: var(--space-5);
  border-top: 1px solid var(--color-rule);
}

.work-card__media {
  display: block;
}

.work-card__media img {
  width: 100%;
  aspect-ratio: 16 / 10;
  object-fit: cover;
  object-position: top;
  border: 1px solid var(--color-rule);
  border-radius: var(--radius);
  background: var(--color-surface);
}

.work-card__title {
  margin-bottom: 0.25rem;
  font-size: var(--text-h3);
}

.work-card__title a {
  color: var(--color-text);
  text-decoration: none;
}

.work-card__title a:hover {
  color: var(--color-link-hover);
  text-decoration: underline;
}

.work-card__subtitle {
  margin-bottom: var(--space-2);
  color: var(--color-muted);
}

.work-card__summary {
  max-width: var(--measure);
}

.work-card__stack {
  font-size: var(--text-small);
  color: var(--color-muted);
}

.work-card__more {
  font-size: var(--text-small);
  font-weight: 500;
}

.work-card--row {
  display: grid;
  gap: var(--space-3);
}

@media (min-width: 48rem) {
  .work-card--row {
    grid-template-columns: minmax(0, 2fr) minmax(0, 3fr);
    gap: var(--space-5);
    align-items: start;
  }
}

.work-card--lead .work-card__media {
  margin-bottom: var(--space-4);
}

.work-card--lead .work-card__media img {
  aspect-ratio: auto;
}

.work-card--lead .work-card__title {
  font-size: var(--text-h2);
}
</style>
