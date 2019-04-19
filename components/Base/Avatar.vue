<template>
  <div
    class="LI-profile-badge my-4"
    data-version="v1"
    :data-size="badgeSize"
    data-locale="en_US"
    :data-type="badgeType"
    :data-theme="badgeTheme"
    :data-vanity="badgeVanity"
  >
    <a class="LI-simple-link" rel="noopener" target="_blank" :href="linkedInLink">
      <v-hover>
        <v-avatar slot-scope="{ hover }" :class="`my-2 elevation-${hover ? 12 : 4}`" :size="avatarSize">
          <img :title="avatarTitle" :src="avatar" :alt="avatarTitle">
        </v-avatar>
      </v-hover>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    badgeSize: {
      type: String,
      default: 'large'
    },
    badgeType: {
      type: String,
      default: 'vertical'
    },
    badgeTheme: {
      type: String,
      default: 'light'
    },
    badgeVanity: {
      type: String,
      default: 'sutan-gading-fadhillah-nasution-963841160'
    },
    linkedInLink: {
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
  },
  head: () => ({
    script: [
      { src: 'https://platform.linkedin.com/badges/js/profile.js', async: true, defer: true }
    ]
  })
}
</script>
