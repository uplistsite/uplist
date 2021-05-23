<template>
  <div class="container mt-5 mb-5">
    <div class="row justify-content-center">
      <div class="mx-1">
        <button
          type="submit"
          class="btn btn-primary align-content-end"
          @click="navigateCreateAppraisal"
        >
          Create New Appraisal
        </button>
      </div>
      <div
        v-for="appraisal in appraisals"
        :key="appraisal.id"
        class="col-12 mt-3"
      >
        <div class="card">
          <div class="card-body">
            <h3 class="card-title">{{ appraisal.name }}</h3>
            <h6>{{ appraisal.description }}</h6>
            <button
              class="btn btn-primary mb-3"
              @click="navigateUpdateAppraisal(appraisal.id)"
            >
              Edit
            </button>
            <div class="progress">
              <div
                class="progress-bar"
                role="progressbar"
                style="width: 16%"
                aria-valuenow="15"
                aria-valuemin="0"
                aria-valuemax="100"
                data-bs-toggle="tooltip" data-bs-placement="top" title="Tooltip on top"
              >
                Withdrawn
              </div>
              <div
                class="progress-bar bg-secondary"
                role="progressbar"
                style="width: 16%"
                aria-valuenow="30"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                Pending
              </div>
              <div
                class="progress-bar bg-success"
                role="progressbar"
                style="width: 16%"
                aria-valuenow="30"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                Denied
              </div>
              <div
                class="progress-bar bg-info"
                role="progressbar"
                style="width: 16%"
                aria-valuenow="30"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                Approved
              </div>
              <div
                class="progress-bar bg-secondary"
                role="progressbar"
                style="width: 17%"
                aria-valuenow="20"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                Accepted
              </div>
              <div
                class="progress-bar bg-info"
                role="progressbar"
                style="width: 17%"
                aria-valuenow="20"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                Processing
              </div>
              <div
                class="progress-bar"
                role="progressbar"
                style="width: 17%"
                aria-valuenow="20"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                Listed
              </div>
              <div
                class="progress-bar bg-info"
                role="progressbar"
                style="width: 17%"
                aria-valuenow="20"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                Sold
              </div>
            </div>
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
import { mapGetters } from "vuex";

export default defineComponent({
  name: "Appraisals List",
  data() {
    return {
      appraisals: [],
    };
  },
  computed: {
    ...mapGetters(["isAdminUser"]),
  },
  methods: {
    async navigateUpdateAppraisal(id: string) {
      await this.$router.push({ name: "UpdateAppraisal", params: { id: id } });
    },
    async navigateCreateAppraisal() {
      await this.$router.push({ name: "CreateAppraisal" });
    },
    async getAppraisals() {
      this.appraisals = (
        (await API.graphql(
          graphqlOperation(listAppraisals)
        )) as GraphQLResult<ListAppraisalsQuery>
      ).data.listAppraisals.items.sort((a, b) =>
        a.updatedAt > b.updatedAt ? -1 : a.updatedAt === b.updatedAt ? 0 : 1
      );
    },
  },
  async created() {
    await this.getAppraisals();
  },
});
</script>

<style scoped>
.progress {
  height: 1.5rem;
  border-radius: 1.5rem;
}
.progress-bar {
  cursor: pointer;
}
</style>
