import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "TasksPage",
    component: () => import("../pages/TasksPage.vue"),
  },
  {
    path: "/create",
    name: "CreateTask",
    component: () => import("../pages/CreateTask.vue"),
  },
  {
    path: "/settings",
    name: "SettingsPage",
    component: () => import("../pages/SettingsPage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
