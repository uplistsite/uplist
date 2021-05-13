<template>
  <div class="container">
    <form @submit.prevent="register">
      <h2>Register</h2>
      <label>
        <input type="email" v-model="email" placeholder="Email address..." />
      </label>
      <label>
        <input type="password" v-model="password" placeholder="password..." />
      </label>
      <button>Register</button>
    </form>
  </div>
</template>

<script lang="ts">
import { Auth } from "aws-amplify";
import { defineComponent } from "vue";

export default defineComponent({
  name: "Register",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async register() {
      try {
        await Auth.signUp({
          username: this.email,
          password: this.password,
        });
        alert("User successfully registered. Please login");
      } catch (error) {
        alert(error.message);
      }
    },
  },
});
</script>

<style scoped>
input {
  margin-right: 10px;
}
</style>
