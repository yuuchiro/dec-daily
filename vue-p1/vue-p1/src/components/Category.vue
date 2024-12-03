<template>
  <fieldset>
    <legend>{{ categoryName }}</legend>
    <button @click.prevent="selectDeselect">
      {{ selectText }}
    </button>
    <ul>
      <li v-for="(book, i) in books" :key="i">
        <book
          :title="book.title"
          :cat="categoryName.toLowerCase()"
          :read="book.read"
          :del-book="(title, cat) => delBook(title, cat)"
          :read-toggle="(title, cat) => readToggle(title, cat)"
          :select-op="{ txt: selectText, op: op }"
          :check-count="(cat, txt, op) => checkCount(cat, txt, op)"
          :change-select="() => changeSelect()"
        ></book>
      </li>
    </ul>
  </fieldset>
</template>
<script>
import Book from "./Book.vue";
export default {
  components: {
    Book,
  },
  data() {
    return {
      selectText: "Select all",
      op: true,
    };
  },
  props: [
    "categoryName",
    "books",
    "delBook",
    "readToggle",
    "selectAll",
    "checkCount",
  ],
  methods: {
    selectDeselect() {
      this.selectAll(this.categoryName.toLowerCase(), this.op);
      this.changeSelect();
    },
    changeSelect() {
      this.op = !this.op;
      if (this.selectText == "Select all") this.selectText = "Deselect all";
      else this.selectText = "Select all";
    },
  },
};
</script>

<style scoped>
@import "./src/assets/main.css";
fieldset {
  display: inline;
  min-height: 200px;
  min-width: 300px;
  padding: 20px;
  margin: 10px;
}

legend {
  padding: 0 10px;
  font-weight: bold;
  color: rgb(87, 87, 87);
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin: 5px 0;
}

button {
  margin-bottom: 10px;
  border: 2px solid rgb(192, 128, 168);
  background-color: rgb(192, 128, 168);
  cursor: pointer;
  color: white;
  font-weight: bold;
  padding: 0 5px;
}
</style>
