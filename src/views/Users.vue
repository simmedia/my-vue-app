<template>
  <div class="hello">
    <v-container>
      <v-row>
        <v-col  v-for="user in users" :key="user.id">
          <v-card class="mx-auto" max-width="400">
            <v-img
              class="white--text align-end"
              height="200px"
              src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
            >
              <v-card-title>{{ user.name }}</v-card-title>
            </v-img>

            <v-card-subtitle class="pb-0">{{ user.age }}</v-card-subtitle>

            <v-card-text class="text--primary">
              <div>{{ user.desc }}</div>
            </v-card-text>

            <v-card-actions>
              <router-link :to="{ name: 'User', params: { user } }">
                <v-btn color="orange" text>View</v-btn>
              </router-link>

              <v-btn color="orange" text>Explore</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Users",
  data() {
    return {
      users: [
        {
          id: 1,
          name: "Stefan Simic",
          age: 27,
          desc: "Front End Developer",
          city: "Leskovac"
        },
        {
          id: 2,
          name: "Milica Gasevic",
          age: 26,
          desc: "Java Developer",
          city: "Leskovac"
        }
      ]
    };
  }
};
</script>