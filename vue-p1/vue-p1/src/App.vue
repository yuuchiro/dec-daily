<template>
  <form action="">
    <input type="text" name="" id="" v-model="newBook" />
    <button @click.prevent="addBook">Add</button>

    <label for="scifi">Sci-fi</label>
    <input
      type="radio"
      name="cat"
      id="scifi"
      @click="(e) => (checkedCategory = e.target.id)"
      checked
    />
    <label for="fantasy">Fantasy</label>
    <input
      type="radio"
      name="cat"
      id="fantasy"
      @click="(e) => (checkedCategory = e.target.id)"
    />
    <label for="historical">Historical</label>
    <input
      type="radio"
      name="cat"
      id="historical"
      @click="(e) => (checkedCategory = e.target.id)"
    />
  </form>

  <div class="cat-container">
    <category
      :category-name="'Scifi'"
      :books="books.scifi"
      :del-book="(title, cat) => deleteBook(title, cat)"
    ></category>
    <category
      :category-name="'Fantasy'"
      :books="books.fantasy"
      :del-book="(title, cat) => deleteBook(title, cat)"
    ></category>
    <category
      :category-name="'Historical'"
      :books="books.historical"
      :del-book="(title, cat) => deleteBook(title, cat)"
    ></category>
  </div>
</template>
<script>
import Category from "./components/Category.vue";

export default {
  components: {
    Category,
  },
  data() {
    return {
      books: {
        scifi: ["Star wars"],
        fantasy: ["Hobbit", "The Witcher"],
        historical: ["The Witches"],
      },
      newBook: "",
      checkedCategory: "scifi",
    };
  },
  methods: {
    addBook() {
      this.books[this.checkedCategory].push(this.newBook);
      this.newBook = "";
    },
    deleteBook(title, cat) {
      this.books[cat].splice(this.books[cat].indexOf(title), 1);
    },
  },
};
</script>

<style scoped>
@import "./src/assets/main.css";

button {
  margin: 0 10px 0 0;
  border: 2px solid rgb(128, 192, 171);
  background-color: rgb(128, 192, 171);
  cursor: pointer;
  color: white;
  font-weight: bold;
  padding: 0 5px;
}

label {
  margin-left: 20px;
  margin-right: 5px;
  cursor: pointer;
}

.cat-container {
  display: flex;
  align-items: center;
}
</style>
