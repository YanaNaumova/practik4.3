import { useState } from "react";
import styles from "./styles.module.css";

function NoteForm({ listUpdate }) {
  const [task, setTask] = useState("");
  function handleChange(event) {
    setTask(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    listUpdate(task);
    setTask("");
  }

  const { form, inputText, button } = styles;
  return (
    <form onSubmit={handleSubmit} className={form}>
      <input
        type="text"
        onChange={handleChange}
        value={task}
        placeholder="Введите заметку"
        className={inputText}
      />
      <input type="submit" value="Добавить" className={button} />
    </form>
  );
}

export default NoteForm;
