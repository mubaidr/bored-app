<template>
  <div>
    <Transition name="fade">
      <div v-show="isLoading" class="custom-loader">
        <p>
          <i class="fa fa-spinner fa-spin"></i>
          <br />
          <span>Loading, please wait...</span>
        </p>
      </div>
    </Transition>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "AppLoader",

  computed: {
    ...mapState(["isLoading"])
  }
};
</script>

<style lang="scss" scoped>
.custom-loader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.75);
  text-align: center;

  p {
    position: absolute;
    top: 25%;
    left: 45%;
    color: white;

    .fa-spinner {
      font-size: 2em;
    }
  }
}
</style>
