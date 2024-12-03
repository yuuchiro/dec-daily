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
      :books="showHide['scifi']"
      :del-book="(title, cat) => deleteBook(title, cat)"
      :read-toggle="(title, cat) => readToggle(title, cat)"
      :select-all="(cat, op) => selectAll(cat, op)"
      :check-count="(cat, txt, op) => checkCount(cat, txt, op)"
    ></category>
    <category
      :category-name="'Fantasy'"
      :books="showHide['fantasy']"
      :del-book="(title, cat) => deleteBook(title, cat)"
      :read-toggle="(title, cat) => readToggle(title, cat)"
      :select-all="(cat, op) => selectAll(cat, op)"
      :check-count="(cat, txt, op) => checkCount(cat, txt, op)"
    ></category>
    <category
      :category-name="'Historical'"
      :books="showHide['historical']"
      :del-book="(title, cat) => deleteBook(title, cat)"
      :read-toggle="(title, cat) => readToggle(title, cat)"
      :select-all="(cat, op) => selectAll(cat, op)"
      :check-count="(cat, txt, op) => checkCount(cat, txt, op)"
    ></category>
  </div>

  <button @click.prevent="clearRead">Clear read</button>
  <button @click.prevent="buttonTextChange">{{ buttonText }}</button>
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
      filtratedBooks: {
        scifi: [],
        fantasy: [],
        historical: [],
      },
      newBook: "",
      checkedCategory: "scifi",
      buttonText: "Hide read",
      selectionFlag: true,
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
    buttonTextChange() {
      if (this.buttonText == "Hide read") this.buttonText = "Show all";
      else this.buttonText = "Hide read";
    },
    selectAll(cat, op) {
      switch (this.buttonText) {
        case "Hide read":
          this.books[cat].forEach((book) => (book.read = op));
          break;
        case "Show all":
          this.filtratedBooks[cat].forEach((book) => (book.read = op));
          break;
      }
    },
    checkCount(cat, txt, op) {
      console.log(cat + "\n" + txt + "\n" + op);
      switch (txt) {
        case "Select all":
          this.books[cat].forEach((book) => {
            if (!book.read) this.selectionFlag = false;
            else this.selectionFlag = true;
          });
          if (!this.selectionFlag) return false;
          return true;
        case "Deselect all":
          this.books[cat].forEach((book) => {
            if (!book.read) this.selectionFlag = true;
            else this.selectionFlag = false;
          });
          if (this.selectionFlag) return true;
          return false;
      }
    },
  },
  computed: {
    showHide() {
      if (this.buttonText == "Hide read") return this.books;
      else {
        for (let cat in this.books) {
          this.filtratedBooks[cat] = this.books[cat].filter(
            (book) => !book.read
          );
        }
        return this.filtratedBooks;
      }
    },
  },
};
</script>

<style scoped>
@import "./src/assets/main.css";

button {
  margin-right: 10px;
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
