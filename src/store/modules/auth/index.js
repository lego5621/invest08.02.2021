import axios from 'axios'
export default {
  actions: {
    login({commit}, user){
      return new Promise((resolve, reject) => {
        commit('auth_request')
        axios({url: 'http://localhost:3000/api/v1/login', data: user, method: 'POST' })
        .then(resp => {
          const token = resp.data.user.token
          const id = resp.data.user._id
          localStorage.setItem('Token', token)
          axios.defaults.headers.common['Authorization'] = token
          commit('auth_success', token, id)
          resolve(resp)
        })
        .catch(err => {
          commit('auth_error')
          localStorage.removeItem('token')
          reject(err)
        })
      })
    },
    register({commit}, user){
      return new Promise((resolve, reject) => {
        commit('auth_request')
        axios({url: 'http://localhost:3000/api/v1/regist', data: user, method: 'POST' })
        .then(resp => {
          const token = resp.data.user.token
          const id = resp.data.user._id
          localStorage.setItem('token', token)
          axios.defaults.headers.common['Authorization'] = token
          commit('auth_success', token, id)
          resolve(resp)
        })
        .catch(err => {
          commit('auth_error', err)
          localStorage.removeItem('token')
          reject(err)
        })
      })
    },
    logout({commit}){
      return new Promise((resolve, reject) => {
        commit('logout')
        localStorage.removeItem('token')
        delete axios.defaults.headers.common['Authorization']
        resolve()
      })
    },
  },

  mutations: {
    auth_request(state){
      state.status = 'loading'
    },
    auth_success(state, token, user){
      state.status = 'success'
      state.token = token
      state.user = user
    },
    auth_error(state){
      state.status = 'error'
    },
    logout(state){
      state.status = ''
      state.token = ''
      localStorage.removeItem('Token')
    },
  },
  
  state: {
    status: '',
    token: localStorage.getItem('token') || '',
    id : ''
  },
  
  getters: {
    isLoggedIn: state => !!state.token,
    authStatus: state => state.status,
  }
}