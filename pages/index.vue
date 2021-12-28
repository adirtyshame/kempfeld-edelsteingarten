<template>
  <div>
    <v-card>
      <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>
        <v-card-title>{{ $t('home.title') }}</v-card-title>
        <v-card-text>{{ $t('home.description') }}</v-card-text>
        <v-img src="/gallery/garten_01.jpeg"></v-img>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
}
</script>
