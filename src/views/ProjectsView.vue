<template>
  <div>
    <h1>Projects</h1>
  </div>
</template>

<script>
export default {
  computed: {
    projects() {
      return this.$store.state.projects;
    },
  },
  mounted() {
    return this.$store.dispatch("projects");
  },
};
</script>

<style>
</style>