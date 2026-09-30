import { describe, it, expect, vi, afterEach } from 'vitest'
import { mount } from '@vue/test-utils'
import { reveal } from '../src/directives/reveal'

const Demo = { template: '<p v-reveal="2">hi</p>', directives: { reveal } }

describe('v-reveal', () => {
  afterEach(() => vi.unstubAllGlobals())

  it('shows content immediately when IntersectionObserver is unavailable', () => {
    vi.stubGlobal('IntersectionObserver', undefined)
    const w = mount(Demo)
    expect(w.classes()).toEqual(expect.arrayContaining(['reveal', 'is-visible']))
  })
})
