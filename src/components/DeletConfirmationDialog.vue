<script setup>
import { ref } from "vue";
import Button from "@/components/ui/button/Button.vue";

const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true,
  },
  productId: {
    type: [String, Number],
    required: true,
  },
  productTitle: {
    type: String,
    required: true,
  },
});

const emit = defineEmits(["confirm", "cancel"]);

const isLoading = ref(false);

const handleConfirm = async () => {
  isLoading.value = true;
  try {
    emit("confirm", props.productId);
  } finally {
    isLoading.value = false;
  }
};

const handleCancel = () => {
  emit("cancel");
};
</script>

<template>
  <div
    v-if="isOpen"
    class="fixed inset-0 z-50 flex items-center justify-center"
  >
    <!-- Backdrop -->
    <div class="fixed inset-0 bg-black/50" @click="handleCancel"></div>

    <!-- Dialog -->
    <div class="relative bg-white rounded-lg p-6 max-w-md w-full mx-4">
      <h3 class="text-lg font-semibold text-gray-900 mb-2">Delete Product</h3>

      <p class="text-gray-600 mb-6">
        Are you sure you want to delete "{{ productTitle }}"? This action cannot
        be undone.
      </p>

      <div class="flex justify-end gap-3">
        <Button variant="outline" @click="handleCancel" :disabled="isLoading">
          Cancel
        </Button>

        <Button
          variant="destructive"
          @click="handleConfirm"
          :disabled="isLoading"
        >
          {{ isLoading ? "Deleting..." : "Delete" }}
        </Button>
      </div>
    </div>
  </div>
</template>
