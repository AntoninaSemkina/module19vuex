import { fetchTasks, saveTask } from "../mockApi";

const state = {
  todoList: [],
  loading: false,
};

const mutations = {
  SET_LOADING(state, isLoading) {
    state.loading = isLoading;
  },
  SET_TASKS(state, tasks) {
    state.todoList = tasks;
  },
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
      task.done = !task.done;
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
  async loadTasks({ commit }) {
    commit("SET_LOADING", true);
    try {
      const tasks = await fetchTasks();
      commit("SET_TASKS", tasks);
    } finally {
      commit("SET_LOADING", false);
    }
  },
  async addItem({ commit }, item) {
    commit("SET_LOADING", true);
    try {
      const savedTask = await saveTask(item);
      commit("ADD_ITEM", savedTask);
    } finally {
      commit("SET_LOADING", false);
    }
  },
  removeItem({ commit }, id) {
    commit("REMOVE_ITEM", id);
  },
  favoriteItem({ commit }, id) {
    commit("TOGGLE_FAVORITE", id);
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
  loading: (state) => state.loading,
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
