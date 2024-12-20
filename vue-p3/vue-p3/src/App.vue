<template>
  <form action="">
    <div class="formDiv">
      <label for="userName">Username</label>
      <input type="text" name="userName" id="userName" v-model="name" />
    </div>

    <div class="formDiv">
      <label for="userEmail">Email</label>
      <input type="email" name="userEmail" id="userEmail" v-model="email" />
    </div>

    <div class="formDiv">
      <label for="password">Password</label>
      <input type="password" name="password" id="password" v-model="password" />
    </div>

    <div class="formDiv">
      <label for="repeatPass">Repeat password</label>
      <input
        type="password"
        name="repeatPass"
        id="repeatPass"
        v-model="repeatedPassword"
      />
      <p class="err" v-if="!samePassword">Password should be the same!</p>
    </div>

    <div class="formDiv">
      <button
        class="registerButton"
        @click.prevent="addUser"
        :disabled="filledForm"
      >
        Add user
      </button>
    </div>
  </form>

  <button class="showUsers">Show users</button>
</template>
<script>
export default {
  data() {
    return {
      users: [],

      name: "",
      email: "",
      password: "",
      repeatedPassword: "",

      samePassword: true,
    };
  },
  computed: {
    filledForm() {
      return (
        !this.name ||
        !this.email ||
        !this.password ||
        !this.repeatedPassword ||
        !this.samePassword
      );
    },
  },
  methods: {
    addUser() {
      this.users.push({
        name: this.name,
        email: this.email,
        password: this.password,
      });

      this.name = "";
      this.email = "";
      this.password = "";
      this.repeatedPassword = "";

      console.log(this.users);
    },
  },
  watch: {
    repeatedPassword(pass) {
      if (pass !== this.password) this.samePassword = false;
      else this.samePassword = true;
    },
  },
};
</script>
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

.err {
  padding: 10px;
  color: red;
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
