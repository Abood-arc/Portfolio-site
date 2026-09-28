import { describe, it, expect } from 'vitest'
import { renderAt } from './helpers'

describe('about page', () => {
  it('has a real photo and a short factual bio', async () => {
    const w = await renderAt('/about')
    expect(w.get('h1').text()).toBe('About')
    expect(w.get('img.about__photo').attributes('alt')).toBe('Portrait of Muhammad Abdullah Afaq')
    expect(w.text()).toContain('FlyRank AI')
    expect(w.text()).not.toContain('not a preview of new claims')
  })

  it('renders the layer matrix from data', async () => {
    const w = await renderAt('/about')
    expect(w.findAll('.matrix thead th').map((t) => t.text())).toEqual(['Layer', 'Qubix', 'Tassawur', 'HeartSync', 'Sublingo'])
    expect(w.findAll('.matrix tbody tr')).toHaveLength(6)
    expect(w.get('.matrix tbody tr').text()).toContain('TS, Shadow DOM')
  })
})
