<script setup>
import { site } from '../data/site'
</script>

<template>
  <div class="container page contact">
    <div class="contact__lead">
      <p class="eyebrow">Get in touch</p>
      <h1 class="display">Contact</h1>
      <p class="lede">Want to talk about how I'd approach your product? Email me.</p>
      <p class="contact__email"><a :href="`mailto:${site.email}`">{{ site.email }}</a></p>
      <p class="contact__actions">
        <a class="button" :href="`mailto:${site.email}`">Send an email</a>
        <a class="button button--outline" :href="site.cv" target="_blank" rel="noopener">Download CV</a>
      </p>
    </div>
    <div>
      <dl class="facts card">
        <div>
          <dt>Based in</dt>
          <dd>{{ site.location }} ({{ site.timezone }})</dd>
        </div>
        <div>
          <dt>CV</dt>
          <dd><a :href="site.cv" target="_blank" rel="noopener">Download PDF</a></dd>
        </div>
        <div>
          <dt>Code</dt>
          <dd><a :href="site.github" target="_blank" rel="noopener noreferrer">github.com/Abood-arc</a></dd>
        </div>
        <div>
          <dt>LinkedIn</dt>
          <dd><a :href="site.linkedin" target="_blank" rel="noopener noreferrer">linkedin.com/in/abdullah-afaq-822607282</a></dd>
        </div>
      </dl>
    </div>
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

.contact .facts {
  margin: 0;
  padding-block: var(--space-2);
  background: var(--color-band);
}

.contact .facts > div:last-child {
  border-bottom: 0;
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
</style>
