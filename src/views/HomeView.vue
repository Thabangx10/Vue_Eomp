<template>
  <div class="container-fluid">
    <section class="container" id="Home">
      <div class="row">
        <h2 class="display-2">
          Thabang Kganana
          <img
            src="https://i.postimg.cc/mgRnzFL0/logo-1.jpg"
            alt="logo"
            class="img-thumbnail rounded-5"
            loading="lazy"
            style="margin-top: 3%"
            width="50%"
          />
        </h2>
        <h4 class="display-4">I am<span> a software developer </span></h4>
      </div>
    </section>
  </div>
  <!--  -->
</template>

<script>
// @ is an alias to /src

export default {
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
  mounted() {
    return this.$store.dispatch("");
  },
};
</script>

<style scoped>
div {
  margin: auto;
  text-align: center;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
  color: black;
}
</style>
