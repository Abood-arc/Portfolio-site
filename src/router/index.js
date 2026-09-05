import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Work from '../pages/Work.vue'
import CaseStudy from '../pages/CaseStudy.vue'
import About from '../pages/About.vue'
import Contact from '../pages/Contact.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/work', component: Work },
  { path: '/work/:slug', component: CaseStudy },
  { path: '/about', component: About },
  { path: '/contact', component: Contact },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router