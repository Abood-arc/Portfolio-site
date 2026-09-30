<script setup>
import { skillGroups } from '../data/skills'
</script>

<template>
  <div class="skills">
    <div v-for="(group, i) in skillGroups" :key="group.title" v-reveal="i % 3" class="card skills__group">
      <h3 class="skills__title">{{ group.title }}</h3>
      <ul class="skills__list">
        <li v-for="item in group.items" :key="item" class="chip">{{ item }}</li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.skills {
  display: grid;
  gap: var(--space-3);
}

@media (min-width: 40rem) {
  .skills {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (min-width: 64rem) {
  .skills {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

.skills__group {
  padding: var(--space-3);
}

.skills__title {
  margin-bottom: var(--space-2);
  font-size: 1.125rem;
}

.skills__list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 0;
  padding: 0;
  list-style: none;
}
</style>
