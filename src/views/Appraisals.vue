<template>
  <div class="container mt-5 mb-5">
    <div class="row justify-content-center">
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <h3 class="card-title">Create Appraisal</h3>
            <form @submit.prevent="createAppraisal">
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
                v-if="createAppraisalError"
                class="form-text text-danger mb-3"
              >
                {{ createAppraisalError }}
              </div>
              <button type="submit" class="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
      <div v-for="appraisal in appraisals" :key="appraisal.id" class="col-6 mt-3">
        <div class="card">
          <div class="card-body">
            <h3 class="card-title">{{ appraisal.name }}</h3>
            <h6> {{appraisal.description}} </h6>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { listAppraisals } from "@/graphql/queries";
import { createAppraisal } from "@/graphql/mutations";
import { GraphQLResult } from "@aws-amplify/api";
import { ListAppraisalsQuery } from "@/API";
import { API, graphqlOperation } from "aws-amplify";

export default defineComponent({
  name: "Appraisals",
  data() {
    return {
      appraisals: [],
      createAppraisalError: "",
      name: "",
      description: "",
    };
  },
  methods: {
    async createAppraisal() {
      await API.graphql({
        query: createAppraisal,
        variables: {
          input: {
            name: this.name,
            description: this.description,
          },
        },
      });
      this.name = "";
      this.description = "";
      await this.getAppraisals();
    },
    async getAppraisals() {
      this.appraisals = (
        (await API.graphql(
          graphqlOperation(listAppraisals)
        )) as GraphQLResult<ListAppraisalsQuery>
      ).data.listAppraisals.items.sort((a, b) => a.updatedAt > b.updatedAt ? -1 : a.updatedAt === b.updatedAt ? 0 : 1);
      console.log(this.appraisals);
    },
  },
  async created() {
    await this.getAppraisals();
  }
});
</script>
