<template>
  <v-toolbar id="nav" app fixed :flat="flat" dark :height="height" :color="color">
    <v-toolbar-title id="nav-title" :class="'text-smooth '+titleSize"><b>Sutanlab</b></v-toolbar-title>
    <v-spacer />
    <v-toolbar-items class="hidden-xs-only">
      <v-btn flat v-for="(item, i) in items"
        :key="i"
        :href="item.href"
        @click="item.target ? $vuetify.goTo(item.target, scrollOptions) : null"
      >
        <b class="text-shadow">
          <v-icon>{{ item.icon }}</v-icon>
          &nbsp;{{ item.title }}
        </b>
      </v-btn>
    </v-toolbar-items>
    <v-toolbar-side-icon class="hidden-sm-and-up" @click="setSidebar(!sidebar)" />
  </v-toolbar>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  props: {
    Height: Number,
    Color: String 
  },
  data: () => ({
    flat: true,
    height: 90,
    titleSize: 'display-1',
    color: 'transparent'
  }),
  computed: {
    ...mapState({
      items: state => state.menu,
      sidebar: state => state.sidebar.visible,
      scrollOptions: state => state.scroll.options
    })
  },
  methods: {
    ...mapMutations({
      setSidebar: 'setSidebar'
    }),
    onScroll(){
      if (window.scrollY < 120) {
        this.color = 'transparent'
        this.flat = true
        this.height = 90
        this.titleSize = 'display-1'
      } else {
        this.color = this.Color
        this.flat = false
        this.height = this.Height
        this.titleSize = 'headline'
      }
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
#nav, #nav-title, #nav > .v-toolbar__content {
  transition: all ease-in-out .4s !important
}
</style>