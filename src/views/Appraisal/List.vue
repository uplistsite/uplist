<template>
  <div class="container my-4">
    <div class="row justify-content-center">
      <div class="mx-1 mb-3">
        <button
          type="submit"
          class="btn btn-primary"
          @click="navigateCreateAppraisal"
        >
          Create New Appraisal
        </button>
      </div>
      <div
        v-for="appraisal in appraisals"
        :key="appraisal.id"
        class="col-12 mb-4"
      >
        <div class="card shadow">
          <h3 class="card-header">
            {{ appraisal.name }}
            <button
              class="btn btn-link float-end"
              @click="navigateUpdateAppraisal(appraisal.id)"
            >
              Edit
            </button>
          </h3>
          <div class="card-body">
            <h6>{{ appraisal.description }}</h6>
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
                @click="
                  changeStatus(
                    getCurrentStatus(
                      appraisal.appraisalUserStatus,
                      appraisal.appraisalAdminStatus
                    ),
                    'WITHDRAWN',
                    appraisal.id
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
                @click="
                  changeStatus(
                    getCurrentStatus(
                      appraisal.appraisalUserStatus,
                      appraisal.appraisalAdminStatus
                    ),
                    'DENIED',
                    appraisal.id
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
                @click="
                  changeStatus(
                    getCurrentStatus(
                      appraisal.appraisalUserStatus,
                      appraisal.appraisalAdminStatus
                    ),
                    'PENDING',
                    appraisal.id
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
                @click="
                  changeStatus(
                    getCurrentStatus(
                      appraisal.appraisalUserStatus,
                      appraisal.appraisalAdminStatus
                    ),
                    'APPROVED',
                    appraisal.id
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
                @click="
                  changeStatus(
                    getCurrentStatus(
                      appraisal.appraisalUserStatus,
                      appraisal.appraisalAdminStatus
                    ),
                    'ACCEPTED',
                    appraisal.id
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
                @click="
                  changeStatus(
                    getCurrentStatus(
                      appraisal.appraisalUserStatus,
                      appraisal.appraisalAdminStatus
                    ),
                    'PROCESSING',
                    appraisal.id
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
                @click="
                  changeStatus(
                    getCurrentStatus(
                      appraisal.appraisalUserStatus,
                      appraisal.appraisalAdminStatus
                    ),
                    'LISTED',
                    appraisal.id
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
                @click="
                  changeStatus(
                    getCurrentStatus(
                      appraisal.appraisalUserStatus,
                      appraisal.appraisalAdminStatus
                    ),
                    'SOLD',
                    appraisal.id
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
    <Denied v-if="deniedId" :id="deniedId" @close="closeModals"></Denied>
    <Approved
      v-if="approvedId"
      :id="approvedId"
      @close="closeModals"
    ></Approved>
    <Accepted
      v-if="acceptedId"
      :id="acceptedId"
      @close="closeModals"
    ></Accepted>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { listAppraisals } from "@/graphql/queries";
import { GraphQLResult } from "@aws-amplify/api";
import { ListAppraisalsQuery } from "@/API";
import { API, graphqlOperation } from "aws-amplify";
import { mapGetters } from "vuex";
import Denied from "@/components/Appraisal/Stages/Denied.vue";
import Approved from "@/components/Appraisal/Stages/Approved.vue";
import Accepted from "@/components/Appraisal/Stages/Accepted.vue";

const STATUSES = {
  WITHDRAWN: "WITHDRAWN",
  PENDING: "PENDING",
  DENIED: "DENIED",
  APPROVED: "APPROVED",
  ACCEPTED: "ACCEPTED",
  PROCESSING: "PROCESSING",
  LISTED: "LISTED",
  SOLD: "SOLD",
};

export default defineComponent({
  name: "Appraisals List",
  data() {
    return {
      appraisals: [],
      deniedId: "",
      approvedId: "",
      acceptedId: "",
    };
  },
  components: {
    Denied,
    Approved,
    Accepted,
  },
  computed: {
    ...mapGetters(["isAdminUser"]),
    getStatusClasses() {
      return (status: string, currentStatus: string): string => {
        if (status === STATUSES.WITHDRAWN) {
          if ([STATUSES.WITHDRAWN].includes(currentStatus)) {
            return "bg-danger";
          }
          if (
            [STATUSES.PENDING, STATUSES.APPROVED].includes(currentStatus) &&
            !this.isAdminUser
          ) {
            return "bg-primary";
          }
          return "bg-secondary";
        } else if (status === STATUSES.PENDING) {
          if (
            [
              STATUSES.PENDING,
              STATUSES.APPROVED,
              STATUSES.ACCEPTED,
              STATUSES.PROCESSING,
              STATUSES.LISTED,
              STATUSES.SOLD,
            ].includes(currentStatus)
          ) {
            return "bg-success";
          }
          return "bg-secondary";
        } else if (status === STATUSES.APPROVED) {
          if ([STATUSES.PENDING].includes(currentStatus) && this.isAdminUser) {
            return "bg-primary";
          }
          if (
            [
              STATUSES.APPROVED,
              STATUSES.ACCEPTED,
              STATUSES.PROCESSING,
              STATUSES.LISTED,
              STATUSES.SOLD,
            ].includes(currentStatus)
          ) {
            return "bg-success";
          }
          return "bg-secondary";
        } else if (status === STATUSES.DENIED) {
          if ([STATUSES.PENDING].includes(currentStatus) && this.isAdminUser) {
            return "bg-primary";
          }
          if ([STATUSES.DENIED].includes(currentStatus)) {
            return "bg-danger";
          }
          return "bg-secondary";
        } else if (status === STATUSES.ACCEPTED) {
          if (
            [STATUSES.APPROVED].includes(currentStatus) &&
            !this.isAdminUser
          ) {
            return "bg-primary";
          }
          if (
            [
              STATUSES.ACCEPTED,
              STATUSES.PROCESSING,
              STATUSES.LISTED,
              STATUSES.SOLD,
            ].includes(currentStatus)
          ) {
            return "bg-success";
          }
          return "bg-secondary";
        } else if (status === STATUSES.PROCESSING) {
          if ([STATUSES.ACCEPTED].includes(currentStatus) && this.isAdminUser) {
            return "bg-primary";
          }
          if (
            [STATUSES.PROCESSING, STATUSES.LISTED, STATUSES.SOLD].includes(
              currentStatus
            )
          ) {
            return "bg-success";
          }
          return "bg-secondary";
        } else if (status === STATUSES.LISTED) {
          if ([STATUSES.SOLD].includes(currentStatus) && this.isAdminUser) {
            return "bg-primary";
          }
          if ([STATUSES.LISTED, STATUSES.SOLD].includes(currentStatus)) {
            return "bg-success";
          }
          return "bg-secondary";
        } else if (status === STATUSES.SOLD) {
          if ([STATUSES.SOLD].includes(currentStatus)) {
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
      if (userStatus === STATUSES.WITHDRAWN) return userStatus;
      if (userStatus === STATUSES.ACCEPTED && adminStatus === STATUSES.APPROVED)
        return userStatus;
      if (adminStatus) return adminStatus;
      return STATUSES.PENDING;
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
        a.createdAt > b.createdAt ? -1 : a.createdAt === b.createdAt ? 0 : 1
      );
    },
    getNextStatuses(status: string) {
      if (status === STATUSES.WITHDRAWN) {
        return [];
      } else if (status === STATUSES.PENDING) {
        if (this.isAdminUser) return [STATUSES.APPROVED, STATUSES.DENIED];
        return [STATUSES.WITHDRAWN];
      } else if (status === STATUSES.DENIED) {
        return [];
      } else if (status === STATUSES.APPROVED && !this.isAdminUser) {
        return [STATUSES.WITHDRAWN, STATUSES.ACCEPTED];
      } else if (status === STATUSES.ACCEPTED && this.isAdminUser) {
        return [STATUSES.PROCESSING];
      } else if (status === STATUSES.PROCESSING && this.isAdminUser) {
        return [STATUSES.LISTED];
      } else if (status === STATUSES.LISTED && this.isAdminUser) {
        return [STATUSES.SOLD];
      } else if (status === STATUSES.SOLD) {
        return [];
      }
      return [];
    },
    changeStatus(oldStatus: string, newStatus: string, id: string) {
      if (
        newStatus === STATUSES.WITHDRAWN &&
        this.getNextStatuses(oldStatus).includes(newStatus)
      ) {
        console.log(`From ${oldStatus} to ${newStatus} for ${id}`);
      } else if (
        newStatus === STATUSES.PENDING &&
        this.getNextStatuses(oldStatus).includes(newStatus)
      ) {
        console.log(`From ${oldStatus} to ${newStatus} for ${id}`);
      } else if (
        newStatus === STATUSES.DENIED &&
        this.getNextStatuses(oldStatus).includes(newStatus)
      ) {
        this.deniedId = id;
      } else if (
        newStatus === STATUSES.APPROVED &&
        this.getNextStatuses(oldStatus).includes(newStatus)
      ) {
        this.approvedId = id;
      } else if (
        newStatus === STATUSES.ACCEPTED &&
        this.getNextStatuses(oldStatus).includes(newStatus)
      ) {
        this.acceptedId = id;
      } else if (
        newStatus === STATUSES.PROCESSING &&
        this.getNextStatuses(oldStatus).includes(newStatus)
      ) {
        console.log(`From ${oldStatus} to ${newStatus} for ${id}`);
      } else if (
        newStatus === STATUSES.LISTED &&
        this.getNextStatuses(oldStatus).includes(newStatus)
      ) {
        console.log(`From ${oldStatus} to ${newStatus} for ${id}`);
      } else if (
        newStatus === STATUSES.SOLD &&
        this.getNextStatuses(oldStatus).includes(newStatus)
      ) {
        console.log(`From ${oldStatus} to ${newStatus} for ${id}`);
      }
    },
    closeModals() {
      this.approvedId = "";
      this.deniedId = "";
      this.acceptedId = "";
      this.getAppraisals();
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
.bg-danger {
  cursor: not-allowed;
}
</style>
