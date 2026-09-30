// v-reveal: float in when the element scrolls into view.
// It replays when the element leaves through the bottom of the screen and comes
// back, but never hides content that has already scrolled up past the reader.
// The hidden state only exists in CSS for users without a reduced-motion
// preference, and elements are shown immediately when IntersectionObserver is
// unavailable, so content is never stuck invisible.
let observer

function getObserver() {
  if (typeof IntersectionObserver === 'undefined') return null
  observer ??= new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) entry.target.classList.add('is-visible')
        else if (entry.boundingClientRect.top > 0) entry.target.classList.remove('is-visible')
      }
    },
    { threshold: 0.08 },
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
    const step = Math.min(Number(binding.value) || 0, 6)
    if (step) el.style.transitionDelay = `${step * 90}ms`
    io.observe(el)
  },
  unmounted(el) {
    observer?.unobserve(el)
  },
}
