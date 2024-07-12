import { addTodo, setText } from "@/reducer/todoSlice";
import { RootState } from "@/store";
import { ITodo } from "@/types/todo";
import { FormEvent } from "react";
import { useDispatch, useSelector } from "react-redux";

function TodoForm() {
  const { form } = useSelector((state: RootState) => state.todo);
  const dispatch = useDispatch();

  function onChange(e: FormEvent<HTMLInputElement>) {
    dispatch(setText(e.currentTarget.value));
  }

  function handleAddTodo() {
    if (form.text) {
      const newTodo: ITodo = { text: form.text };
      dispatch(addTodo(newTodo));
    }
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault();

    handleAddTodo();
  }

  return (
    <section className="todo__form">
      <form onSubmit={onSubmit} className="flex gap-x-3">
        <input
          type="text"
          className="border border-black py-1 rounded"
          value={form.text}
          onChange={onChange}
        />
        <button className="bg-black text-white px-5 py-1">Submit</button>
      </form>
    </section>
  );
}

export default TodoForm;
