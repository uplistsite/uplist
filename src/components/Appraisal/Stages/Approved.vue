<template>
  <Modal ref="modal">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Approve Appraisal</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <p class="mb-1">Are you sure you want to approve this appraisal?</p>
          <form id="approvedForm" @submit.prevent="approve">
            <div class="mb-3">
              <label for="inputPaymentAdvance" class="form-label"
                >Payment Advance</label
              >
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text">$</span>
                </div>
                <input
                  v-model="paymentAdvance"
                  type="number"
                  class="form-control"
                  id="inputPaymentAdvance"
                  step=".01"
                  min=".01"
                  required
                />
              </div>
            </div>
            <div class="mb-3">
              <label for="inputPaymentRangeLow" class="form-label"
                >Estimated Lowest Range</label
              >
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text">$</span>
                </div>
                <input
                  v-model="paymentRangeLow"
                  type="number"
                  class="form-control"
                  id="inputPaymentRangeLow"
                  step=".01"
                  min=".01"
                  required
                />
              </div>
            </div>
            <div class="mb-3">
              <label for="inputPaymentRangeHigh" class="form-label"
                >Estimated Highest Range</label
              >
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text">$</span>
                </div>
                <input
                  v-model="paymentRangeHigh"
                  type="number"
                  class="form-control"
                  id="inputPaymentRangeHigh"
                  step=".01"
                  min=".01"
                  required
                />
              </div>
            </div>
            <div class="mb-3">
              <label for="commission" class="form-label">Commission</label>
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text">%</span>
                </div>
                <input
                  v-model="commission"
                  type="number"
                  class="form-control"
                  id="commission"
                  step="1"
                  min="0"
                  max="50"
                  required
                />
              </div>
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
          <button form="approvedForm" type="submit" class="btn btn-primary">
            Approve
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
  name: "Appraisal Approved",
  props: {
    id: String,
  },
  data() {
    return {
      paymentAdvance: 0,
      paymentRangeLow: 0,
      paymentRangeHigh: 0,
      commission: 0,
    };
  },
  watch: {
    paymentRangeLow: function (val: number) {
      if (val >= 500) this.commission = 15;
      else if (val >= 250) this.commission = 20;
      else if (val >= 100) this.commission = 30;
      else this.commission = 50;
    },
  },
  components: {
    Modal,
  },
  methods: {
    async approve() {
      try {
        await API.graphql({
          query: updateAppraisal,
          variables: {
            input: {
              id: this.id,
              paymentAdvance: this.paymentAdvance,
              paymentRangeLow: this.paymentRangeLow,
              paymentRangeHigh: this.paymentRangeHigh,
              commission: this.commission,
              appraisalAdminStatus: "APPROVED",
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
