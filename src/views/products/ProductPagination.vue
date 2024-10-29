<script setup>
import { Button } from "@/components/ui/button";

import {
  Pagination,
  PaginationList,
  PaginationNext,
  PaginationPrev,
} from "@/components/ui/pagination";

const props = defineProps({
  page: Number,
  lastPage: Number,
});

const emit = defineEmits(["change-page"]);

const changePage = (newPage) => {
  emit("change-page", newPage);
};
</script>

<template>
  <Pagination>
    <PaginationList class="flex items-center gap-1">
      <PaginationPrev @click="changePage(page - 1)" :disabled="page <= 1" />
      <Button
        v-for="pageNum in props.lastPage"
        :key="pageNum"
        variant="outline"
        size="sm"
        :class="{ 'bg-primary text-white': pageNum === page }"
        @click="changePage(pageNum)"
      >
        {{ pageNum }}
      </Button>
      <PaginationNext
        @click="changePage(page + 1)"
        :disabled="page >= lastPage"
      />
    </PaginationList>
  </Pagination>
</template>
