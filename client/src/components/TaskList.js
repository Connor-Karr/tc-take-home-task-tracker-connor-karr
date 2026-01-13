import { useState, useEffect } from 'react';
import './TaskList.css';

function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await fetch('http://localhost:8080/api/tasks');
      
      if (!response.ok) {
        throw new Error('Failed to fetch tasks');
      }
      
      const result = await response.json();
      setTasks(result.data);
    } catch (err) {
      setError(err.message);
      console.error('Error fetching tasks:', err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="task-list-container">
        <h2>My Tasks</h2>
        <div className="task-list">
          <p className="loading">Loading...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="task-list-container">
        <h2>My Tasks</h2>
        <div className="task-list">
          <p className="error">Error: {error}</p>
          <button onClick={fetchTasks} className="retry-button">
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="task-list-container">
      <h2>My Tasks</h2>
      <div className="task-list">
        {tasks.length === 0 ? (
          <p className="empty">No tasks found</p>
        ) : (
          <ul className="tasks">
            {tasks.map((task) => (
              <li key={task.id} className={`task-item ${task.status}`}>
                <div className="task-header">
                  <span className="task-id">#{task.id}</span>
                  <span className={`task-status ${task.status}`}>
                    {task.status}
                  </span>
                </div>
                <h3 className="task-title">{task.title}</h3>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default TaskList;