'use client';
import React, { useState } from "react";

export default function Home() {
  const [foods, setFoods] = useState(["Apples", "Bananas"]);

  const handleAddFood = () => {
    const newFood = document.getElementById('foodInput').value;
    document.getElementById('foodInput').value = "";

    setFoods(f => [...f, newFood]);
  }

  const handleRemoveFood = (index : number) => {
    setFoods(foods.filter((_, i) => i !== index));
  }

  return (
    <div>
      <h1>Food List</h1>
      <p>To remove food, click on the list item</p>
      <ul>
        {foods.map((food, index) => 
          <li key={index} onClick={() => handleRemoveFood(index)}>{food}</li>)
          }
      </ul>

      <input type="text" id="foodInput" placeholder="Enter food..."/>
      <button onClick={handleAddFood}>Add Food</button>
    </div>
  );
}
