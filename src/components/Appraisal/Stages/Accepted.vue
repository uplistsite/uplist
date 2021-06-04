<template>
  <Modal ref="modal">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Accept Appraisal</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <form id="acceptedForm" @submit.prevent="accept">
            <div class="mb-3">
              <label for="inputPickupTime" class="form-label"
                >Pickup Time</label
              >
              <select
                class="form-select"
                id="inputPickupTime"
                v-model="pickupTimeId"
                required
              >
                <option disabled value="">Please select a pickup time</option>
                <option
                  v-for="pickupTime in pickupTimes"
                  :key="pickupTime.id"
                  :value="pickupTime.id"
                >
                  {{ formatPickupTime(pickupTime.time) }}
                </option>
              </select>
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
          <button form="acceptedForm" type="submit" class="btn btn-primary">
            Accept
          </button>
        </div>
      </div>
    </div>
  </Modal>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Modal from "@/components/Modal.vue";
import { updateAppraisal } from "@/graphql/mutations";
import { API, graphqlOperation } from "aws-amplify";
import { listPickupTimes } from "@/graphql/queries";
import { GraphQLResult } from "@aws-amplify/api";
import { ListPickupTimesQuery } from "@/API";

export default defineComponent({
  name: "Appraisal Accepted",
  props: {
    id: String,
  },
  data() {
    return {
      pickupTimes: [],
      pickupTimeId: "",
    };
  },
  components: {
    Modal,
  },
  methods: {
    async accept() {
      try {
        await API.graphql({
          query: updateAppraisal,
          variables: {
            input: {
              id: this.id,
              appraisalPickupTimeId: this.pickupTimeId,
              appraisalUserStatus: "ACCEPTED",
            },
          },
        });
      } catch (e) {
        console.log(e);
      }
      const modal: any = this.$refs.modal;
      modal.close();
    },
    formatPickupTime(dateTimeString: string) {
      const dateTime = new Date(dateTimeString);
      const timeZone = "America/Chicago";
      let options = {
        timeZone: timeZone,
      };
      return `${dateTime.toLocaleDateString("en-us", {
        weekday: "long",
        ...options,
      })}, ${dateTime.toLocaleDateString("en-us", {
        month: "long",
        ...options,
      })} ${dateTime.toLocaleDateString("en-us", {
        day: "numeric",
        ...options,
      })}, ${dateTime.toLocaleDateString("en-us", {
        year: "numeric",
        ...options,
      })} at ${dateTime.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
        ...options,
      })}`;
    },
    async getPickupTimes() {
      this.pickupTimes = (
        (await API.graphql(
          graphqlOperation(listPickupTimes, {
            filter: {
              isUsed: {
                ne: true,
              },
            },
          })
        )) as GraphQLResult<ListPickupTimesQuery>
      ).data.listPickupTimes.items.sort((a, b) =>
        a.time > b.time ? 1 : a.time === b.time ? 0 : -1
      );
    },
  },
  mounted() {
    this.getPickupTimes();
  },
});
</script>
