<script setup>
import { projects } from '../data/projects'
import WorkCard from '../components/WorkCard.vue'

const [lead, ...rest] = projects
</script>

<template>
  <div class="container page">
    <header v-reveal class="work-intro">
      <h1>Work</h1>
      <p class="lede">
        Four projects, each written up the same way: the problem, what I did, what came of it, and what I'd do next time.
        Qubix is the one with real customers.
      </p>
    </header>
    <div v-reveal><WorkCard :project="lead" variant="lead" heading-level="h2" /></div>
    <div v-for="project in rest" :key="project.slug" v-reveal>
      <WorkCard :project="project" heading-level="h2" />
    </div>
  </div>
</template>

<style scoped>
.work-intro {
  max-width: var(--measure);
  margin-bottom: var(--space-4);
}
</style>
