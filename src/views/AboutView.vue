<template>
  <div class="container animated-content">
    <p class="scale-in">
      I'm writing to express my keen interest in the sales, FinTech, and
      data-focused opportunities at your prestigious company. I am keen to
      contribute my skills and expertise to a dynamic and forward-thinking
      organization because I have a passion for software engineering, a focus in
      data analytics, and I recently moved to Cape Town in the belief of
      empowering myself. I have consistently improved my problem-solving
      abilities throughout my early career in software engineering, both
      technically and from a business standpoint. I am able to offer firms
      looking to upskill their teams with a software engineering professional
      who is always acquiring valuable insights and solutions because to my
      combination of technical expertise and soft business abilities. My
      ambition to deepen my network and increase my exposure led me to go to
      Cape Town.
    </p>
  </div>
  <br />
  <img
    src="https://i.postimg.cc/wTb8nVYJ/C12-C2-Thabang-Kganana-1.jpg
"
    alt=""
    style="display: block; margin: 0 auto"
    class="responsive-image"
  />
  <div class="container animated-content">
    <p class="scale-in">
      I believe at my current stage in life, i would bring invaluable youthful
      energy. I have began increasing my mindfulness capacity, my passion for
      having a vision for a growing career.
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
  background-color: #f2f2f2;
}

/* Container */
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 40px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

/* Heading */
h1 {
  font-size: 36px;
  font-weight: bold;
  color: #333333;
  margin-bottom: 20px;
}

/* Paragraph */
p {
  font-size: 18px;
  line-height: 1.6;
  text-align: justify;
  color: #666666;
  margin-bottom: 20px;
}

/* Links */
a {
  color: #4caf50;
  text-decoration: none;
  transition: color 0.3s ease;
}

a:hover {
  color: #45a049;
  text-decoration: underline;
}

/* Animation */
.animated-content p {
  opacity: 0;
  animation-fill-mode: both;
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
    transform: scale(0.5);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}

/* Image */
.responsive-image {
  max-width: 100%;
  height: auto;
}

@media (max-width: 300px) {
  .responsive-image {
    width: 100%;
  }
}
</style>
