<template>
  <tr>
    <td>{{ username }}</td>
    <td>{{ email }}</td>
    <td>{{ bio }}</td>
    <td @click="$emit('editUser', userData)">Edit</td>
  </tr>
</template>
<script>
export default {
  props: ["username", "email", "password", "bio"],
  emits: ["editUser"],
  data() {
    return {
      userData: {
        username: this.username,
        email: this.email,
        bio: this.bio,
        password: this.password,
      },
    };
  },
};
</script>
<style scoped>
td:last-of-type {
  cursor: pointer;
}
</style>
