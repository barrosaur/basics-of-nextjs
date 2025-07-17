import React, { useState, useEffect } from 'react'
import Image from 'next/image'

interface Props {
  inputs: {
    title: string;
    content: string
  };
  onExit: () => void;
  onSaveTitle: (newTitle : string) => void;
}

const OpenTaskTab: React.FC<Props> = ({ inputs, onExit, onSaveTitle }) => {
  const imageSize = 20;

  const [isEditing, setIsEditing] = useState(false);
  const [editableTitle, setEditableTitle] = useState(inputs.title);
  const [editableContent, setEditableContent] = useState(inputs.content);

  //updates TaskCard title after hitting save button
  useEffect(() => {
    setEditableTitle(inputs.title);
    setEditableContent(inputs.content);
  }, [inputs.title, inputs.content])

  const handleIsEditing = () => {
    setIsEditing(!isEditing);
  }

  const handleSave = () => {
    onSaveTitle(editableTitle);
    setIsEditing(false);
  }

  return (
    <div className='open-task-tab'>
      <header>
        {isEditing ? (
          <input
            type='text'
            value={editableTitle}
            onChange={(e) => setEditableTitle(e.target.value)}
            className='open-task-tab-input'
          />
        ) : (
          <h1>{editableTitle}</h1>
        )}
        <div className="open-btn-container">
          <button onClick={isEditing ? handleSave : handleIsEditing}>
            <Image
              src={isEditing ? "/save.png" : "/Edit.png"}
              height={imageSize}
              width={imageSize}
              alt={isEditing ? "Save" : "Edit"}
            />
          </button>
          <button onClick={onExit}>
            <Image 
              src="/x.png"
              height={imageSize}
              width={imageSize}
              alt='Exit'
            />
          </button>
        </div>
      </header>
      <hr />
      {isEditing ? (
        <textarea
          value={editableContent}
          onChange={(e) => setEditableContent(e.target.value)}
          className='open-task-tab-textarea'
        />
      ) : (
        <p>{editableContent}</p>
      )}
    </div>
  )
}

export default OpenTaskTab