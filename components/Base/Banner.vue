<template>
  <v-carousel
    :hide-controls="!controls"
    :hide-delimiters="!delimiters"
    :interval="interval"
    :height="height"
    :vertical="vertical"
  >
    <div id="banner">
      <slot />
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
  height: 100%;
  width: 100%;
  z-index: 1;
  color: #fff;
  background-color: rgba(0, 0, 0, .15);
}
</style>
