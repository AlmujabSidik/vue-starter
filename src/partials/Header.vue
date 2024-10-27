<script setup>
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { RouterLink } from "vue-router";

const navbar = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Starter",
    path: "/starter",
  },
  {
    name: "Projects",
    path: "#",
    child: [
      {
        name: "Todoapp",
        path: "/project/todoapp",
      },
      {
        name: "Quiz",
        path: "/project/quiz",
      },
      {
        name: "News",
        path: "/project/news",
      },
      {
        name: "Animation",
        path: "/project/animation",
      },
    ],
  },
];
</script>

<template>
  <header class="max-w-60 flex items-center justify-center mx-auto p-4">
    <nav>
      <Menubar>
        <MenubarMenu v-for="nav in navbar" :key="nav.name">
          <MenubarTrigger>
            <RouterLink :to="nav.path">{{ nav.name }}</RouterLink>
          </MenubarTrigger>
          <div v-if="nav.child">
            <MenubarContent>
              <MenubarItem
                class="block"
                v-for="child in nav.child"
                :key="child.name"
              >
                <RouterLink active-class="text-slate-400" :to="child.path">
                  <p>{{ child.name }}</p>
                </RouterLink>
              </MenubarItem>
            </MenubarContent>
          </div>
        </MenubarMenu>
      </Menubar>
    </nav>
  </header>
</template>
