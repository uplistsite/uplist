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
        <button
          class="btn btn-outline-primary dropdown-toggle float-end"
          type="button"
          data-bs-toggle="dropdown"
          data-bs-auto-close="outside"
        >
          Filter Statuses
        </button>
        <div class="dropdown-menu">
          <div
            v-for="status in Object.keys(getStatuses)"
            :key="status"
            class="dropdown-item"
          >
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                :id="getStatuses[status]"
                :value="getStatuses[status]"
                v-model="selectedStatuses"
              />
              <label class="form-check-label" :for="getStatuses[status]">{{
                firstLetterCap(getStatuses[status])
              }}</label>
            </div>
          </div>
        </div>
      </div>
      <div
        v-for="(appraisal, index) in getFilteredAppraisals"
        :key="appraisal.id"
        class="col-12 mb-4"
      >
        <div class="card shadow">
          <div class="card-header py-2">
            <h5 class="float-start mt-2">{{ appraisal.name }}</h5>
            <button
              class="btn btn-link float-end mt-0"
              @click="navigateUpdateAppraisal(appraisal.id)"
            >
              Edit
            </button>
            <div class="float-end mt-1">
              <select
                class="form-select form-select-sm"
                id="reason"
                @change="
                  changeStatus(
                    appraisal.currentStatus,
                    statuses[$event.target.value],
                    appraisal.id
                  )
                "
                style="width: 120px"
                :disabled="!appraisal.nextStatuses.length"
              >
                <option
                  v-for="allowedStatus in appraisal.allowedStatuses"
                  :key="allowedStatus"
                  :value="allowedStatus"
                  :disabled="allowedStatus === appraisal.currentStatus"
                  :selected="allowedStatus === appraisal.currentStatus"
                >
                  {{
                    allowedStatus === appraisal.currentStatus
                      ? firstLetterCap(allowedStatus)
                      : firstLetterCap(statusToAction[allowedStatus])
                  }}
                </option>
              </select>
            </div>
          </div>
          <div class="card-body">
            <div class="row mb-3">
              <div class="col">
                <div>
                  <span class="fw-bold">Description:</span>
                  {{ appraisal.description }}
                </div>
                <div>
                  <span class="fw-bold">Condition:</span>
                  {{ firstLetterCap(appraisal.wear) }}
                </div>
                <div v-if="appraisal.showMore">
                  <div>
                    <span class="fw-bold">Defects:</span>
                    {{ appraisal.defects ? appraisal.defects : "N/A" }}
                  </div>
                  <div>
                    <span class="fw-bold">Make:</span>
                    {{ appraisal.make ? appraisal.make : "N/A" }}
                  </div>
                  <div>
                    <span class="fw-bold">Model:</span>
                    {{ appraisal.model ? appraisal.model : "N/A" }}
                  </div>
                  <div>
                    <span class="fw-bold">Year:</span>
                    {{ appraisal.year ? appraisal.year : "N/A" }}
                  </div>
                </div>
              </div>
              <div class="col text-end">
                <div v-if="appraisal.paymentAdvance">
                  <div>
                    Estimated Sell Price:
                    <span class="fw-bold text-success"
                      >${{ appraisal.paymentRangeLow }}</span
                    >
                    to
                    <span class="fw-bold text-success"
                      >${{ appraisal.paymentRangeHigh }}</span
                    >
                  </div>
                  <div>
                    Upfront Payment:
                    <span class="fw-bold text-success"
                      >${{ appraisal.paymentAdvance }}</span
                    >
                  </div>
                </div>
                <div v-if="appraisal.soldPrice">
                  <div>
                    Sold Price:
                    <span class="fw-bold text-success"
                      >${{ appraisal.soldPrice }}</span
                    >
                  </div>
                </div>
                <div v-if="appraisal.deniedReason || appraisal.withdrawnReason">
                  <div>
                    Reason for
                    {{ appraisal.deniedReason ? "Denial" : "Withdraw" }}:
                    <span class="text-danger">{{
                      appraisal.deniedReason
                        ? appraisal.deniedReason
                        : appraisal.withdrawnReason
                    }}</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="progress d-none d-md-flex">
              <div
                class="progress-bar"
                role="progressbar"
                :style="`width: ${100 / Object.keys(statuses).length}%`"
                aria-valuenow="15"
                aria-valuemin="0"
                aria-valuemax="100"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                v-for="status in Object.keys(statuses)"
                :key="status"
                :title="statusDescriptions[status]"
                :class="
                  getStatusClasses(statuses[status], appraisal.currentStatus)
                "
                @click="
                  changeStatus(
                    appraisal.currentStatus,
                    statuses[status],
                    appraisal.id
                  )
                "
              >
                {{ firstLetterCap(statuses[status]) }}
              </div>
            </div>
          </div>
          <div
            class="card-footer text-center"
            @click="updateAppraisal(index, { showMore: !appraisal.showMore })"
          >
            <small class="text-muted">{{
              appraisal.showMore ? "Show Less" : "Show More"
            }}</small>
          </div>
        </div>
      </div>
    </div>
    <Withdrawn
      v-if="withdrawnId"
      :id="withdrawnId"
      @close="closeModals"
    ></Withdrawn>
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
    <Processing
      v-if="processingId"
      :id="processingId"
      @close="closeModals"
    ></Processing>
    <Listed v-if="listedId" :id="listedId" @close="closeModals"></Listed>
    <Sold v-if="soldId" :id="soldId" @close="closeModals"></Sold>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { listAppraisals } from "@/graphql/queries";
