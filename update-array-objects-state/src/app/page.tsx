'use client';
import React, { useState } from "react";

export default function Home() {
  interface Car {
    year: number;
    make: string;
    model: string;
  }

  const [cars, setCars] = useState<Car[]>([]);
  const [carYear, setCarYear] = useState(new Date().getFullYear());
  const [carMake, setCarMake] = useState("");
  const [carModel, setCarModel] = useState("");

  const handleAddCar = () => {
    const newCar = {year: carYear, make: carMake, model: carModel};

    setCars(c => [...c, newCar]);
    setCarYear(new Date().getFullYear());
    setCarMake("");
    setCarModel("");
  }

  const handleRemoveCar = (index) => {
    setCars(c => c.filter((_, i) => i !== index));
  }

  const handleYearChange = (e) => {
    setCarYear(e.target.value);
  }

  const handleMakeChange = (e) => {
    setCarMake(e.target.value);
  }

  const handleModelChange = (e) => {
    setCarModel(e.target.value);
  }

  return (
    <div>
      <h2>Car List</h2>
      <ul>
        {cars.map((car, index) => 
          <li key={index} onClick={() => handleRemoveCar(index)}>
            {car.year} {car.make} {car.model}
          </li>
        )}
      </ul>

      <input 
        type="number" 
        value={carYear} 
        onChange={handleYearChange}
        placeholder="Enter car year..."
      /> <br/>
      <input 
        type="text" 
        value={carMake} 
        onChange={handleMakeChange}
        placeholder="Enter car make..."
      /> <br/>
      <input 
        type="text" 
        value={carModel} 
        onChange={handleModelChange}
        placeholder="Enter model..."
      /> <br/>

      <button onClick={handleAddCar}>Add Car</button>
    </div>
  );
}
