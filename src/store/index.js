import { createStore } from 'vuex'

let DataUrl = "https://thabangx10.github.io/VueEomp_data/data/"

export default createStore({
  state: {
    projects : null,
    education : null,
    // skills : null,
    testimonials : null,
  },
  getters: {
  },
  mutations: {
    setProjects(state, projects){
      state.projects = projects
    },
    setEducation(state, education){
      state.education = education
    },

    // setSkills(state, skills){
    //   state.skills = skills
    // },

    setTestimonials(state, testimonials){
      state.testimonials = testimonials
    }
  },
  actions: {
    // Fetching our data that is being stored in our 'DataUrl' container
    async fetchProjects(context){
      // Creating a container to return data 
      let response = await fetch(DataUrl);

      // We are now going to be performing some {deconstructuring}

      // We are deconstructuring because we want to add more 'keys' and we dont want to mix up our logic with future added keys within the external json()

      let {projects} = await response.json()

      context.commit('setProjects', projects)
    },

    async fetchEducation(context){
      let response = await fetch(DataUrl);
      let {education} = await response.json()

      context.commit('setEducation', education)
    },

    // async fetchSkills(context) {
    //   try {
    //     // Make an API call to fetch skills data
    //     let response = await fetch(DataUrl);
    //     let {skills} = await response.json();

    //     // Dispatch the fetched skills data to the store
    //     context.commit('setSkills', skills);
    //   } catch (error) {
    //     console.error(error);
    //   }
    // },

    async fetchTestimonials (context) {
      let response = await fetch(DataUrl);
      let {testimonials} = await response.json()

      context.commit('setTestimonials', testimonials)
    }
  },
  modules: {
  }
})
