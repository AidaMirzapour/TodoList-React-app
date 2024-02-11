import React from "react";

export default function Button(props) {
  return (
    <div>
      <button onClick={props.onClickBtn}>{props.img}</button>
    </div>
  );
}
