<template>
  <v-content>
    <v-layout justify-center align-center>
      <v-flex xs12 md8>
        <v-container fluid>
          <h3 :class="$vuetify.breakpoint.mdAndUp ? 'display-2' : 'display-1'">
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
          <v-hover>
            <v-img
              slot-scope="{ hover }"
              :class="`elevation-${hover ? 12 : 4}`"
              height="300px"
              :title="meta.title"
              :lazy-src="meta.image"
              :src="meta.image"
            />
          </v-hover>
          <p class="my-4 text-xs-center">
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
        <Disqus
          :prop-title="disqus.title"
          :prop-url="disqus.url"
        />
      </v-flex>
    </v-layout>
  </v-content>
</template>

<script>
import { formatPostDate, formatReadingTime, metaGenerator } from '~/utils/helpers'

export default {
  components: {
    ContentParser: () => import('~/components/Blog/ContentParser'),
    Disqus: () => import('~/components/Blog/Disqus')
  },
  data: () => ({
    formatPostDate, formatReadingTime
  }),
  computed: {
    disqus() {
      return {
        title: `${this.meta.title} | ${process.env.AUTHOR}`,
        url: `${process.env.PRODUCTION_URL}/blog/${this.meta.slug}`
      }
    }
  },
  head() {
    this.meta.slug = `/blog/${this.meta.slug}`
    return {
      title: `${this.meta.title} | ${process.env.AUTHOR}`,
      meta: [
        ...metaGenerator('article', this.meta),
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
