<template>
<v-container>
<!-- <v-btn text @click="$router.push()">XXX zurück</v-btn> -->
<v-breadcrumbs  :items="breadcrumbs"></v-breadcrumbs>
<v-card>
    <v-carousel>
      <v-carousel-item v-for="(image, i) in gem.images" :key="i" :src="image" />
    </v-carousel>
  
  <v-card-text>
    <div class="d-flex flex-row">
      <div>
        <v-card-title>{{ gem.name }}</v-card-title>
  <v-card-subtitle>{{ gem.description }}</v-card-subtitle>
      </div>
        <v-list-item-avatar tile size="80">
          <vue-qr :text="gemUrl" qid="bergkristall" />
        </v-list-item-avatar>
    </div>
    <v-list v-if="!!gem.data">
      <v-list-item v-for="(meta, i) in Object.keys(gem.data)" :key="i">
        <v-list-item-subtitle>{{ $t(`gem.${meta}`) }}</v-list-item-subtitle>
        <v-list-item-title>{{ gem.data[meta]}}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-card-text>
</v-card>
</v-container>
</template>

<script>
import VueQr from 'vue-qr'
export default {
  components: {
    VueQr,
  },
  async asyncData({ $content, params }) {
    const gem = await $content(`gems/${params.gem}`).fetch()
    return { gem }
  },
  data() {
    return {
      gemUrl: window.location.href,
    }
  },
  computed: {
    breadcrumbs() {
      return [
          { to: '/gems', text: this.$t('nav.gems'), exact: true },
          { to: this.gem?.path, text: this.gem?.name, exact: true },
        ]
    } 
  },
}
</script>