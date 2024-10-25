<script setup>
import axios from "axios";
import { Input } from "@/components/ui/input/index.js";
import { ref, onMounted, watch } from "vue";
import CardNews from "./CardNews.vue";

const dataNews = ref([]);
const filteredDataNews = ref([]);
const isLoading = ref(false);
const search = ref("");

onMounted(() => {
  const fetchData = async () => {
    try {
      isLoading.value = true;
      const response = await axios.get(
        "https://api-berita-indonesia.vercel.app/antara/terbaru/",
      );

      const news = response.data.data.posts;
      dataNews.value = news;
      filteredDataNews.value = news;
    } catch (e) {
      console.log("You have an error, ", e);
    } finally {
      isLoading.value = false;
    }
  };

  fetchData();
});

watch(search, () => {
  console.log(search.value);
  filteredDataNews.value = dataNews.value.filter((news) => {
    return news.title.toLowerCase().includes(search.value.toLowerCase());
  });
});
</script>

<template>
  <div class="max-w-7xl mx-auto mt-10">
    <div class="flex justify-between items-center">
      <h1 class="text-3xl font-bold">News</h1>

      <Input
        v-model.trim()="search"
        class="h-8 max-w-xs"
        placeholder="Search..."
      />
    </div>

    <p v-if="isLoading">Loading...</p>
    <div
      v-else
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-10"
    >
      <CardNews
        v-for="news in filteredDataNews"
        :key="news.pubDate"
        :imgUrl="news.thumbnail"
        :title="news.title"
        :description="news.description"
      />
    </div>
  </div>
</template>
