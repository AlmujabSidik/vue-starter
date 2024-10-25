<script setup>
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useRouter } from "vue-router";
import { defineProps } from "vue";

const router = useRouter();
const { quiz } = defineProps(["quiz"]);

function goToQuiz() {
  router.push({ name: "quiz", params: { id: quiz.id } });
}
</script>

<template>
  <Card class="border-0 shadow-none cursor-pointer" @click="goToQuiz">
    <CardHeader class="p-0">
      <div class="relative">
        <img :src="quiz.img" class="rounded-sm" :alt="quiz.title" />
        <p
          class="bg-rose-600 text-xs rounded-sm text-white absolute top-1 right-1 px-2 py-1"
        >
          {{ quiz.questions.length }} Questions
        </p>
      </div>
    </CardHeader>
    <CardContent class="pt-4 px-0 flex flex-col gap-2">
      <CardTitle class="text-xl">{{ quiz.title }}</CardTitle>
      <CardDescription>{{ quiz.desc }}</CardDescription>
    </CardContent>
  </Card>
</template>
