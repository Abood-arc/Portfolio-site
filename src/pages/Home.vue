<script setup>
import { projects } from '../data/projects'
import WorkCard from '../components/WorkCard.vue'
</script>

<template>
  <div class="container home-page">
    <section class="hero transition-transform">
      <div class="hero-content">
        <h1 class="hero-title">Muhammad Abdullah</h1>
        <p class="hero-text">
          I take a full-stack product from client requirement to a live, deployed system — proven by Qubix, a Laravel/Vue ecommerce platform with a full storefront and admin panel, built and deployed to production at jjbags.in. I'm proving this to a hiring manager screening full-stack candidates, so they'll email me to talk.
        </p>
      </div>
      <div class="hero-image-wrapper">
        <img src="../assets/qubix.jpg" alt="Qubix storefront hero" class="hero-image" />
      </div>
    </section>

    <section class="featured-work">
      <h2 class="section-title">Selected Work</h2>
      <div class="work-grid">
        <WorkCard 
          v-for="project in projects.slice(1)" 
          :key="project.id" 
          :project="project" 
        />
      </div>
    </section>
  </div>
</template>

<style scoped>
.home-page {
  padding-top: 4rem;
  padding-bottom: 4rem;
}

.hero {
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  margin-bottom: 6rem;
}

@media (min-width: 768px) {
  .hero {
    grid-template-columns: 1fr 1fr;
    align-items: center;
  }
}

.hero-title {
  font-size: 4rem;
  letter-spacing: -0.02em;
  margin-bottom: 1rem;
}

.hero-text {
  font-size: 1.25rem;
  color: var(--text-muted);
  line-height: 1.8;
}

.hero-image-wrapper {
  width: 100%;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
  border: 1px solid var(--border-color);
}

.hero-image {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
}

.section-title {
  font-size: 2.5rem;
  margin-bottom: 2rem;
}

.work-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  gap: 2rem;
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 3rem;
  }
}
</style>