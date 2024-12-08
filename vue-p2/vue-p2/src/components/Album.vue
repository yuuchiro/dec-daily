<template>
  <h1>{{ title }}</h1>
  <p @click="() => renderLink('bands', author)">{{ author }}</p>
</template>
<script>
export default {
  props: ["title", "author", "renderLink"],
};
</script>
