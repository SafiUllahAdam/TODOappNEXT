"use client";
import React, { useState } from "react";

export default function Todo() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([
    { todoText: "Task 1", completed: false },
    { todoText: "Task 2", completed: true },
    { todoText: "Task 3", completed: true },
    { todoText: "Task 4", completed: false },
  ]);

  const onClickHandler = (myelem: any) => {
    console.log("myelem", myelem);

    // map runs on array, and returns an array
    const newTodos = todos.map((todo) => {
      console.log("TODO: ", todo);
      if (todo.todoText == myelem.todoText) {
        todo.completed = !todo.completed; // if it's false so make it true, if it's true make it false
      }
      return todo;
    });

    console.log(newTodos);
    setTodos(newTodos);
  };
  const addTodo = () => {
    const newTodo = { todoText: todo, completed: false };
    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
    setTodo("");
  };

  const deleteTodo = (meraTodo: any) => {
    const newTodos = todos.filter((todo) => {
      if (todo.todoText == meraTodo.todoText) return false;
      return true;
    });
    console.log("Old Task", todos, "New Task", newTodos);
    setTodos(newTodos);
  };
  return (
    <>
      <div>Todo</div>
      <input
        placeholder="Add New Task To Be Completed in Your TODO List for Today"
        value={todo}
        onChange={(e) => {
          setTodo(e.target.value);
        }}
      />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map((elm) => {
          return (
            <li
              style={{
                color: elm.completed ? "green" : "red",
                fontStyle: "oblique",
                listStyle: "none",
              }}
              key={elm.todoText}
            >
              <input
                type="checkbox"
                checked={elm.completed}
                onChange={() => {
                  onClickHandler(elm);
                }}
              />
              {elm.todoText}
              <button
                onClick={() => {
                  deleteTodo(elm);
                }}
              >
                {"  "}
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}