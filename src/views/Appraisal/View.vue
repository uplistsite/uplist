<template>
  <div
    v-if="isCreate"
    class="alert alert-primary d-flex align-items-center"
    role="alert"
  >
    <BIconInfoCircleFill class="bi flex-shrink-0 me-2"></BIconInfoCircleFill>
    <div>You'll be able to add images after creating the appraisal.</div>
  </div>
  <div class="container mt-5 mb-5">
    <ul class="nav nav-tabs justify-content-center">
      <li class="nav-item">
        <a class="nav-link" href="#" :class="infoClasses">Info</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#images" :class="imagesClasses">Images</a>
      </li>
    </ul>
    <div class="row justify-content-center">
      <div class="col-12" v-if="!hash">
        <div class="card shadow">
          <div class="card-body">
            <h3 class="card-title">{{ typeText + " Appraisal" }}</h3>
            <form @submit.stop.prevent="processAppraisal">
              <div class="row g-3">
                <div class="col-12">
                  <label for="inputName" class="form-label label-required"
                    >Name</label
                  >
                  <input
                    v-model="name"
                    type="text"
                    class="form-control"
                    id="inputName"
                    required
                  />
                </div>
                <div class="col-12">
                  <label for="inputWear" class="form-label label-required"
                    >Wear</label
                  >
                  <select
                    class="form-select"
                    id="inputWear"
                    v-model="wear"
                    required
                  >
                    <option disabled value="">Please select a wear</option>
                    <option v-for="wear in wears" :key="wear" :value="wear">
                      {{ firstLetterCap(wear) }}
                    </option>
                  </select>
                </div>
                <div class="col-md-7">
                  <label
                    for="inputDescription"
                    class="form-label label-required"
                    >Description</label
                  >
                  <textarea
                    v-model="description"
                    type="text"
                    class="form-control"
                    id="inputDescription"
                    rows="3"
                    required
                  />
                </div>
                <div class="col-md-5">
                  <label for="inputDefects" class="form-label">Defects</label>
                  <textarea
                    v-model="defects"
                    type="text"
                    class="form-control"
                    id="inputDefects"
                    rows="3"
                  />
                </div>
                <div class="col-md-4">
                  <label for="inputMake" class="form-label">Make</label>
                  <input
                    v-model="make"
                    type="text"
                    class="form-control"
                    id="inputMake"
                  />
                </div>
                <div class="col-md-4">
                  <label for="inputModel" class="form-label">Model</label>
                  <input
                    v-model="model"
                    type="text"
                    class="form-control"
                    id="inputModel"
                  />
                </div>
                <div class="col-md-4">
                  <label for="inputYear" class="form-label">Year</label>
                  <input
                    v-model="year"
                    type="number"
                    class="form-control"
                    id="inputYear"
                    placeholder="2021"
                    pattern="[0-9]{4}"
                  />
                </div>
              </div>
              <div v-if="appraisalError" class="form-text text-danger">
                {{ appraisalError }}
              </div>
              <button class="btn btn-primary float-end mt-3">
                {{ typeText }}
              </button>
            </form>
          </div>
        </div>
      </div>
      <div class="col-12" v-if="hash === '#images'">
        <div class="card shadow">
          <div class="card-body">
            <div class="mb-3">
              <input
                class="form-control"
                type="file"
                id="formFileMultiple"
                @change="uploadImages($event)"
                accept="image/*"
                ref="formFileMultiple"
                multiple
              />
              <div v-if="appraisalError" class="form-text text-danger">
                {{ appraisalError }}
              </div>
            </div>
            <div v-if="images">
              <img
                v-for="image in images"
                :key="image"
                :src="image"
                alt="No image"
                class="me-3 mb-3"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { API, graphqlOperation, Storage } from "aws-amplify";
import {
  createAppraisal,
  updateAppraisal,
  createS3Object,
} from "@/graphql/mutations";
import { getAppraisal } from "@/graphql/queries";
import { GraphQLResult } from "@aws-amplify/api";
import { GetAppraisalQuery } from "@/API";
import { v4 as uuid } from "uuid";

interface HTMLInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
}

const WEARS = ["POOR", "WELL_USED", "USED", "LIGHTLY_USED", "LIKE_NEW", "NEW"];

