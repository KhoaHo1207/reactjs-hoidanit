import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

function AddListTodo(props) {
  const [newToDo, setNewToDo] = useState({
    title: "",
  });

  const handleChangeNewTodo = (e) => {
    const { name, value } = e.target;
    setNewToDo({ ...newToDo, [name]: value });
  };

  const handleAddTodo = (e) => {
    if (!newToDo.title) {
      toast.error("Missing title!");
      return;
    }
    props.addNewToDo({
      id: Math.floor(Math.random() * 1000000),
      title: newToDo.title,
    });
    setNewToDo({ title: "" });
  };
  return (
    <div className="add-todo">
      <input
        type="text"
        name="title"
        value={newToDo.title}
        onChange={(e) => handleChangeNewTodo(e)}
      />
      <button type="button" className="add" onClick={() => handleAddTodo()}>
        Add
      </button>
    </div>
  );
}

export default AddListTodo;
