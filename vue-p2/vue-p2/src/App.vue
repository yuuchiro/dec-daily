<template>
  <div>
    <input type="text" name="" id="" v-model="search" />
    <select name="" id="" v-model="category">
      <option v-for="option in options" :value="option.value">
        {{ option.label }}
      </option>
    </select>
    <button @click="() => fetchData(category)">Search</button>
  </div>
  <ul class="results-container" v-if="searchItems.length > 0">
    <li v-for="(item, i) in searchItems" :key="i">
      <song
        v-if="selectedComponent == 'songs'"
        :title="item.title"
        :album-name="item.album"
        :band="item.author"
      ></song>
      <band
        v-if="selectedComponent == 'bands'"
        :name="item.name"
        :genres="item.genres"
      ></band>
      <album
        v-if="selectedComponent == 'albums'"
        :title="item.title"
        :author="item.author"
      ></album>
    </li>
  </ul>
</template>
<script>
import Song from "./components/Song.vue";
import Band from "./components/Band.vue";
import Album from "./components/Album.vue";
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
      category: "",
      selectedComponent: "",
    };
  },
  methods: {
    async fetchData(category) {
      const ref = await fetch(category + ".json");
      const data = await ref.json();
      switch (category) {
        case "bands":
          this.searchItems = data.filter(
            (item) => item.name.toLowerCase() == this.search
          );
          break;
        default:
          this.searchItems = data.filter(
            (item) => item.title.toLowerCase() == this.search
          );
          if (this.searchItems.length == 0) {
            this.searchItems = data.filter(
              (item) => item.author.toLowerCase() == this.search
            );
          }
          break;
      }
      this.search = "";
      this.selectedComponent = this.category;
    },
  },
};
</script>
