import React from 'react';
import Image from 'next/image';
import './components.css';

interface NavbarProps {
  onCreateTask: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onCreateTask }) => {
  const imageSize = 20;

  return (
    <nav>
      <header>
        <Image
          src="/Notion Clone.png"
          height={50}
          width={50}
          alt='Notion Clone'
        />
        <div className="desc">
          <h1>Notion Clone</h1>
          <p>This is a bit hard for me...</p>
        </div>
      </header>

      <menu>
        <button className='btn' id='add-btn' onClick={onCreateTask}>
          + Create New Task
        </button>
        <button className='btn' id='del-btn'>
          <Image 
            src="/delete.png"
            height={imageSize}
            width={imageSize}
            alt='Delete'
          />
          Delete
        </button>
      </menu>
    </nav>
  )
}

export default Navbar