import { describe, it, expect } from 'vitest'
import { readFileSync } from 'node:fs'
import { createRouter, createMemoryHistory } from 'vue-router'
import { routes, titleFor, scrollBehavior } from '../src/router/routes'
import { renderAt } from './helpers'

const makeRouter = () => createRouter({ history: createMemoryHistory(), routes })

describe('router', () => {
  it('builds a page title for every route', () => {
    const r = makeRouter()
    expect(titleFor(r.resolve('/'))).toBe('Muhammad Abdullah Afaq — Full-stack developer')
    expect(titleFor(r.resolve('/work'))).toBe('Work — Muhammad Abdullah Afaq')
    expect(titleFor(r.resolve('/work/qubix'))).toBe('Qubix — Muhammad Abdullah Afaq')
    expect(titleFor(r.resolve('/about'))).toBe('About — Muhammad Abdullah Afaq')
    expect(titleFor(r.resolve('/contact'))).toBe('Contact — Muhammad Abdullah Afaq')
    expect(titleFor(r.resolve('/work/nope'))).toBe('Page not found — Muhammad Abdullah Afaq')
    expect(titleFor(r.resolve('/does-not-exist'))).toBe('Page not found — Muhammad Abdullah Afaq')
  })

  it('sends unknown paths to the not-found route', () => {
    expect(makeRouter().resolve('/nope/deeper').name).toBe('not-found')
  })

  it('renders the not-found page for unknown paths', async () => {
    const w = await renderAt('/nope')
    expect(w.get('h1').text()).toBe("That page doesn't exist.")
    expect(w.find('a[href="/work"]').exists()).toBe(true)
  })

  it('scrolls to the top on navigation and restores on back/forward', () => {
    expect(scrollBehavior({}, {}, null)).toEqual({ top: 0 })
    expect(scrollBehavior({}, {}, { left: 0, top: 500 })).toEqual({ left: 0, top: 500 })
  })

  it('ships the Netlify SPA fallback so deep links do not 404', () => {
    expect(readFileSync('public/_redirects', 'utf8')).toMatch(/^\/\*\s+\/index\.html\s+200\s*$/m)
  })
})
