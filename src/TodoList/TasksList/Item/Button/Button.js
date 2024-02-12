import React from "react";
import style from "./Button.module.css";

export default function Button(props) {
  return (
    <div>
      <button onClick={props.onClickBtn} className={style.btn}>
        {props.img}
      </button>
    </div>
  );
}
