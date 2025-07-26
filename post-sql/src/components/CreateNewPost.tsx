import React, { ReactHTMLElement, useState } from 'react'
import '@/styles/CreateNewPost.css'
import Image from 'next/image';

interface Props {
  onCancel: () => void;
}

const CreateNewPost = ({ onCancel } : Props) => {
  const imageSize = 20;
  const [firstName , setFirstName] = useState('');
  const [lastName , setLastName] = useState('');
  const [email , setEmail] = useState('');

  function clearInput() {
    setFirstName('');
    setLastName('');
    setEmail('');
  }

  const onHandleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      lastName,
      firstName,
      email,
    };

    // THIS IS THE STRUCTURE FOR NEXT JS
    const response = await fetch('/api/handler', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    const result = await response.json();
    alert(result.message);

    clearInput();
  }

  return (
    <form autoComplete='off' className="create-new-post-tab">
      <div className="x-btn-container">
        <button onClick={onCancel}>
          <Image
            src="/x.svg"
            width={imageSize}
            height={imageSize}
            alt='Exit'
          />
        </button>
      </div>
      <div className="input-wrapper">
        <label htmlFor="">First Name</label>
        <input 
          type="text" 
          placeholder='ex. John'
          required
          autoComplete='none'
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>
      <div className="input-wrapper">
        <label htmlFor="">Last Name</label>
        <input 
          type="text" 
          placeholder='ex. Doe'
          required
          autoComplete='none'
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      <div className="input-wrapper">
        <label htmlFor="">Email</label>
        <input 
          type="text" 
          placeholder='johndoe@gmail.com'
          required
          autoComplete='none'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="btn-wrapper">
        <button type='submit' onClick={onHandleSubmit}>Submit</button>
      </div>
    </form>
  )
}

export default CreateNewPost