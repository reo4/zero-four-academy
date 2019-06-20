import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import "./sass/main.scss"
import "./tailwindcss.css"
import '../node_modules/slick-carousel/slick/slick.css';

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
