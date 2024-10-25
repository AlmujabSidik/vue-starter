<script setup>
import { useRoute, useRouter } from "vue-router";
import dataQuizez from "@/views/quiz/quizes.json";
import QuizHeader from "@/views/quiz/components/QuizHeader.vue";
import QuizContent from "@/views/quiz/components/QuizContent.vue";
import { computed, ref } from "vue";
import QuizResult from "./QuizResult.vue";

const route = useRoute();
const id = route.params.id;
const quiz = dataQuizez.find((quiz) => quiz.id == id);
const questionLength = quiz.questions.length;
const numberOfCorrectAnswer = ref(0);
const showResult = ref(false);

const currentQuestionIndex = ref(0);
const questionPage = computed(() => {
  return `${currentQuestionIndex.value + 1} / ${questionLength}`;
});

const progressBar = computed(() => {
  const percent = ((currentQuestionIndex.value + 1) / questionLength) * 100;
  return parseInt(percent);
});

const onSelectOption = (option) => {
  if (option.correct) {
    numberOfCorrectAnswer.value++;
  }

  if (currentQuestionIndex.value === questionLength - 1) {
    showResult.value = true;
    return;
  }

  currentQuestionIndex.value++;
};

const router = useRouter();
const goBack = () => {
  router.back();
};
</script>
<template>
  <div class="max-w-md mx-auto mt-10 flex flex-col gap-4">
    <QuizHeader :questionPage="questionPage" :barProgress="progressBar" />
    <QuizContent
      v-if="!showResult"
      :question="quiz.questions[currentQuestionIndex]"
      @selectOption="onSelectOption"
    />
    <QuizResult
      v-else
      :quizQuestionsLength="questionLength"
      :numberOfCorrectAnswer="numberOfCorrectAnswer"
    />
  </div>
</template>
