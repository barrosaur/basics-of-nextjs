'use client';
import React, { useState, useEffect } from "react";

export default function Home() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count: ${count}`
  }, [count])

  const addCount = () => {
    setCount(c => c+1);
  }

  return (
    <div className="home-page">
      <p>Count: {count}</p>
      <button onClick={addCount}>Add</button>
    </div>
  );
}
