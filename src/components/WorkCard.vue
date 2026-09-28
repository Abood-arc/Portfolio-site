<script setup>
import { RouterLink } from 'vue-router'

defineProps({
  project: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <RouterLink :to="`/work/${project.slug}`" class="work-card transition-transform">
    <div class="image-wrapper">
      <img :src="project.image" :alt="project.title" loading="lazy" />
    </div>
    <div class="content">
      <h3 class="title">{{ project.title }}</h3>
      <p class="subtitle">{{ project.subtitle }}</p>
      <div class="tags">
        <span v-for="tag in project.tags" :key="tag" class="tag">{{ tag }}</span>
      </div>
    </div>
  </RouterLink>
</template>

<style scoped>
.work-card {
  display: flex;
  flex-direction: column;
  border: 1px solid var(--border-color);
  border-radius: 8px;
  overflow: hidden;
  background-color: #fff;
  transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
  text-decoration: none;
  height: 100%;
}

.work-card:hover {
  transform: translateY(-4px);
  border-color: var(--accent-ochre);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.05);
}

.image-wrapper {
  width: 100%;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  background-color: var(--bg-cream);
  border-bottom: 1px solid var(--border-color);
}

.image-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.work-card:hover .image-wrapper img {
  transform: scale(1.03);
}

.content {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.title {
  font-family: var(--font-heading);
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--text-dark);
  margin-bottom: 0.5rem;
}

.subtitle {
  font-size: 1rem;
  color: var(--text-muted);
  margin-bottom: 1.5rem;
  flex-grow: 1;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tag {
  font-size: 0.75rem;
  font-weight: 500;
  padding: 0.25rem 0.75rem;
  background-color: var(--bg-cream);
  color: var(--accent-ochre);
  border: 1px solid rgba(168, 118, 62, 0.4);
  border-radius: 9999px;
}
</style>
