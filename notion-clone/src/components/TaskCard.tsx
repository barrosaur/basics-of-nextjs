'use client'
import React, { useState } from 'react';
import './components.css';
import OpenTaskTab from './OpenTaskTab';

const TaskCard = ({ inputs }) => {
  const date = new Date().toLocaleString();
  const [open, setOpen] = useState(false);

  return (
    <div className='task-card'>

      <div className="task">
        <div className="checkbox-container">
          <label className="checkbox">
            <input type="checkbox" />
            <span className="checkmark"></span>
          </label>
        </div>
        <div className="info-surface">
          <h1>{inputs.title}</h1>
          <p className='date-text'>{date}</p>  
        </div>
      </div>

      <button onClick={() => setOpen(true)}>Open Task</button>
      {open && (
        <OpenTaskTab inputs={inputs} onExit={() => setOpen(false)}/>
      )}
    </div>
  )
}

export default TaskCard