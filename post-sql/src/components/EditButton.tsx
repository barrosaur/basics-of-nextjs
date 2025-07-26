import React from 'react'

interface EditProps {
  onEdit: () => void;
}

const EditButton = ({ onEdit } : EditProps) => {
  return (
    <button className='btn edit' onClick={onEdit}>
      Edit
    </button>
  )
}

export default EditButton