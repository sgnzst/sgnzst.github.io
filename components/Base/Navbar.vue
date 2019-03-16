<template>
  <v-toolbar
    id="nav"
    dark
    app
    fixed
    :flat="!propPermHeight ? flat : false"
    :height="propPermHeight || height"
    :color="propPermColor || color"
  >
    <v-btn v-if="isContent" icon to="/blog" class="mx-0">
      <v-icon>
        keyboard_backspace
      </v-icon>
    </v-btn>
    <v-toolbar-title id="nav-title" :class="`text-smooth ${propPermHeight ? 'headline' : titleSize}`">
      <b>Sutanlab</b>
    </v-toolbar-title>
    <v-spacer />
    <v-toolbar-items class="hidden-xs-only">
      <v-btn
        v-for="(item, i) in items"
        :key="i"
        :to="item.to"
        :href="item.href"
        :ripple="false"
        flat
        aria-hidden="true"
      >
        <b :class="propPermColor ? null : itemClass">
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
    propHeight: {
      type: Number,
      default: null
    },
    propColor: {
      type: String,
      default: ''
    },
    propPermHeight: {
      type: Number,
      default: null
    },
    propPermColor: {
      type: String,
      default: ''
    }
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
      sidebar: state => state.sidebar.visible,
      isContent: state => state.router.content.show
    })
  },
  beforeMount() {
    window.addEventListener('scroll', this.onScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    ...mapMutations({
      setSidebar: 'setSidebar'
    }),
    onScroll() {
      if (window.scrollY < 120) {
        this.color = 'transparent'
        this.flat = true
        this.height = 90
        this.titleSize = 'display-1'
        this.itemClass = 'text-shadow'
      } else {
        this.color = this.propColor
        this.flat = false
        this.height = this.propHeight
        this.titleSize = 'headline'
        this.itemClass = null
      }
    }
  }
}
</script>

<style lang="scss">
#nav, #nav-title, #nav > .v-toolbar__content {
  transition: all ease-in-out .4s !important
}
</style>
