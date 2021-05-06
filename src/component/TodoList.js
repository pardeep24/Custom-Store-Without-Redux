import React from "react";
import { useStore } from "../store/store";

const TodoList = () => {
  const [state,dispatch] = useStore();

  const onRemoveHandler = (todoId) =>{
    dispatch('REMOVE_TODO',todoId);
  }
  return (
    <ul>
      {state.todoList.map((list) => (
        <li key={list.id} onClick={onRemoveHandler.bind(this, list.id)}>{list.text}</li>
      ))}
    </ul>
  );
};

export default TodoList;
