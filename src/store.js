import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
const { axios } = Vue;

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    isLoading: false,
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
    },

    isLoading(state, bool) {
      state.isLoading = bool;
    }
  },
  actions: {
    // eslint-disable-next-line
    saveActivity(context, activity) {
      context.commit("save", activity);
    },

    loadActivity(context) {
      context.commit("isLoading", true);
      return axios.get("/activity").then(res => {
        context.commit("isLoading", false);

        return res;
      });
    },

    removeActivity(context, id) {
      context.commit("remove", id);
    },

    clearAllActivities(context) {
      context.commit("clear");
    }
  }
});
