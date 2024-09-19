import React, { useState } from 'react';

const TaskForm = ({ onSubmit }) => {
  const [taskData, setTaskData] = useState({ title: '', description: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskData.title && taskData.description) {
      onSubmit(taskData);
      setTaskData({ title: '', description: '' });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Task</h2>
      <input
        type="text"
        placeholder="Task Title"
        value={taskData.title}
        onChange={(e) => setTaskData({ ...taskData, title: e.target.value })}
        required
      />
      <textarea
        placeholder="Task Description"
        value={taskData.description}
        onChange={(e) => setTaskData({ ...taskData, description: e.target.value })}
        required
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
