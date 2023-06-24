import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [task, setTask] = useState(["боба", "биба", "бэба"]);
  const elements = task.map((item, i) => {
    return (
      <li
        onClick={() => {
          deleteTask(i);
        }}
        key={i}
      >
        {item}
      </li>
    );
  });

  return <ul>{elements}</ul>;
}

export default App;
