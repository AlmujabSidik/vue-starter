<script setup>
import axios from "axios";
import { Input } from "@/components/ui/input/index.js";
import { onMounted, ref, watch } from "vue";
import CardNews from "./CardNews.vue";

const dataNews = ref([]);
const filteredDataNews = ref([]);
const isSearching = ref(false);

const search = ref("");

const fetchData = async () => {
  try {
    const response = await axios.get(
      "https://api-berita-indonesia.vercel.app/antara/terbaru/"
    );

    dataNews.value = response.data.data.posts;
    filteredDataNews.value = dataNews.value;
  } catch (error) {
    console.log("You have an error ", error);
  }
};

watch(search, () => {
  isSearching.value = true;
  filteredDataNews.value = dataNews.value.filter((news) => {
    return news.title.toLowerCase().includes(search.value.toLowerCase());
  });
});

onMounted(() => {
  fetchData();
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
    <div v-if="isSearching">Searching...</div>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-10">
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
