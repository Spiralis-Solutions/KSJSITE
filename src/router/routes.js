
const routes = [
  { path: '', component: () => import('pages/Index.vue') },
  { path: '/Blog', component: () => import('pages/Blog.vue') },
  { path: '/Contact', component: () => import('pages/Contact.vue') }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
