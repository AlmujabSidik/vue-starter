<script setup>
import { Progress } from "@/components/ui/progress";
import { defineProps } from "vue";
const { questionPage, barProgress } = defineProps([
  "questionPage",
  "barProgress",
]);
</script>
<template>
  <header class="flex flex-col gap-2">
    <h1 class="text-2xl text-zinc-800 tracking-tight font-semibold">
      Questions {{ questionPage }}
    </h1>

    <Progress :model-value="barProgress" />
  </header>
</template>
