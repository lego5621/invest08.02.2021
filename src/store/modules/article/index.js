export default {
    actions: {
      async fetchPosts({ commit, getters, dispatch }) {
        const res = await fetch(
          'https://jsonplaceholder.typicode.com/posts?_limit=7'
        )
        const posts = await res.json()
  
        commit('updatePosts', posts)
      },
    },
    mutations: {
      updatePosts(state, posts) {
        state.posts = posts
      },
      createPost(state, newPost) {
        state.posts.unshift(newPost)
      }
    },
    state: {
      posts: []
    },
    getters: {
      allPosts(state) {
        return state.posts
      },
    }
  }