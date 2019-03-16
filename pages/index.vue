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
</template>

<script>
import About from '~/components/Homepage/About'
import Portfolio from '~/components/Homepage/Portfolio'
import Contact from '~/components/Homepage/Contact'

export default {
  components: {
    About, Portfolio, Contact
  },
  head() {
    const desc = 'A Man who turns a cup of coffee into beautiful codes. - Sutan Nst'
    const appTitle = 'Sutan Nst. - Coder'
    const productionUrl = 'https://sutanlab.js/org'
    return {
      title: this.pageTitle,
      meta: [
        { name: 'title', content: appTitle },
        { name: 'description', content: 'A Man who turns a cup of coffee into beautiful codes. - Sutan Nst' },
        { name: 'keywords', content: 'sutan nst, sutan gading fadhillah nasution, sutan, gading, fadhillah, nasution, sgnzst, sutanlab, sutan lab, coder, mahasiswa, it polsri, itpolsri, polsri, politeknik negeri sriwijaya' },
        { property: 'og:image', content: '/icon.png' },
        { property: 'og:image:secure_url', content: '/icon.png' },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: appTitle },
        { property: 'og:description', content: desc },
        { property: 'og:url', content: productionUrl },
        { property: 'og:updated_time', content: new Date().toISOString() },
        { name: 'twitter:image:src', content: '/icon.png' },
        { name: 'twitter:title', content: appTitle },
        { name: 'twitter:description', content: desc },
        { name: 'twitter:url', content: productionUrl }
      ]
    }
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
