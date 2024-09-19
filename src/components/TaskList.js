import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import TaskForm from './TaskForm';

const TaskList = ({ tasks, onAdd, onDelete }) => {
  const [showForm, setShowForm] = useState(false);

  const handleAddTask = (task) => {
    onAdd(task);
    setShowForm(false);
  };

  return (
    <div>
      <h2>Task List</h2>
      <button className="add-task-button" onClick={() => setShowForm(!showForm)}>
        {showForm ? 'Close' : 'Add Task'}
      </button>

      {showForm && (
        <div className="task-form-container">
          <TaskForm onSubmit={handleAddTask} />
        </div>
      )}

      <ul>
        {tasks.map(task => (
          <li key={task.id} className="task-list-item">
            {/* Task Title links to Task Detail */}
            <Link to={`/task/${task.id}`} className="task-title">
              {task.title}
            </Link>
            <button onClick={() => onDelete(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
