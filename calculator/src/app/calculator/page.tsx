'use client';
import React, { useState } from 'react';
import './page.css';

const Calculator = () => {
  const [expression, setExpression] = useState("");
  const [result, setResult] = useState("");

  /*
    case 1: Current not empty
            so if current state has the string '1'
            and then you press '+'
            Output: 1 +
    case 2: Current is empty (first click)
            so if current state is empty
            when you press your first button let's say '1'
            Output: 1
  */
  const displayExpression = (text : string) => {
    setExpression((current) => (current ? `${current} ${text}` : text));
  }

  /*
    Slices the character (start, end)
    -1 is end of an array of characters
  */
  const deleteCharacter = () => {
    setExpression((current) => current.slice(0, -1));
    setResult((current) => current.slice(0, -1));
  }

  const clearExpression = () => {
    setExpression("");
    setResult("");
  }

  const handleExpression = () => {
    const cleanExpression = expression.replace(/[^0-9+\-*/.]/g, '');
    let evalResult;

    try {
      evalResult = eval(cleanExpression);
      setResult(evalResult);
      setExpression("");
    } catch (e) {
      setResult("ExpressionError");
    }
  }

  return (
    <div className="outer-border">
      <h1>ELLCULATOR</h1>
      <div className="inner-border">
        <div className="screen">
          {expression}
          <div className="answer-screen">
            {result}
          </div>
        </div>

        <div className="btn-container">
          <div className="row-btn">
            <button className="btn">ON/OFF</button>
            <button className="btn" onClick={deleteCharacter}>DEL</button>
            <button className="btn" onClick={clearExpression}>AC</button>
            <button className="btn" onClick={() => displayExpression('+')}>+</button>
          </div>
          <div className="row-btn">
            <button className="btn" onClick={() => displayExpression('1')}>1</button>
            <button className="btn" onClick={() => displayExpression('2')}>2</button>
            <button className="btn" onClick={() => displayExpression('3')}>3</button>
            <button className="btn" onClick={() => displayExpression('-')}>-</button>
          </div>
          <div className="row-btn">
            <button className="btn" onClick={() => displayExpression('4')}>4</button>
            <button className="btn" onClick={() => displayExpression('5')}>5</button>
            <button className="btn" onClick={() => displayExpression('6')}>6</button>
            <button className="btn" onClick={() => displayExpression('*')}>*</button>
          </div>
          <div className="row-btn">
            <button className="btn" onClick={() => displayExpression('7')}>7</button>
            <button className="btn" onClick={() => displayExpression('8')}>8</button>
            <button className="btn" onClick={() => displayExpression('9')}>9</button>
            <button className="btn" onClick={() => displayExpression('/')}>/</button>
          </div>
          <div className="row-btn last-row">
            <button className="btn" onClick={() => displayExpression('0')}>0</button>
            <button className="btn" onClick={handleExpression}>=</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Calculator