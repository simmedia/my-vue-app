<template>
  <div class="hello">
    <v-container>
      <v-row align="center">
        <v-col v-for="user in users" :key="user.id">
          <v-card class="mx-auto" max-width="350" tile>
            <v-img
              height="100%"
              src="https://cdn.vuetifyjs.com/images/cards/server-room.jpg"
            >
              <v-row align="end" class="fill-height">
                <v-col align-self="start" class="pa-0" cols="12"> </v-col>
                <v-col class="py-0">
                  <v-list-item color="rgba(0, 0, 0, .4)" dark>
                    <v-list-item-content>
                      <v-list-item-title class="title">
                        <router-link :to="{ name: 'User', params: { user } }">
                          {{ user.name }}
                        </router-link>
                      </v-list-item-title>
                      <v-list-item-subtitle>{{
                        user.desc
                      }}</v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </v-col>
              </v-row>
            </v-img>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Users",
  data() {
    return {};
  },
  computed: {
    ...mapState(["users"])
  }
};
</script>
