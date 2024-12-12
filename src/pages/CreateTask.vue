<template>
  <div>
    <h1>Сreate task</h1>
    <TaskForm @add-task="addTask" />
  </div>
</template>

<script>
import { mapActions } from "vuex";
import TaskForm from "../components/TaskForm.vue";

export default {
  name: "CreateTask",
  components: { TaskForm },
  methods: {
    ...mapActions("todo", ["addItem"]),
    addTask(task) {
      this.addItem(task); // Добавляем задачу через Vuex
    },
  },
};
</script>
