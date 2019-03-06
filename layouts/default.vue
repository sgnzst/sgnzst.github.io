<template>
  <v-app>
    <Navbar
      :prop-height="isHomepage ? 55 : null"
      :prop-color="isHomepage ? 'primary' : null"
      :prop-perm-height="isHomepage ? null : 55"
      :prop-perm-color="isHomepage ? null : 'primary'"
    />
    <Sidebar :prop-width="250" />
    <Banner v-if="isHomepage" :prop-height="600" :prop-interval="5000" />
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
    })
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
