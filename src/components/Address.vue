<template>
  <Modal ref="modal">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">{{ actionText }} Address</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <form
            id="soldForm"
            @submit.prevent="isCreate ? createAddress() : updateAddress()"
          >
            <div class="row g-3">
              <div class="col-12">
                <label for="inputStreet1" class="form-label label-required"
                  >Street 1</label
                >
                <input
                  v-model="street1"
                  type="text"
                  class="form-control"
                  id="inputStreet1"
                  required
                />
              </div>
              <div class="col-12">
                <label for="inputStreet2" class="form-label">Street 2</label>
                <input
                  v-model="street2"
                  type="text"
                  class="form-control"
                  id="inputStreet2"
                />
              </div>
              <div class="col-md-5">
                <label for="inputCity" class="form-label label-required"
                  >City</label
                >
                <input
                  v-model="city"
                  type="text"
                  class="form-control"
                  id="inputCity"
                  required
                />
              </div>
              <div class="col-md-3">
                <label for="inputState" class="form-label label-required"
                  >State</label
                >
                <select
                  class="form-select"
                  id="inputState"
                  v-model="state"
                  required
                >
                  <option>NE</option>
                </select>
              </div>
              <div class="col-md-4">
                <label for="inputZip" class="form-label label-required"
                  >Zip/Postal Code</label
                >
                <input
                  v-model="zip"
                  type="text"
                  class="form-control"
                  id="inputZip"
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
            {{ actionText }}
          </button>
        </div>
      </div>
    </div>
  </Modal>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Modal from "@/components/Modal.vue";
import { createAddress, updateAddress } from "@/graphql/mutations";
import { API, graphqlOperation } from "aws-amplify";
import { getAddress } from "@/graphql/queries";
import { GraphQLResult } from "@aws-amplify/api";
import { GetAddressQuery } from "@/API";
import { mapGetters } from "vuex";

export default defineComponent({
  name: "Address",
  props: {
    id: String,
  },
  data() {
    return {
      street1: "",
      street2: "",
      city: "",
      state: "",
      zip: "",
    };
  },
  components: {
    Modal,
  },
  computed: {
    ...mapGetters(["getUserId"]),
    isUpdate(): boolean {
      return !!this.id;
    },
    isCreate(): boolean {
      return !this.id;
    },
    actionText(): string {
      return this.isCreate ? "Add" : "Update";
    },
  },
  methods: {
    async updateAddress() {
      try {
        await API.graphql({
          query: updateAddress,
          variables: {
            input: {
              id: this.id,
              street1: this.street1,
              street2: this.street2,
              city: this.city,
              state: this.state,
              zip: this.zip,
            },
          },
        });
      } catch (e) {
        console.log(e);
      }
      const modal: any = this.$refs.modal;
      modal.close();
    },
    async createAddress() {
      try {
        await API.graphql({
          query: createAddress,
          variables: {
            input: {
              street1: this.street1,
              street2: this.street2,
              city: this.city,
              state: this.state,
              zip: this.zip,
              userId: this.getUserId,
            },
          },
        });
      } catch (e) {
        console.log(e);
      }
      const modal: any = this.$refs.modal;
      modal.close();
    },
    async getAddress() {
      const appraisal = (await API.graphql(
        graphqlOperation(getAddress, { id: this.id })
      )) as GraphQLResult<GetAddressQuery>;
      this.street1 = appraisal.data.getAddress.street1;
      this.street2 = appraisal.data.getAddress.street2;
      this.city = appraisal.data.getAddress.city;
      this.state = appraisal.data.getAddress.state;
      this.zip = appraisal.data.getAddress.zip;
    },
  },
  async created() {
    if (this.isUpdate) await this.getAddress();
  },
});
</script>
