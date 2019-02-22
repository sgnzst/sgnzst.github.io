<template>
  <v-layout justify-center align-center>
    <v-flex xs12 sm10 md6>
      <v-card class="ma-4" v-for="(blog, i) in blogs" :key="i">
        <v-img
          class="white--text grey lighten-1"
          height="200px"
          aspect-ratio="0.35"
          :lazy-src="blog.image || defaultImgSrc(i)"
          :src="blog.image || defaultImgSrc(i)"
        >
          <v-container fill-height fluid>
            <v-layout fill-height>
              <v-flex xs12 align-end flexbox>
                <span class="title text-shadow font-weight-bold">{{ blog.title }}</span>
              </v-flex>
            </v-layout>
          </v-container>
          <v-layout slot="placeholder" fill-height align-center justify-center ma-0>
            <v-progress-circular indeterminate color="primary lighten-5"></v-progress-circular>
          </v-layout>
        </v-img>
        <v-card-title>
          <div>
            <div class="grey--text">
              {{ formatPostDate(blog.date) }}
            </div>
            <div class="grey--text caption">{{ formatReadingTime(blog.minute2read) }}</div><br>
            <div>{{ blog.description }}</div><br>
            <div>
              <v-chip 
                color="primary" 
                text-color="white"
                v-for="(tag, i) in blog.tags"
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
          <v-btn flat color="accent" :to="`/blog/${blog.slug}`">
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
import contents from '~/contents'

export default {
  layout: 'blog',
  data: () => ({
    formatPostDate: Helper.formatPostDate,
    formatReadingTime: Helper.formatReadingTime,
  }),
  head: () => ({
    title: 'Blog | Sutan Nst.',
    meta: [
      { hid: 'title', name: 'title', content: 'Blog | Sutan Nst.' }
    ]
  }), 
  methods: {
    defaultImgSrc(index){
      const rand = Math.floor(Math.random() * 6)
      this.blogs[index].image = `/assets/img/collections/desks/desk${rand}.jpg`
    }
  },
  asyncData ({ store }) {
    async function asyncImport (blog) {
      const allPosts = await import(`~/contents/posts/${blog.name}/index.md`)
      return allPosts.attributes
    }
    return (
      Promise.all(contents.map(blog => asyncImport(blog)))
      .then(res => ({ 
        blogs: res.reverse()
      }))
    )
  }
}
</script>