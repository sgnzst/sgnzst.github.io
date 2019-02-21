<template>
  <v-layout row wrap>

  </v-layout>
</template>

<script>
import Contents from '~/contents'

export default {
  layout: 'blog',
  async asyncData ({ store }) {
    async function asyncImport (blog) {
      const allPosts = await import(`~/contents/posts/${blog.date}/${blog.name}/index.md`)
      return allPosts.attributes
    }
    return (
      Promise.all(Contents.map(blog => asyncImport(blog)))
      .then(res => {
        console.log(res)
      })
    )
  }
}
</script>