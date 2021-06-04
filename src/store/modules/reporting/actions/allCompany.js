export default async function ({ commit, getters, dispatch, state },page=1) {
    let url =`http://localhost:3000/api/v1/company?page=${page}`
    const res = await fetch(url)
    const allCompany = await res.json()

    commit('pages', allCompany)
    commit('allCompany', allCompany.company)
}
