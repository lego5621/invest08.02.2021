import axios from 'axios'
export default {
  actions: {
    login({commit}, user){
      return new Promise((resolve, reject) => {
        commit('auth_request')
        let url = 'https://serene-brushlands-48720.herokuapp.com/api/v1/login'
        // let url = 'http://localhost:3000/api/v1/login'
        axios({url: url, data: user, method: 'POST' })
        .then(resp => {
          const token = resp.data.user.token
          const id = resp.data.user.id
          console.log(resp.data.user.id)
          localStorage.setItem('Token', token)
          localStorage.setItem('idUser', id)
          axios.defaults.headers.common['Authorization'] = `Token ${token}`
          commit('auth_success', token, id)
          commit('auth_id', id)
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
          axios.defaults.headers.common['Authorization'] = `Token ${token}`
          commit('auth_success', token, id)
          resolve(resp)
        })
        .catch(err => {
          commit('auth_error_reg')
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
    auth_id(state, id){
      state.id = id
    },
    auth_request(state){
      state.status = 0
    },
    auth_success(state, token, user){
      state.status = 0
      state.token = token
      state.user = user
    },
    auth_error(state){
      state.status = 1
    },
    auth_error_reg(state){
      state.status_reg = 1
    },
    logout(state){
      state.status = ''
      state.token = ''
      localStorage.removeItem('Token')
    },
  },
  
  state: {
    status: 0,
    status_reg: 0,
    token: localStorage.getItem('token') || '',
    id : '',
  },
  
  getters: {
    isLoggedIn: state => !!state.token,
    authStatus: state => state.status,
  }
}