<template>
  <div>
    <button @click.prevent="deleteBook">X</button>
    <span :class="readCheck">{{ title }}</span>
    <input type="checkbox" @click="cbxClick" :checked="this.read" />
  </div>
</template>
<script>
export default {
  props: [
    "title",
    "cat",
    "read",
    "delBook",
    "readToggle",
    "selectOp",
    "checkCount",
    "changeSelect",
  ],
  computed: {
    readCheck() {
      return {
        readBook: this.read,
      };
    },
  },
  methods: {
    cbxClick() {
      this.readToggle(this.title, this.cat);
      this.checkCountF();
    },
    deleteBook() {
      this.delBook(this.title, this.cat);
      this.checkCountF();
    },
    checkCountF() {
      if (this.checkCount(this.cat, this.selectOp.txt, this.selectOp.op)) {
        this.changeSelect();
      }
    },
  },
};
</script>

<style scoped>
@import "./src/assets/main.css";
.readBook {
  text-decoration: line-through;
}

button {
  border: none;
  background-color: rgb(148, 148, 228);
  cursor: pointer;
  margin-right: 10px;
  padding: 1px 5px;
  color: white;
}
input[type="checkbox"] {
  cursor: pointer;
  margin-left: 10px;
}
</style>
