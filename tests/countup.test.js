import { describe, it, expect, vi, afterEach } from 'vitest'
import { mount } from '@vue/test-utils'
import CountUp from '../src/components/CountUp.vue'

describe('CountUp', () => {
  afterEach(() => vi.unstubAllGlobals())

  it('shows the real number straight away when IntersectionObserver is unavailable', () => {
    vi.stubGlobal('IntersectionObserver', undefined)
    const w = mount(CountUp, { props: { value: 356 } })
    expect(w.text()).toBe('356')
  })

  it('never animates a value of zero', () => {
    const w = mount(CountUp, { props: { value: 0 } })
    expect(w.text()).toBe('0')
  })
})
