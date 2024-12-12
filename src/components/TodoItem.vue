<template>
  <div :class="[!done ? 'todoItem' : 'doneItem']">
    <div class="content">
      <input type="checkbox" v-model="isChecked" class="checkbox" />
      <div class="details">
        <div class="name">{{ name }}</div>
        <div class="time">Added on: {{ time }}</div>
      </div>
      <div class="actions">
        <button @click="$emit('remove', id)" class="delete-btn">Delete</button>
        <button @click="$emit('favorite', id)" class="favorite-btn">
          Favorite
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TodoItem",
  props: ["id", "name", "done", "time"],
  data() {
    return {
      isChecked: false, // Локальное состояние для чекбокса
    };
  },
};
</script>

<style scoped>
.todoItem,
.doneItem {
  margin: 5px 0;
  border-radius: 10px;
  padding: 20px 20px;
  background: antiquewhite;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.doneItem {
  background: rgb(26, 175, 26);
}

.content {
  display: flex;
  align-items: center;
  width: 100%;
  gap: 10px;
}

.checkbox {
  margin-right: 10px;
}

.details {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.name {
  min-height: 50px;
  max-height: 100px;
  overflow-y: auto;
  padding: 5px;
  background: #fff;
  border: 1px solid darkgreen;
  border-radius: 5px;
  box-sizing: border-box;
  word-wrap: break-word;
  color: darkgreen;
}

.time {
  font-size: 12px;
  color: gray;
}

.actions {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.delete-btn,
.favorite-btn {
  width: 100px;
  height: 40px;
  background: darkgreen;
  color: antiquewhite;
  border: 1px solid darkgreen;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s;
}

.delete-btn:hover {
  background: #ffcccc;
}

.favorite-btn:hover {
  background: #ccffcc;
}
</style>
