'use client';
import React, { useState } from "react";
import { useRouter } from 'next/navigation'; 

export default function Home() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    
    const res = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if(res.status === 200) {
      router.push('/welcome');
    } else if(res.status === 403) {
      router.push('/blocked');
    } else {
      setError(data.message);
    }
  }

  return (
    <>
      <form onSubmit={handleLogin}>
        <div className="container">
          <label htmlFor="">Email</label>
          <input 
            type="email"
            placeholder="johndoe@gmail.com" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="container">
          <label htmlFor="">Password</label>
          <input 
            type="password"
            placeholder="Enter password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button>Submit</button>
      </form>
      {error && <p style={{'color' : 'red'}}>{error}</p>}
    </>
  );
}