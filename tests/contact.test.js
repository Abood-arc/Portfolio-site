import { describe, it, expect } from 'vitest'
import { renderAt } from './helpers'

describe('contact page', () => {
  it('shows the email address as visible, copyable text that is also a mailto link', async () => {
    const w = await renderAt('/contact')
    expect(w.get('h1').text()).toBe('Contact')
    const email = w.get('.contact__email a')
    expect(email.attributes('href')).toBe('mailto:abdullahafaq17@gmail.com')
    expect(email.text()).toBe('abdullahafaq17@gmail.com')
  })

  it('offers CV, GitHub and LinkedIn', async () => {
    const w = await renderAt('/contact')
    const main = w.get('main')
    expect(main.find('a[href="/Abdullah_FS_CV.pdf"]').exists()).toBe(true)
    expect(main.find('a[href="https://github.com/Abood-arc"]').exists()).toBe(true)
    expect(main.find('a[href="https://www.linkedin.com/in/abdullah-afaq-822607282"]').exists()).toBe(true)
  })

  it('names each row after the service, with a decorative icon, and no vague "Code" label', async () => {
    const w = await renderAt('/contact')
    const labels = w.findAll('.contact__label').map((l) => l.text())
    expect(labels).toEqual(['Based in', 'CV', 'GitHub', 'LinkedIn'])
    expect(w.findAll('.contact__tile svg[aria-hidden="true"]')).toHaveLength(4)
    expect(w.get('.contact__row[href="https://github.com/Abood-arc"]').text()).toContain('GitHub')
  })
})
