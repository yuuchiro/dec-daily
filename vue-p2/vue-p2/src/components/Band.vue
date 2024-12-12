<template>
  <h1 @click="() => renderLink('songs', name)">{{ name }}</h1>
  <ul>
    <li v-for="genre in genres">{{ genre }}</li>
  </ul>
</template>
<script>
export default {
  props: ["name", "genres", "renderLink"],
};
</script>
<style scoped>
ul {
  list-style-type: disc;
  padding: 15px 30px;
  opacity: 0.8;
}

h1 {
  color: rgba(148, 90, 255, 0.8);
  cursor: pointer;
}
</style>
