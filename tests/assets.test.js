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

const removed = [
  'src/assets/qubix.jpg',
  'src/assets/heartsync.jpg',
  'src/assets/sublingo.jpg',
  'src/assets/tassawur.jpg',
  'src/assets/hero.png',
  'src/assets/vite.svg',
  'src/assets/vue.svg',
  'src/components/HelloWorld.vue',
  'public/icons.svg',
]

describe('scaffold leftovers and mislabeled images', () => {
  it.each(removed)('%s is gone', (file) => {
    expect(existsSync(file)).toBe(false)
  })
})
