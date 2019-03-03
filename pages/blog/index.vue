<template>
  <v-layout justify-center align-center>
    <v-flex xs12 sm10 md6>
      <v-card class="blog-card ma-4" v-for="(content, i) in contents" :key="i">
        <v-img
          class="white--text grey lighten-1"
          height="200px"
          aspect-ratio="0.35"
          :lazy-src="content.image || defaultImgSrc(i)"
          :src="content.image || defaultImgSrc(i)"
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
            <v-progress-circular indeterminate color="primary lighten-5"></v-progress-circular>
          </v-layout>
        </v-img>
        <v-card-title>
          <div>
            <div class="deep-purple--text">
              {{ formatPostDate(content.date) }}
            </div>
            <div class="grey--text caption">{{ formatReadingTime(content.minute2read) }}</div><br>
            <div>{{ content.description }}</div><br>
            <div>
              <v-chip
                color="primary"
                text-color="white"
                v-for="(tag, i) in content.tags"
                :key="i"
                to=""
              >
                #{{ tag }}
              </v-chip>
            </div>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            :to="`/blog/${content.slug}`"
            :ripple="false"
            :aria-label="`Read more about ${content.title}`"
            flat
            color="accent"
          >
            <v-icon>visibility</v-icon>
            &nbsp;Read More
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import Helper from '~/utils/helpers'
import Contents from '~/contents'

export default {
  layout: 'blog',
  data: () => ({
    formatPostDate: Helper.formatPostDate,
    formatReadingTime: Helper.formatReadingTime,
  }),
  head: () => ({
    title: 'Blog | Sutan Nst.',
    meta: [
      { hid: 'title', name: 'title', content: 'Blog | Sutan Nst.' },
      { hid: 'keywords', name: 'keywords', content: 'sutanlab blog, sutanlab, sutan nasution, blog, sutan gading fadhillah nasution' },
      { hid: 'description', name: 'description', content: 'Sutan Nst. blog site' }
    ]
  }),
  methods: {
    defaultImgSrc(index){
      const rand = Math.floor(Math.random() * 6)
      this.contents[index].image = `/assets/img/collections/desks/desk${rand}.jpg`
    }
  },
  asyncData() {
    async function getAttributes(content) {
      const contents = await import(`~/contents/posts/${content.name}/index.md`)
      return contents.attributes
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
    color: lightblue !important;
  }
}
.blog-card {
  transition: transform ease-in-out .4s;
  &:hover {
    transform: scale(1.015);
  }
}
</style>
