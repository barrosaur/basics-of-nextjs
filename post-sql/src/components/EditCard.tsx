import React, { useState } from 'react'
import '@/styles/EditCard.css'
import Image from 'next/image'
import { Post } from './PostTable'

interface EditProps {
  onCancel: () => void;
  post?: Post; // the question mark is for optional
}

const EditCard = ({ onCancel, post } : EditProps) => {
  const imageSize = 24;
  const [firstName, setFirstName] = useState(post?.first_name);
  const [lastName, setLastName] = useState(post?.last_name);
  const [email, setEmail] = useState(post?.email);

  return (
    <form autoComplete='off' className="edit-container">
      <header className='form-head'>
        <p>Editing <span className="green">{post?.last_name}'s</span> information...</p>
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
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder={post?.first_name}
        />
      </div>
      <div className="input-wrapper">
        <label htmlFor="">Last Name</label>
        <input 
          type="text"
          required
          autoComplete='none'
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          placeholder={post?.last_name}
        />
      </div>
      <div className="input-wrapper">
        <label htmlFor="">Email</label>
        <input 
          type="text" 
          required
          autoComplete='none'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={post?.email}
        />
      </div>

      <div className="submit-btn-container">
        <button type='submit'>Submit</button>
      </div>
    </form>
  )
}

export default EditCard