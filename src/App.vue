<template>
  <v-app id="app">
    <v-navigation-drawer v-model="drawer" app clipped>
      <v-list dense>
        <router-link to="/">
          <v-list-item link>
            <v-list-item-action>
              <v-icon>mdi-home</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Home</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>

        <router-link to="/events">
          <v-list-item link>
            <v-list-item-action>
              <v-icon>mdi-calendar</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Events</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>

        <router-link to="/users">
          <v-list-item link>
            <v-list-item-action>
              <v-icon>mdi-account</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Users</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app clipped-left>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>SIMMEDIA</v-toolbar-title>
    </v-app-bar>

    <v-content>
      <v-container class="fill-height" fluid>
        <transition name="fade" mode="out-in">
          <router-view></router-view>
        </transition>
      </v-container>
    </v-content>

    <v-footer app>
      <span>&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
import Users from "./views/Users";

export default {
  name: "App",

  components: {
    Users
  },

  created() {
    this.$vuetify.theme.dark = true;
  },

  data: () => ({
    props: [
      {
        // source: String
      }
    ],

    drawer: null
  })
};
</script>

<style>
a {
  text-decoration: none;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>