<template>
  <v-app>
    <navbar :Height="55" Color="dark" />
    <banner :Height="600" />
    <nuxt />
  </v-app>
</template>

<script>
import Navbar from '~/components/Navbar'
import Banner from '~/components/Banner'

export default {
  components: {
    Navbar,
    Banner
  }  
}
</script>
