import { describe, it, expect } from 'vitest'
import { renderAt } from './helpers'

describe('home page', () => {
  it('leads with the proof headline and never shows the internal proof statement', async () => {
    const w = await renderAt('/')
    expect(w.get('h1').text()).toBe('I take full-stack products from client brief to live system.')
    expect(w.get('.hero').text()).toContain('Qubix')
    expect(w.text()).not.toContain('hiring manager')
    expect(w.get('.hero').text()).toContain('Muhammad Abdullah Afaq')
  })

  it('shows the owner photo and project glimpses in the hero', async () => {
    const w = await renderAt('/')
    expect(w.get('.hero__portrait img').attributes('alt')).toContain('Muhammad Abdullah Afaq')
    expect(w.findAll('.showcase__slide img')).toHaveLength(4)
    expect(w.findAll('.showcase__tab').map((t) => t.text())).toEqual(['Storefront', 'Assistant', 'Automation', 'JB Bags'])
  })

  it('does not show Tassawur in the hero, only Qubix', async () => {
    const w = await renderAt('/')
    expect(w.get('.hero').text()).not.toContain('Tassawur')
    expect(w.findAll('.more-work .work-card__title').map((t) => t.text())).not.toContain('Qubix')
  })

  it('points straight at the Qubix case study and the live store', async () => {
    const w = await renderAt('/')
    const hero = w.get('.hero')
    expect(hero.find('a[href="/work/qubix"]').exists()).toBe(true)
    expect(hero.find('a[href="https://jjbags.in"]').exists()).toBe(true)
    expect(hero.get('.showcase__slide img').attributes('alt')).toContain('jjbags.in')
  })

  it('lists the other three projects and ends with an email ask', async () => {
    const w = await renderAt('/')
    expect(w.findAll('.more-work .work-card__title').map((t) => t.text())).toEqual(['Tassawur', 'HeartSync', 'Sublingo'])
    expect(w.find('.home-contact a[href="mailto:abdullahafaq17@gmail.com"]').exists()).toBe(true)
  })
})
