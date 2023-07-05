<template>
  <div class="container animated-content">
    <h1>About</h1>

    <p class="scale-in">
      I'm writing to express my keen interest in the sales, FinTech, and
      data-focused opportunities at your prestigious company. I am keen to
      contribute my skills and expertise to a dynamic and forward-thinking
      organization because I have a passion for software engineering, a focus in
      data analytics, and I recently moved to Cape Town. I have consistently
      improved my problem-solving abilities throughout my early career in
      software engineering, both technically and from a business standpoint. I
      am able to offer firms looking to upskill their teams with a software
      engineering professional who is always acquiring valuable insights and
      solutions because to my combination of technical expertise and soft
      business abilities. My ambition to deepen my network and increase my
      exposure led me to go to Cape Town.
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
};
</script>

<style scoped>
/* Body */
body {
  text-align: center;
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
}

/* Container */
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

/* Heading */
h1 {
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 20px;
}

/* Paragraph */
p {
  font-size: 16px;
  line-height: 1.5;
  text-align: justify;
}

/* Links */
a {
  color: #337ab7;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

/* Animation */
.animated-content p {
  opacity: 0;
  animation-fill-mode: forwards;
}

.scale-in {
  animation: scale-in-animation 1s ease-in-out;
}

@keyframes fade-in-animation {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes scale-in-animation {
  from {
    transform: scale(0);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}
</style>
