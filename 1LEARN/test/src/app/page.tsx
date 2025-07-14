'use client';
import React, { useState } from 'react'
import Input from '@/components/Input';
import Display from '@/components/Display';

export default function Home() {
  const [inputs, setInputs] = useState({
    name: '',
    age: '',
  });

  // THIS HANDLES THAT IT WONT DISPLAY UNTIL SUBMITTED
  const [submittedInputs, setSubmittedInputs] = useState({
    name: '',
    age: '',
  })

  const handleInputChange = (field, value) => {
    setInputs(prev => ({
      ...prev,
      [field] : value,
    }))
  };

  const handleSubmit = () => {
    setSubmittedInputs(inputs);
    alert('Form submitted!');
  }

  return(
    <div className="home-page">
      <Input onHandleChange={handleInputChange} onSubmit={handleSubmit} inputs={inputs}/>

      <Display inputs={submittedInputs}/>
    </div>
  );
}