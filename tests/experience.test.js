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
    expect(certifications.map((c) => c.issuer)).toEqual(['Anthropic Academy', 'IBM, Coursera', 'Udacity'])
  })

  it('links each certification title to its own verification page', () => {
    const hrefs = Object.fromEntries(certifications.map((c) => [c.title, c.href]))
    expect(hrefs).toEqual({
      'Introduction to Model Context Protocol': 'https://verify.skilljar.com/c/42tdzhmr2t72',
      'Developing Back-End Apps with Node.js and Express': 'https://www.coursera.org/account/accomplishments/verify/YEWMIFSNT7ZV',
      'AWS AI Practitioner Challenge': 'https://www.udacity.com/certificate/e/796ad5a6-2fbe-11f1-9a56-6b95b1ffe4d0',
    })
  })

  it('no longer lists the FlyRank internship as a certification', () => {
    expect(certifications.some((c) => /flyrank/i.test(c.issuer + c.title))).toBe(false)
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

  it('renders each certification title as the link, opening safely in a new tab', async () => {
    const w = await renderAt('/')
    const links = w.findAll('.credentials__link')
    expect(links).toHaveLength(3)
    expect(links[0].text()).toContain('Introduction to Model Context Protocol')
    expect(links[0].attributes('href')).toBe('https://verify.skilljar.com/c/42tdzhmr2t72')
    for (const a of links) {
      expect(a.attributes('target')).toBe('_blank')
      expect(a.attributes('rel')).toContain('noopener')
    }
  })

  it('gives every role, including the last one, a rail line to animate', async () => {
    const w = await renderAt('/')
    expect(w.findAll('.timeline__item')).toHaveLength(2)
    expect(w.findAll('.timeline__line')).toHaveLength(2)
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
