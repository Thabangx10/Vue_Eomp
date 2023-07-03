<template>

  <div>
    <h1>About</h1>
    <p>
      Hello and welcome to my about page! My name is Thabang and I am thrilled to have you here. As an aspiring software engineer, I am passionate about exploring innovative and future-driven ideologies. I believe that technology has the power to transform the world and create solutions that can make a positive impact on people's lives.
    </p>

    <p>
      Continued learning and exploring different aspects of technology. Started looking for more structured learning opportunities. Enrolled in ALX Software Engineering and Data Science programs to gain practical experience and learn from experienced professionals in the field. Participated in a 1-week boot camp at WeThinkCode to learn Python and unit testing in a peer-to-peer environment. Graduated from ALX Software Engineering and Data Science programs and started working on various projects to apply his skills and gain practical experience. Currently up-skilling his full-stack development skills at Life Choices Academy.
    </p>

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
    return this.$store.dispatch("fetchEducation");
  },
  }
</script>

<style>
/* Education */

</style>
