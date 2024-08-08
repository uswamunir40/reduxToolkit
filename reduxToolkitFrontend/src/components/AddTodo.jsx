import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createTodo } from "../features/todo/thunk.js";
const AddTodo = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const addTodoHandler = (e) => {
    e.preventDefault();
    dispatch(createTodo(input));
    setInput("");
  };
  return (
    <div className="w-full">
      <form
        className="mb-4 rounded bg-white px-8 pb-8 pt-6 shadow-md"
        onSubmit={addTodoHandler}
      >
        <div className="mb-4">
          <label
            className="mb-6 block text-4xl font-bold text-gray-700"
            htmlFor="todoInput"
          >
            Add todo
          </label>
          <input
            id="todoInput"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="focus:shadow-outline w-full appearance-none rounded border px-5 py-5 text-2xl leading-tight text-gray-700 shadow focus:outline-none"
            placeholder="Enter todo"
          />
        </div>
        <button
          type="submit"
          className="focus:shadow-outline rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none"
        >
          Add Todo
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
