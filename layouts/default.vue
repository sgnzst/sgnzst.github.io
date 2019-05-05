<template>
  <v-app>
    <Navbar v-bind="navProps" />
    <Sidebar :prop-width="250" />
    <Banner v-if="isHomepage" parallax delimiters :height="600" :interval="5000">
      <v-layout align-center column justify-center>
        <h1 class="text-smooth text-shadow display-2 mb-3">
          <b>Sutan Nst.</b>
        </h1>
        <h2 class="text-smooth text-shadow text-xs-center font-weight-thin">
          A Man who turns a cup of coffee into beautiful codes.
        </h2>
      </v-layout>
    </Banner>
    <v-fade-transition mode="out-in">
      <Nuxt id="nuxt-content" />
    </v-fade-transition>
    <Footer prop-color="default" />
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex'
import Navbar from '~/components/Base/Navbar'
import Sidebar from '~/components/Base/Sidebar'
import Banner from '~/components/Base/Banner'
import Footer from '~/components/Base/Footer'

export default {
  components: {
    Navbar,
    Sidebar,
    Banner,
    Footer
  },
  computed: {
    ...mapGetters({
      isHomepage: 'router/isHomepage'
    }),
    navProps() {
      if (this.isHomepage) return { propHeight: 55, propColor: 'primary' }
      return { propPermHeight: 55, propPermColor: 'primary' }
    }
  },
  watch: {
    $route() {
      this.$store.commit('router/watchRoutes', this.$route.name)
    }
  },
  beforeCreate() {
    this.$store.commit('router/watchRoutes', this.$route.name)
  }
}
</script>
