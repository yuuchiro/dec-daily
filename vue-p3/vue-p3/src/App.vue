<template>
  <form action="">
    <div class="formDiv">
      <label for="userName">Username</label>
      <input type="text" name="userName" id="userName" />
    </div>

    <div class="formDiv">
      <label for="userEmail">Email</label>
      <input type="email" name="userEmail" id="userEmail" />
    </div>

    <div class="formDiv">
      <label for="password">Password</label>
      <input type="password" name="password" id="password" />
    </div>

    <div class="formDiv">
      <label for="repeatPass">Repeat password</label>
      <input type="password" name="repeatPass" id="repeatPass" />
    </div>

    <div class="formDiv">
      <button class="registerButton">Add user</button>
    </div>
  </form>

  <button class="showUsers">Show users</button>
</template>
<script></script>
<style scoped>
form {
  width: 600px;
  margin: 0 auto;
}

label {
  display: block;
  padding: 10px;
}

input {
  width: 100%;
  font-size: 15px;
  padding: 7px 20px;
  border-radius: 15px;
  border: 1px solid grey;
  outline: none;
}

.formDiv {
  margin: 20px 0;
}

.registerButton {
  width: 100%;
  padding: 13px 0;
  background-color: green;
  border: none;
  border-radius: 15px;
  font-weight: bold;
  color: white;
  cursor: pointer;
}

.showUsers {
  width: 300px;
  position: absolute;
  top: 70%;
  left: 50%;
  transform: translate(-50%, -50%);

  border: none;
  background-color: purple;
  text-align: center;
  padding: 10px 0;
  border-radius: 50px;
  font-weight: bolder;
  color: plum;
  cursor: pointer;
}
</style>
