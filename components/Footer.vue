<template>
  <v-footer :dark="Dark" height="auto">
    <v-card flat tile :color="Color" width="100%" class="lighten-1 white--text text-xs-center">
      <v-card-text>
        <v-btn v-for="(item, i) in socials" :key="i"
          :href="item.link"
          target="_blank"
          class="mx-3"
          icon
        >
          <v-icon :color="item.color" size="24px">{{ item.icon }}</v-icon>
        </v-btn>
      </v-card-text>
      <v-card-text class="white--text pt-0">
        Learner, Coder and Coffee Maniac.
        <v-icon color="white">format_quote</v-icon>
      </v-card-text>
      <v-divider />
      <v-card-text class="white--text">
        &copy; 2019 <strong>Sutanlab</strong> — <v-icon color="info" size="18px">code</v-icon> with <v-icon color="pink" size="18px">favorite</v-icon> by <strong class="gre">Sutan Nst.</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  props: {
    Color: String,
    Dark: Boolean
  },
  data: () => ({
    socials: [
      { icon: 'mail', link: 'mailto:sutan.gnst@gmail.com', color: '#fff' },
      { icon: 'fab fa-github-alt', link: 'https://github.com/sutanlab', color: '#fff' },
      { icon: 'fab fa-facebook', link: 'https://facebook.com/sgnzst', color: '#fff' },
      { icon: 'fab fa-instagram', link: 'https://www.instagram.com/sutan_gnst', color: '#fff' }
    ]
  })
}
</script>