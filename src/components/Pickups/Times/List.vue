<template>
  <div
    v-for="pickupTime in pickupTimes"
    :key="pickupTime.id"
    class="input-group mb-3"
  >
    <div class="input-group-prepend">
      <span class="input-group-text">{{
        pickupTime.isUsed ? "Used" : "Not Used"
      }}</span>
    </div>
    <input
      type="datetime-local"
      class="form-control"
      :value="formatDateTime(pickupTime.time)"
      disabled
    />
    <div class="input-group-append">
      <button class="btn btn-outline-danger" type="button" id="deletePickupTime" @click="deletePickupTime(pickupTime.id)">
        <BIconTrash></BIconTrash>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { API, graphqlOperation } from "aws-amplify";
import { listPickupTimes } from "@/graphql/queries";
import { GraphQLResult } from "@aws-amplify/api";
import { ListPickupTimesQuery } from "@/API";
import { createPickupTime, deletePickupTime } from "@/graphql/mutations";

export default defineComponent({
  name: "PickupTimesList",
  data() {
    return {
      pickupTimes: [],
    };
  },
  methods: {
    async getPickupTimes() {
      this.pickupTimes = (
        (await API.graphql(
          graphqlOperation(listPickupTimes)
        )) as GraphQLResult<ListPickupTimesQuery>
      ).data.listPickupTimes.items.sort((a, b) =>
        a.time > b.time ? -1 : a.time === b.time ? 0 : 1
      );
    },
    formatDateTime(dateTime: string): string {
      return dateTime.substring(0, dateTime.length - 6);
    },
    async deletePickupTime(id: string) {
      await API.graphql({
        query: deletePickupTime,
        variables: {
          input: {
            id: id,
          },
        },
      });
      await this.getPickupTimes();
    },
  },
  mounted() {
    this.getPickupTimes();
  },
});
</script>

<style scoped></style>
