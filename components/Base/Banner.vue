<template>
  <v-carousel
    hide-controls
    :interval="Interval"
    :height="Height"
    :vertical="Vertical"
  >
    <div id="banner-figure">
      <div class="row">
        <h1 class="text-smooth text-shadow display-2 mb-3">
          <b>Sutan Nst.</b>
        </h1>
        <h2 class="text-smooth text-shadow text-xs-center font-weight-thin">
          A Man who turns a cup of coffee into beautiful codes.
        </h2>
      </div>
    </div>
    <v-carousel-item v-for="(carousel, i) in carousels" :key="i">
      <v-parallax :height="Height" :src="carousel.src" />
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  props: {
    Interval: Number,
    Height: Number,
    Vertical: Boolean
  },
  data: () => ({
    carousels: [
      { src: '/assets/img/collections/desks/desk2.jpg' },
      { src: '/assets/img/collections/desks/desk1.jpg' },
      { src: '/assets/img/collections/desks/desk3.jpg' }
    ]
  })
}
</script>

<style lang="scss" scoped>
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