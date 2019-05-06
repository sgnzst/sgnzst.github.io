<template>
  <v-layout row wrap class="comments default lighten-2 white--text pb-3 pt-1">
    <v-container class="text-xs-center">
      <h2 class="text--white mb-3">
        {{ !disqusLoaded ? 'Loading Comments..' : 'Comments' }}
      </h2>
      <v-divider />
      <v-progress-circular
        v-if="!disqusLoaded"
        class="mt-5"
        :size="75"
        color="white"
        indeterminate
      />
      <v-flex class="mx-auto mt-4 md8 xs12">
        <no-ssr>
          <lazy-component>
            <vue-disqus
              v-show="disqusLoaded"
              :shortname="propName"
              :title="propTitle"
              :url="propUrl"
              @ready="disqusLoaded = true"
            />
          </lazy-component>
        </no-ssr>
      </v-flex>
    </v-container>
  </v-layout>
</template>

<script>
export default {
  props: {
    propName: {
      type: String,
      default: 'sutanlab'
    },
    propTitle: {
      type: String,
      required: true
    },
    propUrl: {
      type: String,
      required: true
    }
  },
  data: () => ({
    disqusLoaded: false
  })
}
</script>
