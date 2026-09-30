import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import HeroShowcase from '../src/components/HeroShowcase.vue'

const slides = [
  { label: 'One', src: '/a.jpg', alt: 'first', caption: 'First caption.' },
  { label: 'Two', src: '/b.jpg', alt: 'second', caption: 'Second caption.', fit: 'contain' },
]

describe('hero showcase', () => {
  it('starts on the first slide and switches when a tab is clicked', async () => {
    const w = mount(HeroShowcase, { props: { slides } })
    expect(w.get('.showcase__caption').text()).toBe('First caption.')
    await w.findAll('.showcase__tab')[1].trigger('click')
    expect(w.get('.showcase__caption').text()).toBe('Second caption.')
    expect(w.findAll('.showcase__slide')[1].classes()).toContain('is-active')
    expect(w.findAll('.showcase__slide')[0].attributes('aria-hidden')).toBe('true')
    expect(w.findAll('.showcase__tab')[1].attributes('aria-current')).toBe('true')
  })

  it('does not autoplay under reduced motion', () => {
    window.matchMedia = () => ({ matches: true, addEventListener() {}, removeEventListener() {} })
    const w = mount(HeroShowcase, { props: { slides } })
    expect(w.classes()).toContain('is-static')
  })
})
