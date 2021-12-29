<template>
  <v-container>
    <gem-entry v-if="!!gem" :gem="gem" :url="gemUrl" />
  </v-container>
</template>

<script>
export default {
  async asyncData({ $content, params, i18n }) {
    const gem = await $content(`gems/${i18n.locale}/${params.gem}`).fetch()
    return { gem }
  },
  data() {
    return {
      gemUrl: window.location.href,
    }
  },
  head() {
    return {
      title: this.gem?.name,
    }
  },
  mounted() {
    this.$store.dispatch('app/updatePageTitle', this.gem.name)
  },
}
</script>
