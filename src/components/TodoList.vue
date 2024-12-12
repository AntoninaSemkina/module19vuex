<template>
  <div>
    <h1>My Tasks</h1>
    <div class="tasks" v-for="ListItem in todoList" :key="ListItem.id">
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
        @edit="handleEdit"
      />
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import TodoItem from "./TodoItem.vue";

export default {
  name: "TodoList",
  components: { TodoItem },
  computed: {
    ...mapState("todo", ["todoList"]),
  },
  methods: {
    ...mapActions("todo", ["removeItem", "favoriteItem"]),
  },
};
</script>
<style scoped>
.container {
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 80%;
}
.tasks {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.add-btn {
  width: 100px;
  height: 40px;
  background: darkred;
  color: aliceblue;
  border: 1px solid darkred;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s;
  margin: 20px;
}
.name-input {
  width: 100%;
  height: 50px;
  padding: 10px;
  border: 1px solid darkred;
  border-radius: 5px;
  box-sizing: border-box;
  resize: none;
  overflow-y: auto;
  font-family: inherit;
  font-size: 16px;
  line-height: 1.5;
  white-space: pre-wrap;
  color: darkred;
}
.description-input {
  width: 100%;
  max-height: 500px;
  padding: 10px;
  border: 1px solid darkred;
  border-radius: 5px;
  box-sizing: border-box;
  resize: none;
  overflow-y: auto;
  font-family: inherit;
  font-size: 16px;
  line-height: 1.5;
  white-space: pre-wrap;
  color: darkred;
}
</style>
