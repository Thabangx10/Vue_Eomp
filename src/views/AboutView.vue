<template>
  <div class="container">
    <h1>About</h1>

    <p>
      I am writing to express my strong interest in the data-oriented, FinTech, and sales positions within your esteemed organization. With a passion for software engineering and a specialization in data analytics, coupled with my recent relocation to Cape Town, I am eager to contribute my skills and expertise to a dynamic and forward-thinking company. Throughout my early software engineering journey, I have continuously honed my problem-solving skills, both technically and from a business perspective. The combination of technical proficiency and soft business skills has equipped me to provide valuable insights and solutions to organizations looking to upskill their teams with an ever-learning software engineering professional. My diverse educational experiences have played a pivotal role in shaping my capabilities. Peer-to-peer learning, which I highly value, has enhanced my communication skills and logical understanding, resulting in more efficient problem-solving and error resolution. Additionally, I have cultivated a growth mindset that has allowed me to effectively handle errors and recognize the importance of self-care to prevent burnout. Strengthening my command terminal management skills in PowerShell and Git has further expanded my technical repertoire. In terms of technical skills, I have a strong foundation in back-end development, particularly in Python and SQL. My experience also extends to front-end technologies, including HTML, CSS, Bootstrap, JavaScript, and Vue.js. Alongside these skills, I am adept at utilizing design and project management tools such as ClickUp, enabling me to efficiently execute projects and collaborate effectively with cross-functional teams. To deepen my expertise in data analytics, I have actively pursued knowledge from reputable e-learning platforms, including organizations like 365datascience. This self-driven learning approach has allowed me to work on personal projects that leverage data extraction, visualization, and storytelling techniques to provide creative and business-oriented solutions. I have gained valuable insights by applying these skills to various domains, including football and retail. My move to Cape Town was driven by the desire to broaden my network and deepen my knowledge within the industry. I believe that joining your organization would provide an excellent platform to achieve these goals while contributing to your data-oriented, FinTech, and sales initiatives. I am confident that my passion, continuous learning mindset, and commitment to excellence make me a strong fit for your team. I am excited about the opportunity to discuss how my skills and experiences align with the goals of your organization. Thank you for considering my application. I have attached my resume for your review, and I look forward to the possibility of meeting with you to further discuss how I can contribute to your team's success.
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

<style>
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
</style>
