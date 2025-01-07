<template>
  <h1>{{ post.title }}</h1>
</template>
<script>
export default {
  created() {
    this.fetchData();
  },
  data() {
    return {
      post: {},
    };
  },
  methods: {
    async fetchData() {
      const data = await fetch("./posts.json");
      const posts = await data.json();
      posts.forEach((post) => {
        if (post.id == this.$route.params.postId) this.post = post;
      });
    },
  },
};
</script>
