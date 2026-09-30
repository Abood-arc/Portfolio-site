<script setup>
import { RouterLink } from 'vue-router'
import { projects } from '../data/projects'
import { site } from '../data/site'
import portrait from '../assets/about.jpg'
import WorkCard from '../components/WorkCard.vue'
import HeroShowcase from '../components/HeroShowcase.vue'
import SkillGroups from '../components/SkillGroups.vue'
import CountUp from '../components/CountUp.vue'

const [qubix, ...others] = projects
const liveStore = qubix.links[0]
</script>

<template>
  <section class="hero" aria-labelledby="hero-title">
    <div class="container hero__grid">
      <div class="hero__copy">
        <p v-reveal="0" class="eyebrow">{{ site.hero.greeting }}</p>
        <h1 id="hero-title" v-reveal="1" class="display hero__title">{{ site.hero.title }}</h1>
        <p v-reveal="2" class="lede hero__lede">{{ site.hero.lede }}</p>
        <p v-reveal="3" class="hero__actions">
          <RouterLink to="/work" class="button">View my work</RouterLink>
          <RouterLink :to="`/work/${qubix.slug}`" class="button button--outline">Read the Qubix case study</RouterLink>
          <a :href="liveStore.href" target="_blank" rel="noopener noreferrer">Visit {{ liveStore.label }} ↗</a>
        </p>
        <p v-reveal="4" class="hero__meta muted">{{ site.hero.photoCaption }}</p>
      </div>

      <div class="hero__art">
        <span v-reveal="1" v-parallax="0.12" class="shape shape--sun" aria-hidden="true"></span>
        <span v-reveal="2" v-parallax="-0.06" class="shape shape--pill" aria-hidden="true"></span>
        <span v-reveal="3" v-parallax="0.28" class="shape shape--tan" aria-hidden="true"></span>
        <span v-reveal="4" v-parallax="0.2" class="shape shape--dot" aria-hidden="true"></span>

        <svg v-reveal="3" class="hero__arc" viewBox="0 0 100 100" aria-hidden="true" focusable="false">
          <path d="M37 22 C 48 4, 78 6, 84 27" pathLength="1" />
          <circle cx="37" cy="22" r="1.2" />
          <circle cx="84" cy="27" r="1.2" />
        </svg>

        <figure v-reveal="2" class="hero__portrait">
          <img :src="portrait" :alt="site.hero.portraitAlt" fetchpriority="high" />
        </figure>
        <div v-reveal="3" class="hero__showcase">
          <HeroShowcase :slides="qubix.gallery" />
        </div>
      </div>
    </div>
  </section>

  <section class="band proof" aria-label="Proof in numbers">
    <ul class="container proof__list">
      <li v-for="(item, i) in site.proof" :key="item.label" v-reveal="i" class="proof__item">
        <span class="proof__value"><CountUp :value="item.value" /></span>
        <span class="proof__label">{{ item.label }}</span>
      </li>
    </ul>
  </section>

  <section class="section more-work" aria-labelledby="more-work-title">
    <div class="container">
      <h2 id="more-work-title" v-reveal>Other projects</h2>
      <div v-for="project in others" :key="project.slug" v-reveal>
        <WorkCard :project="project" />
      </div>
      <p class="more-work__all"><RouterLink to="/work">All work →</RouterLink></p>
    </div>
  </section>

  <section class="section band" aria-labelledby="skills-title">
    <div class="container">
      <p v-reveal class="eyebrow">Skills</p>
      <h2 id="skills-title" v-reveal="1">What I build with</h2>
      <p v-reveal="2" class="muted skills-intro">Only tools I've shipped with in the projects above.</p>
      <SkillGroups />
    </div>
  </section>

  <section class="section home-contact" aria-labelledby="home-contact-title">
    <div class="container">
      <div v-reveal class="prose">
        <h2 id="home-contact-title">Hiring for a full-stack role?</h2>
        <p>
          Email me at <a :href="`mailto:${site.email}`">{{ site.email }}</a>,
          or grab my <a :href="site.cv" target="_blank" rel="noopener">CV (PDF)</a>.
        </p>
      </div>
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

.hero__meta {
  margin: var(--space-3) 0 0;
  font-size: var(--text-small);
}

/* Art: flat shapes with real content sitting on them */
.hero__art {
  position: relative;
  width: 100%;
  max-width: 36rem;
  aspect-ratio: 1;
  margin-inline: auto;
}

.shape {
  position: absolute;
  display: block;
  translate: 0 var(--py, 0px);
}

.shape--sun {
  top: 2%;
  right: -12%;
  width: 84%;
  aspect-ratio: 1;
  border-radius: 50%;
  background: var(--color-shape-soft);
}

.shape--pill {
  left: -8%;
  bottom: 2%;
  width: 78%;
  height: 26%;
  border-radius: 999px;
  background: var(--color-band-deep);
}

.shape--tan {
  top: 3%;
  left: 47%;
  width: 9%;
  aspect-ratio: 1;
  border-radius: 50%;
  background: var(--color-shape-tan);
}

.shape--dot {
  top: 12%;
  right: 3%;
  width: 4.5%;
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
  z-index: 2;
  top: 6%;
  left: 0;
  width: 36%;
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

.hero__showcase {
  position: absolute;
  z-index: 1;
  top: 30%;
  right: 0;
  width: 80%;
}

/* Motion: the line draws itself once the hero is on screen.
   Only hidden for users without a reduced-motion preference. */
@media (prefers-reduced-motion: no-preference) {
  .hero__arc path {
    stroke-dasharray: 1;
    stroke-dashoffset: 1;
    transition: stroke-dashoffset 1400ms cubic-bezier(0.65, 0, 0.35, 1) 500ms;
  }

  .hero__arc.is-visible path {
    stroke-dashoffset: 0;
  }

  .hero__arc circle {
    opacity: 0;
    transition: opacity 400ms ease 500ms;
  }

  .hero__arc.is-visible circle {
    opacity: 1;
  }
}

.hero__arc.reveal {
  transform: none;
}

.more-work__all {
  margin-top: var(--space-2);
  font-weight: 500;
}

.skills-intro {
  margin-bottom: var(--space-4);
}

.proof__list {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: var(--space-4) var(--space-3);
  margin-block: 0;
  padding: var(--space-5) 0;
  list-style: none;
}

@media (min-width: 48rem) {
  .proof__list {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
}

.proof__value {
  display: block;
  font-family: var(--font-heading);
  font-size: var(--text-h1);
  font-weight: 600;
  line-height: 1.1;
  color: var(--color-accent);
}

.proof__label {
  display: block;
  margin-top: 0.25rem;
  font-size: var(--text-small);
  color: var(--color-muted);
}

</style>
