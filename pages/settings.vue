<template>
  <v-card>
    <v-card-title>{{ $t('nav.settings') }}</v-card-title>
    <v-card-text>
      <v-select
        :value="$i18n.locale"
        :items="$i18n.locales"
        :label="$t('settings.language')"
        item-value="code"
        item-text="name"
        @input="updateLocale"
      ></v-select>
    </v-card-text>
  </v-card>
</template>
<script>
export default {
  name: 'SetingsPage',
  data() {
    return {
      datkTheme: localStorage.getItem('useDarkTheme')
    }
  },
  head() {
    return {
      title: this.$t('nav.settings'),
    }
  },
  mounted() {
    this.$store.dispatch('app/updatePageTitle', this.$t('nav.settings'))
  },
  methods: {
    toggleTheme(value) {
      this.$vuetify.theme.dark = !!value
      localStorage.setItem('useDarkTheme', value.toString())
    },
    async updateLocale(locale) {
      await this.$i18n.setLocale(locale)
      this.$store.dispatch('app/updatePageTitle', this.$t('nav.settings'))
    },
  }
}
</script>