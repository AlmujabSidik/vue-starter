import { createWebHistory, createRouter } from "vue-router";
import TodoApp from "@/views/TodoApp.vue";
import Home from "@/views/Home.vue";
import Quiz from "@/views/quiz/Quiz.vue";
import News from "@/views/news/News.vue";
import DetailQuiz from "@/views/quiz/DetailQuiz.vue";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/project",
    children: [
      {
        path: "todoapp",
        component: TodoApp,
      },
      {
        path: "quiz",
        component: Quiz,
      },
      {
        path: "quiz/:id",
        name: "quiz",
        component: DetailQuiz,
      },
      {
        path: "news",
        component: News,
      },

      {
        path: ":pathMatch(.*)*",
        component: () => import("@/views/errors/404.vue"),
      },
    ],
  },

  {
    path: "/:pathMatch(.*)*",
    component: () => import("@/views/errors/404.vue"),
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
