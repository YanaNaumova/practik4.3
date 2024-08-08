import "./App.css";
import NoteList from "./components/noteList";
import NoteForm from "./components/noteForm";
import { useState } from "react";

function App() {
  const [taskList, setTaskList] = useState([]);

  function listUpdate(newTask) {
    setTaskList((prevArr) => [...prevArr, newTask]);
  }
  return (
    <div className="App">
      <NoteForm listUpdate={listUpdate} />
      <NoteList taskList={taskList} />
    </div>
  );
}

export default App;
