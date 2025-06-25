"use client"
import React, { useState } from "react";
import Image from "next/image";

export default function Home() {
  const calico = '/Calico.jpg';
  const orange = '/Orange.jpg';
  const siamese = '/Siamese.jpg';
  const tabby = '/Tabby.jpg';
  const tortie = '/Tortie.jpg';
  const tux = '/Tux.png';

  const cats = [calico, orange, siamese, tabby, tortie, tux]

  const [image, setImage] = useState(0);

  const changeImage = () => {
    setImage((prev) => (prev + 1) % cats.length);
  }
  
  return (
    <div className="home-page">
      <h1>Cat Image Toggler</h1>

      <div className="cat-img-container">
        <Image
          src={cats[image]}
          width='500'
          height='700'
          alt="Cat"
        />
      </div>

      <div className="btn-container">
        <button onClick={changeImage}>Change image</button>
      </div>
    </div>
  );
}
