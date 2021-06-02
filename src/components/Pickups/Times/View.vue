<template>
  <div>
    <button type="submit" class="btn btn-primary mb-3" @click="showCreate">
      Create New Times
    </button>
    <PickupTimesCreate v-if="createVisible" @close="hideCreate"></PickupTimesCreate>
    <PickupTimesList :key="componentKey"></PickupTimesList>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PickupTimesCreate from "@/components/Pickups/Times/Create.vue";
import PickupTimesList from "@/components/Pickups/Times/List.vue";

export default defineComponent({
  name: "PickupTimesView",
  components: { PickupTimesCreate, PickupTimesList },
  data() {
    return {
      createVisible: false,
      componentKey: 0,
    };
  },
  methods: {
    showCreate(): void {
      this.createVisible = true;
    },
    hideCreate() {
      this.createVisible = false;
      this.componentKey++;
    },
  },
});
</script>

<style scoped>

</style>