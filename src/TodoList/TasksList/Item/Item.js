import React, { useEffect } from "react";
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
  //how rerender hole component?
  useEffect(() => {}, [props]);
  console.log(props.array.focus);

  return (
    <div className={style.Item}>
      <p onClick={handleClick} className={style.taskTitle}>
        {props.title}
      </p>
      <div className={style.btns}>
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
