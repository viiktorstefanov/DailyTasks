import React, { FormEvent, useState } from "react";
import "./App.css";
import Tasks from "./components/Tasks/Tasks";

import DoneTasks from "./components/DoneTasks/DoneTasks";
import Progress from "./components/Progress/Progress";
import AddTask from "./components/AddTask/AddTask";
import Task from "./components/Task/Task";

function App() {
  const [tasks, setTasks] = useState<
    {
      id: string;
      title: string;
      status: { notReady: boolean; inProgress: boolean; done: boolean };
    }[]
  >([]);

  const deleteTaskHandler = (id: string): void => {
    setTasks((state) => state.filter((task) => task.id !== id));
  };

  const addTaskHandler = ( taskTitle : string) : void => {
    setTasks(state => ([...state, { id: Math.random().toString(),  title: taskTitle, status: {
      notReady: true, inProgress: false, done: false
    }}]));
  }

  return (
    <div className="App">
      <AddTask addTaskHandler={addTaskHandler} />
      <div className="menu">
        <Tasks />
        <Progress />
        <DoneTasks />
      </div>
      <div className="task-list">
        <div className="tasks-list">
          {tasks.map(item => <Task key={item.id} deleteTaskHandler={deleteTaskHandler} item={item} />)}
        </div>
        <div className="progress-list"></div>
        <div className="done-tasks-list"></div>
      </div>
    </div>
  );
}

export default App;
