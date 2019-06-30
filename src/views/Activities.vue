<template>
  <div>
    Activities

    <new-activity />
    <activity-list />
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
