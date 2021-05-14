<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-12 col-lg-8">
        <div class="card">
            <div class="card-body">
              <h3 class="card-title">Login</h3>
              <form @submit.prevent="login">
                <div class="mb-3">
                  <label for="inputEmail" class="form-label">Email address</label>
                  <input v-model="email" type="email" class="form-control" id="inputEmail" aria-describedby="emailHelp">
                  <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div class="mb-3">
                  <label for="inputPassword" class="form-label">Password</label>
                  <input v-model="password" type="password" class="form-control" id="inputPassword">
                </div>
                <p class=""></p>
                <button type="submit" class="btn btn-primary">Submit</button>
              </form>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Auth } from "aws-amplify";
import { defineComponent } from "vue";

export default defineComponent({
  name: "Login",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    async login() {
      try {
        await Auth.signIn(this.email, this.password);
        alert("Successfully logged in");
      } catch (error) {
        alert(error.message);
      }
    }
  }
});
</script>

<style scoped>
input {
  margin-right: 10px;
}
</style>
