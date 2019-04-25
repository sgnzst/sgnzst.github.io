<template>
  <a rel="noopener" target="_blank" :href="clickedLink">
    <v-hover>
      <v-avatar slot-scope="{ hover }" :class="`my-4 elevation-${hover ? 12 : 4}`" :size="avatarSize">
        <img :title="avatarTitle" :src="avatar" :alt="avatarTitle">
      </v-avatar>
    </v-hover>
  </a>
</template>

<script>
export default {
  props: {
    clickedLink: {
      type: String,
      default: 'https://id.linkedin.com/in/sutan-gading-fadhillah-nasution-963841160?trk=profile-badge'
    },
    avatar: {
      type: String,
      default: '/assets/img/collections/sutan_formal.jpg'
    },
    avatarTitle: {
      type: String,
      default: 'Sutan Nst.'
    },
    avatarSize: {
      type: Number,
      default: 200
    }
  }
}
</script>
