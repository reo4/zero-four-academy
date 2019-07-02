import Vue from 'vue'
import VueI18n from 'vue-i18n'
import en from './en/en.js'
import ar from './ar/ar.js'

Vue.use(VueI18n)

export default new VueI18n({
  locale: 'en',
  messages: {
		en,
  	ar
  }
})