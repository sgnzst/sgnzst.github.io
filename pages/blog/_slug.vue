<template>
  <v-content>
    <Banner
      parallax
      :height="380"
      :overlay="0.25"
      :carousels="[{ src: meta.image }]"
    >
      <v-layout justify-center align-center>
        <v-flex xs12 class="text-xs-center">
          <h1 :class="`${$vuetify.breakpoint.xs ? 'headline' : 'display-1'} text-shadow  mb-3`">
            <b>{{ meta.title }}</b>
          </h1>
          <h3 class="px-2 text-shadow font-weight-medium">
            {{ meta.description }}
          </h3>
        </v-flex>
      </v-layout>
    </Banner>
    <v-layout justify-center align-center>
      <v-flex xs12 md8>
        <v-divider ma-3 />
      </v-flex>
    </v-layout>
    <v-container fluid class="pa-0">
      <ContentParser
        class="py-4"
        :render-fn="renderFn"
        :static-render-fn="staticRenderFn"
      />
    </v-container>
    <v-layout row wrap>
      <v-flex xs12>
        <Disqus
          :prop-title="`${meta.title} | ${env.author}`"
          :prop-url="`${env.url}/blog/${meta.slug}`"
          :prop-identifier="`${env.url}/${meta.slug}/${new Date(meta.date).getTime()}`"
        />
      </v-flex>
    </v-layout>
  </v-content>
</template>

<script>
import Banner from '~/components/Base/Banner'
import ContentParser from '~/components/Blog/ContentParser'
import { formatPostDate, formatReadingTime, metaGenerator } from '~/utils/helpers'

export default {
  components: {
    Banner,
    ContentParser,
    Disqus: () => import('~/components/Blog/Disqus')
  },
  data: () => ({
    formatPostDate,
    formatReadingTime,
    env: {
      url: process.env.PRODUCTION_URL,
      author: process.env.AUTHOR
    }
  }),
  head() {
    return {
      title: `${this.meta.title} | ${this.env.author}`,
      meta: [
        ...metaGenerator('article', {
          title: this.meta.title,
          description: this.meta.description,
          keywords: this.meta.keywords,
          url: `/blog/${this.meta.slug}`,
          image: this.meta.image
        }),
        { hid: 'article:published_time', property: 'article:published_time', content: new Date(this.meta.date).toISOString() },
        { hid: 'article:section', property: 'article:section', content: this.meta.category }
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
