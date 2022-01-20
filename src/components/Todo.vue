<template>
  <div class="container-todo">
    <p>Add todo</p>

    <div class="container-todo-add">
      <input v-model="todo" type="text" />
      <!-- modification of the template to pass the payload to addTodo -->
      <button @click="addTodo({ name: todo, done: false })">Add</button>
    </div>
    <div class="container-todo-li">
      <p><span>todo list</span></p>
      <!-- display the length of the todos -->
      <span class="chip chip-purple"> {{ todosLength }} </span>
    </div>
    <!-- iterate over todos -->
    <ul @click="toggleTodo(index)" v-for="(todo, index) in todos" :key="index">
      <li class="container-todo-li">
        <span class="todo done"> {{ todo.name }} </span>

        <!-- delete the  todo -->
        <button
          class="todo-right container-todo-button"
          @click="deleteTodo(index)"
        >
          delete
        </button>
      </li>
    </ul>
  </div>
</template>
;

<script>
  import { mapGetters, mapMutations } from "vuex";

  export default {
    data() {
      return {
        todo: "",
      };
    },
    /* add a calculated property */
    computed: {
      todos() {
        return this.$store.state.todos;
      },
      ...mapGetters(["todosLength"]),
    },
    methods: {
      /* The mapMutations will automatically add the passed parameter if the mutation uses a payload. */

      ...mapMutations(["addTodo", "deleteTodo"]),
    },
  };
</script>

<style scoped>
  .container-todo {
    width: 500px;
    border: 1px solid #eee;
    border-radius: 3px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 50px;
  }
  .container-todo-add {
    display: flex;
    margin-bottom: 20px;
  }

  button {
    padding: 5px 15px;
    border: 0px;
    border-radius: 5px;
    cursor: pointer;
    margin: 0 3px;
  }
  input {
    padding: 8px 15px;
    outline: 0;
    border: 1px solid #ddd;
    border-radius: 3px;
  }

  .container-todo-add input {
    flex: 1;
    margin-right: 15px;
  }

  ul {
    padding: 0;
    list-style: none;
  }

  li {
    display: flex;
    align-items: center;
  }

  li p {
    flex: 1;
  }
  li .todo {
    flex: 0 0 20px;
    height: 20px;
    border-radius: 30px;
    margin-right: 15px;
    border: 2px solid #333;
    margin-top: 10px;
  }

  li .todo.done {
    background: #333;
  }
  .container-todo-li {
    display: flex;
    justify-content: space-between;
    gap: 200px;
  }

  .todo-right {
    margin-left: 100px;
  }

  .container-todo-button {
    color: red;
    font-size: 3rem;
  }

  .chip {
    display: inline-block;
    text-align: center;
    width: 50px;
    border-radius: 100%;
    background: #333;
    color: white;
  }

  .chip-purple {
    background: #be418c;
  }
</style>
