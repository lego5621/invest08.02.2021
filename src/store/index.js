import Vue from 'vue'
import Vuex from 'vuex'
import article from './modules/article/index'
import reporting from './modules/reporting/index'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    article,
    reporting,
  }
})