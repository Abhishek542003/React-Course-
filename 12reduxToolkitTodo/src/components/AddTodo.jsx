import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice"

const AddTodo = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput("");
  };

  return (
    <>
      <form onSubmit={addTodoHandler} className="flex mt-4 justify-center items-center">
        <input
          type="text"
          placeholder="Write Todo..."
          className="w-2/4  border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white py-1.5"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          type="submit"
          className="rounded-r-lg px-3 py-1.5 bg-green-600 text-white shrink-0"
        >
          Add Todo
        </button>
      </form>
    </>
  );
};

export default AddTodo;
