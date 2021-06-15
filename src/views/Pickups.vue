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
    <div class="row justify-content-center">
      <div class="col-12" v-if="hash === '#times'">
        <div class="card shadow">
          <div class="card-body">
            <h3 class="card-title">Times</h3>
            <PickupTimesView></PickupTimesView>
          </div>
        </div>
      </div>
      <div class="col-12" v-if="hash === ''">
        <PickupsList></PickupsList>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PickupTimesView from "@/components/Pickups/Times/View.vue";
import PickupsList from "@/components/Pickups/Pickups/List.vue";

export default defineComponent({
  name: "Pickups",
  data() {
    return {
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
  components: { PickupTimesView, PickupsList },
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

<style scoped></style>
