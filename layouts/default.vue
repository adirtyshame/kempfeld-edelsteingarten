<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
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
        <v-spacer />
      </v-list>
        <template #append>
          <v-list-item icon @click.stop="miniVariant = !miniVariant">
            <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
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
      drawer: false,
      items: [
        {
          icon: 'mdi-apps',
          title: this.$t('nav.home'),
          to: '/',
        },
        {
          icon: 'mdi-map',
          title: this.$t('nav.map'),
          to: '/map',
          disabled: true
        },
        {
          icon: 'mdi-diamond-stone',
          title: this.$t('nav.gems'),
          to: '/gems',
        },
      ],
      miniVariant: false,
      title: 'Edelsteingarten Kempfeld',
    }
  },
  mounted() {
  const theme = localStorage.getItem("useDarkTheme");
    if (theme) {
      if (theme === "true") {
        this.$vuetify.theme.dark = true;
      } else this.$vuetify.theme.dark = false;
    }
},
  methods: {
    toggleTheme() {
      this.$vuetify.theme.dark=!this.$vuetify.theme.dark;
      localStorage.setItem("useDarkTheme", this.$vuetify.theme.dark.toString())
    }
  }
}
</script>
