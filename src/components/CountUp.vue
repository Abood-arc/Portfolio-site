<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'

const props = defineProps({
  value: { type: Number, required: true },
  suffix: { type: String, default: '' },
  duration: { type: Number, default: 1800 },
})

const root = ref(null)
const shown = ref(props.value)
let observer
let frame = 0

// Ease-out quart: fast at first, settling gently on the real number.
const ease = (t) => 1 - Math.pow(1 - t, 4)

function play() {
  cancelAnimationFrame(frame)
  const start = performance.now()
  const tick = (now) => {
    const t = Math.min((now - start) / props.duration, 1)
    shown.value = Math.round(props.value * ease(t))
    if (t < 1) frame = requestAnimationFrame(tick)
  }
  frame = requestAnimationFrame(tick)
}

onMounted(() => {
  const calm = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
  if (calm || typeof IntersectionObserver === 'undefined' || props.value === 0) return
  shown.value = 0
  observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          play()
        } else if (entry.boundingClientRect.top > 0) {
          cancelAnimationFrame(frame)
          shown.value = 0
        }
      }
    },
    { threshold: 0.6 },
  )
  observer.observe(root.value)
})

onBeforeUnmount(() => {
  observer?.disconnect()
  cancelAnimationFrame(frame)
})
</script>

<template>
  <span ref="root" class="count">
    <!-- Reserves the final width so a centered number doesn't wobble while it counts -->
    <span class="count__ghost" aria-hidden="true">{{ value }}{{ suffix }}</span>
    <span class="count__live" aria-hidden="true">{{ shown }}{{ suffix }}</span>
    <!-- Screen readers get the final number, not every step of the count -->
    <span class="visually-hidden">{{ value }}{{ suffix }}</span>
  </span>
</template>

<style scoped>
.count {
  display: inline-grid;
  font-variant-numeric: tabular-nums;
}

.count__ghost,
.count__live {
  grid-area: 1 / 1;
  text-align: center;
}

.count__ghost {
  visibility: hidden;
}
</style>
