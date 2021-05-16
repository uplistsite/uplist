<template>
  <div class="container mt-5 mb-5">
    <div class="row justify-content-center">
      <div class="col-md-12 col-lg-8">
        <div class="card">
          <div class="card-body">
            <h3 class="card-title">Login</h3>
            <form @submit.prevent="signIn">
              <div class="mb-3">
                <label for="inputEmail" class="form-label">Email address</label>
                <input
                  v-model="email"
                  type="email"
                  class="form-control"
                  id="inputEmail"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="inputPassword" class="form-label">Password</label>
                <input
                  v-model="password"
                  type="password"
                  class="form-control"
                  id="inputPassword"
                  required
                />
              </div>
              <div v-if="loginError" class="form-text text-danger mb-3">
                {{ loginError }}
              </div>
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
      password: "",
      loginError: "",
    };
  },
  methods: {
    async signIn() {
      try {
        const user = await Auth.signIn(this.email, this.password);
        console.log(user);
        this.$store.commit("setCognitoUser", user);
        await this.$router.push("/");
      } catch (error) {
        this.loginError = error.message;
      }
    },
  },
});
</script>

<style scoped></style>
