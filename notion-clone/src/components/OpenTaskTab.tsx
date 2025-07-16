import React from 'react'
import Image from 'next/image'

interface Props {
  inputs;
  onExit: () => void;
}

const OpenTaskTab: React.FC<Props> = ({ inputs, onExit }) => {
  const imageSize = 20;

  return (
    <div className='open-task-tab'>
      <header>
        <h1>{inputs.title}</h1>
        <div className="open-btn-container">
          <button>
            <Image
              src="/Edit.png"
              height={imageSize}
              width={imageSize}
              alt='Edit'
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
      <p>
        {inputs.content}
      </p>
    </div>
  )
}

export default OpenTaskTab