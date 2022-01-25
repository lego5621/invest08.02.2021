import axios from 'axios'
export default async function ({ commit, getters, dispatch, state }, payload ={page:1, filter:''}) {
    // let url =`http://localhost:3000/api/v1/company`
    let url =`https://serene-brushlands-48720.herokuapp.com/api/v1/company`


    if(payload.page){
        let a =`?page=${payload.page}`
        url = url + a
    }

    if(payload.filter){
        let a =`&filter=${payload.filter}`
        url = url + a
    }

    axios.get(url)
        .then(function (res) {
            const allCompany =  res.data
            commit('pages', allCompany)
            commit('allCompany', allCompany.company)
        })

    // const res = await fetch(url)
    // const allCompany = await res.json()

    // commit('pages', allCompany)
    // commit('allCompany', allCompany.company)
}
