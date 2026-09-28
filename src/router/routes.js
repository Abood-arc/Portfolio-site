import Home from '../pages/Home.vue'
import Work from '../pages/Work.vue'
import CaseStudy from '../pages/CaseStudy.vue'
import About from '../pages/About.vue'
import Contact from '../pages/Contact.vue'
import NotFound from '../pages/NotFound.vue'
import { getProject } from '../data/projects'
import { site } from '../data/site'

export const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/work', name: 'work', component: Work, meta: { title: 'Work' } },
  {
    path: '/work/:slug',
    name: 'case-study',
    component: CaseStudy,
    meta: { title: (to) => getProject(to.params.slug)?.title ?? 'Page not found' },
  },
  { path: '/about', name: 'about', component: About, meta: { title: 'About' } },
  { path: '/contact', name: 'contact', component: Contact, meta: { title: 'Contact' } },
  { path: '/:pathMatch(.*)*', name: 'not-found', component: NotFound, meta: { title: 'Page not found' } },
]

export function titleFor(to) {
  const title = typeof to.meta.title === 'function' ? to.meta.title(to) : to.meta.title
  return title ? `${title} — ${site.name}` : `${site.name} — ${site.role}`
}

export function scrollBehavior(to, from, savedPosition) {
  return savedPosition || { top: 0 }
}
