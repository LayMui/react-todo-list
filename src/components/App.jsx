import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import '../App.css'
import TaskColumn from './TaskColumn'

function App() {
  const tasks = [
    { id: 1, title: "walk the dog", status: "doing"},
    { id: 2, title: "drink some soypro", status: "pending"},
    { id: 3, title: "go to the gym", status: "doing"},
    { id: 4, title: "wash the dishes", status: "pending"},
    { id: 5, title: "make bon bon choc", status: "pending"},
  ]

  // Filter tasks by status
  const pendingTasks = tasks.filter(task => task.status === "pending");
  const doingTasks = tasks.filter(task => task.status === "doing");
  const doneTasks = tasks.filter(task => task.status === "done");

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