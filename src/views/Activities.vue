<template>
  <div class="columns">
    <div class="column is-offset-2 is-8">
      <!-- <Transition mode="out-in" name="slide-up"> -->
      <new-activity />
      <activity-list />
      <!-- </Transition> -->
    </div>
  </div>
</template>

<script>
import ActivityList from "./activities/List.vue";
import NewActivity from "./activities/New.vue";

export default {
  components: { NewActivity, ActivityList },

  data() {
    return {};
  }
};
</script>

<style lang="scss"></style>
