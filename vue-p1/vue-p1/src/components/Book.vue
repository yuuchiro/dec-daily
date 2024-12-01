<template>
  <div>
    <button @click.prevent="() => delBook(title, cat)">X</button>
    <span :class="{ read: read }">{{ title }}</span>
    <input type="checkbox" name="" id="" @click="readCheck" />
  </div>
</template>
<script>
export default {
  props: ["title", "cat", "delBook"],
  data() {
    return {
      read: false,
    };
  },
  methods: {
    readCheck() {
      this.read = !this.read;
    },
  },
};
</script>

<style scoped>
@import "./src/assets/main.css";
.read {
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
