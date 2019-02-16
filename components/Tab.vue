<template>
  <v-tabs centered dark icons-and-text show-arrows :color="Color">
    <v-tabs-slider :color="SliderColor" />
    <v-tab v-for="(item, i) in items" :key="i" :to="item.to">
      {{ item.title }}
      <v-icon>{{ item.icon }}</v-icon>
    </v-tab>
  </v-tabs>
</template>

<script>
export default {
  props: {
    Color: String,
    SliderColor: String
  },
  data: () => ({
    items: [
      { title: 'About', icon: 'person', to: '/' },
      { title: 'Portofolio', icon: 'dashboard', to: '/portofolio' },
      { title: 'Background', icon: 'timeline', to: '/background' },
      { title: 'Skills', icon: 'star', to: '/skills' },
      { title: 'Achievements', icon: 'class', to: '/achievements' },
      { title: 'Contact', icon: 'phone', to: '/contact' },
    ]
  })
}
</script>