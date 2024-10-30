<script setup>
import Button from "@/components/ui/button/Button.vue";
import Input from "@/components/ui/input/Input.vue";
import { defineProps, ref, watchEffect } from "vue";

const props = defineProps({
  heading: {
    type: String,
    required: true,
  },
  detail: {
    type: String,
    required: true,
  },
  initialData: {
    type: Object,
    default: () => ({
      title: "",
      description: "",
      price: "",
      image: "",
    }),
  },
  onSubmit: {
    type: Function,
    required: true,
  },
});

const title = ref("");
const description = ref("");
const price = ref("");
const image = ref("");

watchEffect(() => {
  if (props.initialData) {
    title.value = props.initialData.title || "";
    description.value = props.initialData.description || "";
    price.value = props.initialData.price || "";
    image.value = props.initialData.image || "";
  }
});

const handleSubmit = () => {
  const formData = {
    title: title.value,
    description: description.value,
    price: Number(price.value),
    image: image.value,
  };

  props.onSubmit(formData);
};
</script>
<template>
  <div class="mt-10 border rounded-sm shadow-sm max-w-xs h-auto p-4">
    <Button @click="$router.back()" size="sm">Back</Button>
    <h1 class="text-2xl tracking-tight leading-normal font-semibold">
      {{ heading }}
    </h1>
    <p class="text-muted-foreground text-sm tracking-tight">{{ detail }}</p>
    <form class="mt-4 flex flex-col gap-4" @submit.prevent="handleSubmit">
      <div class="flex flex-col gap-1">
        <label for="title">Title</label>
        <Input type="text" v-model="title" id="title" required />
      </div>
      <div class="flex flex-col gap-1">
        <label for="description">Description</label>
        <Input type="text" v-model="description" id="description" required />
      </div>
      <div class="flex flex-col gap-1">
        <label for="price">Price</label>
        <Input type="number" v-model="price" id="price" required />
      </div>
      <div class="flex flex-col gap-1">
        <label for="image">Image</label>
        <Input type="text" v-model="image" id="image" required />
      </div>
      <Button size="sm" class="mt-4 w-full" type="submit">Submit</Button>
    </form>
  </div>
</template>
