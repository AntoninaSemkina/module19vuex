<template>
  <div class="task-form">
    <div class="block1">
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
    </div>
    <div class="block2">
      <div class="status">
        <h4>Choose status:</h4>
        <select id="status-select" v-model="selectedStatus">
          <option
            v-for="status in statuses"
            :key="status.value"
            :value="status.value"
          >
            {{ status.label }}
          </option>
        </select>
      </div>
      <div class="priority">
        <h4>Choose priority:</h4>
        <select id="priority-select" v-model="selectedPriority">
          <option
            v-for="priority in priorities"
            :key="priority.value"
            :value="priority.value"
          >
            {{ priority.label }}
          </option>
        </select>
      </div>

      <div class="deadline">
        <h4>Choose deadline:</h4>
        <div class="date-picker-container">
          <input
            id="task-date"
            type="date"
            v-model="selectedDate"
            class="date-picker"
          />
        </div>
      </div>
    </div>

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
      selectedDate: "",
      selectedStatus: "",
      selectedPriority: "",
      priorities: [
        { value: "low", label: "Low" },
        { value: "medium", label: "Medium" },
        { value: "high", label: "High" },
      ],
      statuses: [
        { value: "new", label: "new task" },
        { value: "in process", label: "in process" },
        { value: "need to validate", label: "need to validate" },
      ],
    };
  },
  methods: {
    handleSubmit() {
      if (this.taskName.trim() === "") {
        alert("Name couldn't be empty!");
        return;
      }
      if (this.taskDescription.trim() === "") {
        alert("Description couldn't be empty!");
        return;
      }
      if (!this.selectedStatus) {
        alert("Choose status!");
        return;
      }
      if (!this.selectedPriority) {
        alert("Choose level of priority!");
        return;
      }
      if (!this.selectedDate) {
        alert("Choose deadline!");
        return;
      }
      const currentTime = new Date()
        .toISOString()
        .slice(0, 16)
        .replace("T", " ");

      // передача данных родительскому компоненту через событие
      this.$emit("add-task", {
        id: Date.now(),
        name: this.taskName,
        description: this.taskDescription,
        done: false,
        time: currentTime,
        status: this.selectedStatus,
        priority: this.selectedPriority,
        deadline: this.selectedDate,
      });

      this.taskName = "";
      this.taskDescription = "";
      this.selectedStatus = "";
      this.selectedPriority = "";
      this.selectedDate = "";
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
.block2 {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
}
.status,
.deadline,
.priority {
  background: aliceblue;
  border-radius: 5px;
  color: darkred;
  border: 1px solid darkred;
  width: 30%;
  height: 100px;
  text-align: center;
}
#priority-select,
#status-select {
  width: 50%;
  background: aliceblue;
  border-radius: 5px;
  color: darkred;
  border: 1px solid darkred;
  text-align: center;
}

#task-date {
  align-content: center;
  margin: auto;
  background: aliceblue;
  border-radius: 5px;
  color: darkred;
  border: 1px solid darkred;
}

.date-picker {
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
}

.date-picker:focus {
  outline: none;
  border-color: #007bff;
  box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
}
</style>
