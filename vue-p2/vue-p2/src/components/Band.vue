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
