<template>
  <!-- Testimonial -->
  <h2 class="display-2">Testimonials</h2>
  <section class="container" id="testimonial">
    <div class="row">
      <div
        class="col-lg-4"
        v-for="testimonial in testimonials"
        :key="testimonial.id"
      >
        <div class="testimonials">
          <div class="container">
            <div class="box">
              <div class="body">
                <div class="imgContainer">
                  <img :src="testimonial.image" alt="" />
                </div>
                <div
                  class="content d-flex align-items-center justify-content-center"
                >
                  <div>
                    <h3 class="text-white fs-5">{{ testimonial.name }}</h3>
                    <p class="fs-6 text-white testimonial-content">
                      {{ testimonial.feedback }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    testimonials() {
      return this.$store.state.testimonials;
    },
  },
  mounted() {
    this.$store.dispatch("fetchTestimonials");
  },
};
</script>

<style scoped>
/* Body */
body {
  text-align: center;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
}

/* Testimonial */

.container {
  transform-style: preserve-3d;
  overflow: hidden;
}

.container .box {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 300px;
  height: 300px;
  margin: 20px auto;
  transform-style: preserve-3d;
  perspective: 1000px;
  cursor: pointer;
}

.container .box .body {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: 0.9s ease;
}

.container .box .body .imgContainer {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  object-fit: cover;
}

.container .box .body .imgContainer img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.container .box .body .content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #333;
  backface-visibility: hidden;
  transform-style: preserve-3d;
  transform: rotateY(180deg);
}

.container .box:hover .body {
  transform: rotateY(180deg);
}

.container .box .body .content div {
  transform-style: preserve-3d;
  padding: 20px;
  background: linear-gradient(45deg, #fe0061, #ffeb3b);
  transform: translateZ(100px);
}

.container .box .body .content div h3 {
  letter-spacing: 1px;
}
</style>
