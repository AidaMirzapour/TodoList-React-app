import React from "react";
import style from "./InputForm.module.css";

export default function InputForm(props) {
  return (
    <form className={style.InputForm} onSubmit={props.onSubmitForm}>
      <p>{props.taskName}</p>
      <input
        autoFocus
        type="text"
        className={style.titleInput}
        onChange={props.onChangeTitle}
      />
      <textarea className={style.descInput} onChange={props.onChangeDesc} />
      <input type="submit" className={style.submitInput} value={props.value} />
    </form>
  );
}
