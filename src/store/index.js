import { createStore } from 'vuex'

let DataUrl = "https://thabangx10.github.io/VueEomp_data/data/"

export default createStore({
  state: {
    user : null,
  },
  getters: {
  },
  mutations: {
    setUser(state, user){
      state.user = user
    }
  },
  actions: {
    // Fetching our data that is being stored in our 'DataUrl' container
    async fecthUser(context){
      // Creating a container to return data 
      let response = await fetch(DataUrl);

      // We are now going to be performing some {deconstructuring}

      // We are deconstructuring because we want to add more 'keys' and we dont want to mix up our logic with future added keys within the external json()

      let {user} = await response.json()

      context.commit('setUser', user)
    }
  },
  modules: {
  }
})
