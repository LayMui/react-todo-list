import { useState, useEffect, useMemo } from 'react'
import '../App.css'
import Header from './Header'
import Tasks from './Tasks'
import NewTaskForm from './NewTaskForm'

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

  const updateTaskStatus = (taskId, newStatus) => {
    if (newStatus === null) {
      // Delete task if newStatus is null
      setTasks(prevTasks => prevTasks.filter(task => task.id !== taskId));
    } else {
      // Otherwise, update status
      setTasks(prevTasks => 
        prevTasks.map(task => 
          task.id === taskId 
            ? { ...task, status: newStatus }
            : task
        )
      );
    }
  };
  
  // Filter tasks by status
  // overkill but it's to demo on useMemo
  const pendingTasks = useMemo(() => tasks.filter(task => task.status === "pending"), [tasks]);
  const doingTasks = useMemo(() => tasks.filter(task => task.status === "doing"), [tasks]);
  const doneTasks = useMemo(() => tasks.filter(task => task.status === "done"), [tasks]);

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
      <Header/>
      <NewTaskForm setTasks={setTasks}/>
      <Tasks 
        tasks={tasks} 
        setTasks={setTasks}
        updateTaskStatus={updateTaskStatus}
        pendingTasks={pendingTasks}
        doingTasks={doingTasks}
        doneTasks={doneTasks}
      />
    </div>
  );
}

export default App;