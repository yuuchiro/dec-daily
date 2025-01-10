<template>
  <div class="post-container">
    <post-shortcut v-for="post in postList" :post-info="post"></post-shortcut>
  </div>
</template>
<script>
import PostShortcut from "@/components/PostShortcut.vue";
export default {
  components: { PostShortcut },
  created() {
    this.postList = this.$posts.getAllPosts();
    console.log(this.postList);
  },
  data() {
    return {
      postList: null,
    };
  },
};
</script>
