<template>
  <NavBar/>
  <main class="container-fluid">
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/ProjectsView">Practicals</router-link>
    <router-link to="/TestimonialsView">Collaborations</router-link>
    <router-view/>
  </main>
  <FooterComp/>
</template>


<script>
import NavBar from './components/NavBar.vue'
import FooterComp from './components/FooterComp.vue'

export default{
  components: {
    NavBar,
    FooterComp,
  }
}

</script>


<style>

</style>
