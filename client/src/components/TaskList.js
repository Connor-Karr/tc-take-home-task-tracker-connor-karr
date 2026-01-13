import { useState } from 'react';
import './TaskList.css';

function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  return (
    <div className="task-list-container">
      <h2>My Tasks</h2>
      <div className="task-list">
        <p>Tasks loading...</p>
      </div>
    </div>
  );
}

export default TaskList;