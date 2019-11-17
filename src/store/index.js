import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: [
      {
        id: 1,
        name: "Stefan Simic",
        age: 27,
        desc: "Web Developer",
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
  },
  mutations: {},
  actions: {},
  modules: {}
});
