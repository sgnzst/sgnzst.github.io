<template>
  <div>
    <Banner parallax delimiters :interval="5000">
      <v-layout align-center column justify-center style="transform: translate(0%, -5%)">
        <h1 class="text-smooth text-shadow display-2 mb-3">
          <b>Sutan Nst.</b>
        </h1>
        <h2 class="px-2 text-smooth text-shadow text-xs-center font-weight-medium">
          A Man who turns a cup of coffee into beautiful codes.
        </h2>
      </v-layout>
    </Banner>
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
          :aria-label="section.title"
          aria-hidden="true"
          @click="currentSection = section.title"
        >
          {{ section.title }}
          <v-icon>{{ section.icon }}</v-icon>
        </v-tab>
      </v-tabs>
      <v-fade-transition mode="out-in">
        <component :is="currentSection" />
      </v-fade-transition>
    </v-layout>
  </div>
</template>

<script>
import { metaGenerator } from '~/utils/helpers'
import Banner from '~/components/Base/Banner'

export default {
  components: {
    Banner,
    About: () => import('~/components/Homepage/About'),
    Portfolio: () => import('~/components/Homepage/Portfolio'),
    Contact: () => import('~/components/Homepage/Contact')
  },
  head: () => ({
    title: `${process.env.AUTHOR} - Coder`,
    meta: metaGenerator('portfolio', {
      title: `Personal Homepage`,
      description: 'A Man who turns a cup of coffee into beautiful codes. - Sutan Nst',
      keywords: 'homepage, portfolio',
      image: '/icon.png',
      url: '/'
    })
  }),
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
