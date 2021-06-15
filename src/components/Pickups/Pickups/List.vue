<template>
  <div class="accordion" id="accordionExample" v-if="pickups.length > 0">
    <div class="accordion-item">
      <div
        class="accordion-item"
        v-for="(pickupGroupKey, index) in Object.keys(pickupGroups)"
        :key="pickupGroupKey"
      >
        <h2 class="accordion-header" :id="`Heading${index}`">
          <button
            class="accordion-button"
            :class="index !== 0 ? 'collapsed' : ''"
            type="button"
            data-bs-toggle="collapse"
            :data-bs-target="`#Accordion${index}`"
          >
            {{ pickupGroupKey }}
          </button>
        </h2>
        <div
          :id="`Accordion${index}`"
          class="accordion-collapse collapse"
          :class="index === 0 ? 'show' : ''"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            <div
              v-for="appraisal in pickupGroups[pickupGroupKey]"
              :key="appraisal.id"
            >
              {{ appraisal.id }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { API, graphqlOperation } from "aws-amplify";
import { listAppraisals } from "@/graphql/queries";
import { GraphQLResult } from "@aws-amplify/api";
import { ListAppraisalsQuery } from "@/API";
import { Appraisal } from "@/API";

type PickupMap = {
  [key: string]: Appraisal[];
};

export default defineComponent({
  name: "Pickups List",
  data() {
    return {
      pickups: [],
    };
  },
  methods: {
    async getPickups() {
      let filterDate = new Date();
      filterDate.setDate(filterDate.getDate() - 1);
      this.pickups = (
        (await API.graphql(
          graphqlOperation(listAppraisals)
        )) as GraphQLResult<ListAppraisalsQuery>
      ).data.listAppraisals.items
        .sort((a, b) =>
          a.createdAt > b.createdAt ? -1 : a.createdAt === b.createdAt ? 0 : 1
        )
        .filter(
          (appraisal) => !!appraisal.pickupTime // &&
          //new Date(appraisal.pickupTime.time) > filterDate
        );
    },
    formatDate(dateString: string) {
      const dateTime = new Date(dateString);
      const timeZone = "America/Chicago";
      let options = {
        timeZone: timeZone,
      };
      return `${dateTime.toLocaleDateString("en-us", {
        weekday: "long",
        ...options,
      })}, ${dateTime.toLocaleDateString("en-us", {
        month: "long",
        ...options,
      })} ${dateTime.toLocaleDateString("en-us", {
        day: "numeric",
        ...options,
      })}, ${dateTime.toLocaleDateString("en-us", {
        year: "numeric",
        ...options,
      })}`;
    },
  },
  computed: {
    pickupGroups() {
      const pickups: PickupMap = {};
      for (const pickup of this.pickups) {
        const pickupTime = pickup.pickupTime.time;
        const pickupDate = this.formatDate(pickupTime);
        const pickupArray: Appraisal[] = pickups?.[pickupDate]
          ? pickups[pickupDate]
          : [];
        pickupArray.push(pickup);
        pickups[pickupDate] = pickupArray;
      }
      return pickups;
    },
  },
  created() {
    this.getPickups();
  },
});
</script>

<style scoped></style>
