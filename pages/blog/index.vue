<template>
  <div>
    <Banner parallax :height="435" :overlay="0.2" :carousels="carousels">
      <v-layout justify-center align-center>
        <v-flex xs12 class="text-xs-center">
          <h1 class="text-smooth text-shadow display-2 mb-3">
            <b>Blog</b>
          </h1>
          <h2 class="px-2 text-smooth text-shadow text-xs-center font-weight-thin">
            Coding, Life and whatever i want.
          </h2>
        </v-flex>
      </v-layout>
    </Banner>
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
  </div>
</template>

<script>
import { formatPostDate, formatReadingTime, metaGenerator } from '~/utils/helpers'
import Contents from '~/contents'
import Banner from '~/components/Base/Banner'

export default {
  components: {
    Banner
  },
  data: () => ({
    formatPostDate,
    formatReadingTime,
    carousels: [
      { src: '/assets/img/collections/desks/desk5.jpg' }
    ]
  }),
  head: () => ({
    title: `Blog | ${process.env.AUTHOR}`,
    meta: metaGenerator('blog', {
      title: 'Blog',
      description: 'A Journal about Sutan Nst, Coder',
      keywords: 'blogs, posts, articles',
      image: '/icon.png',
      url: '/blog'
    })
  }),
  asyncData() {
    return Promise.all(Contents.map(async content => {
      const contents = await import(`~/contents/posts/${content.name}/index.md`)
      return { ...contents.attributes }
    })).then(res => ({ contents: res.reverse() }))
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
