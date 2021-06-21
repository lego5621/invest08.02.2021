import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import store from './store'
import VueApexCharts from 'vue-apexcharts'

import Axios from 'axios'

Vue.prototype.$http = Axios;
const token = localStorage.getItem('Token')
if (token) {
  Vue.prototype.$http.defaults.headers.common['Authorization'] = `Token ${token}`
}

//я делаю запрос не Axios

Vue.use(VueApexCharts)

Vue.component('apexchart', VueApexCharts)

Vue.config.productionTip = false

new Vue({
  store,
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
