<template>
  <div class="tab-content">
    <template></template>
    <table class="table is-hoverable is-fullwidth">
      <thead>
        <th>#</th>
        <th>Activity</th>
        <th>Participants</th>
        <th>Budget</th>
        <th></th>
      </thead>
      <tbody>
        <tr v-for="(activity, index) in list" :key="activity.key">
          <td>{{ index + 1 }}</td>
          <td>{{ activity.activity }}</td>
          <td>{{ activity.participants }}</td>
          <td>{{ activity.price }}</td>
          <td>
            <a class="button is-square" @click="remove(activity.key)">
              <span class="icon is-medium">
                <i class="fa fa-check-circle"></i>
              </span>
            </a>
          </td>
        </tr>
      </tbody>
    </table>

    <br />

    <div class="field">
      <p class="control">
        <button class="button is-fullwidth is-danger">
          <span class="icon">
            <i class="fa fa-ban"></i>
          </span>
          <span>
            Clear All
          </span>
        </button>
      </p>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "ActivityList",

  data() {
    return {};
  },

  computed: {
    ...mapState(["list"])
  },

  watch: {},

  created() {},

  methods: {
    ...mapActions(["clearActivities", "removeActivity"]),

    clear() {
      this.clearActivities();
    },

    remove(id) {
      this.removeActivity(id);
    }
  }
};
</script>

<style lang="scss"></style>
