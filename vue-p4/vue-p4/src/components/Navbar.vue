<template>
  <nav>
    <a href="" class="selected"
      ><ion-icon :name="names.home.selected"></ion-icon>Home page</a
    >
    <a href=""><ion-icon :name="names.plus.normal"></ion-icon>Add new post</a>
    <a href=""><ion-icon :name="names.eye.normal"></ion-icon>See all posts</a>
  </nav>
</template>
<script>
export default {
  data() {
    return {
      names: {
        home: {
          selected: "home",
          normal: "home-outline",
        },
        plus: {
          selected: "add-circle",
          normal: "add-circle-outline",
        },
        eye: {
          selected: "eye",
          normal: "eye-outline",
        },
      },
    };
  },
};
</script>
<style scoped>
nav {
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: rgb(92, 80, 255);
  padding: 15px 0;
}
a {
  padding: 0 40px;
  text-decoration: none;
  color: white;
  display: flex;
  align-items: center;
  transition: scale 300ms;
}
a:hover {
  scale: 1.1;
}

ion-icon {
  font-size: 20px;
  margin: 0 10px;
}

.selected {
  font-weight: bold;
}
</style>
