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
        path: "animation",
        component: () => import("@/views/animation/AnimationPage.vue"),
      },
      {
        path: "products",
        component: () => import("@/views/products/ProductsPage.vue"),
      },
      {
        path: "products/create",
        component: () => import("@/views/products/CreateProduct.vue"),
      },
      {
        path: "products/:id/edit",
        component: () => import("@/views/products/EditProduct.vue"),
      },
      {
        path: "products/:id",
        component: () => import("@/views/products/ProductDetail.vue"),
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

  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
      };
    }

    if (savedPosition) {
      return savedPosition;
    }

    // Jika URL memiliki query parameter 'page', pertahankan posisi scroll
    if (to.query.page) {
      return false;
    }

    // Untuk route lain, scroll ke atas
    return { top: 0 };
  },
});
