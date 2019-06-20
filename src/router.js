import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Subscribe from './views/Subscribe.vue'
import Course from './views/Course.vue'
import Courses from './views/Courses.vue'

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
      component: Subscribe,
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
