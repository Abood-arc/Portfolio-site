import { describe, it, expect } from 'vitest'
import { renderAt } from './helpers'
import { experience, education, certifications } from '../src/data/experience'

describe('experience data', () => {
  it('matches the dates and titles the owner confirmed', () => {
    const [digital, flyrank] = experience
    expect(digital).toMatchObject({ org: 'Digital Labs AI', role: 'Software Engineer', start: 'Jan 2026', end: 'Present', current: true })
    expect(flyrank).toMatchObject({ org: 'FlyRank AI', role: 'Machine Learning Intern', start: 'Jul 2026', end: 'Sep 2026', current: false })
  })

  it('never overstates the internship as an engineer role', () => {
    expect(experience.find((j) => j.org === 'FlyRank AI').role).not.toMatch(/engineer/i)
  })

  it('has education and certifications', () => {
    expect(education).toHaveLength(2)
    expect(certifications.map((c) => c.issuer)).toEqual(['FlyRank AI', 'IBM, Coursera', 'Udacity'])
  })
})

describe('experience section on the home page', () => {
  it('sits after the hero and proof strip, before the other projects', async () => {
    const w = await renderAt('/')
    const order = w.findAll('main > section').map((s) => s.classes().filter((c) => ['hero', 'proof', 'experience', 'more-work'].includes(c))[0])
    expect(order.slice(0, 4)).toEqual(['hero', 'proof', 'experience', 'more-work'])
  })

  it('renders both roles in order with the current one marked', async () => {
    const w = await renderAt('/')
    const roles = w.findAll('.timeline__role').map((r) => r.text())
    expect(roles).toEqual(['Software Engineer', 'Machine Learning Intern'])
    expect(w.findAll('.timeline__item')[0].classes()).toContain('is-current')
    expect(w.get('.timeline').text()).toContain('Present')
  })

  it('shows education and certifications side by side', async () => {
    const w = await renderAt('/')
    const titles = w.findAll('.credentials__title').map((t) => t.text())
    expect(titles).toEqual(['Education', 'Certifications'])
    expect(w.get('.credentials').text()).toContain('University of Management and Technology')
    expect(w.get('.credentials').text()).toContain('AWS AI Practitioner Challenge')
  })

  it('does not publish the FlyRank credential ID', async () => {
    const w = await renderAt('/')
    expect(w.text()).not.toContain('FR-D11')
  })
})

describe('about page bio', () => {
  it('says the Digital Labs role is ongoing', async () => {
    const w = await renderAt('/about')
    expect(w.text()).toContain('Since January 2026')
    expect(w.text()).not.toContain('Jan–Mar 2026')
  })
})
