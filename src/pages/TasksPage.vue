<template>
  <div class="tasks-container">
    <h1>My tasks</h1>
    <div v-if="loading" class="loading-state">Loading tasks...</div>
    <div v-else-if="todoList.length === 0" class="empty-state">
      You don't have tasks! Create new tasks!
    </div>
    <div
      v-else
      v-for="ListItem in todoList"
      :key="ListItem.id"
      class="task-item"
    >
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
        @update-status="updateItemStatus"
        @edit="editTask"
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
    ...mapState("todo", ["todoList", "loading"]),
  },
  methods: {
    ...mapActions("todo", [
      "loadTasks",
      "removeItem",
      "favoriteItem",
      "updateItemStatus",
      "editTask",
    ]),
  },
  mounted() {
    this.loadTasks();
  },
  beforeCreate() {
    // Динамическая регистрация модуля Vuex
    if (!this.$store.hasModule("todo")) {
      import("../store/modules/todo").then((todoModule) => {
        this.$store.registerModule("todo", todoModule.default);
        this.loadTasks();
      });
    }
  },
};
</script>

<style scoped>
.loading-state {
  color: darkred;
  font-size: 20px;
  text-align: center;
}
</style>

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
  background: #fff;
  border-radius: 10px;
  width: 80%;
  text-align: center;
  color: darkred;
  font-size: 28px;
  font-weight: 600;
  margin: auto;
}

.task-item {
  margin-bottom: 10px;
}
.new-task {
  border-left: 5px solid darkblue;
}
.in-progress {
  border-left: 5px solid orange;
}
.need-validate {
  border-left: 5px solid darkgreen;
}
</style>
