<script setup>
import Header from "@/partials/Header.vue";
import { RouterView } from "vue-router";
</script>
<template>
  <Header />
  <main class="max-w-7xl mx-auto px-4 md:px-6 lg:px-6">
    <RouterView />
  </main>
</template>
