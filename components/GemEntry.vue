<template>
  <div>
    <v-card>
      <v-carousel>
        <v-carousel-item
          v-for="(image, i) in gem.images"
          :key="i"
          :src="image"
        />
      </v-carousel>

      <v-card-text>
        <div class="d-flex flex-row">
          <div>
            <v-card-title>{{ gem.name }}</v-card-title>
            <v-card-subtitle style="text-align: justify">{{
              gem.description
            }}</v-card-subtitle>
          </div>
          <v-list-item-avatar v-if="!$vuetify.breakpoint.mobile" tile size="80">
            <vue-qr :text="url" qid="bergkristall" />
          </v-list-item-avatar>
        </div>
        <v-list v-if="!!gem.data">
          <v-list-item v-for="(meta, i) in Object.keys(gem.data)" :key="i">
            <v-list-item-subtitle>{{ $t(`gem.${meta}`) }}</v-list-item-subtitle>
            <v-list-item-title>{{ gem.data[meta] }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-card-text>
    </v-card>
  </div>
</template>
<script>
import VueQr from 'vue-qr'
export default {
  components: {
    VueQr,
  },
  props: {
    gem: {
      type: Object,
      // default: () => ({}),
      required: true,
    },
    url: {
      type: String,
      // default: '',
      required: true,
    }
  },
}</script>