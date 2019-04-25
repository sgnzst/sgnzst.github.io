<template>
  <v-carousel
    :hide-controls="!controls"
    :hide-delimiters="!delimiters"
    :interval="interval"
    :height="height"
    :vertical="vertical"
  >
    <div id="banner">
      <div class="row">
        <h1 class="text-smooth text-shadow display-2 mb-3">
          <b>{{ title }}</b>
        </h1>
        <h2 class="text-smooth text-shadow text-xs-center font-weight-thin">
          {{ subtitle }}
        </h2>
      </div>
    </div>
    <v-carousel-item v-for="(carousel, i) in carousels" :key="i">
      <v-parallax v-if="parallax" :height="height" :src="carousel.src" :lazy-src="carousel.src" />
      <v-img v-else :height="height" :src="carousel.src" :lazy-src="carousel.src" />
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  props: {
    controls: Boolean,
    delimiters: Boolean,
    vertical: Boolean,
    title: {
      type: String,
      default: 'Sutan Nst.'
    },
    subtitle: {
      type: String,
      default: 'A Man who turns a cup of coffee into beautiful codes.'
    },
    parallax: {
      type: Boolean,
      default: false
    },
    interval: {
      type: Number,
      default: 3000
    },
    height: {
      type: Number,
      default: 600
    },
    carousels: {
      type: Array,
      default: () => [
        { src: '/assets/img/collections/desks/desk0.jpg' },
        { src: '/assets/img/collections/desks/desk1.jpg' },
        { src: '/assets/img/collections/desks/desk2.jpg' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
#banner {
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
