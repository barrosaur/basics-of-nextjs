'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import './components.css'


interface CreateNewTaskProps {
  onCancelCreate: () => void;
  onHandleChange: (field : string, value : string) => void;
  inputs;
  onSubmit: (param : string) => void;
}

const CreateNewTask: React.FC<CreateNewTaskProps> = ({ onHandleChange, onCancelCreate, inputs, onSubmit }) => {
  const imageSize = 30;

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(inputs);
  }

  const handleChange = (field : string, value : string) => {
    onHandleChange(field, value);
  }

  return (
    <div className='create-new-task-tab'>
      <h1>Create New Task</h1>
      <hr />
      <form onSubmit={handleSubmit}>
        <div className="form-input">
          <label htmlFor="">Enter Task Title</label>
          <input 
            type="text" 
            placeholder='Task title...' 
            value={inputs.title || ''}
            onChange={(e) => handleChange('title', e.target.value)}
          />
        </div>

        <textarea 
          className='form-textarea'
          placeholder='Walk the dishes...'
          value={inputs.content || ''}
          onChange={(e) => handleChange('content', e.target.value)}
        />

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
      </form>
      
    </div>
  )
}

export default CreateNewTask