import { initStore } from "./store";

const configureStore = () => {
  const actions = {
    ADD_TODO: (curState, newTodo) => {
      const latestTodo = [ ...curState.todoList];
      latestTodo.push(newTodo);
      return { todoList: latestTodo };
    },
    REMOVE_TODO: (curState, todoId) => {
        const updatedArray = curState.todoList.filter(todo => todo.id !== todoId);
        return { todoList: updatedArray};
    }
  };    

  initStore(actions, {
    todoList: [
      { id: "l1", text: "A" },
      { id: "l2", text: "B" },
      { id: "l3", text: "C" },
      { id: "l4", text: "D" },
    ],
  });
};

export default configureStore;
