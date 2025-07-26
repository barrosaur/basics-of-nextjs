import React from 'react'

interface DeleteProps {
  onDelete: () => void;
}

const DeleteButton = ({ onDelete } : DeleteProps) => {
  return (
    <button className='btn del' onClick={onDelete}>
      Delete
    </button>
  )
}

export default DeleteButton