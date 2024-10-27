<script setup>
import Button from "@/components/ui/button/Button.vue";
import { ref } from "vue";

const showText = ref(false);
</script>
<template>
  <div class="w-full flex flex-col items-center justify-center h-[30rem] gap-8">
    <Transition name="fade">
      <h1
        class="text-6xl text-zinc-800 tracking-tight font-semibold"
        v-if="showText"
      >
        Animation With Vue
      </h1>
    </Transition>
    <Button @click="showText = !showText" size="sm" variant="outline">{{
      showText ? "Fade Leave" : "Fade Enter"
    }}</Button>
  </div>
</template>

<style scoped>
.fade-enter-from {
  opacity: 0;
}

.fade-enter-to {
  opacity: 1;
}

.fade-enter-active {
  transition: all 1s ease;
}

.fade-leave-from {
  opacity: 1;
}

.fade-leave-to {
  opacity: 0;
}

.fade-leave-active {
  transition: all 1s ease;
}
</style>
