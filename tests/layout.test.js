import { describe, it, expect } from 'vitest'
import { renderAt } from './helpers'

describe('header', () => {
  it('shows the AA monogram linking home and three nav links', async () => {
    const w = await renderAt('/work')
    const logo = w.get('header a.monogram')
    expect(logo.text()).toBe('AA')
    expect(logo.attributes('href')).toBe('/')
    expect(w.findAll('header nav a').map((a) => a.text())).toEqual(['Work', 'About', 'Contact'])
  })
})

describe('footer', () => {
  it('has email, GitHub, LinkedIn and CV links', async () => {
    const w = await renderAt('/')
    const f = w.get('footer')
    expect(f.find('a[href="mailto:abdullahafaq17@gmail.com"]').exists()).toBe(true)
    expect(f.find('a[href="https://github.com/Abood-arc"]').exists()).toBe(true)
    expect(f.find('a[href="https://www.linkedin.com/in/abdullah-afaq-822607282"]').exists()).toBe(true)
    expect(f.find('a[href="/Abdullah_FS_CV.pdf"]').exists()).toBe(true)
    expect(f.text()).toContain('Open to full-stack roles.')
  })
})
