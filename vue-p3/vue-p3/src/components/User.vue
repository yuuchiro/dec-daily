<template>
  <tr>
    <td>{{ username }}</td>
    <td>{{ email }}</td>
    <td>{{ bio }}</td>
    <td>Edit</td>
  </tr>
</template>
<script>
export default {
  props: ["username", "email", "bio"],
};
</script>
