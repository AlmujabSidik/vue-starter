<script setup>
import Button from "@/components/ui/button/Button.vue";
import { EyeOpenIcon, Pencil2Icon, TrashIcon } from "@radix-icons/vue";
import { useRouter } from "vue-router";
import { defineProps, ref } from "vue";
import DeleteConfirmationDialog from "@/components/DeletConfirmationDialog.vue";

const router = useRouter();

const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits(["delete-product"]);

function goToDetailProduct() {
  router.push(`/project/products/${props.product.id}`);
}

const showDeleteDialog = ref(false);

const deleteProduct = (id) => {
  showDeleteDialog.value = true;
};

const handleDeleteConfirm = (id) => {
  emit("delete-product", id);
  showDeleteDialog.value = false;
};

const handleDeleteCancel = () => {
  showDeleteDialog.value = false;
};
</script>

<template>
  <tr>
    <td class="flex items-center gap-x-3 py-3 px-6">
      <img
        :src="product.image"
        class="w-12 h-12 rounded-full whitespace-nowrap"
      />
      <div>
        <span class="block text-gray-700 text-sm font-medium">{{
          product.title
        }}</span>
        <span class="block text-gray-700 text-xs">{{
          product.description
        }}</span>
      </div>
    </td>
    <td class="px-6 py-4 whitespace-nowrap">{{ product.price }}</td>
    <td class="text-right px-6 whitespace-nowrap">
      <Button @click="goToDetailProduct" size="icon" variant="ghost">
        <EyeOpenIcon class="w-4 h-4" />
      </Button>
      <Button size="icon" variant="ghost">
        <Pencil2Icon class="w-4 h-4" />
      </Button>
      <Button @click="deleteProduct(product.id)" size="icon" variant="ghost">
        <TrashIcon class="w-4 h-4 text-red-600" />
      </Button>
    </td>

    <DeleteConfirmationDialog
      :is-open="showDeleteDialog"
      :product-id="product.id"
      :product-title="product.title"
      @confirm="handleDeleteConfirm"
      @cancel="handleDeleteCancel"
    />
  </tr>
</template>
