import React from "react";
import "./App.css";
import Tasks from "./components/Tasks/Tasks";

import DoneTasks from "./components/DoneTasks/DoneTasks";
import Progress from "./components/Progress/Progress";
import AddTask from "./components/AddTask/AddTask";

function App() {
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
          <span>gergre</span>
          <span>gergre</span>
          <span>greger</span>
          <span>gregreg</span>
          <span>ger</span>
        </div>
        <div className="progress-list">
        <span>gergre</span>
          <span>gergre</span>
          <span>greger</span>
          <span>gregreg</span>
          <span>ger</span>
        </div>
        <div className="done-tasks-list">
        <span>gergre</span>
          <span>gergre</span>
          <span>greger</span>
          <span>gregreg</span>
          <span>ger</span>
        </div>
      </div>
    </div>
  );
}

export default App;
