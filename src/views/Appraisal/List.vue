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
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title="Withdraw the appraisal."
                :class="
                  getStatusClasses(
                    'WITHDRAWN',
                    getCurrentStatus(
                      appraisal.appraisalUserStatus,
                      appraisal.appraisalAdminStatus
                    )
                  )
                "
              >
                Withdrawn
              </div>
              <div
                class="progress-bar"
                role="progressbar"
                style="width: 16%"
                aria-valuenow="30"
                aria-valuemin="0"
                aria-valuemax="100"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title="Appraisal is being appraised."
                :class="
                  getStatusClasses(
                    'PENDING',
                    getCurrentStatus(
                      appraisal.appraisalUserStatus,
                      appraisal.appraisalAdminStatus
                    )
                  )
                "
              >
                Pending
              </div>
              <div
                class="progress-bar"
                role="progressbar"
                style="width: 16%"
                aria-valuenow="30"
                aria-valuemin="0"
                aria-valuemax="100"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title="Appraisal was denied."
                :class="
                  getStatusClasses(
                    'DENIED',
                    getCurrentStatus(
                      appraisal.appraisalUserStatus,
                      appraisal.appraisalAdminStatus
                    )
                  )
                "
              >
                Denied
              </div>
              <div
                class="progress-bar"
                role="progressbar"
                style="width: 16%"
                aria-valuenow="30"
                aria-valuemin="0"
                aria-valuemax="100"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title="Appraisal was approved. Pending user acceptance."
                :class="
                  getStatusClasses(
                    'APPROVED',
                    getCurrentStatus(
                      appraisal.appraisalUserStatus,
                      appraisal.appraisalAdminStatus
                    )
                  )
                "
              >
                Approved
              </div>
              <div
                class="progress-bar"
                role="progressbar"
                style="width: 17%"
                aria-valuenow="20"
                aria-valuemin="0"
                aria-valuemax="100"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title="Accept the appraisal."
                :class="
                  getStatusClasses(
                    'ACCEPTED',
                    getCurrentStatus(
                      appraisal.appraisalUserStatus,
                      appraisal.appraisalAdminStatus
                    )
                  )
                "
              >
                Accepted
              </div>
              <div
                class="progress-bar"
                role="progressbar"
                style="width: 17%"
                aria-valuenow="20"
                aria-valuemin="0"
                aria-valuemax="100"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title="Item is currently being processed."
                :class="
                  getStatusClasses(
                    'PROCESSING',
                    getCurrentStatus(
                      appraisal.appraisalUserStatus,
                      appraisal.appraisalAdminStatus
                    )
                  )
                "
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
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title="Item has been listed for sale."
                :class="
                  getStatusClasses(
                    'LISTED',
                    getCurrentStatus(
                      appraisal.appraisalUserStatus,
                      appraisal.appraisalAdminStatus
                    )
                  )
                "
              >
                Listed
              </div>
              <div
                class="progress-bar"
                role="progressbar"
                style="width: 17%"
                aria-valuenow="20"
                aria-valuemin="0"
                aria-valuemax="100"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title="Item has been sold."
                :class="
                  getStatusClasses(
                    'SOLD',
                    getCurrentStatus(
                      appraisal.appraisalUserStatus,
                      appraisal.appraisalAdminStatus
                    )
                  )
                "
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
    getStatusClasses() {
      return (status: string, currentStatus: string): string => {
        if (status === "WITHDRAWN") {
          if (["WITHDRAWN"].includes(currentStatus)) {
            return "bg-danger";
          }
          if (["PENDING", "APPROVED"].includes(currentStatus) && !this.isAdminUser) {
            return "bg-primary";
          }
          return "bg-secondary";
        } else if (status === "PENDING") {
          if (["APPROVED", "DENIED"].includes(currentStatus) && this.isAdminUser) {
            return "bg-primary";
          }
          if (["PENDING", "APPROVED", "ACCEPTED", "PROCESSING", "LISTED", "SOLD"].includes(currentStatus)) {
            return "bg-success";
          }
          return "bg-secondary";
        } else if (status === "APPROVED") {
          if (["PENDING"].includes(currentStatus) && this.isAdminUser) {
            return "bg-primary";
          }
          if (["APPROVED", "ACCEPTED", "PROCESSING", "LISTED", "SOLD"].includes(currentStatus)) {
            return "bg-success";
          }
          return "bg-secondary";
        } else if (status === "DENIED") {
          if (["PENDING"].includes(currentStatus) && this.isAdminUser) {
            return "bg-primary";
          }
          if (["DENIED"].includes(currentStatus)) {
            return "bg-danger";
          }
          return "bg-secondary";
        } else if (status === "ACCEPTED") {
          if (["PROCESSING"].includes(currentStatus) && this.isAdminUser) {
            return "bg-primary";
          }
          if (["ACCEPTED", "PROCESSING", "LISTED", "SOLD"].includes(currentStatus)) {
            return "bg-success";
          }
          return "bg-secondary";
        } else if (status === "PROCESSING") {
          if (["LISTED"].includes(currentStatus) && this.isAdminUser) {
            return "bg-primary";
          }
          if (["PROCESSING", "LISTED", "SOLD"].includes(currentStatus)) {
            return "bg-success";
          }
          return "bg-secondary";
        } else if (status === "LISTED") {
          if (["SOLD"].includes(currentStatus) && this.isAdminUser) {
            return "bg-primary";
          }
          if (["LISTED", "SOLD"].includes(currentStatus)) {
            return "bg-success";
          }
          return "bg-secondary";
        } else if (status === "SOLD") {
          if (["SOLD"].includes(currentStatus)) {
            return "bg-success";
          }
          return "bg-secondary";
        }
        return "";
      };
    },
  },
  methods: {
    getCurrentStatus(userStatus: string, adminStatus: string) {
      if (userStatus === "WITHDRAWN") return userStatus;
      if (userStatus === "ACCEPTED" && adminStatus === "APPROVED") return userStatus;
      if (adminStatus) return adminStatus;
      return "PENDING";
    },
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
  height: 1.75rem;
  border-radius: 1.5rem;
}
.bg-primary {
  cursor: pointer;
}
.bg-secondary {
  cursor: not-allowed;
}
.bg-success {
  cursor: not-allowed;
}
</style>
