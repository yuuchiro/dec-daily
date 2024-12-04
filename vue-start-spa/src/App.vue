<template>
  <navbar
    :pages="pages"
    :active-page="activePage"
    :nav-link-click="(index) => (activePage = index)"
  ></navbar>
  <page-view v-if="pages.length > 0" :page="pages[activePage]"></page-view>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import PageView from "./components/PageView.vue";

export default {
  components: {
    Navbar,
    PageView,
  },
  data() {
    return {
      activePage: 0,
      pages: [],
    };
  },
  created() {
    this.getPages();
  },
  methods: {
    async getPages() {
      let res = await fetch("pages.json");
      let data = await res.json();

      this.pages = data;
    },
  },
};
</script>
