<template>
  <h1>{{ name }}</h1>
  <ul>
    <li v-for="genre in genres">{{ genre }}</li>
  </ul>
</template>
<script>
export default {
  props: ["name", "genres"],
};
</script>
