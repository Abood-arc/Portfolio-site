<script setup>
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'

const props = defineProps({
  slides: { type: Array, required: true },
  interval: { type: Number, default: 2750 },
})

const index = ref(0)
const motionOk = ref(false)
const running = ref(false)
let timer = 0

// Keeps moving after a click: choosing a tab only restarts the countdown from that slide.
const autoplay = computed(() => motionOk.value)
const current = computed(() => props.slides[index.value])

function stop() {
  clearTimeout(timer)
  running.value = false
}

// Restart the progress bar from zero, then start the countdown to the next slide.
async function schedule() {
  stop()
  if (!autoplay.value) return
  await nextTick()
  requestAnimationFrame(() => {
    if (!autoplay.value) return
    running.value = true
    timer = setTimeout(() => {
      index.value = (index.value + 1) % props.slides.length
    }, props.interval)
  })
}

function go(i) {
  index.value = i
}

watch([index, autoplay], schedule)

onMounted(() => {
  motionOk.value = !window.matchMedia('(prefers-reduced-motion: reduce)').matches
  schedule()
})
onBeforeUnmount(stop)
</script>

<template>
  <div
    class="showcase"
    :class="{ 'is-static': !autoplay }"
    :style="{ '--interval': `${interval}ms` }"
    role="group"
    aria-roledescription="carousel"
    aria-label="Qubix screenshots"
  >
    <div class="showcase__frame" :aria-live="autoplay ? 'off' : 'polite'">
      <figure
        v-for="(slide, i) in slides"
        :key="slide.src"
        class="showcase__slide"
        :class="{ 'is-active': i === index, 'is-contain': slide.fit === 'contain' }"
        :aria-hidden="i === index ? 'false' : 'true'"
      >
        <img :src="slide.src" :alt="slide.alt" :fetchpriority="i === 0 ? 'high' : 'low'" :loading="i === 0 ? 'eager' : 'lazy'" decoding="async" />
      </figure>
    </div>

    <div class="showcase__tabs">
      <button
        v-for="(slide, i) in slides"
        :key="slide.label"
        type="button"
        class="showcase__tab"
        :class="{ 'is-active': i === index, 'is-running': i === index && running }"
        :aria-label="`Show ${slide.label}`"
        :aria-current="i === index ? 'true' : undefined"
        @click="go(i)"
      >
        <span class="showcase__bar" aria-hidden="true"></span>
        <span class="showcase__label">{{ slide.label }}</span>
      </button>
    </div>

    <p class="showcase__caption">{{ current.caption }}</p>
  </div>
</template>

<style scoped>
.showcase__frame {
  position: relative;
  aspect-ratio: 2 / 1;
  overflow: hidden;
  border: 1px solid var(--color-rule);
  border-radius: 14px;
  background: var(--color-surface);
  box-shadow: var(--shadow-soft);
}

.showcase__slide {
  position: absolute;
  inset: 0;
  opacity: 0;
  transform: scale(1.04);
  transition: opacity 700ms ease, transform 1400ms cubic-bezier(0.22, 1, 0.36, 1);
  pointer-events: none;
}

.showcase__slide.is-active {
  opacity: 1;
  transform: none;
}

.showcase__slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
}

.showcase__slide.is-contain {
  background: var(--color-ink);
}

.showcase__slide.is-contain img {
  object-fit: contain;
  object-position: center;
}

.showcase__tabs {
  display: flex;
  align-items: flex-end;
  gap: 0.5rem;
  margin-top: 0.75rem;
}

.showcase__tab {
  flex: 1 1 0;
  min-width: 0;
  padding: 0.25rem 0 0;
  border: 0;
  background: none;
  color: var(--color-muted);
  font: inherit;
  font-size: 0.8125rem;
  font-weight: 500;
  text-align: left;
  cursor: pointer;
  transition: color 150ms ease;
}

.showcase__tab:hover,
.showcase__tab.is-active {
  color: var(--color-text);
}

.showcase__bar {
  display: block;
  height: 2px;
  margin-bottom: 0.375rem;
  background: var(--color-rule);
  overflow: hidden;
  position: relative;
}

.showcase__bar::after {
  content: '';
  position: absolute;
  inset: 0;
  background: var(--color-accent);
  transform: scaleX(0);
  transform-origin: left;
}

.showcase__tab.is-running .showcase__bar::after {
  transform: scaleX(1);
  transition: transform var(--interval) linear;
}

/* Reduced motion (no autoplay): the active tab is simply underlined */
.showcase.is-static .showcase__tab.is-active .showcase__bar::after {
  transform: scaleX(1);
}

.showcase__label {
  display: none;
}

@media (min-width: 40rem) {
  .showcase__label {
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}

.showcase__caption {
  margin: 0.5rem 0 0;
  font-size: var(--text-label);
  line-height: 1.4;
  color: var(--color-muted);
}
</style>
