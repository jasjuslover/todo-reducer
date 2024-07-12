import { addTodo, setText } from "@/reducer/todoSlice";
import { RootState } from "@/store";
import { ITodo } from "@/types/todo";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormEvent } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import * as yup from "yup";

const todoSchema = yup.object({
  text: yup.string().required(),
});

function TodoForm() {
  const { form } = useSelector((state: RootState) => state.todo);
  const dispatch = useDispatch();

  const { register, handleSubmit, reset } = useForm({
    resolver: yupResolver(todoSchema),
  });

  function onChange(e: FormEvent<HTMLInputElement>) {
    dispatch(setText(e.currentTarget.value));
  }

  function handleAddTodo() {
    if (form.text) {
      const newTodo: ITodo = { text: form.text };
      dispatch(addTodo(newTodo));
    }
  }

  const onSubmit = (data: any) => {
    const newTodo: ITodo = { text: data.text };
    dispatch(addTodo(newTodo));
    reset();
  };

  //   function onSubmit(e: FormEvent) {
  //     e.preventDefault();

  //     handleAddTodo();
  //   }

  return (
    <section className="todo__form">
      <form className="flex gap-x-3" onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("text")}
          type="text"
          className="border border-black py-1 rounded"
        />
        <button className="bg-black text-white px-5 py-1">Submit</button>
      </form>
    </section>
  );
}

export default TodoForm;
