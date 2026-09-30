// v-reveal: fade-and-rise once when the element scrolls into view.
// The hidden state only exists in CSS for users without a reduced-motion
// preference, and elements are shown immediately when IntersectionObserver
// is unavailable, so content is never stuck invisible.
let observer

function getObserver() {
  if (typeof IntersectionObserver === 'undefined') return null
  observer ??= new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue
        entry.target.classList.add('is-visible')
        observer.unobserve(entry.target)
      }
    },
    { threshold: 0.05 },
  )
  return observer
}

export const reveal = {
  mounted(el, binding) {
    el.classList.add('reveal')
    const io = getObserver()
    if (!io) {
      el.classList.add('is-visible')
      return
    }
    const step = Math.min(Number(binding.value) || 0, 5)
    if (step) el.style.transitionDelay = `${step * 70}ms`
    io.observe(el)
  },
  unmounted(el) {
    observer?.unobserve(el)
  },
}
