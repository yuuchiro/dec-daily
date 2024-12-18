<template>
  <h1 @click="() => renderLink('songs', title)">{{ title }}</h1>
  <p @click="() => renderLink('bands', author)">{{ author }}</p>
</template>
<script>
export default {
  props: ["title", "author", "renderLink"],
};
</script>
<style scoped>
p {
  color: rgba(148, 90, 255, 0.8);
  font-weight: bolder;
  margin: 10px 0;
  cursor: pointer;
}

h1 {
  cursor: pointer;
}
</style>
