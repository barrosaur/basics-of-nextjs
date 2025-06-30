import React from "react";
import Image from "next/image";
import Link from "next/link";
import './page.css';

export default function Home() {
  return (
    <div className="home-page">
      <div className="title-area">
        <Image src="/logo.svg" width={75} height={75} alt="Logo"/>
        <div className="text-container">
          <h1>Calculator</h1>
          <p>Just a simple calulator app with <code>useState</code> and <code>onChange</code></p>
        </div>
      </div>

      <div className="btn-container">
        <Link href="./calculator">
          <button>Use Calculator</button>
        </Link>
      </div>
    </div>
  );
}
