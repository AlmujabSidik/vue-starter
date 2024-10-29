<script setup>
import Header from "@/partials/Header.vue";
import { RouterView } from "vue-router";
</script>
<template>
  <Header />
  <main>
    <RouterView />
  </main>
</template>
