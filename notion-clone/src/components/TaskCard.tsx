import React from 'react';
import './components.css';

const TaskCard = () => {
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
          <h1>Title goes here...</h1>
          <p className='date-text'>Date goes here...</p>  
        </div>
      </div>

      <button>Open Task</button>
    </div>
  )
}

export default TaskCard