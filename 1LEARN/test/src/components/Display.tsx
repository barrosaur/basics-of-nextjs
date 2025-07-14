import React from 'react'

const Display = ({ inputs }) => {

  return (
    <div className='display'>
      <p>Name: {inputs.name}</p>
      <p>Age: {inputs.age}</p>
    </div>
  )
}

export default Display