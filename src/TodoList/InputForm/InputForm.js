import React, { useEffect, useRef, useState } from "react";
import style from "./InputForm.module.css";

export default function InputForm(props) {
  const [data, setData] = useState(props.data ?? { title: "", desc: "" });

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

  useEffect(() => {
    props.onChangeItem(data, setData);
  }, [data, props]);

  const handleSubmitClick = (e) => {
    if (typeof props.onSubmitForm !== "undefined")
      props.onSubmitForm(e, props.index);
    setData({ title: "", desc: "" });
  };

  return (
    <form className={style.InputForm} onSubmit={handleSubmitClick} ref={newRef}>
      <p>
        {props.value} {data.title}
      </p>
      <input
        autoFocus
        type="text"
        className={style.titleInput}
        onChange={(e) => setData({ title: e.target.value, desc: data.desc })}
        value={data.title}
      />
      <textarea
        className={style.descInput}
        onChange={(e) => setData({ title: data.title, desc: e.target.value })}
        value={data.desc}
      />
      <input type="submit" className={style.submitInput} value={props.value} />
    </form>
  );
}
