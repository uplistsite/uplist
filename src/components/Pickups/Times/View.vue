<template>
  <div>
    <button type="submit" class="btn btn-primary" @click="showCreate">
      Create New Times
    </button>
    <PickupTimesCreate v-if="createVisible" @close="hideCreate"></PickupTimesCreate>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PickupTimesCreate from "@/components/Pickups/Times/Create.vue";

export default defineComponent({
  name: "PickupTimesView",
  components: { PickupTimesCreate },
  data() {
    return {
      createVisible: false,
    };
  },
  methods: {
    showCreate(): void {
      this.createVisible = true;
    },
    hideCreate() {
      this.createVisible = false;
    },
  },
});
</script>

<style scoped>

</style>