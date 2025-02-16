import { createRouter, createWebHistory } from "vue-router";
import LandingPage from "@/components/LandingPage.vue";
import MiniQuiz from "@/components/MiniQuiz.vue";

const routes = [
  {
    path: "/",
    name: "LandingPage",
    component: LandingPage,
  },
  {
    path: "/quiz",
    name: "MiniQuiz",
    component: MiniQuiz,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;