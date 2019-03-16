<template>
  <v-content>
    <v-layout justify-center align-center>
      <v-flex xs12 md8>
        <v-container fluid>
          <h3 :class="+$vuetify.breakpoint.mdAndUp ? 'display-2' : 'display-1'">
            {{ meta.title }}
          </h3>
          <div style="margin-top: 5px">
            <span class="deep-purple--text">
              {{ formatPostDate(meta.date) }}
            </span>
            —
            <span class="grey--text caption">
              {{ formatReadingTime(meta.minute2read) }}
            </span>
          </div>
        </v-container>
        <v-container fluid py-1>
          <v-img
            :title="meta.title"
            height="300px"
            :lazy-src="meta.image"
            :src="meta.image"
          />
          <p class="my-3 text-xs-center">
            {{ meta.description }}
            <v-icon>format_quote</v-icon>
          </p>
          <v-divider mx-3 />
        </v-container>
        <v-container fluid>
          <ContentParser
            :render-fn="renderFn"
            :static-render-fn="staticRenderFn"
          />
        </v-container>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs12>
        <Disqus :prop-title="pageTitle" :prop-url="productionUrl" />
      </v-flex>
    </v-layout>
  </v-content>
</template>

<script>
import ContentParser from '~/components/Blog/ContentParser'
import Disqus from '~/components/Blog/Disqus'
import Helper from '~/utils/helpers'

export default {
  components: { ContentParser, Disqus },
  data: () => ({
    formatPostDate: Helper.formatPostDate,
    formatReadingTime: Helper.formatReadingTime
  }),
  computed: {
    pageTitle() { return `${this.meta.title} | Sutan Nst.` },
    productionUrl() { return `https://sutanlab.js.org/blog/${this.meta.slug}` },
    postImage() { return `https://sutanlab.js.org/${this.meta.image}` }
  },
  head() {
    return {
      title: this.pageTitle,
      meta: [
        { hid: 'title', name: 'title', content: this.pageTitle },
        { hid: 'description', name: 'description', content: this.meta.description },
        { hid: 'keywords', name: 'keywords', content: `${this.pageTitle}, ${this.meta.title}, ${this.meta.keywords}` },
        { hid: 'og:image', property: 'og:image', content: this.postImage },
        { hid: 'og:image:secure_url', property: 'og:image:secure_url', content: this.postImage },
        { hid: 'og:type', property: 'og:type', content: 'article' },
        { hid: 'og:title', property: 'og:title', content: this.pageTitle },
        { hid: 'og:description', property: 'og:description', content: this.meta.description },
        { hid: 'og:url', property: 'og:url', content: this.productionUrl },
        { hid: 'twitter:title', name: 'twitter:title', content: this.pageTitle },
        { hid: 'twitter:image:src', name: 'twitter:image:src', content: this.postImage },
        { hid: 'twitter:description', name: 'twitter:description', content: this.meta.description },
        { hid: 'twitter:url', name: 'twitter:url', content: this.productionUrl },
        { hid: 'article:published_time', property: 'article:published_time', content: new Date(this.meta.date).toISOString() },
        { hid: 'article:section', property: 'article:section', content: 'Technology' }
      ]
    }
  },
  async asyncData({ params }) {
    const content = await import(`~/contents/posts/${params.slug}/index.md`)
    return {
      meta: { ...content.attributes },
      renderFn: content.vue.render,
      staticRenderFn: content.vue.staticRenderFns
    }
  }
}
</script>
