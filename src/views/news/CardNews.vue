<script setup>
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

defineProps({
  imgUrl: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
});
</script>

<template>
  <Card>
    <CardHeader class="p-0">
      <img :src="imgUrl" class="rounded-t-sm" :alt="title" />
    </CardHeader>
    <CardContent class="pt-4 flex flex-col gap-2">
      <CardTitle>{{ title }}</CardTitle>
      <CardDescription>{{ description }}</CardDescription>
    </CardContent>
    <CardFooter class="flex flex-col items-start gap-2">
      <Button class="w-full bg-rose-600 text-white" size="sm">Detail</Button>
    </CardFooter>
  </Card>
</template>
