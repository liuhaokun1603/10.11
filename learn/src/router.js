import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass:"active",
  routes: [
    {
      path: '/home',
      name: 'home',
      component: () => import('./views/home')
    },
    {
      path: '/me',
      name: 'me',
      component: () => import('./views/me')
    },
    {
      path: '*',
      redirect:"/home"
    },
  ]
})
