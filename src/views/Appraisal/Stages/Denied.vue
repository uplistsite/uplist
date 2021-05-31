<template>
  <Modal>
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Modal title</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <p>Modal body text goes here.</p>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </Modal>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Modal from '@/components/Modal.vue';

export default defineComponent({
  name: "Appraisal Denied",
  props: {
    id: String,
  },
  components: {
    Modal,
  },
});
</script>
