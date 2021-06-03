<template>
  <Modal ref="modal">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Listed Appraisal</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <form id="listedForm" @submit.prevent="list">
            <div class="mb-3">
              <p class="form-label mb-3">Listings</p>
              <div class="mb-3" v-for="(listing, k) in listings" :key="k">
                <input
                  type="url"
                  class="form-control"
                  v-model="listing.value"
                  required
                />
              </div>
              <button type="button" class="btn btn-primary" @click="addListing">
                Add listing
              </button>
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
          <button form="listedForm" type="submit" class="btn btn-primary">
            Listed
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
  components: {
    Modal,
  },
  data() {
    return {
      listings: [{
        value: "",
      }],
    };
  },
  methods: {
    async list() {
      console.log(this.listings
          .map((listing) => listing.value)
          .filter((listing) => !!listing));
      try {
        await API.graphql({
          query: updateAppraisal,
          variables: {
            input: {
              id: this.id,
              listings: this.listings
                .map((listing) => listing.value)
                .filter((listing) => !!listing),
              appraisalAdminStatus: "LISTED",
            },
          },
        });
      } catch (e) {
        console.log(e);
      }
      const modal: any = this.$refs.modal;
      modal.close();
    },
    addListing() {
      this.listings.push({
        value: "",
      });
    },
  },
});
</script>
