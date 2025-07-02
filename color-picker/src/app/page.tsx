"use client";
import React, { useState } from 'react';

export default function Home() {
  const [color, setColor] = useState("#FFFFFF");

  const handleColorChange = (e) => {
    setColor(e.target.value);
  }

  return (
    <div className="home-page">
      <div className="color-screen" style={{backgroundColor: color, borderColor: color}}>
        <p>{color}</p>
      </div>

      <div className="input-container">
        <h2>Pick a color</h2>
        <input type="color" value={color} onChange={handleColorChange}/>
      </div>
    </div>
  );
}
