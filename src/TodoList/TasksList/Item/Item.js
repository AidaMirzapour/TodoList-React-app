import React from "react";
import Button from "./Button/Button";

export default function Item(props) {
  const handleClick = (e) => {
    if (typeof props.onClick !== "undefined") props.onClick(e, props.index);
  };

  const handleDeleteClick = (e) => {
    if (typeof props.onDeleteBtnClick !== "undefined") props.onDeleteBtnClick(e, props.index);}

  
  return (
    <div>
      <p onClick={handleClick}>{props.title}</p>
      <div>
        {" "}
        <Button
          onClickBtn={props.editTask}
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
      {props.focus === true ? <p>{props.desc}</p> : null}
    </div>
  );
}