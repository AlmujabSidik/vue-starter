<script setup>
import ProductForm from "./ProductForm.vue";
import { useProduct } from "@/composable/useProduct";

const { createProduct } = useProduct();
</script>
<template>
  <div class="max-w-md mx-auto px-4 md:px-8">
    <ProductForm
      heading="Create Product"
      detail="Please fill in the form for creating product"
      @create-product="createProduct"
    />
  </div>
</template>
