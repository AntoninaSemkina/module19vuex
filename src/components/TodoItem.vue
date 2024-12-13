<template>
  <div :class="['todoItem', statusClass, { doneItem: done }]">
    <div class="content">
      <input type="checkbox" v-model="isChecked" class="checkbox" />
      <div class="details">
        <div class="block1">
          <div v-if="!isEditing" class="name">{{ name }}</div>
          <input
            v-else
            v-model="editedTask.name"
            class="name-edit"
            placeholder="Edit name..."
          />
          <div v-if="!isEditing" class="description">{{ description }}</div>
          <textarea
            v-else
            v-model="editedTask.description"
            class="description-edit"
            placeholder="Edit description..."
          ></textarea>
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
        <button v-if="!isEditing" @click="startEdit" class="edit-btn">
          Edit
        </button>
        <!-- <button v-if="!isEditing" @click="checkEditPermission" class="edit-btn">
          Edit
        </button> -->
        <button v-else @click="saveEdit" class="save-btn">Save</button>
        <button v-if="isEditing" @click="cancelEdit" class="cancel-btn">
          Cancel
        </button>
        <button @click="$emit('favorite', id)" class="favorite-btn">
          Favorite
        </button>
        <button @click="$emit('remove', id)" class="delete-btn">Delete</button>
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
      isChecked: false,
      isEditing: false,
      localStatus: this.status,
      editedTask: {
        id: this.id,
        name: this.name,
        description: this.description,
      },
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
    // checkEditPermission() {
    //   const userRole = this.$store.state.userRole; // Пример получения роли пользователя из Vuex
    //   if (userRole === "admin" || userRole === "editor") {
    //     this.startEdit();
    //   } else {
    //     alert("You don't have permission to edit this task.");
    //   }
    // },
    updateStatus() {
      this.$emit("update-status", { id: this.id, status: this.localStatus });
    },
    startEdit() {
      const password = prompt("Enter admin password to edit this task:");
      if (password === "admin") {
        this.isEditing = true;
        alert("Password correct. You can edit the task now.");
      } else {
        alert("Incorrect password. Editing not allowed.");
      }
    },
    saveEdit() {
      this.isEditing = false;
      this.$emit("edit", this.editedTask);
    },
    cancelEdit() {
      this.isEditing = false;
      this.editedTask = {
        id: this.id,
        name: this.name,
        description: this.description,
      };
    },
    toggleFavorite() {
      console.log("Текущий ID:", this.id);
      console.log("Статус done до изменения:", this.done);
      this.$emit("favorite", this.id);
      console.log("Событие отправлено");
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
.favorite-btn,
.edit-btn {
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
.edit-btn {
  background: darkgreen;
  border: 1px solid darkgreen;
}
.save-btn,
.cancel-btn {
  width: 100px;
  height: 20px;
  background: darkgreen;
  color: antiquewhite;
  border: 1px solid darkgreen;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s;
}
.cancel-btn {
  background: darkred;
  color: antiquewhite;
  border: 1px solid darkred;
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
.doneItem {
  background: orange;
}
</style>
