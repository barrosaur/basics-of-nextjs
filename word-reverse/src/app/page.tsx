'use client';
import React, { useState } from 'react'

const Page = () => {
  const [word, setWord] = useState('');
  const [reversed, setReversed] = useState('');

  const reverseWord = (word : string) => {
    let reversedWord = "";

    for(let i = word.length - 1; i >= 0; i--) {
      reversedWord += word[i];
    }

    setReversed(reversedWord);
    setWord("");
  }

  return (
    <div>
      <h1>Word Reverser</h1>

      <div className="input-container">
        <input 
          type="text"
          placeholder='Enter word here...' 
          value={word}
          onChange={(e) => setWord(e.target.value)}
        />
        <button onClick={() => reverseWord(word)}>Reverse</button>
      </div>

      <h1>{reversed}</h1>
    </div>
  )
}

export default Page