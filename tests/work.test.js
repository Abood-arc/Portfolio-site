import { describe, it, expect } from 'vitest'
import { renderAt } from './helpers'

describe('work page', () => {
  it('lists all four projects in the confirmed order, Qubix as the lead', async () => {
    const w = await renderAt('/work')
    expect(w.get('h1').text()).toBe('Work')
    expect(w.findAll('.work-card__title').map((t) => t.text())).toEqual(['Qubix', 'Tassawur', 'HeartSync', 'Sublingo'])
    const cards = w.findAll('.work-card')
    expect(cards[0].classes()).toContain('work-card--lead')
    expect(cards[1].classes()).toContain('work-card--row')
  })

  it('shows status, summary and stack on each card and links to the case study', async () => {
    const w = await renderAt('/work')
    const sublingo = w.findAll('.work-card')[3]
    expect(sublingo.text()).toContain('Feature-complete')
    expect(sublingo.text()).toContain('Tesseract.js')
    expect(sublingo.find('a[href="/work/sublingo"]').exists()).toBe(true)
    expect(sublingo.find('img').attributes('src')).toBeTruthy()
  })
})
