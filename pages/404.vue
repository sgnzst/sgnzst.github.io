<template>
  <Banner :carousels="[{ src: '/assets/img/collections/desks/desk0.jpg' }]">
    <v-layout align-center column justify-center>
      <h1 class="text-shadow display-2 mb-3">
        <b>4🙁4</b>
      </h1>
      <h2 class="px-2 text-shadow text-xs-center font-weight-medium">
        Oops! The page you are looking can't be found.
      </h2>
      <v-btn class="mt-2" outline color="white" href="/">
        <v-icon>home</v-icon>
        &nbsp;Go Back Home
      </v-btn>
    </v-layout>
  </Banner>
</template>

<script>
import Banner from '~/components/Base/Banner'

export default {
  components: { Banner },
  head: () => ({
    title: `404 - Page Not Found | ${process.env.AUTHOR}`
  }),
  data: () => ({
    homeurl: process.env.PRODUCTION_URL
  })
}
</script>
