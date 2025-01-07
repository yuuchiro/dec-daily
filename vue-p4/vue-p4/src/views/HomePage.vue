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
    this.fetchData();
  },
  data() {
    return {
      postList: [],
    };
  },
  methods: {
    async fetchData() {
      const data = await fetch("./posts.json");
      const posts = await data.json();
      this.postList = posts;
    },
  },
};
</script>
