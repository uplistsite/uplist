<template>
  <nav class="navbar navbar-expand-sm navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="/">Uplist.io</a>
      <button
        class="navbar-toggler"
        data-bs-toggle="collapse"
        data-bs-target="#navbar"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <router-link to="/" v-slot="{ isActive }">
            <li class="nav-item">
              <a
                class="nav-link"
                :class="[isActive && 'active']"
                aria-current="page"
                >Home</a
              >
            </li>
          </router-link>
          <router-link to="/about" v-slot="{ isActive }">
            <li class="nav-item">
              <a
                class="nav-link"
                :class="[isActive && 'active']"
                aria-current="page"
                >About</a
              >
            </li>
          </router-link>
        </ul>
        <div class="d-flex">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <router-link
              to="/register"
              v-slot="{ isActive }"
              v-if="!isAuthenticated"
            >
              <li class="nav-item">
                <a
                  class="nav-link"
                  :class="[isActive && 'active']"
                  aria-current="page"
                  >Register</a
                >
              </li>
            </router-link>
            <router-link
              to="/login"
              v-slot="{ isActive }"
              v-if="!isAuthenticated"
            >
              <li class="nav-item">
                <a
                  class="nav-link"
                  :class="[isActive && 'active']"
                  aria-current="page"
                  >Login</a
                >
              </li>
            </router-link>
            <li class="nav-item" v-if="isAuthenticated">
              <a class="nav-link" aria-current="page" href="#" @click="logout"
                >Logout</a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
  <router-view />
</template>

<script lang="ts">
import { Auth } from "aws-amplify";
import { defineComponent } from "vue";
import { mapGetters } from "vuex";

export default defineComponent({
  name: "App",
  methods: {
    async logout() {
      try {
        await Auth.signOut();
        this.$store.commit("setUser", null);
      } catch (error) {
        alert(error.message);
      }
    },
  },
  computed: {
    ...mapGetters(["isAuthenticated"]),
  },
  created() {
    this.$store.dispatch("getCurrentUser");
  },
});
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>
