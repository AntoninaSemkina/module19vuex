<template>
  <div class="container">
    <h1>Create task</h1>
    <TaskForm @add-task="addTask" />
    <div v-if="loading" class="loading-state">Saving task...</div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import TaskForm from "../components/TaskForm.vue";

export default {
  name: "CreateTask",
  components: { TaskForm },
  computed: {
    ...mapState("todo", ["loading"]),
  },
  methods: {
    ...mapActions("todo", ["addItem"]),
    addTask(task) {
      this.addItem(task);
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
.loading-state {
  color: darkred;
  font-size: 18px;
  text-align: center;
  margin-top: 10px;
}
</style>
