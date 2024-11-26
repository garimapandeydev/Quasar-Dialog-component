const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/TodoDo.vue') }, // Default route
      { path: '/help', component: () => import('src/pages/HelpDo.vue') }, // New route for Help page
      { path: '/todo', component: () => import('src/pages/ToDo.vue') }, // Default route
      { path: '/game', component: () => import('src/pages/GaMe.vue') },
      { path: '/food', component: () => import('src/pages/FoOd.vue') },
      { path: '/hello', component: () => import('src/pages/PerDia.vue') },
      { path: '/hello', component: () => import('src/pages/ChildComp.vue') }

    ]
  },

  // Always leave this as the last one
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
