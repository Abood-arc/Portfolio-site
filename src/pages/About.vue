<script setup>
import aboutPhoto from '../assets/about.jpg'
import { layerMatrix } from '../data/layers'
import { site } from '../data/site'
</script>

<template>
  <div class="container page">
    <div class="about">
      <img class="about__photo" :src="aboutPhoto" alt="Portrait of Muhammad Abdullah Afaq" width="800" height="1067" />
      <div class="prose">
        <h1>About</h1>
        <p class="lede">I'm Abdullah, a full-stack developer based in Lahore. I studied Software Engineering at the University of Management and Technology, Lahore (2021–2025).</p>
        <p>Most recently I was a machine learning intern at FlyRank AI (Jul–Sep 2026), building a pipeline that predicts content-performance decline across 30+ clients. Before that I was a software engineer at Digital Labs AI (Jan–Mar 2026), building REST APIs and Docker deployments for client projects.</p>
        <p>Qubix is the project with real customers: a client's store I took from requirements to production and still maintain. The other three are personal projects, and each case study says plainly where it ended up.</p>
        <p>The full history is in my <a :href="site.cv" target="_blank" rel="noopener">CV (PDF)</a>.</p>
      </div>
    </div>

    <section class="matrix" aria-labelledby="matrix-title">
      <h2 id="matrix-title">What each project touched</h2>
      <p class="muted">The four projects, broken down by layer. A dash means that project didn't need the layer.</p>
      <div class="matrix__scroll" role="region" aria-labelledby="matrix-title" tabindex="0">
        <table>
          <thead>
            <tr>
              <th scope="col">Layer</th>
              <th v-for="column in layerMatrix.columns" :key="column" scope="col">{{ column }}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="row in layerMatrix.rows" :key="row.layer">
              <th scope="row">{{ row.layer }}</th>
              <td v-for="(cell, index) in row.cells" :key="index" :class="{ 'is-empty': !cell }">{{ cell || '—' }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>
</template>

<style scoped>
.about {
  display: grid;
  gap: var(--space-5);
  align-items: start;
}

@media (min-width: 48rem) {
  .about {
    grid-template-columns: minmax(0, 1fr) minmax(0, 2fr);
  }
}

.about__photo {
  width: 100%;
  max-width: 18rem;
  aspect-ratio: 3 / 4;
  object-fit: cover;
  border-radius: var(--radius);
  background: var(--color-surface);
}

.matrix {
  margin-top: var(--space-6);
}

.matrix__scroll {
  margin-top: var(--space-3);
  overflow-x: auto;
  border: 1px solid var(--color-rule);
  border-radius: var(--radius);
}

.matrix table {
  width: 100%;
  min-width: 44rem;
  border-collapse: collapse;
  font-size: var(--text-small);
}

.matrix th,
.matrix td {
  padding: 0.75rem 1rem;
  border-bottom: 1px solid var(--color-rule);
  text-align: left;
  vertical-align: top;
}

.matrix thead th {
  font-family: var(--font-heading);
  font-size: 1rem;
  font-weight: 600;
}

.matrix tbody th {
  position: sticky;
  left: 0;
  background: var(--color-bg);
  font-weight: 500;
  color: var(--color-muted);
  white-space: nowrap;
}

.matrix tbody tr:last-child > * {
  border-bottom: 0;
}

.matrix .is-empty {
  color: var(--color-muted);
}
</style>
