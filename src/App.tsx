import React from 'react';
import './App.css';
import Tasks from './components/Tasks/Tasks';

import DoneTasks from './components/DoneTasks/DoneTasks';
import Progress from './components/Progress/Progress';

function App() {
  return (
    <div className="App">
      <Tasks />
      <Progress />
      <DoneTasks />
    </div>
  );
}

export default App;
