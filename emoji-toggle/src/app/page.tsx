'use client';
import React, { useState } from "react";

export default function Home() {
  const [emoji, setEmoji] = useState(0);
  let content;

  const happyEmojiToggle = () => { setEmoji(0); }
  const sadEmojiToggle = () => { setEmoji(1); }
  const laughEmojiToggle = () => { setEmoji(2); }
  const cryEmojiToggle = () => { setEmoji(3); }
  const mehEmojiToggle = () => { setEmoji (4); }

  if(emoji == 0) {
    content = '😀';
  } else if(emoji == 1) {
    content = '😔';
  } else if(emoji == 2) {
    content = '😆';
  } else if(emoji == 3) {
    content = '😭'
  } else if(emoji == 4) {
    content = '😒';
  } 

  return (
    <div className="home-page">
      <h1>Emoji Toggle</h1>
      <p>Press the buttons to change the emoji</p>
      <div className="emoji-container">
        {content}
      </div>
      <div className="btn-container">
        <button onClick={happyEmojiToggle}>😀</button>
        <button onClick={sadEmojiToggle}>😔</button>
        <button onClick={laughEmojiToggle}>😆</button>
        <button onClick={cryEmojiToggle}>😭</button>
        <button onClick={mehEmojiToggle}>😒</button>
      </div>
    </div>
  );
}
