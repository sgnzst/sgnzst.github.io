<template>
  <v-footer :dark="propDark" height="auto">
    <v-card flat tile :color="propColor" width="100%" class="lighten-1 white--text text-xs-center">
      <v-card-text>
        <v-btn
          v-for="(item, i) in socials"
          :key="i"
          :href="item.link"
          icon
          rel="noopener"
          aria-label="Sutan Nst. social link"
          target="_blank"
          class="mx-3"
        >
          <component :is="item.icon" w="24px" h="24px" class="white--text" />
        </v-btn>
      </v-card-text>
      <v-card-text class="white--text pt-0">
        Learner, Coder and Coffee Maniac.&nbsp;
        <v-icon color="white">
          format_quote
        </v-icon>
      </v-card-text>
      <v-divider />
      <v-card-text class="white--text">
        &copy; 2019 <strong>Sutanlab</strong> — <b>&lt;&nbsp;/&gt;</b> with 💙
        &nbsp;by&nbsp;<strong class="gre">Sutan Nst.</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
import MdMailIcon from 'vue-ionicons/dist/md-mail.vue'

export default {
  components: { MdMailIcon },
  props: {
    propColor: {
      type: String,
      default: ''
    },
    propDark: Boolean
  },
  data: () => ({
    socials: [
      { icon: 'md-mail-icon', link: 'mailto:sutan.gnst@gmail.com' },
      { icon: 'logo-octocat-icon', link: 'https://github.com/sutanlab' },
      { icon: 'logo-linkedin-icon', link: 'https://www.linkedin.com/in/sutan-gading-fadhillah-nasution-963841160/' },
      { icon: 'logo-instagram-icon', link: 'https://www.instagram.com/sutan_gnst' },
      { icon: 'logo-facebook-icon', link: 'https://facebook.com/sgnzst' }
    ]
  })
}
</script>
