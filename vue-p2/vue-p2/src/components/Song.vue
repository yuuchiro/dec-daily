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
