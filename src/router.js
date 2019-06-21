import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
const Subscribe = () => import('./views/Subscribe.vue')
const Course = () => import('./views/Course.vue')
const Courses = () => import('./views/Courses.vue')

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
      component: Subscribe ,
    },
    {
      path: '/course',
      component: Course,
    },
    {
      path: '/courses',
      component: Courses,
    }
  ]
})
