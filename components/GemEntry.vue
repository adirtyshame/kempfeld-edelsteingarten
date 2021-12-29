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
            <v-card-title>
              {{ gem.name }}
              <v-spacer></v-spacer>
              <v-btn
                color="red lighten-2"
                icon
                @click="dialog = true"
              >
                <v-icon>mdi-qrcode</v-icon>
              </v-btn>
              <v-dialog 
                v-model="dialog"
                max-width="350"
                transition="dialog-bottom-transition">
                <v-card>
                  <v-card-title>{{ gem.name }}<v-spacer></v-spacer><v-btn icon @click="dialog = false"><v-icon>mdi-close</v-icon></v-btn></v-card-title>
                  <v-card-text>
                    <vue-qr :text="url" qid="bergkristall" :size="300" :logo-src="'/icons/icon_64.png'" />
                  </v-card-text>
                </v-card>
              </v-dialog>
            </v-card-title>
            <v-card-subtitle style="text-align: justify">{{
              gem.description
            }}</v-card-subtitle>
          </div>
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
    },
  },
  data() {
    return {
      dialog: false,
    }
  },
}
</script>
