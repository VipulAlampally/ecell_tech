'use client';
import './globals.css';
import React, { useState } from 'react';
import Header from '../components/header/page';
import Task from '../components/task/page';
import TaskForm from '../components/taskform/page';

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  return (
    <div>
      <Header />
      <TaskForm addTask={addTask} />
      <ul>
        {tasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
}

export default App;