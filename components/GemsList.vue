<template>
  <div v-if="!!gems.length" class="gems-list">
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
  props: {
    gems: {
      type: Array,
      default: () => [],
    }
  }
}
</script>