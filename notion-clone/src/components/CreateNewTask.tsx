'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import './components.css'

interface CreateNewTaskProps {
  onCancelCreate: () => void;
}

const CreateNewTask: React.FC<CreateNewTaskProps> = ({ onCancelCreate }) => {
  const imageSize = 30;


  return (
    <div className='create-new-task-tab'>
      <h1>Create New Task</h1>
      <hr />
      <form>
        <div className="form-input">
          <label htmlFor="">Enter Task Title</label>
          <input type="text" placeholder='Task title...'/>
        </div>

        <textarea 
          className='form-textarea'
          placeholder='Walk the dishes...'
        />
      </form>
      <div className="btn-container">
        <button id='save-btn' type='submit'>
          <Image 
            src="/save.png"
            width={imageSize}
            height={imageSize}
            alt='Save'
          />
          Save
        </button>
        <button id='cancel-btn' onClick={onCancelCreate}>
          <Image 
            src="/cancel.png"
            width={imageSize}
            height={imageSize}
            alt='Cancel'
          />
          Cancel
        </button>
      </div>
    </div>
  )
}

export default CreateNewTask