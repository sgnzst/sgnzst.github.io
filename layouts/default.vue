<template>
  <v-app>
    <navbar :Height="55" Color="dark" />
    <sidebar :Width="250" />
    <banner :Height="600" :Interval="5000" />
    <tab Color="dark" SliderColor="info" />
    <nuxt id="nuxt-content" />
  </v-app>
</template>

<script>
import Navbar from '~/components/Navbar'
import Sidebar from '~/components/Sidebar'
import Banner from '~/components/Banner'
import Tab from '~/components/Tab'

export default {
  components: {
    Navbar,
    Sidebar,
    Banner,
    Tab
  }  
}
</script>

<style lang="scss">
.text-shadow {
  text-shadow: 2px 2px 15px #000
}
.text-smooth {
  font-family: 'Courgette', cursive !important
}
</style>