<template>
  <div class="container mt-5 mb-5">
    <div class="row justify-content-center">
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <h3 class="card-title">{{ typeText + " Appraisal" }}</h3>
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
              <div v-if="appraisalError" class="form-text text-danger mb-3">
                {{ appraisalError }}
              </div>
              <button class="btn btn-primary">{{ typeText }}</button>
            </form>
          </div>
        </div>
      </div>
      <div class="col-12 mt-3" v-if="isUpdate">
        <div class="card">
          <div class="card-body">
            <div class="mb-3">
              <label for="formFileMultiple" class="form-label"
                >File Input</label
              >
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
import { ref, defineComponent } from "vue";
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

export default defineComponent({
  name: "Appraisal View",
  data() {
    return {
      appraisalError: "",
      name: "",
      description: "",
      images: [],
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
  },
  methods: {
    async processAppraisal() {
      if (this.isCreate) await this.createAppraisal();
      if (this.isUpdate) await this.updateAppraisal();
    },
    async navigateListAppraisals() {
      await this.$router.push({ name: "ListAppraisals" });
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
    async uploadImages(e: any) {
      const newFiles = Array.from(e.target.files);
      await Promise.all(
        newFiles.map(async (file: any) => {
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
      this.description = appraisal.data.getAppraisal.description;
      const imageKeys = appraisal.data.getAppraisal.pictures.items.map(
        (item) => item.key
      );
      if (imageKeys) await this.fetchImages(imageKeys);
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
