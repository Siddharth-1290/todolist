import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const TaskDetail = ({ tasks, onEdit }) => {
  const { id } = useParams();
  const task = tasks.find(t => t.id === parseInt(id));

  const [editable, setEditable] = useState(false);
  const [formState, setFormState] = useState(task ? { title: task.title, description: task.description } : {});

  if (!task) {
    return <div>Task not found</div>;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onEdit(task.id, formState);
    setEditable(false);
  };

  return (
    <div className="task-detail-container">
      <h2>{editable ? 'Edit Task' : task.title}</h2>
      {editable ? (
        <form onSubmit={handleSubmit} className="task-form">
          <input
            type="text"
            value={formState.title}
            onChange={(e) => setFormState({ ...formState, title: e.target.value })}
            placeholder="Task Title"
            required
          />
          <textarea
            value={formState.description}
            onChange={(e) => setFormState({ ...formState, description: e.target.value })}
            placeholder="Task Description"
            required
          />
          <button type="submit">Save Changes</button>
        </form>
      ) : (
        <div>
          <p>{task.description}</p>
          <button className="edit-button" onClick={() => setEditable(true)}>Edit Task</button>
        </div>
      )}

      <Link to="/tasks" className="back-link">Back to Task List</Link>
    </div>
  );
};

export default TaskDetail;
