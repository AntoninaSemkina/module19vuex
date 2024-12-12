<template>
  <div class="tasks-container">
    <h1>My tasks</h1>
    <div v-if="todoList.length === 0" class="empty-state">
      you don't have tasks! Create new tasks!
    </div>
    <div v-for="ListItem in todoList" :key="ListItem.id" class="task-item">
      <TodoItem
        :id="ListItem.id"
        :name="ListItem.name"
        :description="ListItem.description"
        :done="ListItem.done"
        :status="ListItem.status"
        :priority="ListItem.priority"
        :time="ListItem.time"
        :deadline="ListItem.deadline"
        @remove="removeItem"
        @favorite="favoriteItem"
      />
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import TodoItem from "../components/TodoItem.vue";

export default {
  name: "TasksPage",
  components: { TodoItem },
  computed: {
    ...mapState("todo", ["todoList"]), // Получаем список задач из Vuex
  },
  methods: {
    ...mapActions("todo", ["removeItem", "favoriteItem"]), // Методы для удаления и избранного
  },
};
</script>

<style scoped>
h1 {
  color: darkred;
}
.tasks-container {
  padding: 20px;
  max-width: 800px;
  margin: auto;
}

.empty-state {
  text-align: center;
  color: gray;
  font-size: 18px;
  margin: 20px 0;
}

.task-item {
  margin-bottom: 10px;
}
</style>
