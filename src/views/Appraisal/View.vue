<template>
  <div class="container mt-5 mb-5">
    <div class="row justify-content-center">
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <h3 class="card-title">{{ titleText }}</h3>
            <form @submit.prevent="processAppraisal">
              <div class="mb-3">
                <label for="inputName" class="form-label">Name</label>
                <input
                  v-model="name"
                  type="text"
                  class="form-control"
                  id="inputName"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="inputDescription" class="form-label"
                >Description</label
                >
                <input
                  v-model="description"
                  type="text"
                  class="form-control"
                  id="inputDescription"
                  required
                />
              </div>
              <div
                v-if="appraisalError"
                class="form-text text-danger mb-3"
              >
                {{ appraisalError }}
              </div>
              <button class="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { API, graphqlOperation } from "aws-amplify";
import { createAppraisal, updateAppraisal } from "@/graphql/mutations";
import { getAppraisal, listAppraisals } from "@/graphql/queries";
import { GraphQLResult } from "@aws-amplify/api";
import { GetAppraisalQuery, ListAppraisalsQuery } from "@/API";

export default defineComponent({
  name: "Appraisal View",
  data() {
    return {
      appraisalError: "",
      name: "",
      description: "",
    };
  },
  props: {
    id: String,
  },
  computed: {
    isCreate() : boolean {
      return !this.id;
    },
    isUpdate() : boolean {
      return !!this.id;
    },
    titleText() {
      if (this.isUpdate) return 'Update Appraisal';
      return 'Create Appraisal';
    }
  },
  methods: {
    async processAppraisal() {
      if (this.isCreate) await this.createAppraisal();
      if (this.isUpdate) await this.updateAppraisal();
    },
    async navigateListAppraisals() {
      await this.$router.push({ name: 'ListAppraisals'});
    },
    async createAppraisal() {
      try {
        await API.graphql({
          query: createAppraisal,
          variables: {
            input: {
              name: this.name,
              description: this.description,
            },
          },
        });
        await this.navigateListAppraisals();
      } catch (e) {
        this.appraisalError = e;
      }
    },
    async updateAppraisal() {
      try {
        await API.graphql({
          query: updateAppraisal,
          variables: {
            input: {
              id: this.id,
              name: this.name,
              description: this.description,
            },
          },
        });
        await this.navigateListAppraisals();
      } catch (e) {
        this.appraisalError = e;
      }
    },
    async getAppraisal() {
      const appraisal = (
        (await API.graphql(
          graphqlOperation(getAppraisal, {id: this.id})
        )) as GraphQLResult<GetAppraisalQuery>
      );
      this.name = appraisal.data.getAppraisal.name;
      this.description = appraisal.data.getAppraisal.description;
    },
  },
  async created() {
    if (this.isUpdate) await this.getAppraisal();
  },
});
</script>

<style scoped>

</style>