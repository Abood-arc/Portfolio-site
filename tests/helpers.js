import { mount, flushPromises } from '@vue/test-utils'
import { createRouter, createMemoryHistory } from 'vue-router'
import { routes } from '../src/router/routes'
import App from '../src/App.vue'
import { reveal } from '../src/directives/reveal'
import { parallax } from '../src/directives/parallax'

export async function renderAt(path) {
  const router = createRouter({ history: createMemoryHistory(), routes })
  router.push(path)
  await router.isReady()
  const wrapper = mount(App, { global: { plugins: [router], directives: { reveal, parallax } } })
  await flushPromises()
  return wrapper
}
