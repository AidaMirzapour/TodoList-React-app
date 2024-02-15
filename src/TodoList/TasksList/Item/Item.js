import React, { useCallback } from "react";
import Button from "./Button/Button";
import style from "./Item.module.css";

export default function Item(props) {
  const handleClick = useCallback(
    (e) => {
      if (typeof props.onTitleClick !== "undefined")
        props.onTitleClick(e, props.index);
    },
    [props]
  );

  const handleDeleteClick = useCallback(
    (e) => {
      if (typeof props.onDeleteBtnClick !== "undefined")
        props.onDeleteBtnClick(e, props.index);
    },
    [props]
  );

  const handleEditClick = useCallback(
    (e) => {
      if (typeof props.onEditBtnClick !== "undefined")
        props.onEditBtnClick(e, props.index);
    },
    [props]
  );

  return (
    <div>
      <div className={style.Item}>
        <p className={style.taskTitle} onClick={handleClick}>
          {props.title}
        </p>
        <div className={style.btns}>
          {" "}
          <div onClick={handleClick}>
            {" "}
            <Button
              onClickBtn={handleEditClick}
              img={
                <img
                  width="15"
                  height="15"
                  src="https://img.icons8.com/ios-glyphs/15/edit--v1.png"
                  alt="edit"
                />
              }
            />
          </div>
          <Button
            onClickBtn={handleDeleteClick}
            img={
              <img
                width="15"
                height="15"
                src="https://img.icons8.com/ios-glyphs/15/filled-trash.png"
                alt="trash"
              />
            }
          />{" "}
        </div>
      </div>
      {props.array.focus === true ? (
        <div className={style.desc}>{props.array.desc}</div>
      ) : null}
    </div>
  );
}
