<template>
  <div class="tab-content">
    <div class="columns">
      <div class="column is-6">
        <h2 class="title is-4">You should:</h2>

        <div class="field">
          <div class="control">
            <textarea
              v-model="activity.activity"
              class="textarea activity-textarea"
              placeholder="Activity Details"
            ></textarea>
          </div>
        </div>

        <br />

        <div class="field">
          <p class="control">
            <button class="button is-fullwidth is-danger" @click="save">
              <span class="icon">
                <i class="fa fa-save"></i>
              </span>
              <span>
                Save for Later
              </span>
            </button>
          </p>
        </div>
      </div>

      <div class="column is-6">
        <h2 class="title is-4">Activity details:</h2>

        <div class="field">
          <label class="label">Type</label>
          <div class="control">
            <div class="select is-fullwidth">
              <select v-model="activity.type">
                <option v-for="type in types" :key="type">{{ type }}</option>
              </select>
            </div>
          </div>
        </div>

        <div class="field">
          <label class="label">Participants</label>
          <div class="control">
            <input
              v-model="activity.participants"
              class="input"
              type="number"
              value="1"
            />
          </div>
        </div>

        <div class="field">
          <label class="label">Budget</label>
          <div class="control">
            <input
              v-model="activity.price"
              class="slider is-fullwidth is-circle"
              step="0.1"
              min="0"
              max="1"
              value="0"
              type="range"
            />
            <div class="help-text">
              <span>cheap</span>
              <span class="is-pulled-right">expensive</span>
            </div>
          </div>
        </div>

        <br />

        <div class="field">
          <p class="control">
            <button class="button is-fullwidth is-info" @click="load">
              <span class="icon">
                <i class="fa fa-magic"></i>
              </span>
              <span>
                Hit me with a new One!
              </span>
            </button>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "NewActivity",

  data() {
    return {
      activity: {}
    };
  },

  computed: { ...mapState(["types"]) },

  created() {
    this.load();
  },

  methods: {
    ...mapActions(["saveActivity", "loadActivity"]),

    load() {
      this.loadActivity().then(res => {
        this.activity = res.data;
      });
    },

    save() {
      this.saveActivity(this.activity);
    }
  }
};
</script>

<style lang="scss" scoped>
.activity-textarea {
  height: 239px;
  max-height: 239px;
  overflow-y: auto;
  font-size: 2em;
  font-weight: bold;
}
</style>
