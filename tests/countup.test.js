import { describe, it, expect, vi, afterEach } from 'vitest'
import { mount } from '@vue/test-utils'
import CountUp from '../src/components/CountUp.vue'

describe('CountUp', () => {
  afterEach(() => vi.unstubAllGlobals())

  it('shows the real number straight away when IntersectionObserver is unavailable', () => {
    vi.stubGlobal('IntersectionObserver', undefined)
    const w = mount(CountUp, { props: { value: 356 } })
    expect(w.get('.count__live').text()).toBe('356')
  })

  it('never animates a value of zero', () => {
    const w = mount(CountUp, { props: { value: 0 } })
    expect(w.get('.count__live').text()).toBe('0')
  })

  it('keeps a suffix such as + next to the number', () => {
    vi.stubGlobal('IntersectionObserver', undefined)
    const w = mount(CountUp, { props: { value: 10, suffix: '+' } })
    expect(w.get('.count__live').text()).toBe('10+')
  })

  it('reserves the final width and gives screen readers only the final number', () => {
    const w = mount(CountUp, { props: { value: 356, suffix: '+' } })
    expect(w.get('.count__ghost').text()).toBe('356+')
    expect(w.get('.count__ghost').attributes('aria-hidden')).toBe('true')
    expect(w.get('.count__live').attributes('aria-hidden')).toBe('true')
    expect(w.get('.visually-hidden').text()).toBe('356+')
  })
})
