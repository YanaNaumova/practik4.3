import { useState } from "react";
import styles from "./styles.module.css";

function Note({ task }) {
  const [isDone, setIsDone] = useState(false);
  function handleChange() {
    setIsDone((prev) => !prev);
  }

  const { taskContainer } = styles;

  const textStyle = {
    color: isDone ? "green" : "black",
  };

  return (
    <div className={taskContainer}>
      <div style={textStyle}>{task}</div>
      <input type="checkbox" onChange={handleChange} checked={isDone} />
    </div>
  );
}

export default Note;
