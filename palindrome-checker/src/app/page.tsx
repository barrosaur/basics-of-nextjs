'use client';
import React, { useState } from "react";

export default function Home() {
  const [word, setWord] = useState('');
  const [isPalindrome, setIsPalindrome] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const palindromeChecker = (word: string) => {
    let reversedWord = "";

    for(let i = word.length - 1; i >= 0; i--) {
      reversedWord += word[i];
    }

    setIsPalindrome(reversedWord === word);
    setIsChecked(true);
  }
  

  return(
    <>
      <h1>Palindrome Checker</h1>

      <div className="input-container">
        <input 
          type="text" 
          placeholder="Enter word..."
          value={word}
          onChange={(e) => setWord(e.target.value)}
        />

        <button onClick={() => palindromeChecker(word)}>Check</button>
      </div>

      {isChecked && ( 
        isPalindrome ? (
          <p>{word} is <span className="yes">A PALINDROME</span></p>
        ):(
          <p>{word} is <span className="not">NOT A PALINDROME</span></p>
        )
      )}
    </>
  );
}