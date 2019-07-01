import Vue from "vue";
import Vuex from "vuex";

const { axios } = Vue;

Vue.use(Vuex);

//TODO: enable persist state with local storage

export default new Vuex.Store({
  state: {
    list: [],
    types: [
      "education",
      "recreational",
      "social",
      "diy",
      "charity",
      "cooking",
      "relaxation",
      "music",
      "busywork"
    ]
  },
  mutations: {
    save(state, activity) {
      const exists =
        state.list.filter(a => {
          return a.key === activity.key;
        }).length !== 0;

      if (!exists) {
        state.list.push(activity);
      } else {
        alert("This activity is already saved!");
      }
    },

    remove(state, id) {
      state.list = state.list.filter(a => {
        return a.key !== id;
      });
    },

    clear(state) {
      state.list = [];
    }
  },
  actions: {
    // eslint-disable-next-line
    saveActivity(context, activity) {
      context.commit("save", activity);
    },

    loadActivity() {
      return axios.get("/activity");
    },

    removeActivity(context, id) {
      context.commit("remove", id);
    },

    loadAllActivities() {},

    clearAllActivities(context) {
      context.commit("clear");
    }
  }
});
