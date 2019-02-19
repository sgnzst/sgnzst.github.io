<template>
  <v-app>
    <main>
      <Navbar :Height="55" Color="primary" />
      <Sidebar Attr="blue lighten-1" Dark :Width="250" />
      <Banner :Height="600" :Interval="5000" />
      <Tab Color="accent" SliderColor="info" />
      <v-fade-transition mode="out-in">
        <Nuxt id="nuxt-content" />
      </v-fade-transition>
      <Footer Color="default" />
    </main>
  </v-app>
</template>

<script>
import Navbar from '~/components/Navbar'
import Sidebar from '~/components/Sidebar'
import Banner from '~/components/Banner'
import Tab from '~/components/Tab'
import Footer from '~/components/Footer'

export default {
  components: {
    Navbar,
    Sidebar,
    Banner,
    Tab,
    Footer
  }
}
</script>

<style lang="scss">
.application {
  font-family: 'Poppins', sans-serif;
}
p, blockquote {
  font-size: 20px;
  color: #525f7f
}
.text-shadow {
  text-shadow: 2px 2px 15px #000
}
.text-smooth {
  font-family: 'Courgette', cursive !important
}
</style>