<template>
  <RouterView></RouterView>
</template>
<script>
import PostShortcut from "@/components/PostShortcut.vue";
export default {
  components: { PostShortcut },
  created() {
    this.postList = this.$posts.getAllPosts();
  },
  data() {
    return {
      postList: null,
    };
  },
};
</script>
