<template>
  <div class="container">
    <textarea
      v-model="itemName"
      class="name-input"
      placeholder="add name..."
    ></textarea>
    <textarea
      v-model="itemDescription"
      class="description-input"
      placeholder="add description..."
    ></textarea>
    <button class="add-btn" @click="handleAddItem">Add</button>

    <div class="tasks" v-for="ListItem in todoList" :key="ListItem.id">
      <TodoItem
        :id="ListItem.id"
        :name="ListItem.name"
        :description="ListItem.description"
        :done="ListItem.done"
        :time="ListItem.time"
        @remove="removeItem"
        @favorite="favoriteItem"
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
  data() {
    return {
      itemName: "", // Локальное поле для новой задачи
      itemDescription: "", // Локальное поле для новой задачи
    };
  },
  computed: {
    ...mapState("todo", ["todoList"]),
  },
  methods: {
    ...mapActions("todo", ["addItem", "removeItem", "favoriteItem"]),
    handleAddItem() {
      if (this.itemName.trim() !== "") {
        const currentTime = new Date()
          .toISOString()
          .slice(0, 16)
          .replace("T", " ");
        this.addItem({
          id: Date.now(), // Уникальный ID
          name: this.itemName,
          done: false,
          description: this.itemDescription,
          time: currentTime,
        });
        this.itemName = ""; // Очистка поля

        this.itemDescription = ""; // Очистка поля
      }
    },
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
  background: darkgreen;
  color: aliceblue;
  border: 1px solid darkgreen;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s;
  margin: 20px;
}
.name-input {
  width: 100%;
  height: 50px;
  padding: 10px;
  border: 1px solid darkgreen;
  border-radius: 5px;
  box-sizing: border-box;
  resize: none;
  overflow-y: auto;
  font-family: inherit;
  font-size: 16px;
  line-height: 1.5;
  white-space: pre-wrap;
  color: darkgreen;
}
.description-input {
  width: 100%;
  max-height: 500px;
  padding: 10px;
  border: 1px solid darkgreen;
  border-radius: 5px;
  box-sizing: border-box;
  resize: none;
  overflow-y: auto;
  font-family: inherit;
  font-size: 16px;
  line-height: 1.5;
  white-space: pre-wrap;
  color: darkgreen;
}
</style>
