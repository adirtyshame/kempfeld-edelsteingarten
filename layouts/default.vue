<template>
  <v-app dark>
    <v-navigation-drawer v-model="drawer" :mini-variant="miniVariant" fixed app>
      <v-img src="/icons/icon_64.png" contain max-height="64"></v-img>
      <v-list>
        <v-list-item
          v-for="item in items"
          :key="item.to"
          :to="item.to"
          router
          exact
          :disabled="!!item.disabled"
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item :to="'/settings'">
          <v-list-item-action>
              <v-icon>mdi-cog</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title v-text="$t('nav.settings')" />
            </v-list-item-content>
        </v-list-item>
      </v-list>
      <template #append>
        <v-list-item icon @click.stop="miniVariant = !miniVariant">
          <v-icon>mdi-{{ `chevron-double-${miniVariant ? 'right' : 'left'}` }}</v-icon>
        </v-list-item>
      </template>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="false" fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-btn icon @click="toggleTheme">
        <v-icon>mdi-theme-light-dark</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer :absolute="false" app>
      <span>&copy; {{ new Date().getFullYear() }} Thomas Ames</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {
      drawer: !this.$vuetify.breakpoint.mobile,
      miniVariant: false,
    }
  },
  computed: {
    title() {
      return this.$store.state.app.pageTitle
    },
    items() {
      return [
          {
            icon: 'mdi-apps',
            title: this.$t('nav.home'),
            to: '/',
          },
          {
            icon: 'mdi-map',
            title: this.$t('nav.map'),
            to: '/map',
            disabled: true,
          },
          {
            icon: 'mdi-diamond-stone',
            title: this.$t('nav.gems'),
            to: '/gems',
          },
        ]
    }
  },
  mounted() {
    const theme = localStorage.getItem('useDarkTheme')
    if (theme && theme === 'true') {
        this.$vuetify.theme.dark = true
    } else {
      this.$vuetify.theme.dark = false
    }
  },
  methods: {
    toggleTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
      localStorage.setItem('useDarkTheme', this.$vuetify.theme.dark.toString())
    },
  },
}
</script>
