import React, { useState } from 'react';
import Header from './Components/Header/index';
import './App.css';
import ListItem from './Components/ListItem';
import NewTaskInput from './Components/NewTaskInput';

const App = () => {
  const [tasks, setTasks] = useState([]);

  function addNewTask(task) {
    const itensCopy = Array.from(tasks);
    itensCopy.push({id: tasks.length, value: task});
    setTasks(itensCopy);
  }

  function updateTask({target}, index) {
    const itensCopy = Array.from(tasks);
    itensCopy.splice(index, 1, { id: index, value: target.value });
    setTasks(itensCopy);
  }

  function deleteTask(index) {
    const itensCopy = Array.from(tasks);
    itensCopy.splice(index, 1);
    setTasks(itensCopy);
  }

  return (
    <div className="App">
      <div className="App-header">
        <Header />
        <NewTaskInput onSubmit={addNewTask} />
        {tasks.map(({id, value}, index) => (
          <ListItem
            key={id}
            value={value}
            onChange={(event) => updateTask(event, index)}
            onDelete={() => deleteTask(index)}
          />
        ))}
        <div className="Array-preview">
          <pre>
            {JSON.stringify(tasks, null, 4)}
          </pre>
        </div>
      </div>
    </div>
  )
}
export default App;

