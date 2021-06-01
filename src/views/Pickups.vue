<template>
  <div class="container mt-5 mb-5">
    <ul class="nav nav-pills justify-content-center">
      <li class="nav-item">
        <a class="nav-link" href="#" :class="pickupsClasses">Pickups</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#times" :class="timesClasses">Times</a>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Pickups",
  data() {
    return {
      appraisalError: "",
      name: "",
      description: "",
      images: [],
      hash: "",
    };
  },
  computed: {
    pickupsClasses() {
      if (!this.hash) return "active";
      return "";
    },
    timesClasses() {
      if (this.hash === "#times") return "active";
      return "";
    },
  },

  watch: {
    "$route.hash": {
      handler: function (hash) {
        this.hash = hash;
      },
      deep: true,
      immediate: true,
    },
  },
});
</script>

<style scoped>

</style>