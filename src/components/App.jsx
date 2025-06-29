import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import '../App.css'
import TaskColumn from './TaskColumn'

function App() {
  return (
    <div className="container mx-auto">
      <h1 className="font-bold text-4xl mt-5 mb-3">My Todo List</h1>
      <p>
        This is my todo list, may it always be empty except when learning to
        code.
      </p>

      <div className="bg-white p-3 my-5 border rounded">
      <div className="flex justify-between">
      <TaskColumn />
      <TaskColumn />
      <TaskColumn />

      </div>
      </div>
    </div>
  );
}

export default App;