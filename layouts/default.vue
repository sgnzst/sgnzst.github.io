<template>
  <v-app>
    <Navbar :Height="55" Color="primary" />
    <Sidebar :Width="250" />
    <Banner :Height="600" :Interval="5000" />
    <v-fade-transition mode="out-in">
      <Nuxt id="nuxt-content" />
    </v-fade-transition>
    <Footer Color="default" />
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
