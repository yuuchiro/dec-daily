<template>
  <div>
    <button @click.prevent="() => delBook(title, cat)">X</button>
    <span :class="readCheck">{{ title }}</span>
    <input
      type="checkbox"
      @click="() => readToggle(title, cat)"
      :checked="this.read"
    />
  </div>
</template>
<script>
export default {
  props: ["title", "cat", "read", "delBook", "readToggle"],
  computed: {
    readCheck() {
      return {
        readBook: this.read,
      };
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
