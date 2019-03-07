<template>
  <v-content>
    <v-layout justify-center align-center>
      <v-flex xs12 sm10 md6>
        <v-hover v-for="(content, i) in contents" :key="i">
          <v-card
            v-observe-visibility="(isVisible, entry) => viewed(isVisible, entry, i)"
            slot-scope="{ hover }"
            :class="`ma-4 elevation-${hover ? 12 : 2}`"
          >
            <v-img
              :title="content.title"
              class="white--text grey lighten-1"
              height="200px"
              :aspect-ratio="1.4"
              :lazy-src="content.image"
              :src="content.viewed && content.image ? content.image : ''"
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
              <v-layout slot="placeholder" fill-height align-center justify-center ma-0>
                <v-progress-circular indeterminate color="primary lighten-5" />
              </v-layout>
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
    formatReadingTime: Helper.formatReadingTime,
    defaultImgSrc: Helper.randomImgSrc
  }),
  head: () => ({
    title: 'Blog | Sutan Nst.',
    meta: [
      { hid: 'title', name: 'title', content: 'Blog | Sutan Nst.' },
      { hid: 'keywords', name: 'keywords', content: 'sutanlab blog, sutanlab, sutan nasution, blog, sutan gading fadhillah nasution' },
      { hid: 'description', name: 'description', content: 'Sutan Nst. blog site' }
    ]
  }),
  asyncData() {
    async function getAttributes(content) {
      const contents = await import(`~/contents/posts/${content.name}/index.md`)
      return { ...contents.attributes, viewed: false }
    }
    return (
      Promise.all(Contents.map(content => getAttributes(content)))
        .then(res => ({ contents: res.reverse() }))
    )
  },
  methods: {
    viewed(visibility, entry, index) {
      this.contents[index].viewed = visibility
    }
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
