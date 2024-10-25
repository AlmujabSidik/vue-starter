<script setup>
import { Input } from "@/components/ui/input/index.js";
import CardQuiz from "@/views/quiz/CardQuiz.vue";
import dataQuizez from "@/views/quiz/quizes.json";
import { ref, watch } from "vue";

const quizes = ref(dataQuizez);
const search = ref("");
watch(search, () => {
  quizes.value = dataQuizez.filter((quiz) => {
    return quiz.title.toLowerCase().includes(search.value.toLowerCase());
  });
});
</script>

<template>
  <div class="max-w-4xl mx-auto mt-10">
    <div class="flex justify-between items-center">
      <h1 class="text-3xl font-bold">Quiz</h1>

      <Input
        v-model.trim()="search"
        class="h-8 max-w-xs"
        placeholder="Search..."
      />
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-10">
      <CardQuiz v-for="quiz in quizes" :key="quiz.id" :quiz="quiz" />
    </div>
  </div>
</template>
