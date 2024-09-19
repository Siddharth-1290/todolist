import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import TaskList from './components/TaskList';
import TaskDetail from './components/TaskDetail';
import './index.css';

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Task 1', description: 'Description of Task 1', completed: false },
    { id: 2, title: 'Task 2', description: 'Description of Task 2', completed: false }
  ]);

  const addTask = (newTask) => {
    setTasks([...tasks, { id: tasks.length + 1, ...newTask }]);
  };

  const editTask = (id, updatedTask) => {
    setTasks(tasks.map(task => (task.id === id ? { ...task, ...updatedTask } : task)));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <Router>
      <div className="app-container">
        <nav>
          <Link to="/">Home</Link> | <Link to="/tasks">Task List</Link>
        </nav>
        <Routes>
          {/* Home Page */}
          <Route path="/" element={<div><h1>Todo App</h1><p>Welcome! Use the links to view tasks or task details.</p></div>} />

          {/* Task List Page */}
          <Route
            path="/tasks"
            element={<TaskList tasks={tasks} onAdd={addTask} onDelete={deleteTask} />}
          />

          {/* Task Detail Page */}
          <Route
            path="/task/:id"
            element={<TaskDetail tasks={tasks} onEdit={editTask} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
