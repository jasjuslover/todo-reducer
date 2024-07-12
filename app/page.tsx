"use client";

import TodoForm from "@/components/TodoForm";
import TodoList from "@/components/TodoList";

function Home() {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <TodoForm />
      <TodoList />
    </div>
  );
}

export default Home;
