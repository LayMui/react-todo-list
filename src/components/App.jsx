import { useState, useEffect } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import '../App.css'
import TaskColumn from './TaskColumn'

function App() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    
    fetch('/tasks.json')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        setTasks(data.tasks);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        console.error('Error fetching tasks:', err);
        setLoading(false);
      });
  }, []);

  // Filter tasks by status
  const pendingTasks = tasks.filter(task => task.status === "pending");
  const doingTasks = tasks.filter(task => task.status === "doing");
  const doneTasks = tasks.filter(task => task.status === "done");

  if (loading) {
    return (
      <div className="container mx-auto text-center mt-10">
        <div className="text-xl">Loading tasks...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto text-center mt-10">
        <div className="text-xl text-red-500">Error loading tasks: {error}</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto">
      <h1 className="font-bold text-4xl mt-5 mb-3">My Todo List</h1>
      <p>
        This is my todo list, may it always be empty except when learning to
        code.
      </p>

      <div className="bg-white p-3 my-5 border rounded">
        <div className="flex justify-between">
          <TaskColumn tasks={pendingTasks} label="Pending" color="neutral" />
          <TaskColumn tasks={doingTasks} label="In Progress" color="slate"/>
          <TaskColumn tasks={doneTasks} label="Done" color="emerald"/>
        </div>
      </div>
    </div>
  );
}

export default App;