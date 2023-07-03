<template>

  <div>
    <h1>About</h1>

  </div>
</template>

<script>
  export default {
    computed: {
    projects() {
      return this.$store.state.education;
    },
  },
  mounted() {
    return this.$store.dispatch("education");
  },
  }
</script>

<style>

</style>
