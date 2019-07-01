<template>
  <div>
    <app-header />
    <div id="app" class="container">
      <router-view />
    </div>
  </div>
</template>
<script>
import AppHeader from "./components/header";

export default {
  components: { AppHeader }
};
</script>

<style lang="scss"></style>
