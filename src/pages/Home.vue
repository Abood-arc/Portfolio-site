<script setup>
import { RouterLink } from 'vue-router'
import { projects } from '../data/projects'
import { site } from '../data/site'
import WorkCard from '../components/WorkCard.vue'

const [qubix, ...others] = projects
const liveStore = qubix.links[0]
</script>

<template>
  <div class="container page">
    <section class="hero" aria-labelledby="hero-title">
      <p class="label">{{ site.name }} · {{ site.role }}, {{ site.location }}</p>
      <h1 id="hero-title" class="hero__title">I built an ecommerce site for a client that's live and handling real customer orders.</h1>
      <p class="lede hero__lede">Took their requirements, designed it, shipped it, and I'm maintaining it.</p>
      <p class="hero__actions">
        <RouterLink :to="`/work/${qubix.slug}`" class="button">Read the Qubix case study</RouterLink>
        <a :href="liveStore.href" target="_blank" rel="noopener noreferrer">Visit {{ liveStore.label }} ↗</a>
      </p>
      <figure>
        <img class="shot" :src="qubix.image.src" :alt="qubix.image.alt" fetchpriority="high" />
        <figcaption>{{ qubix.image.caption }}</figcaption>
      </figure>
    </section>

    <section class="more-work" aria-labelledby="more-work-title">
      <h2 id="more-work-title">Other projects</h2>
      <WorkCard v-for="project in others" :key="project.slug" :project="project" />
      <p class="more-work__all"><RouterLink to="/work">All work →</RouterLink></p>
    </section>

    <section class="home-contact prose" aria-labelledby="home-contact-title">
      <h2 id="home-contact-title">Hiring for a full-stack role?</h2>
      <p>
        Email me at <a :href="`mailto:${site.email}`">{{ site.email }}</a>,
        or grab my <a :href="site.cv" target="_blank" rel="noopener">CV (PDF)</a>.
      </p>
    </section>
  </div>
</template>

<style scoped>
.hero {
  padding-bottom: var(--space-6);
}

.hero__title {
  max-width: 26ch;
}

.hero__lede {
  max-width: var(--measure);
}

.hero__actions {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--space-2) var(--space-4);
  margin: var(--space-4) 0 var(--space-5);
}

.more-work__all {
  margin-top: var(--space-2);
  font-weight: 500;
}

.home-contact {
  margin-top: var(--space-6);
  padding-top: var(--space-5);
  border-top: 1px solid var(--color-rule);
}
</style>
