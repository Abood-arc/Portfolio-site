<script setup>
import { computed } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import { getProject, getNextProject } from '../data/projects'
import { site } from '../data/site'
import NotFound from './NotFound.vue'

const route = useRoute()
const project = computed(() => getProject(route.params.slug))
const next = computed(() => (project.value ? getNextProject(project.value.slug) : null))
</script>

<template>
  <NotFound v-if="!project" />
  <article v-else class="container page">
    <p class="case__back"><RouterLink to="/work">← All work</RouterLink></p>

    <header class="case__header">
      <p class="label">{{ project.kind }}</p>
      <h1>{{ project.title }}</h1>
      <p class="lede muted">{{ project.subtitle }}</p>
      <dl class="facts">
        <div>
          <dt>Status</dt>
          <dd>{{ project.statusDetail }}</dd>
        </div>
        <div>
          <dt>Stack</dt>
          <dd>{{ project.stack.join(' · ') }}</dd>
        </div>
        <div>
          <dt>Links</dt>
          <dd>
            <ul class="inline-list">
              <li v-for="link in project.links" :key="link.href">
                <a :href="link.href" target="_blank" rel="noopener noreferrer">{{ link.label }} ↗</a>
              </li>
            </ul>
          </dd>
        </div>
      </dl>
    </header>

    <figure class="case__hero">
      <a :href="project.image.src" target="_blank" rel="noopener">
        <img class="shot" :src="project.image.src" :alt="project.image.alt" fetchpriority="high" />
      </a>
      <figcaption>{{ project.image.caption }} Click to open full size.</figcaption>
    </figure>

    <div class="prose case__body">
      <section v-for="section in project.sections" :key="section.heading">
        <h2>{{ section.heading }}</h2>
        <p v-for="(paragraph, index) in section.paragraphs" :key="index">{{ paragraph }}</p>
        <figure v-for="figure in section.figures || []" :key="figure.src" class="case__figure">
          <a :href="figure.src" target="_blank" rel="noopener">
            <img class="shot" :src="figure.src" :alt="figure.alt" loading="lazy" decoding="async" />
          </a>
          <figcaption>{{ figure.caption }}</figcaption>
        </figure>
      </section>
    </div>

    <footer class="prose case__footer">
      <p>Questions about how this was built? <a :href="`mailto:${site.email}`">{{ site.email }}</a></p>
      <p class="case__next">
        <RouterLink :to="`/work/${next.slug}`">Next: {{ next.title }} →</RouterLink>
      </p>
    </footer>
  </article>
</template>

<style scoped>
.case__back {
  margin-bottom: var(--space-4);
  font-size: var(--text-small);
}

.case__header {
  max-width: var(--measure);
  margin-bottom: var(--space-5);
}

.case__hero {
  margin-bottom: var(--space-6);
}

.case__body section + section {
  margin-top: var(--space-5);
}

.case__figure {
  margin-block: var(--space-4);
}

.case__footer {
  margin-top: var(--space-6);
  padding-top: var(--space-4);
  border-top: 1px solid var(--color-rule);
}

.case__next {
  font-family: var(--font-heading);
  font-size: var(--text-h3);
  font-weight: 600;
}
</style>
