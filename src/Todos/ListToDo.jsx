import React, { useState } from "react";
import "./Style.scss";
import AddListTodo from "./AddListTodo";
import { ToastContainer, toast } from "react-toastify";
function ListToDo() {
  const [listTodos, setListTodos] = useState([
    {
      id: 1,
      title: "Doing homework",
    },
    {
      id: 2,
      title: "Making video",
    },
    {
      id: 3,
      title: "Fixing",
    },
  ]);

  const addNewToDo = (newTodo) => {
    setListTodos([...listTodos, newTodo]);
    toast.success("Add successfully");
  };
  return (
    <div className="list-todo-container">
      <AddListTodo addNewToDo={addNewToDo} />
      <div className="list-todo-content">
        {listTodos &&
          listTodos.length > 0 &&
          listTodos.map((item, index) => {
            return (
              <div className="todo-child" key={item.id}>
                <span>
                  {item.id} - {item.title}
                </span>

                <button className="edit">Edit</button>

                <button className="delete">Delete</button>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default ListToDo;
