const state = {
  todoList: [
    { id: 1, name: "name 1", done: false, time: "2024-12-09 10:15" },
    { id: 2, name: "name 2", done: false, time: "2024-12-09 10:15" },
    { id: 3, name: "name 3", done: false, time: "2024-12-09 10:15" },
    { id: 4, name: "name 4", done: false, time: "2024-12-09 10:15" },
    { id: 5, name: "name 5", done: false, time: "2024-12-09 10:15" },
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
  TOGGLE_FAVORITE(state, id) {
    const task = state.todoList.find((item) => item.id === id);
    if (task) {
      task.done = !task.done; // Изменяем состояние `done`
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
    commit("TOGGLE_FAVORITE", id);
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
