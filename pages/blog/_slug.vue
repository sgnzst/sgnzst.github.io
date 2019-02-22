<template>
  <div>
    <v-layout justify-center align-center>
      <v-flex class="pa-2" xs12 md8>
        <v-container fluid>
          <ContentParser
            :render-fn="renderFn"
            :static-render-fn="staticRenderFn" />
        </v-container>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs12>
        <Disqus :Title="pageTitle" :Url="productionUrl" />
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import ContentParser from '~/components/Blog/ContentParser'
import Disqus from '~/components/Blog/Disqus'
import { formatReadingTime } from '~/utils/helpers'

export default {
  layout: 'blog',
  components: { ContentParser, Disqus },
  computed: {
    pageTitle() { return `${this.meta.title} | Sutan Nst.` },
    productionUrl() { return `https://sutanlab.js.org/blog/${this.meta.slug}` }
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
  }
}
</script>