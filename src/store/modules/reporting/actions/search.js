import axios from 'axios'
export default async function ({ commit, getters, dispatch, state }) {
    let url =`http://localhost:3000/api/v1/search`
    // let url =`https://serene-brushlands-48720.herokuapp.com/api/v1/search`



    axios.get(url)
        .then(function (res) {
            const allCompany =  res.data
            commit('search', allCompany.company)
        })

    // const res = await fetch(url)
    // const allCompany = await res.json()

    // commit('pages', allCompany)
    // commit('allCompany', allCompany.company)
}
