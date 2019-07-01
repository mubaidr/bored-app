<template>
  <div>
    <app-header />
    <div id="app" class="container">
      <Transition mode="out-in" name="slide-up">
        <router-view />
      </Transition>
    </div>
    <app-loader />
  </div>
</template>
<script>
import AppHeader from "./components/header";
import AppLoader from "./components/Loader";

export default {
  components: { AppHeader, AppLoader }
};
</script>

<style lang="scss"></style>
