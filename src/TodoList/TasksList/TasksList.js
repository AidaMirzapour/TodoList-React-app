import React from "react";
import Item from "./Item/Item";
import style from "./TasksList.module.css";

function TasksList(props) {
  return (
    <div className={style.TasksList}>
      {props.array.map(function (item, index) {
        return (
          <div key={index} className={style.taskItem}>
            <Item
              onTitleClick={props.onItemClick}
              onDeleteBtnClick={props.onDeleteBtnClick}
              onEditBtnClick={props.onEditBtnClick}
              index={index}
              title={item.title}
              desc={item.desc}
              focus={item.focus}
              array={item}
            />
          </div>
        );
      })}
    </div>
  );
}
export default React.memo(TasksList);
