import { describe, it, expect } from 'vitest'
import { projects, getProject, getNextProject } from '../src/data/projects'
import { layerMatrix } from '../src/data/layers'
import { site } from '../src/data/site'

const allCopy = () =>
  projects.flatMap((p) => [
    p.title, p.subtitle, p.summary, p.statusDetail, p.image.alt, p.image.caption,
    ...p.sections.flatMap((s) => [
      s.heading,
      ...s.paragraphs,
      ...(s.figures || []).flatMap((f) => [f.alt, f.caption]),
    ]),
  ])

describe('projects data', () => {
  it('keeps the owner-confirmed order', () => {
    expect(projects.map((p) => p.slug)).toEqual(['qubix', 'tassawur', 'heartsync', 'sublingo'])
  })

  it('gives every project the fields the pages render', () => {
    for (const p of projects) {
      for (const key of ['slug', 'title', 'subtitle', 'summary', 'kind', 'status', 'statusDetail']) {
        expect(typeof p[key], `${p.slug}.${key}`).toBe('string')
      }
      expect(p.stack.length).toBeGreaterThan(2)
      expect(p.image.src).toBeTruthy()
      expect(p.image.alt.length).toBeGreaterThan(10)
      expect(p.sections.map((s) => s.heading)).toEqual(['The problem', 'What I did', 'What came of it', 'Next time'])
      for (const s of p.sections) expect(s.paragraphs.length).toBeGreaterThan(0)
      expect(p.links.length).toBeGreaterThan(0)
      for (const l of p.links) expect(l.href).toMatch(/^https:\/\//)
    }
  })

  it('stores paragraphs as separate strings, never with embedded line breaks', () => {
    for (const text of allCopy()) expect(text).not.toMatch(/\n/)
  })

  it('has the updated Qubix outcome copy and proof screenshots', () => {
    const outcome = getProject('qubix').sections[2]
    const text = outcome.paragraphs.join(' ')
    expect(text).toContain('356 orders worth Rs 1,24,580')
    expect(text).toContain('jj-bags.com')
    expect(text).toContain('Separate containers')
    expect(text).not.toContain("don't have permission")
    expect(text).not.toContain('different server')
    expect(outcome.figures).toHaveLength(2)
  })

  it('lists the live store first in the Qubix links (Home links to it)', () => {
    expect(getProject('qubix').links[0].href).toBe('https://jjbags.in')
  })

  it('keeps the Tassawur stack consistent with its case study', () => {
    const stack = getProject('tassawur').stack.join(' ')
    expect(stack).toContain('Node.js')
    expect(stack).toContain('SDXL')
    expect(stack).not.toContain('Python')
  })

  it('contains none of the banned buzzwords', () => {
    const banned = /passionate|results-driven|dynamic|leverag|cutting-edge|seamless|synerg|innovative|world-class|delve/i
    for (const text of allCopy()) expect(text).not.toMatch(banned)
  })

  it('looks up projects and wraps "next" around', () => {
    expect(getProject('nope')).toBeUndefined()
    expect(getNextProject('qubix').slug).toBe('tassawur')
    expect(getNextProject('sublingo').slug).toBe('qubix')
  })
})

describe('layer matrix', () => {
  it('has one column per project, in order, and six layers', () => {
    expect(layerMatrix.columns).toEqual(projects.map((p) => p.title))
    expect(layerMatrix.rows.map((r) => r.layer)).toEqual([
      'Frontend', 'Backend (hand-built)', 'Backend-as-a-Service', 'Mobile', 'AI/ML', 'DevOps/Infra',
    ])
    for (const r of layerMatrix.rows) expect(r.cells).toHaveLength(4)
  })
})

describe('site constants', () => {
  it('has the real contact details', () => {
    expect(site.email).toBe('abdullahafaq17@gmail.com')
    expect(site.url).toBe('https://abdullah-afaq.netlify.app')
    expect(site.cv).toBe('/Abdullah_FS_CV.pdf')
  })
})
