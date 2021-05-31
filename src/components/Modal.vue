<template>
  <div class="modal fade" ref="modal" role="dialog">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Modal } from 'bootstrap';

export default defineComponent({
  name: "Appraisal Denied",
  emits: {
    close: null,
  },
  data() {
    return {
      modal: {} as Modal,
    };
  },
  mounted() {
    const modalElement = this.$refs.modal as HTMLDivElement;
    modalElement.addEventListener("hidden.bs.modal", () => {
      this.$emit("close");
    });
    this.modal = new Modal(modalElement);
    this.modal.show();
  },
  methods: {
    close() {
      this.modal.hide();
    },
  },
});
</script>
