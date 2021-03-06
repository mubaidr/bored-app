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
      state.list.push(activity);
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
      return new Promise((resolve, reject) => {
        const exists =
          context.state.list.filter(a => {
            return a.key === activity.key;
          }).length !== 0;

        if (!exists) {
          context.commit("save", activity);

          resolve();
        } else {
          reject(new Error("This activity is already saved!"));
        }
      });
    },

    loadActivity(context, details) {
      context.commit("isLoading", true);

      if (details.type || details.price || details.participants) {
        return axios
          .get(
            `/activity?type=${details.type}&price=${
              details.price
            }&participants=${details.participants}`
          )
          .then(res => {
            context.commit("isLoading", false);
            return res;
          });
      } else {
        return axios.get(`/activity`).then(res => {
          context.commit("isLoading", false);
          return res;
        });
      }
    },

    removeActivity(context, id) {
      context.commit("remove", id);
    },

    clearActivities(context) {
      context.commit("clear");
    }
  }
});
