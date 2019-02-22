<template>
  <v-toolbar 
    id="nav"
    dark
    app
    fixed
    :flat="!PermHeight ? flat : false" 
    :height="PermHeight || height" 
    :color="PermColor || color"
  >
    <v-toolbar-title id="nav-title" :class="`text-smooth ${PermHeight ? 'headline' : titleSize}`">
      <b>Sutanlab</b>
    </v-toolbar-title>
    <v-spacer />
    <v-toolbar-items class="hidden-xs-only">
      <v-btn flat v-for="(item, i) in items"
        aria-hidden="true"
        :key="i"
        :ripple="false"
        :to="item.to"
        :href="item.href"
      >
        <b :class="PermColor ? null : itemClass">
          <v-icon>{{ item.icon }}</v-icon>
          &nbsp;{{ item.title }}
        </b>
      </v-btn>
    </v-toolbar-items>
    <v-toolbar-side-icon aria-label="menu" aria-hidden="true" class="hidden-sm-and-up" @click="setSidebar(!sidebar)" />
  </v-toolbar>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  props: {
    Height: Number,
    Color: String,
    PermHeight: Number,
    PermColor: String
  },
  data: () => ({
    flat: true,
    height: 90,
    titleSize: 'display-1',
    color: 'transparent',
    itemClass: 'text-shadow'
  }),
  computed: {
    ...mapState({
      items: state => state.menu,
      sidebar: state => state.sidebar.visible
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
        this.itemClass = 'text-shadow'
      } else {
        this.color = this.Color
        this.flat = false
        this.height = this.Height
        this.titleSize = 'headline'
        this.itemClass = null
      }
    }
  },
  beforeMount () {
    if (!(this.PermHeight && this.PermColor)){
      window.addEventListener('scroll', this.onScroll)
    }
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.scroll)
  }
}
</script>

<style lang="css">
#nav, #nav-title, #nav > .v-toolbar__content {
  transition: all ease-in-out .4s !important
}
</style>