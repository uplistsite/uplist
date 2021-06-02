<template>
  <Modal ref="modal">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Create Times</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <form id="createTimesForm" @submit.prevent="createTimes">
            <div class="mb-3">
              <label for="date" class="form-label">Date:</label>
              <input
                v-model="date"
                type="date"
                class="form-control"
                id="date"
                required
              />
            </div>
            <p class="form-label mb-1">Times:</p>
            <div
              v-for="time in Object.keys(times)"
              :key="time"
              class="form-check form-check-inline"
              style="width: 6.27em"
            >
              <input
                class="form-check-input"
                type="checkbox"
                :id="times[time]"
                :value="time"
                v-model="selectedTimes"
              />
              <label class="form-check-label" :for="times[time]">{{
                times[time]
              }}</label>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Cancel
          </button>
          <button form="createTimesForm" type="submit" class="btn btn-primary">
            Create
          </button>
        </div>
      </div>
    </div>
  </Modal>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Modal from "@/components/Modal.vue";

export default defineComponent({
  name: "PickupTimesCreate",
  data() {
    return {
      selectedTimes: [],
      date: "",
      times: {
        "00:00:00-06:00": "12 AM",
        "01:00:00-06:00": "01 AM",
        "02:00:00-06:00": "02 AM",
        "03:00:00-06:00": "03 AM",
        "04:00:00-06:00": "04 AM",
        "05:00:00-06:00": "05 AM",
        "06:00:00-06:00": "06 AM",
        "07:00:00-06:00": "07 AM",
        "08:00:00-06:00": "08 AM",
        "09:00:00-06:00": "09 AM",
        "10:00:00-06:00": "10 AM",
        "11:00:00-06:00": "11 AM",
        "12:00:00-06:00": "12 PM",
        "13:00:00-06:00": "01 PM",
        "14:00:00-06:00": "02 PM",
        "15:00:00-06:00": "03 PM",
        "16:00:00-06:00": "04 PM",
        "17:00:00-06:00": "05 PM",
        "18:00:00-06:00": "06 PM",
        "19:00:00-06:00": "07 PM",
        "20:00:00-06:00": "08 PM",
        "21:00:00-06:00": "09 PM",
        "22:00:00-06:00": "10 PM",
        "23:00:00-06:00": "11 PM",
      },
    };
  },
  components: { Modal },
  methods: {
    createTimes() {
      console.log("Created");
    },
  },
});
</script>

<style scoped></style>
