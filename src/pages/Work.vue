<script setup>
import { projects } from '../data/projects'
import WorkCard from '../components/WorkCard.vue'
</script>

<template>
  <div class="container work-page">
    <h1 class="page-title">Work</h1>
    <div class="work-grid">
      <WorkCard 
        v-for="project in projects" 
        :key="project.id" 
        :project="project" 
      />
    </div>
  </div>
</template>

<style scoped>
.work-page {
  padding-top: 4rem;
  padding-bottom: 4rem;
}

.page-title {
  font-size: 3rem;
  margin-bottom: 3rem;
}

.work-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  gap: 2rem;
}
</style>