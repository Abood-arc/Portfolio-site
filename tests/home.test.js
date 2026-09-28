import { describe, it, expect } from 'vitest'
import { renderAt } from './helpers'

describe('home page', () => {
  it("leads with the owner's own bio line, not the internal proof statement", async () => {
    const w = await renderAt('/')
    expect(w.get('h1').text()).toBe("I built an ecommerce site for a client that's live and handling real customer orders.")
    expect(w.text()).toContain("Took their requirements, designed it, shipped it, and I'm maintaining it.")
    expect(w.text()).not.toContain('hiring manager')
    expect(w.get('.hero').text()).toContain('Muhammad Abdullah Afaq')
  })

  it('points straight at the Qubix case study and the live store', async () => {
    const w = await renderAt('/')
    const hero = w.get('.hero')
    expect(hero.find('a[href="/work/qubix"]').exists()).toBe(true)
    expect(hero.find('a[href="https://jjbags.in"]').exists()).toBe(true)
    expect(hero.find('img').attributes('alt')).toContain('jjbags.in')
  })

  it('lists the other three projects and ends with an email ask', async () => {
    const w = await renderAt('/')
    expect(w.findAll('.more-work .work-card__title').map((t) => t.text())).toEqual(['Tassawur', 'HeartSync', 'Sublingo'])
    expect(w.find('.home-contact a[href="mailto:abdullahafaq17@gmail.com"]').exists()).toBe(true)
  })
})
