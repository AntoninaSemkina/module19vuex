<template>
  <div class="container">
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

<style scoped>
h1 {
  color: darkred;
}
.container {
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 90%;
}
</style>
