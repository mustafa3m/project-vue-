import { createStore } from "vuex";

export default {
  state() {
    return {
      todos: [
        { name: "write  ", done: false },
        { name: "work ", done: false },
      ],
    };
  },
  /*  */
  getters: {
    todosLength(state) {
      return state.todos.length;
    },
  },
  mutations: {
    addTodo(state, payload) {
      state.todos = [...state.todos, payload];
      console.log("add todo mustafa");
    },

    deleteTodo(state, payload) {
      state.todos.splice(payload, 1);
    },
  },

  actions: {},
};
