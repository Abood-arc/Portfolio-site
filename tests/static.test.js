import { describe, it, expect } from 'vitest'
import { readFileSync } from 'node:fs'
import { renderAt } from './helpers'

const html = readFileSync('index.html', 'utf8')
const css = readFileSync('src/style.css', 'utf8')

describe('document head', () => {
  it('has a real title and description', () => {
    expect(html).toContain('<title>Muhammad Abdullah Afaq — Full-stack developer</title>')
    expect(html).toMatch(/<meta name="description" content="[^"]{80,160}" \/>/)
    expect(html).not.toContain('portfolio-site')
  })

  it('has absolute Open Graph tags for LinkedIn previews', () => {
    expect(html).toContain('<meta property="og:image" content="https://abdullah-afaq.netlify.app/og.jpg" />')
    expect(html).toContain('<meta property="og:url" content="https://abdullah-afaq.netlify.app/" />')
    expect(html).toContain('<meta name="twitter:card" content="summary_large_image" />')
  })

  it('loads only the two site fonts, from index.html not CSS', () => {
    expect(html).toContain('family=Inter:wght@400;500;600&family=Lora:wght@600')
    expect(css).not.toContain('@import')
  })

  it('uses the AA monogram favicon', () => {
    expect(readFileSync('public/favicon.svg', 'utf8')).toContain('>AA</text>')
  })
})

describe('design tokens', () => {
  it('defines the warm editorial palette', () => {
    for (const hex of ['#FAF6EF', '#1C1712', '#5E4C38', '#A64B22', '#8A3E1B', '#6B2F13']) {
      expect(css).toContain(hex)
    }
  })

  it('keeps shapes flat: shadows only via the shadow token, no gradients or keyframes', () => {
    expect(css).not.toMatch(/gradient|@keyframes/)
    const shadows = css.match(/box-shadow:[^;]+;/g) || []
    for (const rule of shadows) expect(rule).toContain('var(--shadow-soft)')
  })
})

describe('app shell', () => {
  it('has a skip link to the main landmark', async () => {
    const w = await renderAt('/')
    expect(w.get('a.skip-link').attributes('href')).toBe('#main')
    expect(w.find('main#main').exists()).toBe(true)
  })
})
