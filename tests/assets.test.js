import { describe, it, expect } from 'vitest'
import { existsSync, statSync } from 'node:fs'

const generated = [
  'src/assets/projects/qubix-storefront.jpg',
  'src/assets/projects/qubix-admin.jpg',
  'src/assets/projects/qubix-saudi.jpg',
  'src/assets/projects/tassawur.jpg',
  'src/assets/projects/heartsync.jpg',
  'src/assets/projects/sublingo.jpg',
  'src/assets/about.jpg',
  'public/og.jpg',
]

describe('site images', () => {
  it.each(generated)('%s exists and is under 300 KB', (file) => {
    expect(existsSync(file)).toBe(true)
    expect(statSync(file).size).toBeLessThan(300 * 1024)
  })
})
