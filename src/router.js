import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/subscribe',
      component: () => import('./views/Subscribe.vue'),
    },
    {
      path: '/course',
      component: () => import('./views/Course.vue'),
    },
    {
      path: '/courses',
      component: () => import('./views/Courses.vue'),
    }
  ]
})
