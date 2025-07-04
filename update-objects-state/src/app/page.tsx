'use client';
import React, { useState } from "react";

export default function Home() {
  const [car, setCar] = useState({year: 2024, make: "Ford", model: "Mustang"});

  const handleYearChange = (e) => {
    // the spread operator makes it so that the other keys in the object
    // wont disappear if one of them changes
    setCar(car => ({...car, year: e.target.value}));
  }

  const handleMakeChange = (e) => {
    setCar(car => ({...car, make: e.target.value}));
  }

  const handleModelChange = (e) => {
    setCar(car => ({...car, model: e.target.value}));
  }

  return (
    <div className="home-page">
      <p>Your favorite car is: {car.year} {car.make} {car.model}</p>

      <input type="number" value={car.year} onChange={handleYearChange}/> <br/>
      <input type="text" value={car.make} onChange={handleMakeChange}/> <br/>
      <input type="text" value={car.model} onChange={handleModelChange}/> <br/>
    </div>
  );
}
