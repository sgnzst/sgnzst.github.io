<template>
  <v-layout row wrap>
    <v-tabs
      style="width: 100%"
      color="accent"
      centered
      dark
      icons-and-text
      show-arrows
    >
      <v-tabs-slider color="info" />
      <v-tab
        v-for="(section, i) in sections"
        :key="i"
        @click="currentSection = section.title"
        aria-label="Tab Menu"
        aria-hidden="true"
      >
        {{ section.title }}
        <v-icon>{{ section.icon }}</v-icon>
      </v-tab>
    </v-tabs>
    <v-fade-transition mode="out-in">
      <component :is="currentSection" />
    </v-fade-transition>
  </v-layout>
</template>

<script>
import About from '~/components/Homepage/About'
import Portfolio from '~/components/Homepage/Portfolio'
import Contact from '~/components/Homepage/Contact'

export default {
  components: {
    About, Portfolio, Contact
  },
  data: () => ({
    currentSection: 'About',
    sections: [
      { title: 'About', icon: 'person' },
      { title: 'Portfolio', icon: 'dashboard' },
      { title: 'Contact', icon: 'phone' }
    ]
  })
}
</script>