import { GraphQLResult } from "@aws-amplify/api";
import { ListAppraisalsQuery } from "@/API";
import { API, graphqlOperation } from "aws-amplify";
import { mapGetters } from "vuex";
import Withdrawn from "@/components/Appraisal/Stages/Withdrawn.vue";
import Denied from "@/components/Appraisal/Stages/Denied.vue";
import Approved from "@/components/Appraisal/Stages/Approved.vue";
import Accepted from "@/components/Appraisal/Stages/Accepted.vue";
import Processing from "@/components/Appraisal/Stages/Processing.vue";
import Listed from "@/components/Appraisal/Stages/Listed.vue";
import Sold from "@/components/Appraisal/Stages/Sold.vue";
import { Appraisal } from "@/API";

type ObjectMap = {
  [key: string]: string;
};

const STATUSES: ObjectMap = {
  WITHDRAWN: "WITHDRAWN",
  DENIED: "DENIED",
  PENDING: "PENDING",
  APPROVED: "APPROVED",
  ACCEPTED: "ACCEPTED",
  PROCESSING: "PROCESSING",
  LISTED: "LISTED",
  SOLD: "SOLD",
};

const STATUS_DESCRIPTIONS: ObjectMap = {
  WITHDRAWN: "Withdraw the appraisal.",
  DENIED: "Appraisal was denied.",
  PENDING: "Appraisal is being appraised.",
  APPROVED: "Appraisal was approved. Pending user acceptance.",
  ACCEPTED: "Accept the appraisal.",
  PROCESSING: "Item is currently being processed.",
  LISTED: "Item has been listed for sale.",
  SOLD: "Item has been sold.",
};

const STATUS_TO_ACTION: ObjectMap = {
  WITHDRAWN: "WITHDRAW",
  DENIED: "DENY",
  PENDING: "PENDING",
  APPROVED: "APPROVE",
  ACCEPTED: "ACCEPT",
  PROCESSING: "PROCESS",
  LISTED: "LIST",
  SOLD: "SELL",
};

export default defineComponent({
  name: "Appraisals List",
  data() {
    return {
      appraisals: [],
      withdrawnId: "",
      deniedId: "",
      approvedId: "",
      acceptedId: "",
      processingId: "",
      listedId: "",
      soldId: "",
      selectedStatuses: Object.keys(STATUSES).map(
        (statusKey: string) => STATUSES[statusKey]
      ),
      statusDescriptions: STATUS_DESCRIPTIONS,
      statuses: STATUSES,
      statusToAction: STATUS_TO_ACTION,
    };
  },
  components: {
    Withdrawn,
    Denied,
    Approved,
    Accepted,
    Processing,
    Listed,
    Sold,
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
          if (
            [STATUSES.PROCESSING].includes(currentStatus) &&
            this.isAdminUser
          ) {
            return "bg-primary";
          }
          if ([STATUSES.LISTED, STATUSES.SOLD].includes(currentStatus)) {
            return "bg-success";
          }
          return "bg-secondary";
        } else if (status === STATUSES.SOLD) {
          if ([STATUSES.LISTED].includes(currentStatus) && this.isAdminUser) {
            return "bg-primary";
          }
          if ([STATUSES.SOLD].includes(currentStatus)) {
            return "bg-success";
          }
          return "bg-secondary";
        }
        return "";
      };
    },
    getStatuses() {
      return STATUSES;
    },
    getFilteredAppraisals(): Appraisal[] {
      return this.appraisals.filter((appraisal: Appraisal) => {
        return this.selectedStatuses.includes(
          this.getCurrentStatus(
            appraisal.appraisalUserStatus,
            appraisal.appraisalAdminStatus
          )
        );
      });
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
    async updateAppraisal(index: number, update: any) {
      const appraisal = this.appraisals[index];
      for (const field of Object.keys(update)) {
        appraisal[field] = update[field];
      }
    },
    async getAppraisals() {
      this.appraisals = (
        (await API.graphql(
          graphqlOperation(listAppraisals)
        )) as GraphQLResult<ListAppraisalsQuery>
      ).data.listAppraisals.items
        .sort((a, b) =>
          a.createdAt > b.createdAt ? -1 : a.createdAt === b.createdAt ? 0 : 1
        )
        .map((appraisal) => {
          const currentStatus = this.getCurrentStatus(
            appraisal.appraisalUserStatus,
            appraisal.appraisalAdminStatus
          );
          const nextStatuses = this.getNextStatuses(
            this.getCurrentStatus(
              appraisal.appraisalUserStatus,
              appraisal.appraisalAdminStatus
            )
          );
          return {
            ...appraisal,
            showMore: false,
            currentStatus: currentStatus,
            nextStatuses: nextStatuses,
            allowedStatuses: [currentStatus].concat(nextStatuses),
          };
        });
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
        this.withdrawnId = id;
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
        this.processingId = id;
      } else if (
        newStatus === STATUSES.LISTED &&
        this.getNextStatuses(oldStatus).includes(newStatus)
      ) {
        this.listedId = id;
      } else if (
        newStatus === STATUSES.SOLD &&
        this.getNextStatuses(oldStatus).includes(newStatus)
      ) {
        this.soldId = id;
      }
    },
    firstLetterCap(s: string): string {
      if (!s) return s;
      const words = s.toLowerCase().replaceAll("_", " ").split(" ");

      return words
        .map((word) => {
          return word[0].toUpperCase() + word.substring(1);
        })
        .join(" ");
    },
    closeModals() {
      this.withdrawnId = "";
      this.approvedId = "";
      this.deniedId = "";
      this.acceptedId = "";
      this.processingId = "";
      this.listedId = "";
      this.soldId = "";
      this.getAppraisals();
    },
  },
  async created() {
    await this.getAppraisals();
    console.log(this.appraisals);
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
.card-footer {
  cursor: pointer;
}
</style>
