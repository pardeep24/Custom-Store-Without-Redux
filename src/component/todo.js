import React, { Fragment } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const Todo = () =>{
    return(
        <Fragment>
            <TodoForm />
            <TodoList />
        </Fragment>
    );
}

export default Todo;