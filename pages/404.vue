<template>
  <Banner
    parallax
    :carousels="[{ src: '/assets/img/collections/desks/desk0.jpg' }]"
  >
    <v-layout align-center column justify-center style="transform: translate(0%, -5%)">
      <h1 class="text-shadow display-2 mb-3">
        <b>4🙁4</b>
      </h1>
      <h2 class="px-2 text-shadow text-xs-center font-weight-medium">
        Oops ! The page you are looking can't be found.
      </h2>
    </v-layout>
  </Banner>
</template>

<script>
import Banner from '~/components/Base/Banner'

export default {
  components: { Banner }
}
</script>
