'use client'
import React, { useState } from 'react';
import './components.css';
import OpenTaskTab from './OpenTaskTab';

interface Props {
  inputs : {
    title: string;
    content: string;
  }
}

const TaskCard: React.FC<Props> = ({ inputs: initialInputs }) => {
  const date = new Date().toLocaleString();
  const [open, setOpen] = useState(false);
  const [inputs, setInputs] = useState(initialInputs);

  const handleUpdateTitle = (newTitle : string) => {
    setInputs((prev) => ({ ...prev, title: newTitle}))
  }

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
        <OpenTaskTab 
          inputs={inputs} 
          onExit={() => setOpen(false)}
          onSaveTitle={handleUpdateTitle}
        />
      )}
    </div>
  )
}

export default TaskCard