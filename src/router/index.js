import { createRouter, createWebHistory } from "vue-router";
import TasksPage from "../pages/TasksPage.vue";
import CreateTask from "../pages/CreateTask.vue";
import SettingsPage from "../pages/SettingsPage.vue";

const routes = [
  { path: "/", name: "TasksPage", component: TasksPage },
  { path: "/create", name: "CreateTask", component: CreateTask },
  { path: "/settings", name: "SettingsPage", component: SettingsPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
