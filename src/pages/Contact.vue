<script setup>
import { site } from '../data/site'
</script>

<template>
  <div class="container page">
    <div class="prose">
      <h1>Contact</h1>
      <p class="lede">Want to talk about how I'd approach your product? Email me.</p>
      <p class="contact__email"><a :href="`mailto:${site.email}`">{{ site.email }}</a></p>
      <dl class="facts">
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
.contact__email {
  margin: var(--space-3) 0 var(--space-4);
  font-family: var(--font-heading);
  font-size: clamp(1.375rem, 1rem + 2vw, 2rem);
  font-weight: 600;
  overflow-wrap: anywhere;
}
</style>
