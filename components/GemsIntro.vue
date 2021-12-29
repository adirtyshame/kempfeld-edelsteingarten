<template>
  <div>
    <v-card class="mb-2">
      <v-card-title>
        {{ $t('gems.title') }}
        <v-spacer></v-spacer>
      </v-card-title>
      <v-card-text style="text-align: justify">
        {{ $t('gems.text') }}
      </v-card-text>
      <v-img src="/gallery/garten_02.jpeg" cover></v-img>
      <v-card-subtitle>{{ $t('gems.subtitle') }}</v-card-subtitle>
      <v-card-actions>
        <v-text-field
          :value="value"
          :label="$t('gems.searchLabel')"
          outlined
          clearable
          dense
          rounded
          prepend-inner-icon="mdi-magnify"
          class=""
          @input="$emit('search', $event)" />
      </v-card-actions>
    </v-card>
  </div>
</template>
<script>
export default {
  props: {
    value: {
      type: String,
      default: '',
    }
  }
}
</script>