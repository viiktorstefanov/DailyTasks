import React, { useState } from "react";
import "./App.css";
import Tasks from "./components/Tasks/Tasks";

import DoneTasks from "./components/DoneTasks/DoneTasks";
import Progress from "./components/Progress/Progress";
import AddTask from "./components/AddTask/AddTask";
import Task from "./components/Task/Task";

function App() {

  const [tasks, setTasks ] = useState<{}[]>([{}]);
  const [workingTasks, setWorkingTasks ] = useState<{}[]>([{}]);
  const [doneTasks, setDoneTasks ] = useState<{}[]>([{}]);

  return (
    <div className="App">
      <AddTask />
      <div className="menu">
        <Tasks />
        <Progress />
        <DoneTasks />
      </div>
      <div className="task-list">
        <div className="tasks-list">
          <Task />
        </div>
        <div className="progress-list">
        </div>
        <div className="done-tasks-list">
        </div>
      </div>
    </div>
  );
}

export default App;
