<template>
  <div>
    <h1>Testimonials</h1>
  </div>
</template>

<script>
export default {
  computed: {
    testimonials() {
      return this.$store.state.testimonials;
    },
  },
  mounted() {
    return this.$store.dispatch("testimonials");
  },
};
</script>

<style>
</style>