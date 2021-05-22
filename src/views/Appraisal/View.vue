<template>
  <div class="container mt-5 mb-5">
    <div class="row justify-content-center">
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <h3 class="card-title">{{ titleText }}</h3>
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
              <div class="mb-3">
                <label for="formFile" class="form-label">File Input</label>
                <input class="form-control" type="file" id="formFile" @change="uploadImage($event)" accept="image/*"/>
              </div>
              <div v-if="images">
                <div class="mb-3" v-for="image in images" :key="image">
                  <img :src="image" alt="No image" />
                </div>
              </div>
              <div v-if="appraisalError" class="form-text text-danger mb-3">
                {{ appraisalError }}
              </div>
              <button class="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { API, graphqlOperation, Storage } from "aws-amplify";
import { createAppraisal, updateAppraisal, createS3Object } from "@/graphql/mutations";
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
      imageKeys: [],
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
    titleText() {
      if (this.isUpdate) return "Update Appraisal";
      return "Create Appraisal";
    },
  },
  watch: {
    imageKeys: {
      deep: true,
      handler: "fetchImages",
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
    async uploadImage(e: any) {
      const file = e.target.files[0];
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
      this.imageKeys.push(key);
      console.log('Done');
    },
    async fetchImages(val: string[]) {
      this.images = [];
      for (const imageKey of val) {
        try {
          this.images.push(await this.fetchImage(imageKey));
        } catch (e) {
          console.log(e);
        }
      }
    },
    async fetchImage(key: string) {
      return await Storage.get(key);
    },
    async getAppraisal() {
      const appraisal = (await API.graphql(
        graphqlOperation(getAppraisal, { id: this.id })
      )) as GraphQLResult<GetAppraisalQuery>;
      console.log(appraisal);
      this.name = appraisal.data.getAppraisal.name;
      this.description = appraisal.data.getAppraisal.description;
      this.imageKeys = appraisal.data.getAppraisal.pictures.items.map(
        (item) => item.key
      );
    },
  },
  async created() {
    if (this.isUpdate) await this.getAppraisal();
  },
});
</script>

<style scoped>
img {
  width: 100%;
  height: 230px;
}
</style>
