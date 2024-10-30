<script setup>
import Spinner from "@/components/Spinner.vue";
import { onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useProduct } from "@/composable/useProduct";
import ProductForm from "./ProductForm.vue";
const route = useRoute();
const router = useRouter();

const currentPage = route.query.fromPage || "1";

const { product, isLoading, updateProduct, fetchProduct } = useProduct();
onMounted(() => {
  fetchProduct(route.params.id);
});

const handleSubmit = async (formData) => {
  const success = await updateProduct(route.params.id, formData);
  if (success) {
    router.push({
      path: "/project/products",
      query: { page: currentPage },
    });
  }
};
</script>
<template>
  <Spinner v-if="isLoading" />
  <div class="max-w-md mx-auto px-4 md:px-8">
    <ProductForm
      heading="Create Product"
      detail="Please fill in the form for creating product"
      :onSubmit="handleSubmit"
      :initial-data="product"
    />
  </div>
</template>
