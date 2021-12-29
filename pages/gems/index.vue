<template>
  <div>
    <gems-intro :value="query" @search="search($event)" />
    <gems-list :gems="gems" />
  </div>
</template>

<script>
export default {
  name: 'GemsPage',
  data() {
    return {
      gems: [],
      query: '',
      image: undefined
    }
  },
  async fetch() {
    this.gems = await this.$content(`gems/${this.$i18n.locale}`)
      .only(['slug', 'images', 'name', 'description'])
      .search(this.query)
      .sortBy('data.entity')
      .fetch()
  },
  head() {
    return {
      title: this.$t('nav.gems'),
    }
  },
  mounted() {
    this.$store.dispatch('app/updatePageTitle', this.$t('nav.gems'))
  },
  methods: {
    search(query) {
      this.query = query
      this.$fetch()
    }
  },
}
</script>

<style lang="scss">
.v-input {
  max-width: 250px
}
</style>