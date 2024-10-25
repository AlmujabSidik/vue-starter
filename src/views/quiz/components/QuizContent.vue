<script setup>
import { defineProps } from "vue";
const { question } = defineProps(["question"]);
const emit = defineEmits(["selectOption"]);

const emitSelectedOption = (option) => {
  emit("selectOption", option);
};
</script>
<template>
  <div class="flex flex-col gap-4">
    <h2 class="text-lg font-medium tracking-tight">
      {{ question.text }}
    </h2>
    <div
      v-for="option in question.answers"
      :key="option.id"
      @click="emitSelectedOption(option)"
      class="flex items-center gap-0 cursor-pointer"
    >
      <p
        class="text-muted-foreground text-sm bg-rose-600 text-white tracking-tight w-12 h-12 flex items-center justify-center"
      >
        {{ option.label }}
      </p>
      <p
        class="text-muted-foreground text-sm text-zinc-800 bg-rose-300 w-full h-12 flex items-center tracking-tight pl-4"
      >
        {{ option.text }}
      </p>
    </div>
  </div>
</template>
