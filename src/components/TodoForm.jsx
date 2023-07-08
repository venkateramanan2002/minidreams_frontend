import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewTodo } from "../redux/actions";

const TodoForm = () => {
  const [text, setText] = useState("");
  const [deadline, setDeadline] = useState("");

  const dispatch = useDispatch();

  const onFormSubmit = (e) => {
    e.preventDefault();

    dispatch(addNewTodo(text, deadline));

    setText("");
    setDeadline("");
  };

  const onInputChange = (e) => {
    setText(e.target.value);
  };

  const onDeadlineChange = (e) => {
    setDeadline(e.target.value);
  };

  return (
    <form className="form" onSubmit={onFormSubmit}>
      <input
        placeholder="Enter new todo..."
        className="input"
        onChange={onInputChange}
        value={text}
      />

      <input
        type="datetime-local"
        placeholder="Enter deadline..."
        className="input"
        onChange={onDeadlineChange}
        value={deadline}
      />
      <button type="submit" className="button-to">Add Todo</button>
    </form>
  );
};

export default TodoForm;
