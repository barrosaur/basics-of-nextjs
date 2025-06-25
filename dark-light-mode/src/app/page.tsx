'use client';
import React, { useState } from "react";

export default function Home() {
  const [mode, setMode] = useState(false);

  const switchMode = () => {
    setMode(!mode);
  }

  return (
    <div className={mode ? 'light-mode' : 'dark-mode'}>
      <h1>Dark-Light Mode</h1>
      <p>Press button to switch</p>
      <div className="btn-container">
        <button onClick={switchMode}>Switch</button>
      </div>
    </div>
  );
}
