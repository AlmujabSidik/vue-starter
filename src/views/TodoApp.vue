<script setup>
import Button from "@/components/ui/button/Button.vue";
import Input from "@/components/ui/input/Input.vue";
import {
  CheckIcon,
  Cross1Icon,
  FileTextIcon,
  Pencil2Icon,
} from "@radix-icons/vue";
import { ref } from "vue";
const initialState = {
  id: "",
  title: "",
  isCompleted: false,
  isEdit: false,
};
const todoApp = ref(initialState);
const allTodos = ref([]);

const handleCreateTodo = () => {
  if (!todoApp.value.title) return;
  allTodos.value.push({ ...todoApp.value, id: allTodos.value.length + 1 });
  todoApp.value.title = "";
};

const handleRemoveTodo = (id) => {
  allTodos.value = allTodos.value.filter((todo) => todo.id !== id);
};

const handleEditTodo = (id) => {
  allTodos.value.map((todo) => {
    todo.id === id ? (todo.isEdit = !todo.isEdit) : (todo.isEdit = false);
  });
};

const handleCompleteTodo = (id) => {
  allTodos.value.find((todo) =>
    todo.id === id ? (todo.isCompleted = !todo.isCompleted) : null
  );
};
</script>
<template>
  <section class="mt-10 flex items-center justify-center">
    <div class="border rounded p-4 w-[380px] h-auto">
      <h1 class="text-xl tracking-tight font-semibold text-zinc-800">
        Todolist with Vue
      </h1>

      <div class="flex flex-col gap-2">
        <label for="title">How are you feeling today?</label>
        <div class="flex gap-2">
          <Input class="h-8" v-model.trim="todoApp.title" />
          <Button @click="handleCreateTodo" size="sm">Add Todo</Button>
        </div>

        <div class="mt-4" v-for="todo in allTodos" :key="todo.id">
          <div class="flex items-center justify-between gap-2">
            <Input v-if="todo.isEdit" class="h-8" v-model.trim="todo.title" />
            <p
              v-else
              class="text-muted-foreground text-sm"
              :class="{ 'line-through': todo.isCompleted }"
            >
              {{ todo.title }}
            </p>
            <div class="flex items-center gap-1">
              <Button
                :disabled="todo.isEdit || todo.isCompleted"
                @click="handleRemoveTodo(todo.id)"
                size="xs"
                variant="destructive"
              >
                <Cross1Icon class="w-4 h-4" />
              </Button>
              <Button
                :disabled="todo.isCompleted"
                @click="handleEditTodo(todo.id)"
                size="xs"
                class="bg-blue-600"
              >
                <Pencil2Icon v-if="!todo.isEdit" class="w-4 h-4" />
                <FileTextIcon v-else class="w-4 h-4" />
              </Button>
              <Button
                :disabled="todo.isEdit"
                @click="handleCompleteTodo(todo.id)"
                size="xs"
                variant="outline"
              >
                <CheckIcon class="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
