import React, { Fragment, useState } from "react";
import { useStore } from "../store/store";

const TodoForm = () => {
  const dispatch = useStore()[1];
  const [enteredTodo, setEnteredTodo] = useState("");

  const onAddHandler = () => {
      console.log(enteredTodo);
    dispatch("ADD_TODO", {id:Date.now(), text:enteredTodo});
  };
  return (
    <Fragment>
      <form >
        <input
          type="text"
          onChange={(event) => {
            setEnteredTodo(event.target.value);
          }}
        />
        <button type="button" onClick={onAddHandler}>Save</button>
      </form>
    </Fragment>
  );
};
export default TodoForm;
