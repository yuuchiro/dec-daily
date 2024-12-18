<template>
  <div class="input-container">
    <div>
      <input
        type="text"
        class="sInput inp"
        v-model="search"
        placeholder="Type something..."
        @keydown="(e) => e.key == 'Enter' && fetchData(category, search)"
      />
      <select class="sInput sel" v-model="category">
        <option v-for="option in options" :value="option.value">
          {{ option.label }}
        </option>
      </select>
      <button class="sInput" @click="() => fetchData(category, search)">
        Search
      </button>
    </div>
  </div>

  <ul class="results-container" v-if="searchItems.length > 0">
    <li v-for="(item, i) in searchItems" :key="i">
      <song
        v-if="selectedComponent == 'songs'"
        :title="item.title"
        :album-name="item.album"
        :band="item.author"
        :render-link="renderLinks"
      ></song>
      <band
        v-if="selectedComponent == 'bands'"
        :name="item.name"
        :genres="item.genres"
        :render-link="renderLinks"
      ></band>
      <album
        v-if="selectedComponent == 'albums'"
        :title="item.title"
        :author="item.author"
        :render-link="renderLinks"
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
          if (this.searchItems == 0) {
            data.forEach((el) => {
              el.genres.forEach((genre) => {
                if (genre.toLowerCase() == this.search)
                  this.searchItems.push(el);
              });
            });
          }
          break;
        default:
          this.filterSearch(data, "title", text);
          if (this.searchItems.length == 0) {
            this.filterSearch(data, "author", text);
          }
          if (this.searchItems.length == 0 && category == "songs") {
            this.filterSearch(data, "album", text);
          }
          break;
      }

      text = "";
      this.search = "";
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

          if (this.selectedComponent == "albums") {
            this.filterSearch(data, "album", text);
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
  width: 700px;
  background: linear-gradient(140deg, var(--bg-dark) 0%, var(--bg-light) 100%);
  margin: 20px 0;
  padding: 20px;
  border: 2px dashed rgb(89, 0, 255);
  box-shadow: 0 0 5px rgba(89, 0, 255, 0.493);
}

.sInput {
  background: linear-gradient(140deg, var(--bg-dark) 0%, var(--bg-light) 100%);
  border: 2px solid rgb(37, 37, 37);
  outline: none;
  font-size: 20px;
  padding: 7px 40px;
  margin: 0 2px;
  transition: 400ms;
}

.sInput:hover {
  box-shadow: 0 0 10px rgba(73, 73, 73, 0.281);
}

.sel {
  padding: 6px 20px;
  color: rgba(246, 234, 255, 0.7);
}

option {
  background-color: var(--bg-light);
}

.inp {
  width: 500px;
  border-radius: 50px 0 0 50px;
  color: rgb(89, 0, 255);
  font-weight: bold;
}

.inp::placeholder {
  color: rgba(148, 90, 255, 0.6);
  font-weight: bold;
}

button {
  border-radius: 0 50px 50px 0;
  cursor: pointer;
  color: rgba(246, 234, 255, 0.7);
  transition: 200ms;
}
button:hover {
  color: rgba(246, 234, 255, 1);
}
</style>
