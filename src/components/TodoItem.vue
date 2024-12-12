<template>
  <div :class="['todoItem', statusClass]">
    <div class="content">
      <input type="checkbox" v-model="isChecked" class="checkbox" />
      <div class="details">
        <div class="block1">
          <div class="name">{{ name }}</div>
          <div class="description">{{ description }}</div>
        </div>
        <div class="block2">
          <div class="status">
            <label for="status-select">Status:</label>
            <select
              id="status-select"
              v-model="localStatus"
              @change="updateStatus"
            >
              <option value="new">New Task</option>
              <option value="in process">In Process</option>
              <option value="need to validate">Need to Validate</option>
            </select>
          </div>
          <div class="priority">Priority: {{ priority }}</div>
          <div class="deadline">Deadline: {{ deadline }}</div>
        </div>
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
  props: [
    "id",
    "name",
    "done",
    "time",
    "description",
    "status",
    "priority",
    "deadline",
  ],
  data() {
    return {
      isChecked: false, // Локальное состояние для чекбокса
      localStatus: this.status,
    };
  },
  computed: {
    statusClass() {
      return {
        "new-task": this.status === "new",
        "in-progress": this.status === "in process",
        "need-validate": this.status === "need to validate",
      };
    },
  },
  methods: {
    updateStatus() {
      this.$emit("update-status", { id: this.id, status: this.localStatus });
    },
  },
};
</script>

<style scoped>
.todoItem,
.doneItem {
  margin: 5px 0;
  border-radius: 10px;
  padding: 20px 20px;
  background: lightgrey;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.doneItem {
  background: orange;
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

.name,
.description {
  min-height: 50px;
  max-height: 100px;
  overflow-y: auto;
  padding: 5px;
  background: #fff;
  border: 1px solid darkred;
  border-radius: 5px;
  box-sizing: border-box;
  word-wrap: break-word;
  color: darkred;
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
  background: darkred;
  color: antiquewhite;
  border: 1px solid darkred;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s;
}
.favorite-btn {
  background: rgb(243, 130, 2);
  border: 1px solid rgb(243, 130, 2);
}
.block1 {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.block2 {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
}
.status,
.deadline,
.priority {
  color: darkred;
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
