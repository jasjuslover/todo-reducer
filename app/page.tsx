"use client";

import DynamicForm from "@/components/DynamicForm";
import PasswordForm from "@/components/PasswordForm";
import TodoForm from "@/components/TodoForm";
import TodoList from "@/components/TodoList";

function Home() {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <DynamicForm />
      <PasswordForm />
      <TodoForm />
      <TodoList />
    </div>
  );
}

export default Home;
