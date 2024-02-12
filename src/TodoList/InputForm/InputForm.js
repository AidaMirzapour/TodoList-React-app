import React from "react";
import style from "./InputForm.module.css";

export default function InputForm(props) {

  //handle outside click
  const newRef = useRef(null);
  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  });

  const handleOutsideClick = (e) => {
    if (newRef.current && !newRef.current.contains(e.target)) {
      props.setInputMode([]);
    }
  };
  //--

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
