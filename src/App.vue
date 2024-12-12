<template>
  <div id="app">
    <h1>ToDoList</h1>
    <TodoList />
  </div>
</template>

<script setup>
import TodoList from "./components/TodoList.vue";
</script>
<style scoped>
h1 {
  margin: 20px 0 20px 20px;
  color: darkgreen;
}
</style>
