<template>
  <Modal ref="modal">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Sell Appraisal</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <p class="mb-1">
            Are you sure you want to move this appraisal to a sold status? This
            will automatically add the Sold Price (minus commission) to the
            User's balance.
          </p>
          <form id="soldForm" @submit.prevent="sell">
            <div class="mb-3">
              <label for="inputPaymentAdvance" class="form-label"
                >Sell Price</label
              >
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text">$</span>
                </div>
                <input
                  v-model="soldPrice"
                  type="number"
                  class="form-control"
                  id="inputPaymentAdvance"
                  step=".01"
                  min=".01"
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
          <button form="soldForm" type="submit" class="btn btn-primary">
            Sell
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
  name: "Appraisal Processed",
  props: {
    id: String,
  },
  data() {
    return {
      soldPrice: 0,
    };
  },
  components: {
    Modal,
  },
  methods: {
    async sell() {
      try {
        await API.graphql({
          query: updateAppraisal,
          variables: {
            input: {
              id: this.id,
              soldPrice: this.soldPrice,
              appraisalAdminStatus: "SOLD",
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
