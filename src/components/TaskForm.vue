<template>
  <div class="task-form">
    <textarea
      v-model="taskName"
      class="name-input"
      placeholder="Add name..."
    ></textarea>
    <textarea
      v-model="taskDescription"
      class="description-input"
      placeholder="Add description..."
    ></textarea>
    <button class="add-btn" @click="handleSubmit">Add</button>
  </div>
</template>

<script>
export default {
  name: "TaskForm",
  data() {
    return {
      taskName: "",
      taskDescription: "",
    };
  },
  methods: {
    handleSubmit() {
      if (this.taskName.trim() === "") {
        alert("Название задачи не может быть пустым!");
        return;
      }
      const currentTime = new Date()
        .toISOString()
        .slice(0, 16)
        .replace("T", " ");

      // Отправляем данные родительскому компоненту через событие
      this.$emit("add-task", {
        id: Date.now(),
        name: this.taskName,
        description: this.taskDescription,
        done: false,
        time: currentTime,
      });

      // Сбрасываем поля
      this.taskName = "";
      this.taskDescription = "";
    },
  },
};
</script>

<style scoped>
.task-form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 20px 0;
}

.name-input,
.description-input {
  width: 100%;
  padding: 10px;
  border: 1px solid darkred;
  border-radius: 5px;
  box-sizing: border-box;
  resize: none;
  font-family: inherit;
  font-size: 16px;
  line-height: 1.5;
  color: darkred;
}

.add-btn {
  width: 150px;
  height: 40px;
  background: darkred;
  color: aliceblue;
  border: 1px solid darkred;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s;
}
</style>
