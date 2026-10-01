<script setup>
import { site } from '../data/site'
import Icon from '../components/Icon.vue'

const rows = [
  { icon: 'pin', label: 'Based in', value: `${site.location} (${site.timezone})` },
  { icon: 'file', label: 'CV', value: 'Download PDF', href: site.cv },
  { icon: 'github', label: 'GitHub', value: 'Abood-arc', href: site.github },
  { icon: 'linkedin', label: 'LinkedIn', value: 'View profile', href: site.linkedin },
]
</script>

<template>
  <div class="container page contact">
    <div v-reveal class="contact__lead">
      <p class="eyebrow">Get in touch</p>
      <h1 class="display">Contact</h1>
      <p class="lede">Want to talk about how I'd approach your product? Email me.</p>
      <p class="contact__email"><a :href="`mailto:${site.email}`">{{ site.email }}</a></p>
      <p class="contact__actions">
        <a class="button" :href="`mailto:${site.email}`">Send an email</a>
        <a class="button button--outline" :href="site.cv" target="_blank" rel="noopener">Download CV</a>
      </p>
    </div>

    <ul v-reveal="2" class="contact__list card">
      <li v-for="row in rows" :key="row.label">
        <component
          :is="row.href ? 'a' : 'div'"
          class="contact__row"
          :class="{ 'is-link': row.href }"
          v-bind="row.href ? { href: row.href, target: '_blank', rel: 'noopener noreferrer' } : {}"
        >
          <span class="contact__tile"><Icon :name="row.icon" /></span>
          <span class="contact__text">
            <span class="contact__label">{{ row.label }}</span>
            <span class="contact__value">{{ row.value }}</span>
          </span>
          <Icon v-if="row.href" name="arrow-up-right" class="contact__go" />
        </component>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.contact {
  display: grid;
  gap: var(--space-5);
  align-items: start;
}

@media (min-width: 60rem) {
  .contact {
    grid-template-columns: minmax(0, 1.2fr) minmax(0, 1fr);
    gap: var(--space-6);
  }
}

.contact__actions {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
}

.contact__email {
  margin: var(--space-3) 0 var(--space-4);
  font-family: var(--font-heading);
  font-size: clamp(1.375rem, 1rem + 2vw, 2rem);
  font-weight: 600;
  overflow-wrap: anywhere;
}

/* Link list: each row is one big tap target */
.contact__list {
  margin: 0;
  padding: var(--space-1);
  list-style: none;
  background: var(--color-band);
}

.contact__list li + li {
  border-top: 1px solid var(--color-rule);
}

.contact__row {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-2);
  border-radius: calc(var(--radius-lg) - 6px);
  color: var(--color-text);
  text-decoration: none;
  transition: background-color 150ms ease;
}

.contact__tile {
  display: grid;
  place-items: center;
  flex: none;
  width: 2.75rem;
  height: 2.75rem;
  border-radius: 50%;
  background: var(--color-band-deep);
  color: var(--color-link);
  transition: background-color 150ms ease, color 150ms ease;
}

.contact__text {
  display: grid;
  min-width: 0;
  flex: 1;
}

.contact__label {
  font-size: var(--text-label);
  font-weight: 500;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-muted);
}

.contact__value {
  overflow-wrap: anywhere;
  font-weight: 500;
}

.contact__go {
  color: var(--color-muted);
  transition: color 150ms ease;
}

.contact__row.is-link:hover {
  background: var(--color-bg);
  color: var(--color-text);
}

.contact__row.is-link:hover .contact__tile {
  background: var(--color-ink);
  color: var(--color-on-ink);
}

.contact__row.is-link:hover .contact__go {
  color: var(--color-text);
}
</style>
