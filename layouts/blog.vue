<template>
  <v-app>
    <Navbar :PermHeight="55" PermColor="primary" />
    <Sidebar Attr="blue lighten-1" Dark :Width="250" />
    <v-content>
      <v-fade-transition mode="out-in">
        <Nuxt id="nuxt-content" />
      </v-fade-transition>
      <Footer Color="default" />
    </v-content>
  </v-app>
</template>

<script>
import Navbar from '~/components/Navbar'
import Sidebar from '~/components/Sidebar'
import Footer from '~/components/Footer'

export default {
  components: {
    Navbar, Sidebar, Footer
  }
}
</script>