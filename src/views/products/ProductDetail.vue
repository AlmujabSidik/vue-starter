<script setup>
import Button from "@/components/ui/button/Button.vue";
import { onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useProduct } from "@/composable/useProduct";
import Spinner from "@/components/Spinner.vue";
const route = useRoute();
const router = useRouter();
const { product, isLoading, fetchProduct } = useProduct();
onMounted(() => {
  fetchProduct(route.params.id);
});

function goBack() {
  router.back();
}
</script>
<template>
  <main class="w-full flex items-center justify-center h-[40rem]">
    <Spinner v-if="isLoading" />
    <div
      v-else
      class="max-w-xs rounded-sm border border-zinc-200 bg-white p-4 shadow-sm"
    >
      <img :src="product?.image" :alt="product?.title" class="rounded-sm" />
      <div class="flex flex-col gap-2 mt-2">
        <h1 class="text-2xl tracking-tight leading-normal font-semibold">
          {{ product?.title }}
        </h1>
        <p class="text-muted-foreground text-sm tracking-tight leading-normal">
          {{ product?.description }}
        </p>
        <p>${{ product?.price }}</p>
      </div>

      <Button class="mt-4 w-full" size="sm" @click="goBack">Back</Button>
    </div>
  </main>
</template>
