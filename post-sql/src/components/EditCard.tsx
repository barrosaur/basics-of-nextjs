import React, { useState } from 'react'
import '@/styles/EditCard.css'
import Image from 'next/image'
import { Post } from './PostTable'

interface EditProps {
  onCancel: () => void;
  post?: Post; // the question mark is for optional
  onUpdate: (updatedPost: Post) => void;
}

const EditCard = ({ onCancel, post, onUpdate } : EditProps) => {
  const imageSize = 24;
  // the ?? '' makes it so that it will always be a string
  // and not undefined
  const [firstName, setFirstName] = useState(post?.first_name ?? '');
  const [lastName, setLastName] = useState(post?.last_name ?? '');
  const [email, setEmail] = useState(post?.email ?? '');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch('/api/handler', {
        method: 'PUT',
        headers: {'Content-Type' : 'application/json'},
        body: JSON.stringify({
          id: post?.id,
          first_name: firstName,
          last_name: lastName,
          email: email
        }),
      });

      const data = await res.json();
      if(!res.ok) {
        alert(`Failed to update: ${data.message}`);
        return;
      }

      alert('✅ Update successful!');

      // for the destructuring part, ...post, this is to get the fields we
      // want edited
      if(post) {
        onUpdate({
          ...post,
          first_name: firstName,
          last_name: lastName,
          email: email
        })
      }
    } catch(err) {
      console.error('Error updating: ', err);
      alert('Kay sala ni dev, sala ni dev, iyang dakong sala 🙏');
    }
  };

  return (
    <form autoComplete='off' className="edit-container" onSubmit={handleSubmit}>
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