<script setup>
import Button from "@/components/ui/button/Button.vue";
import { defineProps } from "vue";
import { RouterLink } from "vue-router";
const props = defineProps({
  quizQuestionsLength: {
    type: Number,
    required: true,
  },
  numberOfCorrectAnswer: {
    type: Number,
    required: true,
  },
});
</script>
<template>
  <div>
    <h4>Score:</h4>
    <h1>{{ numberOfCorrectAnswer }}/{{ quizQuestionsLength }}</h1>
    <RouterLink to="/">
      <Button class="mt-10" size="sm">Go Home</Button>
    </RouterLink>
  </div>
</template>
