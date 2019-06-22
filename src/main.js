import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './plugins/plyr.js'
import './plugins/outside.js'

import "../node_modules/slick-carousel/slick/slick.css";
import "../node_modules/slick-carousel/slick/slick-theme.css";
import "./sass/main.scss"
import "./tailwindcss.css"

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
