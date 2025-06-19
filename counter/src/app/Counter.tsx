import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(prev => prev + 1);
  }

  const decrement = () => {
    setCount(prev => prev > 0 ? prev - 1 : 0);
  }

  return (
    <div>
        <h2>Counter</h2>

        <h2 id="counter-text">{count < 0 ? 0 : count }</h2>

        <div className="btn-container">
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </div>

    </div>
  )
}

export default Counter