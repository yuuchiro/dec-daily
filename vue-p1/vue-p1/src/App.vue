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
      :read-toggle="(title, cat) => readToggle(title, cat)"
    ></category>
    <category
      :category-name="'Fantasy'"
      :books="books.fantasy"
      :del-book="(title, cat) => deleteBook(title, cat)"
      :read-toggle="(title, cat) => readToggle(title, cat)"
    ></category>
    <category
      :category-name="'Historical'"
      :books="books.historical"
      :del-book="(title, cat) => deleteBook(title, cat)"
      :read-toggle="(title, cat) => readToggle(title, cat)"
    ></category>
  </div>

  <button @click.prevent="clearRead">Clear read</button>
  <button>{{ buttonText }}</button>
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
        scifi: [{ title: "Star wars", read: false }],
        fantasy: [
          { title: "Hobbit", read: true },
          { title: "The Witcher", read: false },
        ],
        historical: [{ title: "The Witches", read: false }],
      },
      newBook: "",
      checkedCategory: "scifi",
      buttonText: "Hide read",
    };
  },
  methods: {
    addBook() {
      this.books[this.checkedCategory].push({
        title: this.newBook,
        read: false,
      });
      this.newBook = "";
    },
    deleteBook(title, cat) {
      this.books[cat].forEach((book, i) => {
        if (book.title == title) this.books[cat].splice(i, 1);
      });
    },
    readToggle(title, cat) {
      this.books[cat].forEach((book) => {
        if (book.title == title) book.read = !book.read;
      });
    },
    clearRead() {
      for (let cat in this.books) {
        this.books[cat] = this.books[cat].filter((book) => !book.read);
      }
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
