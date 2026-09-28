import { createRouter, createWebHistory } from 'vue-router'
import { routes, titleFor, scrollBehavior } from './routes'

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior,
})

router.afterEach((to) => {
  document.title = titleFor(to)
})

export default router
