<template>
  <!-- Testimonial -->
  <h2 class="display-2">Testimonials</h2>
  <section class="container" id="testimonial">
    <div class="row">
    </div>
    <div
      class="col-lg-4"
      v-for="testimonial in testimonials"
      :key="testimonial.id"
    >
      <div class="row">
        <div class="testimonials">
          <div
            class="container d-flex align-items-center justify-content-center flex-wrap"
          >
            <div class="box">
              <div class="body">
                <div class="imgContainer">
                  <img :src="testimonial.image" alt="" />
                </div>
                <div
                  class="content d-flex flex-column align-items-center justify-content-center"
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

<style>
/* Testimonial */

.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.box {
  position: relative;
  width: 300px;
  height: 300px;
  margin: 20px;
  perspective: 1000px;
  cursor: pointer;
}

.body {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: 0.9s ease;
  transform-style: preserve-3d;
}

.imgContainer {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.imgContainer img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.content {
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

.box:hover .body {
  transform: rotateY(180deg);
}

.content div {
  padding: 20px;
  background: linear-gradient(45deg, #fe0061, #ffeb3b);
  transform: translateZ(100px);
}

.content div h3 {
  letter-spacing: 1px;
}

.testimonial-content {
  max-height: 120px;
  overflow: hidden;
  text-overflow: ellipsis;
}

@media (max-width: 767px) {
  .box {
    width: 100%;
    height: auto;
  }
}
</style>
