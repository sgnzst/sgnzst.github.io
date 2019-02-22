<template>
  <v-layout justify-center align-center class="comments default lighten-2 white--text pa-3">
    <v-flex xs12 md8 class="my-1" id="disqus_thread"></v-flex>
  </v-layout>
</template>

<script>
export default {
  props: {
    Title: String,
    Url: String
  },
  data: () => ({
    disqusLoaded: false
  }),
  methods: {
    onScrollDisqus() {
      if ((window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 900)) {
        if (this.disqusLoaded === false) this.loadDisqus()
      }
    },
    loadDisqus() {
      this.disqusLoaded = true
      const disqus_title = this.Title
      const disqus_url = this.Url
      const dsq = document.createElement('script')
      dsq.type = 'text/javascript'
      dsq.async = true
      dsq.src = 'https://sutanlab.disqus.com/embed.js'; (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq)
    }
  },
  beforeMount() {
    window.onscroll = this.onScrollDisqus
  },
  beforeDestroy() {
    this.disqusLoaded = true
  }
}
</script>