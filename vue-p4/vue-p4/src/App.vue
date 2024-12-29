<template>
  <navbar></navbar>
  <div class="post-container">
    <post-shortcut></post-shortcut>
  </div>
</template>
<script>
import Navbar from "./components/Navbar.vue";
import PostShortcut from "./components/PostShortcut.vue";
export default {
  components: { Navbar, PostShortcut },
};
</script>
<style scoped>
.post-container {
  max-width: 1450px;
  margin: 50px auto;
  display: grid;
  grid-template-columns: 1fr;
  place-items: center;
}
</style>
