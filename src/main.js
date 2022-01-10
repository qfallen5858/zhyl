import Vue from 'vue'

import Cookies from 'js-cookie'

import Element from 'element-ui'


import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
