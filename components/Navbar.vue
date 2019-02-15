<template>
  <v-toolbar app fixed dark color="primary">
    <v-avatar size="50px">
      <img src="/logo.jpg" alt="avatar">
    </v-avatar>
    <v-toolbar-title>Sutan Nst.</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-xs-only">
      <v-btn v-for="(item, i) in items"
        flat
        :key="i"
        :to="item.to"
        :href="item.href"
      >
        {{ item.title }}
      </v-btn>
    </v-toolbar-items>
    <v-toolbar-side-icon class="hidden-sm-and-up"></v-toolbar-side-icon>
  </v-toolbar>
</template>

<script>
export default {
  data: () => ({
    items: [
      { title: 'About', to: '/' },
      { title: 'Portofolio', to: '/portofolio' },
      { title: 'Blogs', href: '/blog' },
    ]
  })
}
</script>