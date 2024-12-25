<template>
  <navbar :pages="pages" :active-page="activePage"></navbar>

  <router-view></router-view>
  <!-- <page-view v-if="pages.length > 0" :page="pages[activePage]"></page-view>

  <create-page @page-created="pageCreated"></create-page> -->
</template>

<script>
import Navbar from "./components/Navbar.vue";
import PageView from "./components/PageView.vue";
import CreatePage from "./components/CreatePage.vue";

export default {
  components: {
    Navbar,
    PageView,
    CreatePage,
  },
  data() {
    return {
      activePage: 0,
      pages: [],
    };
  },
  created() {
    this.getPages();
    this.$bus.$on("navbarLinkActivated", (index) => {
      this.activePage = index;
    });
  },
  methods: {
    async getPages() {
      let res = await fetch("pages.json");
      let data = await res.json();

      this.pages = data;
    },
    pageCreated(pageObj) {
      this.pages.push(pageObj);
    },
  },
};
</script>
