<template>
  <div class="container" v-if="page">
    <h1>{{ page.pageTitle }}</h1>
    <p>{{ page.content }}</p>
  </div>
</template>
<script>
export default {
  props: ["index"],
  created() {
    this.page = this.$pages.getSinglePage(this.index);

    // this.$watch(
    //   () => this.$route.params,
    //   (newParams, prevParams) => {
    //     this.page = this.$pages.getSinglePage(newParams.index);
    //   }
    // );
  },
  data() {
    return {
      page: null,
    };
  },
  watch: {
    index(newIndex, oldIndex) {
      this.page = this.$pages.getSinglePage(newIndex);
    },
  },
};
</script>
