<script setup>
import { RouterLink } from 'vue-router'
import { projects } from '../data/projects'
import { site } from '../data/site'
import portrait from '../assets/about.jpg'
import WorkCard from '../components/WorkCard.vue'

const [qubix, tassawur, ...rest] = projects
const others = [tassawur, ...rest]
const liveStore = qubix.links[0]
</script>

<template>
  <section class="hero" aria-labelledby="hero-title">
    <div class="container hero__grid">
      <div class="hero__copy">
        <p class="eyebrow">{{ site.hero.greeting }}</p>
        <h1 id="hero-title" class="display hero__title">{{ site.hero.title }}</h1>
        <p class="lede hero__lede">{{ site.hero.lede }}</p>
        <p class="hero__actions">
          <RouterLink to="/work" class="button">View my work</RouterLink>
          <RouterLink :to="`/work/${qubix.slug}`" class="button button--outline">Read the Qubix case study</RouterLink>
          <a :href="liveStore.href" target="_blank" rel="noopener noreferrer">Visit {{ liveStore.label }} ↗</a>
        </p>
      </div>

      <div class="hero__art">
        <span class="shape shape--sun" aria-hidden="true"></span>
        <span class="shape shape--pill" aria-hidden="true"></span>
        <span class="shape shape--tan" aria-hidden="true"></span>
        <span class="shape shape--dot" aria-hidden="true"></span>

        <svg class="hero__arc" viewBox="0 0 100 100" aria-hidden="true" focusable="false">
          <path d="M40 34 C 70 22, 82 58, 46 70" />
          <circle cx="40" cy="34" r="1.4" />
          <circle cx="46" cy="70" r="1.4" />
        </svg>

        <figure class="hero__portrait">
          <img :src="portrait" :alt="site.hero.photoAlt" fetchpriority="high" />
        </figure>
        <figure class="hero__frame hero__frame--lead">
          <img :src="qubix.image.src" :alt="qubix.image.alt" fetchpriority="high" />
        </figure>
        <figure class="hero__frame hero__frame--second">
          <img :src="tassawur.image.src" alt="" />
        </figure>
        <p class="hero__caption muted">{{ site.hero.photoCaption }}</p>
      </div>
    </div>
  </section>

  <section class="section more-work" aria-labelledby="more-work-title">
    <div class="container">
      <h2 id="more-work-title">Other projects</h2>
      <WorkCard v-for="project in others" :key="project.slug" :project="project" />
      <p class="more-work__all"><RouterLink to="/work">All work →</RouterLink></p>
    </div>
  </section>

  <section class="section band home-contact" aria-labelledby="home-contact-title">
    <div class="container prose">
      <h2 id="home-contact-title">Hiring for a full-stack role?</h2>
      <p>
        Email me at <a :href="`mailto:${site.email}`">{{ site.email }}</a>,
        or grab my <a :href="site.cv" target="_blank" rel="noopener">CV (PDF)</a>.
      </p>
    </div>
  </section>
</template>

<style scoped>
.hero {
  overflow: hidden;
  padding-block: var(--space-6);
}

.hero__grid {
  display: grid;
  gap: var(--space-5);
  align-items: center;
}

@media (min-width: 60rem) {
  .hero__grid {
    grid-template-columns: minmax(0, 1.05fr) minmax(0, 1fr);
    gap: var(--space-4);
  }
}

.hero__title {
  max-width: 16ch;
  margin-bottom: var(--space-3);
}

.hero__lede {
  max-width: 34rem;
  color: var(--color-muted);
}

.hero__actions {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--space-2) var(--space-3);
  margin: var(--space-4) 0 0;
}

/* Art: flat shapes with real content sitting on them */
.hero__art {
  position: relative;
  width: 100%;
  max-width: 34rem;
  aspect-ratio: 1;
  margin-inline: auto;
}

.shape {
  position: absolute;
  display: block;
}

.shape--sun {
  top: 0;
  right: -10%;
  width: 82%;
  aspect-ratio: 1;
  border-radius: 50%;
  background: var(--color-shape-soft);
}

.shape--pill {
  left: -6%;
  bottom: 4%;
  width: 74%;
  height: 30%;
  border-radius: 999px;
  background: var(--color-band-deep);
}

.shape--tan {
  top: 8%;
  left: 40%;
  width: 11%;
  aspect-ratio: 1;
  border-radius: 50%;
  background: var(--color-shape-tan);
}

.shape--dot {
  right: 8%;
  bottom: 30%;
  width: 6%;
  aspect-ratio: 1;
  border-radius: 50%;
  background: var(--color-ink);
}

.hero__arc {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  fill: var(--color-muted);
  stroke: var(--color-muted);
  stroke-width: 0.35;
  stroke-opacity: 0.7;
}

.hero__arc path {
  fill: none;
}

.hero__portrait {
  position: absolute;
  top: 18%;
  left: 2%;
  width: 46%;
  aspect-ratio: 1;
  overflow: hidden;
  border: 6px solid var(--color-bg);
  border-radius: 50%;
  background: var(--color-surface);
  box-shadow: var(--shadow-soft);
}

.hero__portrait img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 50% 30%;
}

.hero__frame {
  position: absolute;
  overflow: hidden;
  border: 1px solid var(--color-rule);
  background: var(--color-surface);
  box-shadow: var(--shadow-soft);
}

.hero__frame img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
}

.hero__frame--lead {
  right: 0;
  bottom: 12%;
  width: 60%;
  aspect-ratio: 16 / 10;
  border-radius: 14px;
}

.hero__frame--second {
  top: 6%;
  right: 4%;
  width: 34%;
  aspect-ratio: 4 / 3;
  border-radius: 12px;
}

.hero__caption {
  position: absolute;
  bottom: 0;
  left: 2%;
  margin: 0;
  font-size: var(--text-small);
}

.more-work__all {
  margin-top: var(--space-2);
  font-weight: 500;
}
</style>
