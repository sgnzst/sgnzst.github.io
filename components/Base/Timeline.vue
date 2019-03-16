<template>
  <v-timeline :dense="$vuetify.breakpoint.smAndDown">
    <v-timeline-item
      v-for="(time, i) in timelines"
      :key="i"
      :color="time.color"
      :small="$vuetify.breakpoint.smAndDown"
    >
      <span :slot="slot" :class="`subheading font-weight-bold ${time.color}--text`" v-text="time.year" />
      <div :class="`py-3 ${alignment(i)}`">
        <p v-show="$vuetify.breakpoint.smAndDown" :class="`subheading font-weight-bold ${time.color}--text`" v-text="time.year" />
        <p :class="`body-2 ${time.color}--text`" v-text="time.place" />
        <p class="body-1" v-text="time.job" />
      </div>
    </v-timeline-item>
  </v-timeline>
</template>

<script>
export default {
  data: () => ({
    timelines: [
      {
        year: '2013 - 2016',
        place: 'VHS Muhammadiyah 1 Palembang',
        job: 'Computer and Network Engineering Student',
        color: 'info'
      },
      {
        year: '2016 - 2019 (Present)',
        place: 'State of Polytechnic Sriwijaya Palembang',
        job: 'Computer Engineering College Student',
        color: 'success'
      },
      {
        year: 'Now and Always',
        place: 'Everywhere',
        job: 'Self Learning',
        color: 'primary'
      }
    ]
  }),
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
