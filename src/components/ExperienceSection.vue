<script setup>
import { experience, education, certifications } from '../data/experience'
import Icon from './Icon.vue'
</script>

<template>
  <section class="section experience" aria-labelledby="experience-title">
    <div class="container">
      <div v-reveal class="experience__head">
        <p class="eyebrow">Experience</p>
        <h2 id="experience-title">Where I've worked</h2>
      </div>

      <ol class="timeline">
        <li
          v-for="(job, i) in experience"
          :key="job.org"
          v-reveal="i"
          class="timeline__item"
          :class="{ 'is-current': job.current }"
          :style="{ '--i': i }"
        >
          <div class="timeline__when">
            <p class="timeline__dates">
              <time>{{ job.start }}</time> – <time>{{ job.end }}</time>
            </p>
            <p class="timeline__org">
              <span class="timeline__tile" aria-hidden="true">{{ job.initial }}</span>
              {{ job.org }}
            </p>
          </div>

          <div class="timeline__rail" aria-hidden="true">
            <span class="timeline__dot"></span>
            <span class="timeline__line"></span>
          </div>

          <div class="timeline__body">
            <h3 class="timeline__role">{{ job.role }}</h3>
            <p class="timeline__meta muted">{{ job.meta }}</p>
            <ul class="timeline__points">
              <li v-for="point in job.points" :key="point">{{ point }}</li>
            </ul>
            <ul class="timeline__tags" aria-label="Skills used">
              <li v-for="tag in job.tags" :key="tag" class="chip">{{ tag }}</li>
            </ul>
          </div>
        </li>
      </ol>

      <div class="credentials">
        <div v-reveal class="card credentials__group">
          <h3 class="credentials__title">Education</h3>
          <ul class="credentials__list">
            <li v-for="item in education" :key="item.title">
              <p class="credentials__name">{{ item.title }}</p>
              <p class="credentials__sub muted">{{ item.place }} · {{ item.years }}</p>
            </li>
          </ul>
        </div>
        <div v-reveal="1" class="card credentials__group">
          <h3 class="credentials__title">Certifications</h3>
          <ul class="credentials__list">
            <li v-for="item in certifications" :key="item.title">
              <p class="credentials__name">
                <a :href="item.href" class="credentials__link" target="_blank" rel="noopener noreferrer">
                  {{ item.title }}<Icon name="arrow-up-right" class="credentials__go" />
                  <span class="visually-hidden">(opens the verified certificate)</span>
                </a>
              </p>
              <p class="credentials__sub muted">{{ item.issuer }} · {{ item.date }}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.experience__head {
  margin-bottom: var(--space-5);
}

.timeline {
  margin: 0;
  padding: 0;
  list-style: none;
}

/* Phone: rail on the left, everything else stacked beside it */
.timeline__item {
  display: grid;
  grid-template-columns: 1.5rem minmax(0, 1fr);
  grid-template-areas:
    'rail when'
    'rail body';
  column-gap: var(--space-2);
  padding-bottom: var(--space-5);
}

@media (min-width: 52rem) {
  .timeline__item {
    grid-template-columns: 14rem 1.5rem minmax(0, 1fr);
    grid-template-areas: 'when rail body';
    column-gap: var(--space-4);
  }
}

.timeline__when {
  grid-area: when;
  margin-bottom: var(--space-2);
}

.timeline__dates {
  margin: 0 0 var(--space-1);
  font-size: var(--text-label);
  font-weight: 500;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-muted);
}

.timeline__org {
  display: flex;
  align-items: center;
  gap: 0.625rem;
  margin: 0;
  font-weight: 600;
}

.timeline__tile {
  display: grid;
  place-items: center;
  flex: none;
  width: 2.25rem;
  height: 2.25rem;
  border-radius: 50%;
  background: var(--color-band-deep);
  font-family: var(--font-heading);
  font-size: 1rem;
  color: var(--color-link);
}

/* Rail: a dot and a line that connects to the next role */
.timeline__rail {
  grid-area: rail;
  position: relative;
}

.timeline__dot {
  position: absolute;
  top: 0.4rem;
  left: 50%;
  width: 0.875rem;
  height: 0.875rem;
  margin-left: -0.4375rem;
  border: 2px solid var(--color-accent);
  border-radius: 50%;
  background: var(--color-bg);
}

.is-current .timeline__dot {
  background: var(--color-accent);
  outline: 5px solid var(--color-shape-soft);
}

.timeline__line {
  position: absolute;
  top: 1.6rem;
  bottom: -0.4rem;
  left: 50%;
  width: 2px;
  margin-left: -1px;
  background: var(--color-shape-tan);
  transform-origin: top;
}

/* The last role gets a line too: it runs to the end of that role and stops */
.timeline__item:last-child {
  padding-bottom: 0;
}

.timeline__item:last-child .timeline__line {
  bottom: 0;
}

.timeline__body {
  grid-area: body;
}

.timeline__role {
  margin-bottom: 0.25rem;
}

.timeline__meta {
  margin-bottom: var(--space-2);
  font-size: var(--text-small);
}

.timeline__points {
  max-width: var(--measure);
  margin: 0 0 var(--space-2);
  padding-left: 1.1rem;
}

.timeline__points li {
  margin-bottom: 0.5rem;
}

.timeline__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 0;
  padding: 0;
  list-style: none;
}

/* The line draws down as each role arrives; the dot pops in. Only for users who welcome motion. */
@media (prefers-reduced-motion: no-preference) {
  /* Wide screens show both roles at once, so they play in order: the first line draws down
     and, as it arrives, the next dot pops and its own line draws. On phones every role
     animates on its own as you scroll to it. */
  .timeline__item {
    --rail-offset: 0ms;
  }

  @media (min-width: 52rem) {
    .timeline__item {
      --rail-offset: calc(var(--i, 0) * 1300ms);
    }
  }

  .timeline__line {
    transform: scaleY(0);
    transition: transform 1100ms cubic-bezier(0.65, 0, 0.35, 1) calc(300ms + var(--rail-offset));
  }

  .timeline__item.is-visible .timeline__line {
    transform: scaleY(1);
  }

  .timeline__dot {
    transform: scale(0);
    transition: transform 500ms cubic-bezier(0.34, 1.56, 0.64, 1) calc(200ms + var(--rail-offset));
  }

  .timeline__item.is-visible .timeline__dot {
    transform: scale(1);
  }
}

/* Education and certifications sit side by side */
.credentials {
  display: grid;
  gap: var(--space-3);
  margin-top: var(--space-4);
}

@media (min-width: 48rem) {
  .credentials {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

.credentials__group {
  padding: var(--space-3);
  background: var(--color-band);
}

.credentials__title {
  margin-bottom: var(--space-2);
  font-size: 1.125rem;
}

.credentials__list {
  margin: 0;
  padding: 0;
  list-style: none;
}

.credentials__list li + li {
  margin-top: var(--space-2);
  padding-top: var(--space-2);
  border-top: 1px solid var(--color-rule);
}

.credentials__name {
  margin: 0;
  font-weight: 500;
}

.credentials__link {
  color: var(--color-text);
  text-decoration: none;
}

.credentials__link:hover {
  color: var(--color-link-hover);
  text-decoration: underline;
  text-underline-offset: 0.2em;
}

.credentials__link .credentials__go {
  display: inline-block;
  width: 0.9rem;
  height: 0.9rem;
  margin-left: 0.3rem;
  vertical-align: -0.1em;
  color: var(--color-muted);
}

.credentials__sub {
  margin: 0.125rem 0 0;
  font-size: var(--text-small);
}
</style>
