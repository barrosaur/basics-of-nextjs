'use client';
import React, { useState, useRef } from "react";

export default function Home() {
  const buttonRef = useRef(null);
  const [tasks, setTasks] = useState([]);

  const handleKeyDown = (e) => {
    if(e.key === 'Enter') {
      e.preventDefault();
      buttonRef.current.click();
    }
  }

  const handleAddTask = () => {
    const newTask = document.getElementById('task-input').value;
    document.getElementById('task-input').value = "";
    setTasks(t => [...t, newTask]);
  }

  return (
    <div className="home-page">
      <h1>Simple TODO</h1>
      <hr />

      <div className="input-container">
        <input 
          type="text" 
          placeholder="Enter task here..." 
          id="task-input"
          autoComplete="off"
          onKeyDown={handleKeyDown}
        />
        <button onClick={handleAddTask} ref={buttonRef}>+</button>
      </div>

      <div className="todo-list-container">
        <ul>
          {/* .map(value, index) */}
          {tasks.map((task, index) => 
            <li key={index}>{task}</li>
          )}
        </ul>
      </div>
    </div>
  );
}
