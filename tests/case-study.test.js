import { describe, it, expect } from 'vitest'
import { renderAt } from './helpers'

describe('case study page', () => {
  it('renders header facts, the four sections and the proof screenshots', async () => {
    const w = await renderAt('/work/qubix')
    expect(w.get('h1').text()).toBe('Qubix')
    expect(w.get('.facts').text()).toContain('Live at jjbags.in')
    expect(w.find('.facts a[href="https://jj-bags.com"]').exists()).toBe(true)
    expect(w.find('.facts a[href="https://github.com/Abood-arc/qubix-laravel-ecommerce"]').exists()).toBe(true)
    expect(w.findAll('.case__body h2').map((h) => h.text())).toEqual(['The problem', 'What I did', 'What came of it', 'Next time'])
    expect(w.findAll('.case__figure img')).toHaveLength(2)
    expect(w.text()).toContain('356 orders worth Rs 1,24,580')
  })

  it('renders code-like text literally instead of injecting HTML', async () => {
    const w = await renderAt('/work/sublingo')
    expect(w.text()).toContain('Inject a <span> to highlight a word')
  })

  it('offers the next project, wrapping around after the last one', async () => {
    const w = await renderAt('/work/sublingo')
    expect(w.get('.case__next a').attributes('href')).toBe('/work/qubix')
  })

  it('ends with an email ask', async () => {
    const w = await renderAt('/work/tassawur')
    expect(w.find('.case__footer a[href="mailto:abdullahafaq17@gmail.com"]').exists()).toBe(true)
  })

  it('shows the not-found page for an unknown slug instead of redirecting', async () => {
    const w = await renderAt('/work/nope')
    expect(w.get('h1').text()).toBe("That page doesn't exist.")
  })
})
