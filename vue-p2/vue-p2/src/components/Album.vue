<template>
  <h1>{{ title }}</h1>
  <p>{{ author }}</p>
</template>
<script>
export default {
  props: ["title", "author"],
};
</script>
