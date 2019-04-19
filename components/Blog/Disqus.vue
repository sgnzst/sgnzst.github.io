<template>
  <v-layout justify-center align-center class="comments default lighten-2 white--text pa-3">
    <v-flex id="disqus_thread" xs12 md8 class="my-1" />
  </v-layout>
</template>

<script>
/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */

export default {
  props: {
    propTitle: {
      type: String,
      default: 'Sutanlab - By Sutan Nst.'
    },
    propUrl: {
      type: String,
      default: 'https://sutanlab.js.org'
    }
  },
  data: () => ({
    disqusLoaded: false
  }),
  beforeMount() {
    window.onscroll = this.onScrollDisqus
  },
  beforeDestroy() {
    this.disqusLoaded = true
  },
  methods: {
    onScrollDisqus() {
      if ((window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 900)) {
        if (this.disqusLoaded === false) this.loadDisqus()
      }
    },
    loadDisqus() {
      const disqus_title = this.propTitle
      const disqus_url = this.propUrl
      const dsq = document.createElement('script')
      dsq.type = 'text/javascript'
      dsq.async = true
      dsq.src = 'https://sutanlab.disqus.com/embed.js'
      this.createDisqus(dsq)
      this.disqusLoaded = true
    },
    createDisqus(disqus) {
      (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(disqus)
    }
  }
}
</script>
