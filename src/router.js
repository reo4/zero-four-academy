import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
const Subscribe = () => import('./views/Subscribe.vue')
const Course = () => import('./views/Course.vue')
const Courses = () => import('./views/Courses.vue')

import i18n from './locale/i18n.js'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path:'/',
      beforeEnter(to , from , next){
        next('en')
      }
    },
    {
      path: '/:lang',
      component: {
        render (c) { return c('router-view') }
      },
      beforeEnter(to , from , next){
        const lang = to.params.lang
        if (!['en' , 'ar'].includes(lang)) {
          return next({name: to.name , params: {lang: 'en'}})
        }
        if (i18n.locale !== lang) {
          i18n.locale = lang
        }
        next()
      },
      children: [
        {
          path: '',
          name: 'home',
          component: Home
        },
        {
          path: 'subscribe',
          name: 'subscribe',
          component: Subscribe ,
        },
        {
          path: 'course',
          name: 'course',
          component: Course,
        },
        {
          path: 'courses',
          name: 'courses',
          component: Courses,
        }
      ]
    }
  ]
})
