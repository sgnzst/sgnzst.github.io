<template>
  <v-layout justify-center align-center>
    <v-flex class="pa-2" xs12 md8>
      <div>
        <ContentParser
          :render-fn="renderFn"
          :static-render-fn="staticRenderFn" />
      </div>
      <v-card class="comments default white--text pa-2">
        <div class="my-1" id="disqus_thread"></div>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import ContentParser from '~/components/ContentParser'
import { formatReadingTime } from '~/utils/helpers'

export default {
  layout: 'blog',
  components: { ContentParser },
  data: () => ({
    disqusLoaded: false
  }),
  computed: {
    pageTitle() { return `${this.meta.title} | Sutan Nst.` },
    productionUrl() { return `https://sutanlab.js.org/blog/${this.meta.slug}` }
  },
  methods: {
    loadDisqus() {
      this.disqusLoaded = true
      const disqus_title = this.pageTitle
      const disqus_url = this.productionUrl
      const dsq = document.createElement('script') 
      dsq.type = 'text/javascript' 
      dsq.async = true 
      dsq.src = 'https://sutanlab.disqus.com/embed.js'; (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq)
    },
    onScrollDisqus() {
      if ((window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 800)) {
        if (this.disqusLoaded === false) this.loadDisqus()
      }
    }
  },
  head() {
    return {
      title: this.pageTitle,
      meta: [
        { hid: 'title', name: 'title', content: this.pageTitle },
        { hid: 'keywords', name: 'keywords', content: this.pageTitle },
        { hid: 'og:title', property: 'og:title', content: this.pageTitle },
        { hid: 'og:description', property: 'og:description', content: this.meta.description },
        { hid: 'og:site_name', property: 'og:site_name', content: this.pageTitle },
        { hid: 'og:url', property: 'og:url', content: this.productionUrl },
        { hid: 'twitter:title', name: 'twitter:title', content: this.pageTitle },
        { hid: 'twitter:description', name: 'twitter:description', content: this.meta.description },
        { hid: 'twitter:url', name: 'twitter:url', content: this.productionUrl }
      ]
    }
  },
  async asyncData({ params, store }) {
    const content = await import(`~/contents/posts/${params.slug}/index.md`)
    return {
      meta: {
        params: params,
        ...content.attributes
      },
      renderFn: content.vue.render,
      staticRenderFn: content.vue.staticRenderFns
    }
  },
  beforeMount() {
    window.onscroll = this.onScrollDisqus
  }
}
</script>