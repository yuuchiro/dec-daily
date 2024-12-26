<template>
  <nav
    id="nav"
    :class="[`bg-${theme}`, `navbar-${theme}`, 'navbar', 'navbar-expand-lg']"
  >
    <div class="container-fluid">
      <a class="navbar-brand" href="#">My Vue</a>

      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <navbar-link
          v-for="(page, index) in publishedPages"
          :page="page"
          :index="index"
        >
        </navbar-link>

        <li>
          <router-link
            to="/pages/create"
            class="nav-link"
            aria-current="page"
            active-class="active"
            >Create Page
          </router-link>
        </li>
      </ul>
      <form class="d-flex">
        <button @click.prevent="changeTheme" class="btn btn-primary">
          Toggle
        </button>
      </form>
    </div>
  </nav>
</template>

<script>
import NavbarLink from "./NavbarLink.vue";
export default {
  components: {
    NavbarLink,
  },
  data() {
    return {
      theme: "dark",
      pages: "",
    };
  },
  created() {
    this.getThemeSetting();

    this.pages = this.$pages.getAllPages();
  },
  computed: {
    publishedPages() {
      return this.pages.filter((page) => page.published);
    },
  },
  methods: {
    changeTheme() {
      if (this.theme == "light") this.theme = "dark";
      else this.theme = "light";
      this.storeThemeSetting();
    },
    storeThemeSetting() {
      localStorage.setItem("theme", this.theme);
    },
    getThemeSetting() {
      const theme = localStorage.getItem("theme");
      if (theme) {
        this.theme = theme;
      }
    },
  },
};
</script>
