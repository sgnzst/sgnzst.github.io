<template>
  <v-app>
    <Navbar :prop-height="55" prop-color="primary" />
    <Sidebar :prop-width="250" />
    <Banner :prop-height="600" :prop-interval="5000" />
    <v-fade-transition mode="out-in">
      <Nuxt id="nuxt-content" />
    </v-fade-transition>
    <Footer prop-color="default" />
  </v-app>
</template>

<script>
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
  }
}
</script>
