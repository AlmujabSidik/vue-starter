<script setup>
import { ref, watchEffect } from "vue";
import { useRoute, useRouter } from "vue-router";
import CardProduct from "./CardProduct.vue";
import ProductPagination from "./ProductPagination.vue";
import axios from "axios";
import Button from "@/components/ui/button/Button.vue";
import Spinner from "@/components/Spinner.vue";

const route = useRoute();
const router = useRouter();
const page = ref(parseInt(route.query.page) || 1);
const limit = ref(10);
const isLoading = ref(false);
const products = ref({
  data: [],
  total: [],
});
const lastPage = ref(1);
const API_URL = "http://localhost:2000/products";

const fetchProducts = async () => {
  try {
    isLoading.value = true;
    const response = await axios.get(
      `${API_URL}?_page=${page.value}&_per_page=${limit.value}`
    );

    products.value = {
      data: response.data.data,
      total: response.data.items,
    };
    lastPage.value = Math.ceil(response.data.items / limit.value);
  } catch (error) {
    console.log("You have an error, ", error);
  } finally {
    isLoading.value = false;
  }
};

const deleteProduct = async (id) => {
  try {
    isLoading.value = true;

    await axios.delete(`${API_URL}/${id}`);

    await fetchProducts(page.value);
  } catch (error) {
    console.error("Error deleting product:", error);
  } finally {
    isLoading.value = false;
  }
};

function changePage(newPage) {
  if (newPage < 1 || newPage > lastPage.value) return;

  router.push({
    query: { ...route.query, page: newPage },
  });
}

const goToCreateProduct = () => {
  router.push("/project/products/create");
};

watchEffect(async () => {
  const pageFromQuery = parseInt(route.query.page) || 1;
  page.value = pageFromQuery;
  await fetchProducts(pageFromQuery);
});
</script>

<template>
  <Spinner v-if="isLoading" />
  <section v-else class="m-10">
    <div class="max-w-screen-xl mx-auto px-4 md:px-8">
      <div class="items-start justify-between md:flex">
        <div class="max-w-lg">
          <h3 class="text-gray-800 text-xl font-bold sm:text-2xl">
            List Products
          </h3>
          <p class="text-gray-600 mt-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
        <div class="mt-3 md:mt-0">
          <Button @click="goToCreateProduct" size="sm">Add product</Button>
        </div>
      </div>
      <div class="mt-12 shadow-sm border rounded-lg overflow-x-auto">
        <table class="w-full table-auto text-sm text-left">
          <thead class="bg-gray-50 text-gray-600 font-medium border-b">
            <tr>
              <th class="py-3 px-6">Detail Products</th>
              <th class="py-3 px-6">Price</th>
            </tr>
          </thead>
          <tbody class="text-gray-600 divide-y">
            <CardProduct
              @delete-product="deleteProduct"
              v-for="product in products.data"
              :key="product.id"
              :product="product"
            />
          </tbody>
        </table>
      </div>
    </div>

    <div class="flex justify-center w-full mt-10">
      <ProductPagination
        :page="page"
        :lastPage="lastPage"
        @change-page="changePage"
      />
    </div>
  </section>
</template>
