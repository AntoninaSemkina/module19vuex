const state = {
  todoList: [
    {
      id: 1,
      name: "name 1",
      description: "description 1",
      status: "new",
      priority: "low",
      deadline: "2024-15-09",
      done: false,
      time: "2024-12-09 10:15",
    },
    {
      id: 2,
      name: "name 2",
      description: "description 2",
      status: "new",
      priority: "low",
      deadline: "2024-15-09",
      done: false,
      time: "2024-12-09 10:15",
    },
    {
      id: 3,
      name: "name 3",
      description: "description 3",
      status: "new",
      priority: "low",
      deadline: "2024-15-09",
      done: false,
      time: "2024-12-09 10:15",
    },
    {
      id: 4,
      name: "name 4",
      description: "description 4",
      status: "new",
      priority: "low",
      deadline: "2024-15-09",
      done: false,
      time: "2024-12-09 10:15",
    },
    {
      id: 5,
      name: "name 5",
      description: "description 5",
      status: "new",
      priority: "low",
      deadline: "2024-15-09",
      done: false,
      time: "2024-12-09 10:15",
    },
  ],
  nextId: 6, // Счётчик для новых задач
};

const mutations = {
  ADD_ITEM(state, item) {
    state.todoList.push(item);
  },
  REMOVE_ITEM(state, id) {
    state.todoList = state.todoList.filter((item) => item.id !== id);
  },
  UPDATE_TASK(state, updatedTask) {
    const index = state.todoList.findIndex(
      (task) => task.id === updatedTask.id
    );
    if (index !== -1) {
      state.todoList[index] = { ...state.todoList[index], ...updatedTask };
    }
  },
  TOGGLE_FAVORITE(state, id) {
    const task = state.todoList.find((item) => item.id === id);
    if (task) {
      task.done = !task.done; // Инвертируем свойство `done`
    }
  },
  UPDATE_ITEM_STATUS(state, { id, status }) {
    const task = state.todoList.find((item) => item.id === id);
    if (task) {
      task.status = status;
    }
  },
};

const actions = {
  addItem({ commit }, item) {
    commit("ADD_ITEM", item);
  },
  removeItem({ commit }, id) {
    commit("REMOVE_ITEM", id);
  },
  favoriteItem({ commit }, id) {
    commit("TOGGLE_FAVORITE", id); // Вызываем мутацию
  },
  updateItemStatus({ commit }, payload) {
    commit("UPDATE_ITEM_STATUS", payload);
  },
  editTask({ commit }, updatedTask) {
    commit("UPDATE_TASK", updatedTask);
  },
};

const getters = {
  todoList: (state) => state.todoList,
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
