import React from "react";
import style from "./Button.module.css";

function Button(props) {
  return (
    <div>
      <button onClick={props.onClickBtn} className={style.btn}>
        {props.img}
      </button>
    </div>
  );
}
export default React.memo(Button);