export default defineComponent({
  name: "Appraisal View",
  data() {
    return {
      appraisalError: "",
      name: "",
      wear: "",
      description: "",
      defects: "",
      make: "",
      model: "",
      year: null,
      images: [],
      wears: WEARS.reverse(),
      hash: "",
    };
  },
  props: {
    id: String,
  },
  computed: {
    isCreate(): boolean {
      return !this.id;
    },
    isUpdate(): boolean {
      return !!this.id;
    },
    typeText() {
      if (this.isUpdate) return "Update";
      return "Create";
    },
    infoClasses() {
      if (!this.hash) return "active";
      return "";
    },
    imagesClasses() {
      if (this.hash === "#images") return "active";
      if (this.isCreate) return "disabled";
      return "";
    },
  },
  watch: {
    "$route.hash": {
      handler: function (hash) {
        this.hash = hash;
      },
      deep: true,
      immediate: true,
    },
  },
  methods: {
    async processAppraisal() {
      if (this.isCreate) await this.createAppraisal();
      if (this.isUpdate) await this.updateAppraisal();
    },
    async navigateListAppraisals() {
      await this.$router.push({ name: "ListAppraisals" });
    },
    async navigateAppraisalImages(id: string) {
      await this.$router.push({
        name: "UpdateAppraisal",
        hash: "#images",
        params: { id: id },
      });
    },
    async createAppraisal() {
      try {
        const appraisal: any = await API.graphql({
          query: createAppraisal,
          variables: {
            input: {
              name: this.name,
              wear: this.wear,
              description: this.description,
              defects: this.defects,
              make: this.make,
              model: this.model,
              year: this.year,
            },
          },
        });
        await this.navigateAppraisalImages(appraisal.data.createAppraisal.id);
      } catch (e) {
        this.appraisalError = e?.errors[0].message;
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
              wear: this.wear,
              description: this.description,
              defects: this.defects,
              make: this.make,
              model: this.model,
              year: this.year,
            },
          },
        });
        await this.navigateListAppraisals();
      } catch (e) {
        this.appraisalError = e?.errors[0].message;
      }
    },
    async uploadImages(e: HTMLInputEvent) {
      const newFiles = Array.from(e.target.files);
      await Promise.all(
        newFiles.map(async (file: File) => {
          const { name: fileName, type: mimeType } = file;
          const key = `${uuid()}${fileName}`;
          await Storage.put(key, file, {
            contentType: mimeType,
          });
          await API.graphql({
            query: createS3Object,
            variables: {
              input: {
                foreignId: this.id,
                key: key,
              },
            },
          });
          this.images.push(await this.fetchImage(key));
        })
      );
      const inputElement = this.$refs.formFileMultiple as HTMLInputElement;
      inputElement.value = null;
    },
    async fetchImages(val: string[]) {
      this.images = [];
      await Promise.all(
        val.map(async (imageKey) => {
          try {
            this.images.push(await this.fetchImage(imageKey));
          } catch (e) {
            console.log(e);
          }
        })
      );
    },
    async fetchImage(key: string) {
      return await Storage.get(key);
    },
    async getAppraisal() {
      const appraisal = (await API.graphql(
        graphqlOperation(getAppraisal, { id: this.id })
      )) as GraphQLResult<GetAppraisalQuery>;
      this.name = appraisal.data.getAppraisal.name;
      this.wear = appraisal.data.getAppraisal.wear;
      this.description = appraisal.data.getAppraisal.description;
      this.defects = appraisal.data.getAppraisal.defects;
      this.make = appraisal.data.getAppraisal.make;
      this.model = appraisal.data.getAppraisal.model;
      this.year = appraisal.data.getAppraisal.year;
      const imageKeys = appraisal.data.getAppraisal.pictures.items.map(
        (item) => item.key
      );
      if (imageKeys) await this.fetchImages(imageKeys);
    },
    firstLetterCap(s: string): string {
      const words = s.toLowerCase().replaceAll("_", " ").split(" ");

      return words
        .map((word) => {
          return word[0].toUpperCase() + word.substring(1);
        })
        .join(" ");
    },
  },
  async created() {
    if (this.isUpdate) await this.getAppraisal();
  },
});
</script>

<style scoped>
img {
  max-width: 100%;
  max-height: 200px;
  height: auto;
}
</style>
