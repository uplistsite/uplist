<template>
  <Modal ref="modal">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Withdraw Appraisal</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <p class="mb-1">Are you sure you want to withdraw this appraisal?</p>
          <form id="withdrawnForm" @submit.prevent="withdraw">
            <div class="mb-3">
              <label for="reason" class="col-form-label">Reason</label>
              <select class="form-select" id="reason" v-model="reason" required>
                <option disabled value="">Please select a reason</option>
                <option>Already sold</option>
                <option>Appraisal price inadequate</option>
                <option>Other</option>
              </select>
            </div>
            <div class="mb-3" v-if="reason === 'Other'">
              <label for="otherReason" class="form-label">Other Reason</label>
              <textarea
                v-model="otherReason"
                type="text"
                class="form-control"
                id="otherReason"
                rows="3"
                required
              />
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
          <button form="withdrawnForm" type="submit" class="btn btn-danger">
            Withdraw
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
import { API } from "aws-amplify";

export default defineComponent({
  name: "Appraisal Withdrawn",
  props: {
    id: String,
  },
  data() {
    return {
      reason: "",
      otherReason: "",
    };
  },
  components: {
    Modal,
  },
  methods: {
    async withdraw() {
      try {
        await API.graphql({
          query: updateAppraisal,
          variables: {
            input: {
              id: this.id,
              withdrawnReason: this.otherReason
                ? this.otherReason
                : this.reason,
              appraisalUserStatus: "WITHDRAWN",
            },
          },
        });
      } catch (e) {
        console.log(e);
      }
      const modal: any = this.$refs.modal;
      modal.close();
    },
  },
});
</script>
