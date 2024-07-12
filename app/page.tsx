"use client";

import TodoForm from "@/components/TodoForm";
import { RootState } from "@/store";
import { useSelector } from "react-redux";

function Home() {
  const { todos } = useSelector((state: RootState) => state.todo);

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <TodoForm />
      <section className="todo__list mt-4 space-y-3">
        {todos.map((todo) => (
          <div className="shadow rounded bg-white w-[300px] p-3">
            {todo.text}
          </div>
        ))}
      </section>
    </div>
  );
}

export default Home;
