<template>
  <fieldset>
    <legend>{{ categoryName }}</legend>
    <ul>
      <li v-for="(book, i) in books" :key="i">
        <book
          :title="book.title"
          :cat="categoryName.toLowerCase()"
          :read="book.read"
          :del-book="(title, cat) => delBook(title, cat)"
          :read-toggle="(title, cat) => readToggle(title, cat)"
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
  props: ["categoryName", "books", "delBook", "readToggle"],
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

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin: 5px 0;
}
</style>
