import React from 'react'

// THIS IS FOR IF WE WANNA BE TYPE SAFE
// interface InputProps {
//   inputs: string | number;
//   onHandleChange: (field: string, value: string) => void;
//   onSubmit: (param: string | number) => void;
// }

const Input = ({ onHandleChange, inputs, onSubmit }) => {
  const formStyles = {
    'display': 'flex',
    'flexDirection': 'column',
    'gap': '10px',
    'marginBottom': '5px',
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(inputs);
  }

  // FIELD VERY IMPORTANT
  const handleChange = (field : string, value : string) => {
    onHandleChange(field, value);
  }

  return (
    <div className='input'>
      <form onSubmit={handleSubmit} style={formStyles}>
        <label htmlFor="name">Enter name</label>
        <input 
          type="text" 
          id='name' 
          autoComplete='off'
          value={inputs.name || ''}
          onChange={(e) => handleChange('name', e.target.value)}
        />

        <label htmlFor="age">Enter age</label>
        <input 
          type="number" 
          id='age'
          value={inputs.age || ''}
          onChange={(e) => handleChange('age', e.target.value)}
        />
        
        <button type='submit'>Submit</button>
      </form>

    </div>
  )
}

export default Input