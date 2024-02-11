import React, { useState } from "react";
import TasksList from "./TasksList/TasksList";
import InputForm from "./InputForm/InputForm";
import style from "./TodoList.module.css";

export default function TodoList() {
  const [todos, setTodos] = useState([
    { title: "task1", desc: "description1", focus: false },
    { title: "task2", desc: "description2", focus: false },
    { title: "task3", desc: "description3", focus: false },
    { title: "task4", desc: "description4", focus: false },
    { title: "task5", desc: "description5", focus: false },
  ]);
  const [todo, setTodo] = useState({});
  const [inputMode, setInputMode] = useState(["edit", "add"]);

  function editTask(e, index) {
    const editedTask = todos.map((item, cuIndex) => {
      if (index === cuIndex) {
        let newTitle = item.title;
        let newDesc = item.desc;

        if (todo.title && todo.desc) {
          item.title = todo.title;
          item.desc = todo.desc;
        }
        return { title: newTitle, desc: newDesc };
      }
      return item;
    });
    setTodos(editedTask);
    setTodo({});
    setInputMode([]);
  }

  function deleteTask(e, index) {
    const delTask = todos.filter((item, cuIndex) => index !== cuIndex);
    setTodos(delTask);
  }

  function onFocus(e, index) {
    todos.map((item, cuIndex) => {
      if (index === cuIndex) {
        let newItem = { ...item, focus: true };
        return newItem;
      } else {
        let newItem = { ...item, focus: false };
        return newItem;
      }
    });
  }

  function addTask(event) {
    event.preventDefault();
    if (todo.title && todo.desc) {
      const newList = [
        ...todos,
        { title: todo.title, desc: todo.desc, focus: false },
      ];
      setTodos(newList);
      setTodo({});
      setInputMode([]);
    }
  }

  return (
    <div className={style.TodoList}>
      <h1>Todo List</h1>
      <TasksList
        array={todos}
        onEditBtnClick={(e) => setInputMode("edit")}
        onDeleteBtnClick={deleteTask}
        onItemClick={onFocus}
      />
      <button className={style.plusBtn} onClick={(e) => setInputMode("add")}>
        <img
          width="15"
          height="15"
          src="https://img.icons8.com/ios-glyphs/15/add--v1.png"
          alt="add--v1"
        />
      </button>
      {inputMode === "add" ? (
        <InputForm
          taskName={"add"}
          onChangeTitle={(e) => setTodo({ ...todo, title: e.target.value })}
          onChangeDesc={(e) => setTodo({ ...todo, desc: e.target.value })}
          onSubmitForm={addTask}
        />
      ) : inputMode === "edit" ? (
        <InputForm
          taskName={"edit"}
          onChangeTitle={(e) => setTodo({ ...todo, title: e.target.value })}
          onChangeDesc={(e) => setTodo({ ...todo, desc: e.target.value })}
          onSubmitForm={editTask}
        />
      ) : null}
    </div>
  );
}
