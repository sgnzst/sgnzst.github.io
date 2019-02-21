<template>
  <div>
    Hello World
  </div>
</template>

<script>
import ContentParser from '~/components/ContentParser'
import { formatReadingTime } from '~/utils/helpers'

export default {
  layout: 'blog',
  components: { ContentParser },
  data: () => ({

  }),
  head() {
    const title = `${this.meta.title} | Sutan Nst.`
    const productionUrl = `https://sutanlab.js.org/blog/${this.meta.slug}`
    return {
      title,
      meta: [
        { hid: 'title', name: 'title', content: title },
        { hid: 'keywords', name: 'keywords', content: title },
        { hid: 'og:title', property: 'og:title', content: `${title}` },
        { hid: 'og:description', property: 'og:description', content: this.meta.description },
        { hid: 'og:site_name', property: 'og:site_name', content: title },
        { hid: 'og:url', property: 'og:url', content: productionUrl },
        { hid: 'twitter:title', name: 'twitter:title', content: title },
        { hid: 'twitter:description', name: 'twitter:description', content: this.meta.description },
        { hid: 'twitter:url', name: 'twitter:url', content: productionUrl }
      ]
    }
  },
  async asyncData ({ params, store }) {
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