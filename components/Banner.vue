<template>
  <v-carousel :height="Height" hide-controls>
    <div id="banner-figure">
      <div class="row">
        <h1 class="text-smooth text-shadow display-2 font-weight-thin mb-3"><b>Sutan Nst.</b></h1>
        <h4 class="text-smooth text-shadow text-xs-center subheading">A Man who turns a cup of coffee into beautiful codes.</h4>
      </div>
    </div>
    <v-carousel-item v-for="(carousel, i) in carousels" :key="i">
      <v-parallax :height="Height" :src="carousel.src">
      </v-parallax>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  props: {
    Height: Number
  },
  data: () => ({
    carousels: [
      { src: 'https://sutanlab.js.org/blog/assets/img/bg/desk2.jpg' },
      { src: 'https://sutanlab.js.org/blog/assets/img/bg/desk1.jpg' },
      { src: 'https://sutanlab.js.org/blog/assets/img/bg/desk3.jpg' }
    ]
  })
}
</script>

<style lang="scss">
.text-shadow {
  text-shadow: 2px 2px 15px #000;
}
.text-smooth {
  font-family: 'Courgette', cursive !important;
}
#banner-figure {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100%;
  width: 100%;
  z-index: 1;
  color: #fff;
  .row {
    margin: 0 15px;
    transform: translate(0, -25%)
  }
}
</style>