<template>
  <div>
    <v-card class="mb-2">
      <v-card-title>
        {{ $t('gems.title') }}
        <v-spacer></v-spacer>
      </v-card-title>
      <v-card-text>
        {{ $t('gems.text') }}
      </v-card-text>
      <v-img src="/gallery/garten_02.jpeg" cover></v-img>
      <v-card-subtitle>{{ $t('gems.subtitle') }}</v-card-subtitle>
      <v-card-actions>
        <v-text-field
          v-model="query"
          :label="$t('gems.searchLabel')"
          outlined
          clearable
          dense
          rounded
          prepend-inner-icon="mdi-magnify"
          class=""
          @input="$fetch" />
      </v-card-actions>
    </v-card>
    <v-card v-for="gem in gems" :key="gem.entryId" class="mb-2">
      <v-list-item two-line :to="{path: `/gems/${gem.slug}`}">
      <v-list-item-avatar tile>
        <v-img :src="gem.images[0]"></v-img>
      </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title class="text-h5 mb-1">
            {{ gem.name }}
          </v-list-item-title>
          <v-list-item-subtitle>{{ gem.description }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'InspirePage',
  data() {
    return {
      gems: [],
      query: '',
      image: undefined
    }
  },
  async fetch() {
    this.gems = await this.$content('gems')
      .only(['slug', 'images', 'name', 'description'])
      .search(this.query)
      .sortBy('data.entity')
      .fetch()
  },
  methods: {
    getGemUrl(gem) {
      return `${window.location.origin}${gem.path}`
    },
  }
}
</script>

<style lang="scss">
.v-input {
  max-width: 250px
}
</style>