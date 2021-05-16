<template>
  <div class="container mt-5 mb-5">
    <div class="row justify-content-center">
      <div class="col-md-12 col-lg-8">
        <div class="card">
          <div v-if="showSignUpPage" class="card-body">
            <h3 class="card-title">Sign Up</h3>
            <form @submit.prevent="signUp">
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
              <div class="mb-3">
                <label for="inputGivenName" class="form-label"
                  >First Name</label
                >
                <input
                  v-model="givenName"
                  type="text"
                  class="form-control"
                  id="inputGivenName"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="inputFamilyName" class="form-label"
                  >Last Name</label
                >
                <input
                  v-model="familyName"
                  type="text"
                  class="form-control"
                  id="inputFamilyName"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="inputPhone" class="form-label">Phone Number</label>
                <input
                  v-model="phoneNumber"
                  type="tel"
                  class="form-control"
                  id="inputPhone"
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  required
                />
                <div class="form-text">Format: XXX-XXX-XXXX</div>
              </div>
              <div class="mb-3">
                <label for="inputBirthdate" class="form-label">Birthdate</label>
                <input
                  v-model="birthdate"
                  type="text"
                  class="form-control"
                  id="inputBirthdate"
                  pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}"
                  required
                />
                <div class="form-text">Format: YYYY-MM-DD</div>
              </div>
              <div v-if="signUpError" class="form-text text-danger mb-3">
                {{ signUpError }}
              </div>
              <button type="submit" class="btn btn-primary">Sign Up</button>
            </form>
          </div>

          <div v-if="showSignUpConfirmPage" class="card-body">
            <h3 class="card-title">Sign Up</h3>
            <form @submit.prevent="confirmSignUp">
              <div class="mb-3">
                <label for="inputCode" class="form-label">Code</label>
                <input
                  v-model="code"
                  type="text"
                  class="form-control"
                  id="inputCode"
                  required
                />
                <div class="form-text">
                  Check your email for your confirmation code
                </div>
              </div>
              <div v-if="signUpConfirmError" class="form-text text-danger mb-3">
                {{ signUpConfirmError }}
              </div>
              <button type="submit" class="btn btn-primary">
                Confirm Email
              </button>
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
  name: "Register",
  data() {
    return {
      password: "",
      email: "",
      givenName: "",
      familyName: "",
      phoneNumber: "",
      birthdate: "",
      code: "",
      signUpError: "",
      signUpConfirmError: "",
      userSignedUp: false,
      userConfirmed: false,
    };
  },
  methods: {
    async signUp() {
      try {
        const response = await Auth.signUp({
          username: this.email,
          password: this.password,
          attributes: {
            email: this.email,
            given_name: this.givenName,
            family_name: this.familyName,
            phone_number: this.computedPhoneNumber,
            birthdate: this.birthdate,
          },
        });
        this.userSignedUp = true;
      } catch (error) {
        this.signUpError = error.message;
      }
    },
    async confirmSignUp() {
      try {
        await Auth.confirmSignUp(this.email, this.code);
        await this.$router.push("/login");
      } catch (error) {
        this.signUpConfirmError = error.message;
      }
    },
  },
  computed: {
    computedPhoneNumber(): string {
      return "+1" + this.phoneNumber.replaceAll("-", "");
    },
    showSignUpPage(): boolean {
      return !this.userSignedUp && !this.userConfirmed;
    },
    showSignUpConfirmPage(): boolean {
      return this.userSignedUp && !this.userConfirmed;
    },
  },
});
</script>

<style scoped>
input {
  margin-right: 10px;
}
</style>
