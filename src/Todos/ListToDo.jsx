import React, { useState } from "react";
import "./Style.scss";
import AddListTodo from "./AddListTodo";
import { ToastContainer, toast } from "react-toastify";
import Color from "../views/HOC/Color";
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

  const [editTodo, setEditTodo] = useState({}); //neu khong co {} -> mac dinh la undefined
  const addNewToDo = (newTodo) => {
    setListTodos([...listTodos, newTodo]);
    toast.success("Add successfully");
  };

  const handleDeleteTodo = (todo) => {
    const crrTodo = listTodos.filter((item) => item.id !== todo.id);
    setListTodos(crrTodo);
    toast.success("Delete successfully");
  };

  const handleEditTodo = (todo) => {
    // const { editTodo, listTodos } = this.state;
    const isObjectEmpty = Object.keys(editTodo).length === 0;
    //save
    if (!isObjectEmpty && editTodo.id === todo.id) {
      const listTodosCoppy = [...listTodos];
      const objIndex = listTodosCoppy.findIndex((item) => item.id === todo.id);

      //Update object's name property.
      listTodos[objIndex].title = editTodo.title;
      setListTodos(listTodosCoppy);
      setEditTodo({});
      toast.success("Update successfully");
    } else {
      //edit
      setEditTodo(todo);
    }
  };

  const handleChangeTodo = (e) => {
    const editTodoCoppy = { ...editTodo };
    editTodoCoppy.title = e.target.value;
    setEditTodo(editTodoCoppy);
  };
  let isObjectEmpty = editTodo && Object.keys(editTodo).length === 0;
  return (
    <>
      <p>Todo App with Reactjs</p>
      <div className="list-todo-container">
        <AddListTodo addNewToDo={addNewToDo} />
        <div className="list-todo-content">
          {listTodos &&
            listTodos.length > 0 &&
            listTodos.map((item, index) => {
              return (
                <div className="todo-child" key={item.id}>
                  {isObjectEmpty === true ? (
                    <span>
                      {index + 1} - {item.title}
                    </span>
                  ) : (
                    <>
                      {editTodo.id === item.id ? (
                        <span>
                          {index + 1} -{" "}
                          <input
                            value={editTodo.title}
                            onChange={(e) => handleChangeTodo(e)}
                          />
                        </span>
                      ) : (
                        <span>
                          {index + 1} - {item.title}
                        </span>
                      )}
                    </>
                  )}
                  <button className="edit" onClick={() => handleEditTodo(item)}>
                    {!isObjectEmpty && editTodo.id === item.id
                      ? "Save"
                      : "Edit"}
                  </button>

                  <button
                    className="delete"
                    onClick={() => handleDeleteTodo(item)}
                  >
                    Delete
                  </button>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}

export default Color(ListToDo);
