<template>
  <div class="container mt-5 mb-5">
    <div class="row justify-content-center">
      <button type="submit" class="btn btn-primary" @click="navigateCreateAppraisal">Create New Appraisal</button>
      <div v-for="appraisal in appraisals" :key="appraisal.id" class="col-6 mt-3">
        <div class="card">
          <div class="card-body">
            <h3 class="card-title">{{ appraisal.name }}</h3>
            <h6> {{appraisal.description}} </h6>
            <button class="btn btn-primary" @click="navigateUpdateAppraisal(appraisal.id)">Edit</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { listAppraisals } from "@/graphql/queries";
import { GraphQLResult } from "@aws-amplify/api";
import { ListAppraisalsQuery } from "@/API";
import { API, graphqlOperation } from "aws-amplify";

export default defineComponent({
  name: "Appraisals List",
  data() {
    return {
      appraisals: [],
    };
  },
  methods: {
    async navigateUpdateAppraisal(id : string) {
      await this.$router.push({ name: 'UpdateAppraisal', params: { id: id }});
    },
    async navigateCreateAppraisal() {
      await this.$router.push({ name: 'CreateAppraisal' });
    },
    async getAppraisals() {
      this.appraisals = (
        (await API.graphql(
          graphqlOperation(listAppraisals)
        )) as GraphQLResult<ListAppraisalsQuery>
      ).data.listAppraisals.items.sort((a, b) => a.updatedAt > b.updatedAt ? -1 : a.updatedAt === b.updatedAt ? 0 : 1);
    },
  },
  async created() {
    await this.getAppraisals();
  }
});
</script>
