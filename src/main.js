import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import VueScrollTo from 'vuescroll/dist/vuescroll-native';

Vue.use(VueScrollTo, {
  container: "body",
})

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
