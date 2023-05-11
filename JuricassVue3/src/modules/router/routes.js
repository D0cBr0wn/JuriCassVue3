const routes = [
  { path: '/', component: () => import('@pages/home.vue') },
  { path: '/decision/:id', component: () => import('@pages/decision/index.vue') }
]

export default routes
