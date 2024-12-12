<template>
  <h1>{{ title }}</h1>
  <span @click="() => renderLink('albums', albumName)">{{ albumName }}</span>
  <p @click="() => renderLink('bands', band)">{{ band }}</p>
</template>
<script>
export default {
  props: ["title", "albumName", "band", "renderLink"],
};
</script>
<style scoped>
span {
  opacity: 0.7;
  cursor: pointer;
}
p {
  margin: 10px 0;
  font-weight: bolder;
  color: rgba(148, 90, 255, 0.8);
  cursor: pointer;
  font-size: 17px;
}
</style>
