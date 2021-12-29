<template>
  <div>
    <v-card>
      <template slot="progress">
        <v-progress-linear color="deep-purple" height="10" indeterminate />
      </template>
      <v-card-title>{{ $t('home.title') }}</v-card-title>
      <v-card-text>{{ $t('home.description') }}</v-card-text>
      <v-img src="/gallery/garten_01.jpeg"></v-img>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'WelcomePage',
  head() {
    return {
      title: this.$t('nav.home'),
    }
  },
  mounted() {
    this.$store.dispatch('app/updatePageTitle', this.$t('nav.home'))
  },
}
</script>
