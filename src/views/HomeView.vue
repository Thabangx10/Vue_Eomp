<template>
  <div class="container-fluid">
    <section class="container" id="Home">
      <div class="row">
        <h2 class="display-2">
          Thabang Kganana
          <img
            src="https://i.postimg.cc/wTb8nVYJ/C12-C2-Thabang-Kganana-1.jpg"
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

/* General Styling */
.container-fluid {
  background-color: #f2f2f2;
  padding: 50px 0;
}

.container {
  max-width: 800px;
  margin: 0 auto;
}

.display-2 {
  font-size: 48px;
  font-weight: bold;
  margin-bottom: 30px;
  color: #333333;
}

.display-4 {
  font-size: 28px;
  color: #333333;
}

.display-4 span {
  color: #4caf50;
}

.img-thumbnail {
  display: block;
  margin: 0 auto;
  border: none;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  max-width: 100%;
}

/* Mobile Responsive */
@media screen and (max-width: 600px) {
  .display-2 {
    font-size: 36px;
  }

  .display-4 {
    font-size: 24px;
  }
}
</style>
