import React, { useState } from 'react';
import './help.css';

const TaskForm = ({ addTask }) => {
  const [taskName, setTaskName] = useState('');
  const [dueDate, setDueDate] = useState('');

  const handleTaskName = (event) => {
    setTaskName(event.target.value);
  };

  const handleDueDate = (event) => {
    setDueDate(event.target.value);
  };
  const i = 0;
  const handleSubmit = () => {
    if (taskName !== '' && dueDate !== '') {
      
      const newTask = {
        id: i+1,
        name: taskName,
        date: dueDate,
      };
      addTask(newTask);
      setTaskName('');
      setDueDate('');
    }
  };

  return (
    <div id="inputFields">
      <input type="text" placeholder="Task Name" value={taskName} onChange={handleTaskName} />
      <br></br>
      <input type='date' placeholder='Date' value={dueDate} onChange={handleDueDate} />
      <br></br>
      <button onClick={handleSubmit}>Add Task</button>
    </div>
  );
};

export default TaskForm;