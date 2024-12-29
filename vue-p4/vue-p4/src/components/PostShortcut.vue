<template>
  <div class="container">
    <span>author_name</span>
    <h1>Lorem ipsum dolor sit amet consectetur.</h1>
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo
      doloribus culpa rem inventore quae sit tenetur quia odio saepe ex...
    </p>
  </div>
</template>
<style scoped>
.container {
  padding: 30px;
  background-color: rgb(119, 110, 255);
  box-shadow: 10px 10px rgb(199, 198, 255);
  max-width: 800px;
  cursor: pointer;
  transition: scale 300ms;
}
.container:hover {
  scale: 1.05;
}

.container > span {
  padding: 0 10px;
  font-weight: bold;
  color: rgb(211, 206, 255);
}

.container > h1 {
  color: white;
  margin: 0 0 20px 0;
}

.container > p {
  color: rgb(225, 224, 255);
  padding-left: 20px;
  border-left: 5px solid rgb(143, 141, 255);
}
</style>
