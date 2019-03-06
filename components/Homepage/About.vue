<template>
  <v-container my-4>
    <v-flex xs12 class="text-xs-center">
      <h1 class="text-smooth display-2 font-weight-bold">
        About
      </h1>
      <v-avatar class="my-4" size="avatarSize">
        <img src="/assets/img/collections/sutan.jpeg" alt="Sutan Nst.">
      </v-avatar>
    </v-flex>
    <v-layout justify-center align-center>
      <v-flex xs12 md8>
        <p>
          <v-icon>format_quote</v-icon>
          My name is Sutan Gading Fadhillah Nasution. My age is approaching 20 years.
          Now, i'm lives in Palembang, Indonesia. I still lives with my parents and
          currently studying at the State of Polytechnic Sriwijaya.
        </p>
        <p>
          I am very interested in Programming, especially in building a website applications.
          Actually, I'm not very experienced in programming,
          but I will continue to learn and aspiring to become a Professional Developer.
        </p>
      </v-flex>
    </v-layout>
    <v-divider class="my-4" />
    <v-container>
      <v-flex xs12 class="text-xs-center">
        <h1 class="text-smooth display-2 font-weight-bold">
          Timeline
        </h1>
      </v-flex>
      <v-layout my-4 justify-center align-center>
        <v-flex xs12 sm8 md8>
          <Timeline />
        </v-flex>
      </v-layout>
    </v-container>
    <v-divider class="my-4" />
    <v-container>
      <v-flex xs12 class="text-xs-center">
        <h1 class="text-smooth display-2 font-weight-bold">
          Skills
        </h1>
      </v-flex>
      <v-layout id="skill-layout" my-4 row wrap>
        <v-flex
          v-for="(skill, i) in skills"
          :key="i"
          class="text-xs-center"
          xs12
          sm6
          my-3
          px-3
        >
          <h1 class="title">
            <component :is="skill.icon" w="24px" h="24px" :style="`color: ${skill.color}`" />
            {{ skill.name }}
          </h1>
          <v-progress-linear style="z-index: 0" class="skillbar" height="20" :color="skill.color" :value="skill.value">
            <div class="font-weight-bold text-xs-right px-2">
              {{ `${skill.value}%` }}
            </div>
          </v-progress-linear>
        </v-flex>
      </v-layout>
    </v-container>
  </v-container>
</template>

<script>
import Timeline from '~/components/Base/Timeline'

export default {
  components: { Timeline },
  data: () => ({
    skills: [
      { name: 'HTML', icon: 'logo-html5-icon', color: '#E76233', init: 0, value: 85 },
      { name: 'CSS', icon: 'logo-css3-icon', color: '#3595CF', init: 0, value: 70 },
      { name: 'JavaScript', icon: 'logo-javascript-icon', color: '#EFD81D', init: 0, value: 76 },
      { name: 'NodeJS', icon: 'logo-nodejs-icon', color: '#74B141', init: 0, value: 60 },
      { name: 'PHP', icon: null, color: '#4D588E', init: 0, value: 74 },
      { name: 'VueJS', icon: null, color: '#32475B', init: 0, value: 65 },
      { name: 'MySQL', icon: null, color: '#005E86', init: 0, value: 50 },
      { name: 'MongoDB', icon: null, color: '#12964D', init: 0, value: 40 }
    ]
  })
}
</script>

<style lang="css" scoped>
p {
  font-size: 18px;
  color: #555;
}
</style>
