<template>
  <v-timeline :dense="$vuetify.breakpoint.smAndDown">
    <v-timeline-item
      v-for="(timeline, i) in data"
      :key="i"
      :color="timeline.color"
      :small="$vuetify.breakpoint.smAndDown"
    >
      <span :slot="slot" :class="`subheading font-weight-bold ${timeline.color}--text`" v-text="timeline.year" />
      <div :class="`py-3 ${alignment(i)}`">
        <p v-show="$vuetify.breakpoint.smAndDown" :class="`subheading font-weight-bold ${timeline.color}--text`" v-text="timeline.year" />
        <p :class="`body-2 ${timeline.color}--text`" v-text="timeline.place" />
        <p class="body-1" v-text="timeline.job" />
      </div>
    </v-timeline-item>
  </v-timeline>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      default: () => [{}]
    }
  },
  computed: {
    slot() {
      return this.$vuetify.breakpoint.smAndDown ? '' : 'opposite'
    }
  },
  methods: {
    alignment(index) {
      if (!this.$vuetify.breakpoint.smAndDown) {
        return (index % 2 === 0) ? 'text-xs-right' : ''
      }
    }
  }
}
</script>
