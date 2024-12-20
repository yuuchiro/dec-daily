<template>
  <form action="" v-if="!showUsers">
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

  <button class="showUsers" @click="showHideUsers">{{ showButtonText }}</button>

  <table v-if="showUsers">
    <tr>
      <th>Username</th>
      <th>Email</th>
      <th>Bio</th>
      <th>Editing</th>
    </tr>
    <user
      v-for="user in users"
      :username="user.name"
      :email="user.email"
      :bio="user.bio"
    ></user>
  </table>
</template>
<script>
import User from "./components/User.vue";
export default {
  components: { User },
  data() {
    return {
      users: [
        {
          name: "maciekPl12",
          email: "maciekpl@gmail.com",
          password: "lubiefortnite",
          bio: "12321",
        },
        {
          name: "MaxPl247",
          email: "maxpl247@onet.pl",
          password: this.password,
          bio: "lorem ipsum dolor amet bla bla bla bla",
        },
        {
          name: "maciekPl12",
          email: "maciekpl@gmail.com",
          password: "lubiefortnite",
          bio: "12321",
        },
      ],

      name: "",
      email: "",
      password: "",
      repeatedPassword: "",
      samePassword: true,

      showUsers: false,
      showButtonText: "Show users",
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
        bio: "",
      });

      this.name = "";
      this.email = "";
      this.password = "";
      this.repeatedPassword = "";

      console.log(this.users);
    },
    showHideUsers() {
      if (!this.showUsers) {
        this.showUsers = true;
        this.showButtonText = "Add users";
      } else {
        this.showUsers = false;
        this.showButtonText = "Show users";
      }
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
  width: 100px;
  position: absolute;
  top: 10px;
  right: 10px;

  border: none;
  background-color: purple;
  text-align: center;
  padding: 10px 0;
  border-radius: 50px;
  font-weight: bolder;
  color: plum;
  cursor: pointer;
}

th {
  background-color: rgb(202, 207, 255);
}
</style>
