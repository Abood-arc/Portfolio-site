<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { projects } from '../data/projects'

const route = useRoute()
const router = useRouter()

const project = computed(() => {
  const found = projects.find(p => p.slug === route.params.slug)
  if (!found && route.params.slug) {
    // Optionally redirect to 404 or home
    router.push('/work')
  }
  return found
})
</script>

<template>
  <div class="container case-study-page" v-if="project">
    <div class="case-header">
      <h1 class="title">{{ project.title }}</h1>
      <p class="subtitle">{{ project.subtitle }}</p>
      <div class="tags">
        <span v-for="tag in project.tags" :key="tag" class="tag">{{ tag }}</span>
      </div>
    </div>
    
    <div class="hero-image">
      <img :src="project.image" :alt="project.title" />
    </div>

    <article class="case-content">
      <section v-if="project.sections.problem">
        <h2>The Problem</h2>
        <p v-html="project.sections.problem.replace(/\n\n/g, '<br><br>')"></p>
      </section>

      <section v-if="project.sections.whatIDid">
        <h2>What I Did</h2>
        <p v-html="project.sections.whatIDid.replace(/\n\n/g, '<br><br>')"></p>
      </section>

      <section v-if="project.sections.whatCameOfIt">
        <h2>What Came Of It</h2>
        <p v-html="project.sections.whatCameOfIt.replace(/\n\n/g, '<br><br>')"></p>
      </section>

      <section v-if="project.sections.nextTime">
        <h2>Next Time</h2>
        <p v-html="project.sections.nextTime.replace(/\n\n/g, '<br><br>')"></p>
      </section>
    </article>
  </div>
</template>

<style scoped>
.case-study-page {
  padding-top: 4rem;
  padding-bottom: 4rem;
  max-width: 900px;
  margin: 0 auto;
}

.case-header {
  margin-bottom: 3rem;
  text-align: center;
}

.title {
  font-size: 3.5rem;
  margin-bottom: 1rem;
}

.subtitle {
  font-size: 1.5rem;
  color: var(--text-muted);
  margin-bottom: 1.5rem;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
}

.tag {
  font-size: 0.875rem;
  font-weight: 500;
  padding: 0.35rem 1rem;
  background-color: var(--bg-cream);
  color: var(--accent-ochre);
  border: 1px solid var(--accent-ochre-light);
  border-radius: 9999px;
}

.hero-image {
  margin-bottom: 4rem;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0,0,0,0.05);
  border: 1px solid var(--border-color);
}

.hero-image img {
  width: 100%;
  height: auto;
  display: block;
}

.case-content section {
  margin-bottom: 3rem;
}

.case-content h2 {
  font-size: 2rem;
  color: var(--text-dark);
  margin-bottom: 1.5rem;
  border-bottom: 2px solid var(--accent-ochre);
  display: inline-block;
  padding-bottom: 0.25rem;
}

.case-content p {
  font-size: 1.125rem;
  line-height: 1.8;
  color: var(--text-muted);
}
</style>