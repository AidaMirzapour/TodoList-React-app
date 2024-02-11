import React from "react";
import Item from "./Item/Item";
import style from "./TasksList.module.css";

export default function TasksList(props) {
  return (
    <div className={style.TasksList}>
      {props.array.map(function (item, index) {
        return <div key={index} className={style.taskItem}>
          <Item onClick = {props.onItemClick} onDeleteBtnClick={props.onDeleteBtnClick} index={index} title={item.title} desc={item.desc} focus={item.focus} array={props} />
        </div>;
      })}
    </div>
  );
}