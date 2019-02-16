<template>
  <v-toolbar class="app-nav" app fixed :flat="flat" dark :height="Height" :color="color">
    <v-toolbar-title class="text-smooth"><b>Sutanlab</b></v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-xs-only">
      <v-btn v-for="(item, i) in items"
        flat
        :key="i"
        :to="item.to"
        :href="item.href"
      >
        {{ item.title }}
      </v-btn>
    </v-toolbar-items>
    <v-toolbar-side-icon class="hidden-sm-and-up"></v-toolbar-side-icon>
  </v-toolbar>
</template>

<script>
export default {
  props: {
    Height: Number,
    Color: String 
  },
  data: () => ({
    flat: true,
    color: 'transparent',
    items: [
      { title: 'About', to: '/' },
      { title: 'Portofolio', to: '/portofolio' },
      { title: 'Blogs', href: '/blog' },
    ]
  }),
  methods: {
    onScroll(){
      if (window.scrollY < 155) {
        this.color = 'transparent'
        this.flat = true
      }
      else {
        this.color = this.Color
        this.flat = false
      }
      console.log(window.scrollY)
    }
  },
  beforeMount () {
    window.addEventListener('scroll', this.onScroll)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.onScroll)
  }
}
</script>

<style lang="css">
.app-nav {
  transition: all ease-in-out 800ms !important
}
</style>