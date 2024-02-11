import React from "react";
import Button from "./Button/Button";
import style from "./Item.module.css";

export default function Item(props) {
  const handleClick = (e) => {
    if (typeof props.onTitleClick !== "undefined")
      props.onTitleClick(e, props.index);
  };

  const handleDeleteClick = (e) => {
    if (typeof props.onDeleteBtnClick !== "undefined")
      props.onDeleteBtnClick(e, props.index);
  };

  const handleEditClick = (e) => {
    if (typeof props.onEditBtnClick !== "undefined")
      props.onEditBtnClick(e, props.index);
  };

  return (
    <div>
      <p onClick={handleClick} className={style.taskTitle}>
        {props.title}
      </p>
      <div>
        {" "}
        <Button
          onClickBtn={handleEditClick}
          img={
            <img
              width="15"
              height="15"
              src="https://img.icons8.com/ios-glyphs/15/edit--v1.png"
              alt="edit--v1"
            />
          }
        />
        <Button
          onClickBtn={handleDeleteClick}
          img={
            <img
              width="15"
              height="15"
              src="https://img.icons8.com/ios-glyphs/15/filled-trash.png"
              alt="filled-trash"
            />
          }
        />{" "}
      </div>
      {props.array.focus === true ? <p>{props.array.desc}</p> : null}
    </div>
  );
}
