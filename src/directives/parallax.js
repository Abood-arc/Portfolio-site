// v-parallax="factor": drift an element vertically as the page scrolls, at a
// fraction of the scroll distance, so layered shapes appear to sit at different
// depths. Writes the --py custom property; CSS applies it with `translate`.
// Does nothing for users who prefer reduced motion.
const items = new Set()
let ticking = false
let listening = false

const LIMIT = 1400

function update() {
  ticking = false
  const y = Math.min(window.scrollY, LIMIT)
  for (const { el, factor } of items) el.style.setProperty('--py', `${(-y * factor).toFixed(1)}px`)
}

function onScroll() {
  if (ticking) return
  ticking = true
  requestAnimationFrame(update)
}

export const parallax = {
  mounted(el, binding) {
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return
    items.add({ el, factor: Number(binding.value) || 0.1 })
    if (!listening) {
      window.addEventListener('scroll', onScroll, { passive: true })
      listening = true
    }
    update()
  },
  unmounted(el) {
    for (const item of items) if (item.el === el) items.delete(item)
    if (!items.size && listening) {
      window.removeEventListener('scroll', onScroll)
      listening = false
    }
  },
}
