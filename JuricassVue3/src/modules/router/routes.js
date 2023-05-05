const routes = [
  { path: '/', component: () => import('@pages/index.vue') },
  { path: '/decision', component: () => import('@pages/decision/index.vue') }
]

export default routes
