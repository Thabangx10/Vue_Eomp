<template>
  <br><br><br>
  <div class="container-fluid">
    <section id="education">
      <div class="education">
        <div v-for="item in resume" :key="item.id" class="card">
          <h4 class="display-4">{{ item.year }}</h4>
          <div class="card-body">
            <p class="text-white">
              {{ item.description }} @ <span>{{ item.place }}</span>
              <a
                v-if="item.certificate !== 'In progress'"
                :href="item.certificate"
                target="_blank"
                >{{ item.type }}</a
              >
              <span v-else>{{ item.type }}</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
  <br /><br />

  <!-- WORKPLACE section-->
  <div class="container-fluid">
    <section id="workplace">
      <div class="workplace">
        <div v-for="item in workplace" :key="item.id" class="card">
          <h4 class="display-4">{{ item.name }}</h4>
          <div class="card-body">
            <p class="text-white">
              {{ item.description }} @ <span>{{ item.company }}</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
  <br /><br /><br />
  <!-- Skills section -->
  <div class="container-fluid">
    <section id="skills">
      <h2 class="display-2">Skills</h2>
      <div class="skills">
        <h2>Front-end:</h2>
        <div class="container2">
          <div class="row">
            <div class="col-md-12">
              <div
                v-for="skill in frontEnd"
                :key="skill.name"
                class="progress-container"
              >
                <h3 class="progress-title">{{ skill.name }}</h3>
                <div class="progress">
                  <div
                    class="progress-bar"
                    :style="{
                      width: skill.percentage + '%',
                      background: skill.color,
                    }"
                  >
                    <div class="progress-value">{{ skill.percentage }}%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br /><br /><br />
        <h2>Back-end:</h2>
        <div class="container2">
          <div class="row">
            <div class="col-md-12">
              <div
                v-for="skill in backEnd"
                :key="skill.name"
                class="progress-container"
              >
                <h3 class="progress-title">{{ skill.name }}</h3>
                <div class="progress">
                  <div
                    class="progress-bar"
                    :style="{
                      width: skill.percentage + '%',
                      background: skill.color,
                    }"
                  >
                    <div class="progress-value">{{ skill.percentage }}%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
  
  <script>
export default {
  computed: {
    resume() {
      return this.$store.state.education;
    },
    workplace() {
      return this.$store.state.workplace;
    },
    backEnd() {
      return this.$store.state.backEnd;
    },
    frontEnd() {
      return this.$store.state.frontEnd;
    },
  },
  mounted() {
    this.$store.dispatch("fetchEducation");
    this.$store.dispatch("fetchWorkplace");
    this.$store.dispatch("fetchBackEnd");
    this.$store.dispatch("fetchFrontEnd");
  },
};
</script>
  
<style>
/* Body */
body {
  text-align: center;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
  color: black;
}

:root {
  --primary: black;
  --secondary: rgb(87, 26, 26);
  --alternative: rgb(125, 116, 116);
  --awesomeColor: black;
  --green: black;
  --mainBox-shadow: -8px -3px 23px 5px rgba(105, 96, 96, 0.75);
}

/* Skills */
.progress-title {
  font-size: 16px;
  font-weight: 700;
  color: #333;
  margin: 0 0 20px;
}

.progress-container {
  margin-bottom: 30px;
}

.progress {
  height: 20px;
  background: #f5f5f5;
  border-radius: 10px;
  box-shadow: none;
  overflow: hidden;
}

.progress-bar {
  height: 100%;
  border-radius: 10px;
  transition: width 0.3s ease;
}

.progress-value {
  position: absolute;
  top: 50%;
  left: 0;
  transform: translate(-50%, -50%);
  color: #fff;
  font-size: 14px;
  font-weight: 600;
}

/* Education */
.education {
  width: 40em;
  margin: 5px auto;
  padding: 10px;
  color: black;
}

.card {
  border: 4px solid var(--green);
  margin: 10px 0;
  border-radius: 20px;
  padding: 10px;
  width: 50%;
  background-color: var(--alternative);
  color: black;
}

.card:nth-child(odd) {
  position: relative;
}

.card:nth-child(odd)::after {
  position: absolute;
  top: -3em;
  right: 0;
  content: "";
  width: 4px;
  height: 45vh;
  border-right: 2px solid var(--primary);
}

.card:nth-child(even) {
  box-shadow: 0.5vw 0.2vw 0.7vw var(--awesomeColor);
  margin-left: auto;
  position: relative;
}

.card:nth-child(even)::after {
  position: absolute;
  content: "";
  top: 90px;
  z-index: 20;
  left: -2em;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: var(--awesomeColor);
  box-shadow: 10s 0.5vw 1vw rgba(90, 115, 132, 0.9);
}

/* Media query */
@media screen and (max-width: 900px) {
  /* Education */
  .education {
    width: 100%;
    display: flex;
    flex-flow: column wrap;
    gap: 20px;
    align-items: center;
  }

  .card {
    width: 100%;
    flex-wrap: wrap;
  }

  .card a,
  .card p,
  footer p {
    font-size: small;
  }

  .card:nth-child(odd) {
    margin-left: 0;
  }

  .card:nth-child(odd)::after {
    content: none;
  }

  .card:nth-child(even) {
    margin-left: 0;
  }

  .card:nth-child(even)::after {
    content: none;
  }
}
</style>
  