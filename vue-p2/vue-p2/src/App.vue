<template>
  <div class="input-container">
    <div>
      <input type="text" name="" id="" v-model="search" />
      <select name="" id="" v-model="category">
        <option v-for="option in options" :value="option.value">
          {{ option.label }}
        </option>
      </select>
      <button @click="() => fetchData(category, search)">Search</button>
    </div>
  </div>
  <ul class="results-container" v-if="searchItems.length > 0">
    <li v-for="(item, i) in searchItems" :key="i">
      <song
        v-if="selectedComponent == 'songs'"
        :title="item.title"
        :album-name="item.album"
        :band="item.author"
        :render-link="(category, text) => renderLinks(category, text)"
      ></song>
      <band
        v-if="selectedComponent == 'bands'"
        :name="item.name"
        :genres="item.genres"
        :render-link="(category, text) => renderLinks(category, text)"
      ></band>
      <album
        v-if="selectedComponent == 'albums'"
        :title="item.title"
        :author="item.author"
        :render-link="(category, text) => renderLinks(category, text)"
      ></album>
    </li>
  </ul>
</template>
<script>
import Song from "./components/Song.vue";
import Band from "./components/Band.vue";
import Album from "./components/Album.vue";

import "./assets/main.css";
export default {
  components: {
    Song,
    Band,
    Album,
  },
  data() {
    return {
      options: [
        { label: "Song", value: "songs" },
        { label: "Band", value: "bands" },
        { label: "Album", value: "albums" },
      ],
      searchItems: [],
      search: "",
      category: "songs",
      selectedComponent: "",
    };
  },
  methods: {
    filterSearch(arr, prop, text) {
      this.searchItems = arr.filter(
        (item) => item[prop].toLowerCase() == text.toLowerCase()
      );
    },
    async fetchData(category, text) {
      const ref = await fetch(category + ".json");
      const data = await ref.json();
      switch (category) {
        case "bands":
          this.filterSearch(data, "name", text);
          break;
        default:
          this.filterSearch(data, "title", text);
          if (this.searchItems.length == 0) {
            this.filterSearch(data, "author", text);
          }
          break;
      }
      text = "";
      this.selectedComponent = this.category;
    },
    async renderLinks(cat, text) {
      const res = await fetch(cat + ".json");
      const data = await res.json();

      switch (cat) {
        case "bands":
          this.filterSearch(data, "name", text);
          break;
        default:
          if (this.selectedComponent == "bands") {
            this.filterSearch(data, "author", text);
            break;
          }

          this.filterSearch(data, "title", text);
          break;
      }

      this.selectedComponent = cat;
    },
  },
};
</script>

<style scoped>
.input-container {
  display: flex;
  justify-content: center;
  margin: 100px 0;
}

.results-container {
  display: grid;
  grid-template-columns: 1fr;
  place-items: center;
  color: whitesmoke;
  list-style-type: none;
}

li {
  min-width: 700px;
  background: linear-gradient(140deg, var(--bg-dark) 0%, var(--bg-light) 100%);
  margin: 20px 0;
  padding: 20px;
  border: 2px dashed rgb(89, 0, 255);
  box-shadow: 0 0 5px rgba(89, 0, 255, 0.493);
}
</style>
