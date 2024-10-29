<script setup>
import Button from "@/components/ui/button/Button.vue";
import axios from "axios";
import { onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
const product = ref({});
const route = useRoute();
const router = useRouter();
const API_URL = "http://localhost:2000/products";
const isLoading = ref(false);

const fetchSingleProduct = async () => {
  try {
    isLoading.value = true;
    product.value = await axios
      .get(`${API_URL}/${route.params.id}`)
      .then((res) => res.data);
    console.log(product.value);
  } catch (error) {
    console.log("You have an error, ", error);
  } finally {
    isLoading.value = false;
  }
};

onMounted(() => {
  fetchSingleProduct();
});

function goBack() {
  router.back();
}
</script>
<template>
  <main class="w-full flex items-center justify-center h-[40rem]">
    <div
      class="max-w-xs rounded-sm border border-zinc-200 bg-white p-4 shadow-sm"
    >
      <img :src="product.image" :alt="product.title" class="rounded-sm" />
      <div class="flex flex-col gap-2 mt-2">
        <h1 class="text-2xl tracking-tight leading-normal font-semibold">
          {{ product.title }}
        </h1>
        <p class="text-muted-foreground text-sm tracking-tight leading-normal">
          {{ product.description }}
        </p>
        <p>${{ product.price }}</p>
      </div>

      <Button class="mt-4 w-full" size="sm" @click="goBack">Back</Button>
    </div>
  </main>
</template>
