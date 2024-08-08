import Note from "../note";
import styles from "./styles.module.css";

function NoteList({ taskList }) {
  const { containerStyle } = styles;
  return (
    <div className={containerStyle}>
      {taskList.map((task, ind) => {
        return <Note key={ind} task={task} />;
      })}
    </div>
  );
}

export default NoteList;
