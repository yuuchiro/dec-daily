<template>
  <h1>{{ title }}</h1>
  <span>{{ albumName }}</span>
  <p>{{ band }}</p>
</template>
<script>
export default {
  props: ["title", "albumName", "band"],
};
</script>
