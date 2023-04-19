<template>
  <!-- <Navbar /> -->
  <router-view />
</template>
<script>
import Navbar from './components/Navbar.vue';
export default {
  components: {
    Navbar,
  },
}
</script>
<style lang="scss">
@import "./assets/all.scss";
// @import "~bootstrap/scss/bootstrap";
</style>
