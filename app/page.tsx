import React from "react";
import CounterApp from "./counter-app";
import StrPrac from "./str-Prac";
import strPrac from "./str-Prac";
import TodoApp from "./todo-app";

export default function page() {
  return (
    <>
      <h1>STRING PRACTICE</h1>
      <StrPrac />
      <br />
      <h2>COUNTER-APP</h2>
      <CounterApp />
      <br />
      <br />
      <div>
      <h3> TODO APP </h3>
      <TodoApp />
      </div>
    </>
    //To make relation b/w two files, just create a function in new file name in Kabab case like file-name
    // and then in RETURN, inside the fragments we can call the function name in CameCase like FileName
  );
}
