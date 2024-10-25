<script setup>
import { Button } from "@/components/ui/button";
import { RouterLink } from "vue-router";

// create function handle
</script>

<template>
  <div
    class="max-w-screen-xl mx-auto px-4 h-[30rem] flex items-center justify-start md:px-8"
  >
    <div class="max-w-lg mx-auto space-y-3 text-center">
      <h3 class="text-zinc-950 font-semibold">404 Error</h3>
      <p class="text-gray-800 text-4xl font-semibold sm:text-5xl">
        Page not found
      </p>
      <p class="text-gray-600">
        Sorry, the page you are looking for could not be found or has been
        removed.
      </p>
      <div class="flex flex-wrap items-center justify-center gap-3">
        <RouterLink to="/">
          <Button size="sm">Go Home</Button>
        </RouterLink>
      </div>
    </div>
  </div>
</template>
