<template>
    <div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
              <!-- .navbar .navbar-brand .navbar-nav .nav-item .router-link -->
              <a class="navbar-brand" href="/">VuePortfolio</a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <router-link to="/">Home</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/about">About</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/resume">Experience</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/testimonials">Peers</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/projects">Practicals</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/contact">Contact</router-link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
    </div>
</template>

<script>
    export default {
    }
</script>
<style scoped>
.navbar .navbar-nav .nav-item{
  color: pink;
  margin-inline: 10px;
}
.navbar .navbar-nav .nav-item li-active{
   color: green;
}
.navbar-toggler:hover{
  text-decoration: none;
}
</style>