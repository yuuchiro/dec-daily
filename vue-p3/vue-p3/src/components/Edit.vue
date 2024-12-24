<template>
  <div class="bg" @click="$emit('closeEdition', {})"></div>
  <div class="edit" v-if="edit">
    <div class="container">
      <label for="">Username</label>
      <input type="text" name="" id="editName" v-model="uName" />
    </div>
    <div class="container">
      <label for="">Email</label>
      <input type="email" name="" id="editEmail" v-model="uEmail" />
    </div>
    <div class="container">
      <label for="">Bio</label>
      <textarea name="" id="editBio" v-model="uBio"></textarea>
    </div>
    <div class="container">
      <label for="">Password</label>
      <input type="password" name="" id="editPassword" v-model="uPassword" />
    </div>
    <button @click="saveChanges">Save</button>
  </div>
  <div class="confirm" v-if="!edit">
    <div class="container">
      <label>Type your password:</label>
      <input type="password" name="" id="" v-model="confirmPassword" />
      <p class="err" v-if="!correctPassword">Password should be the same!</p>
    </div>

    <button @click="confirmChanges">Save</button>
  </div>
</template>
<script>
export default {
  props: ["username", "email", "bio", "password"],
  emits: ["closeEdition", "changeData"],
  data() {
    return {
      edit: true,

      uName: this.username,
      uEmail: this.email,
      uBio: this.bio,
      uPassword: this.password,

      confirmPassword: "",
      correctPassword: true,
    };
  },
  methods: {
    saveChanges() {
      if (
        this.uName !== this.username ||
        this.uEmail !== this.email ||
        this.uBio !== this.bio ||
        this.uPassword !== this.password
      )
        this.edit = false;
      else this.$emit("closeEdition", {});
    },
    confirmChanges() {
      this.correctPassword = true;
      if (this.confirmPassword !== this.password) {
        this.correctPassword = false;
        return;
      }
      this.$emit("changeData", {
        oldname: this.username,
        name: this.uName,
        email: this.uEmail,
        password: this.uPassword,
        bio: this.uBio,
      });
      this.$emit("closeEdition", {});
    },
  },
};
</script>
<style scoped>
.bg {
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.479);
  position: fixed;
  top: 0;
  left: 0;
}
.edit,
.confirm {
  width: 500px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgb(122, 206, 255);
  color: white;
  padding: 50px;
  border-radius: 10px;
}

.err {
  padding: 10px;
  color: red;
}

label {
  display: block;
  padding: 10px;
  font-weight: bold;
  width: 100%;
  text-align: left;
}

.container {
  margin: 20px 0;
}

input,
textarea {
  width: 100%;
  border: none;
  outline: none;
  font-size: 17px;
  padding: 7px 20px;
  border-radius: 10px;
  resize: none;
}

textarea {
  height: 100px;
}

button {
  width: 30%;
  padding: 10px;
  cursor: pointer;
  border: none;
  background-color: rgb(39, 176, 255);
  border-radius: 10px;
  color: white;
  font-weight: bolder;
}
</style>
