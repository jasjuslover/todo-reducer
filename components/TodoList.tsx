import { RootState } from "@/store";
import React from "react";
import { useSelector } from "react-redux";

function TodoList() {
  const { todos } = useSelector((state: RootState) => state.todo);

  return (
    <section className="todo__list mt-4 space-y-3">
      {todos.map((todo) => (
        <div className="shadow rounded bg-white w-[300px] p-3">{todo.text}</div>
      ))}
    </section>
  );
}

export default TodoList;
