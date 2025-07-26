import React, { useState } from 'react'
import '@/styles/EditCard.css'
import Image from 'next/image'

interface EditProps {
  onCancel: () => void;
}

const EditCard = ({ onCancel } : EditProps) => {
  const imageSize = 24;

  return (
    <form autoComplete='off' className="edit-container">
      <header className='form-head'>
        <p>Editing __ information...</p>
        <button className="x-btn" onClick={onCancel}>
          <Image
            src="/x.svg"
            width={imageSize}
            height={imageSize}
            alt='Exit'
          />
        </button>
      </header>
      <div className="input-wrapper">
        <label htmlFor="">First Name</label>
        <input
          type='text'
          required
          autoComplete='none'
        />
      </div>
      <div className="input-wrapper">
        <label htmlFor="">Last Name</label>
        <input 
          type="text"
          required
          autoComplete='none'
        />
      </div>
      <div className="input-wrapper">
        <label htmlFor="">Email</label>
        <input 
          type="text" 
          required
          autoComplete='none'
        />
      </div>

      <div className="submit-btn-container">
        <button type='submit'>Submit</button>
      </div>
    </form>
  )
}

export default EditCard