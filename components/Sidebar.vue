<template>
  <v-navigation-drawer :class="Attr" :dark="Dark" :width="Width" right fixed temporary v-model="sidebar">
    <v-list class="pa-1">
      <v-list-tile>
        <v-list-tile-content>
          <v-list-tile-title style="text-align: center">
            MENU
          </v-list-tile-title>
        </v-list-tile-content>
        <v-btn icon @click="toggle(false)">
          <v-icon>close</v-icon>
        </v-btn>
      </v-list-tile>
    </v-list>
    <v-list two-line class="pt-0" dense>
      <v-divider />
      <v-list-tile v-for="(item, i) in items"
        :key="i"
        :to="item.to"
        :href="item.href"
        @click="item.target ? move(item.target) : null"
      >
        <v-list-tile-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  props: {
    Width: Number,
    Attr: String,
    Dark: Boolean
  },
  computed: {
    ...mapState({
      items: state => state.menu,
      visible: state => state.sidebar.visible,
      scrollOptions: state => state.scroll.options
    }),
    sidebar: {
      get(){ return this.visible },
      set(val) { this.toggle(val) }
    }
  },
  methods: {
    ...mapMutations({
      toggle: 'setSidebar'
    }),
    move(target){
      this.toggle(false)
      this.$vuetify.goTo(target, this.scrollOptions)
    }
  }
}
</script>