<template>
    <div class="container">
    <div class="row">
      <h2 class="display-2">
        
      </h2>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  computed: {
    user() {
      return this.$store.state.user
    }
  },
  mounted() {
    return this.$store.dispatch('')
  }

}
</script>
