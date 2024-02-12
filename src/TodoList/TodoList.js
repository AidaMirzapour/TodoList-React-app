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
  const [inputMode, setInputMode] = useState();

  const getData = () => {
    const foundTodo = todos.find((item, cuIndex) => {
      return item.focus === true;
    });
    return foundTodo;
  };

  const editTask = (e, index) => {
    const editedTask = todos.map((item) => {
      if (item.focus === true && todo.title && todo.desc) {
        let newTitle = item.title;
        let newDesc = item.desc;
        newTitle = todo.title;
        newDesc = todo.desc;
        return { title: newTitle, desc: newDesc };
      } else {
        return item;
      }
    });
    setTodos(editedTask);
    setTodo({});
    setInputMode();
  };

  const deleteTask = (e, index) => {
    const delTask = todos.filter((item, cuIndex) => index !== cuIndex);
    setTodos(delTask);
  };

  const onFocus = (e, index) => {
    const changeFocus = todos.map((item, cuIndex) => {
      if (index === cuIndex) {
        let newItem = { ...item, focus: true };
        return newItem;
      } else {
        let newItem = { ...item, focus: false };
        return newItem;
      }
    });
    setTodos(changeFocus);
  };

  const addTask = (e) => {
    e.preventDefault();
    if (todo.title && todo.desc) {
      const newList = [
        ...todos,
        { title: todo.title, desc: todo.desc, focus: false },
      ];
      setTodos(newList);
      setTodo({});
      setInputMode([]);
    }
  };

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
          alt="add"
        />
      </button>
      {inputMode === "add" ? (
        <InputForm
          setInputMode={setInputMode}
          data={getData()}
          onChangeItem={setTodo}
          onSubmitForm={addTask}
          value="Add"
        />
      ) : inputMode === "edit" ? (
        <InputForm
          setInputMode={setInputMode}
          data={getData()}
          onChangeItem={setTodo}
          onSubmitForm={editTask}
          value="Edit"
        />
      ) : null}
    </div>
  );
}
