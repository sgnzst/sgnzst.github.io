<template>
  <v-content>
    <v-layout justify-center align-center>
      <v-flex xs12 sm10 md6>
        <v-hover v-for="(content, i) in contents" :key="i">
          <v-card slot-scope="{ hover }" :class="`ma-4 elevation-${hover ? 12 : 2}`">
            <v-img
              class="white--text grey lighten-1"
              height="200px"
              :title="content.title"
              :aspect-ratio="1.4"
              :lazy-src="content.image"
              :alt="content.title"
            >
              <v-container fill-height fluid>
                <v-layout fill-height>
                  <v-flex xs12 align-end flexbox>
                    <nuxt-link class="blog-link white--text" :to="`/blog/${content.slug}`">
                      <span class="title text-shadow font-weight-bold">{{ content.title }}</span>
                    </nuxt-link>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-img>
            <v-card-title>
              <div>
                <div class="deep-purple--text">
                  {{ formatPostDate(content.date) }}
                </div>
                <div class="grey--text caption">
                  {{ formatReadingTime(content.minute2read) }}
                </div><br>
                <div>
                  {{ content.description }}
                </div><br>
                <div>
                  <v-chip
                    v-for="(tag, iTag) in content.tags"
                    :key="iTag"
                    color="primary"
                    text-color="white"
                    to=""
                  >
                    #{{ tag }}
                  </v-chip>
                </div>
              </div>
            </v-card-title>
            <v-card-actions>
              <v-spacer />
              <nuxt-link :to="`/blog/${content.slug}`">
                <v-btn
                  :ripple="false"
                  :aria-label="`Read more about ${content.title}`"
                  flat
                  color="accent"
                >
                  <v-icon>visibility</v-icon>
                  &nbsp;Read More
                </v-btn>
              </nuxt-link>
            </v-card-actions>
          </v-card>
        </v-hover>
      </v-flex>
    </v-layout>
  </v-content>
</template>

<script>
import Helper from '~/utils/helpers'
import Contents from '~/contents'

export default {
  data: () => ({
    formatPostDate: Helper.formatPostDate,
    formatReadingTime: Helper.formatReadingTime
  }),
  head() {
    const desc = 'A Journal about Sutan Nst, Coder'
    const appTitle = 'Blog | Sutan Nst.'
    const productionUrl = 'https://sutanlab.js/org'
    return {
      title: appTitle,
      meta: [
        { name: 'title', content: appTitle },
        { name: 'description', content: desc },
        { name: 'keywords', content: 'blog, sutan nst blog, sutan nst, sutan gading fadhillah nasution, sutan, gading, fadhillah, nasution, sgnzst, sutanlab, sutan lab, coder, mahasiswa, it polsri, itpolsri, polsri, politeknik negeri sriwijaya' },
        { property: 'og:image', content: '/icon.png' },
        { property: 'og:image:secure_url', content: '/icon.png' },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: appTitle },
        { property: 'og:description', content: desc },
        { property: 'og:url', content: productionUrl },
        { property: 'og:updated_time', content: new Date().toISOString() },
        { name: 'twitter:image:src', content: '/icon.png' },
        { name: 'twitter:title', content: appTitle },
        { name: 'twitter:description', content: desc },
        { name: 'twitter:url', content: productionUrl }
      ]
    }
  },
  asyncData() {
    async function getAttributes(content) {
      const contents = await import(`~/contents/posts/${content.name}/index.md`)
      return { ...contents.attributes }
    }
    return (
      Promise.all(Contents.map(content => getAttributes(content)))
        .then(res => ({ contents: res.reverse() }))
    )
  }
}
</script>

<style lang="scss" scoped>
.blog-link {
  transition: all ease-in-out .25s;
  text-decoration: none;
  &:hover {
    color: #11CDEF !important;
  }
}
</style>
