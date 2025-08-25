'use client';
import React, { useState } from "react";
import Image from "next/image";

interface Address {
  latitude: string;
  longitude: string;
  displayName: string;
}

interface CurrentWeather {
  temperature: number;
  windspeed: number;
  winddirection: number;
  time: string;
}

interface WeatherResponse {
  latitude: number;
  longitude: number;
  timezone: string;
  elevation: number;
  current_weather?: CurrentWeather;
}

export default function Home() {
  const imgSize = 50;
  const API_KEY = process.env.NEXT_PUBLIC_API_KEY; //next public if accessing directly to the client
  const [location, setLocation] = useState("");
  const [address, setAddress] = useState<Address | null>(null);
  const [weatherResponse, setWeatherResponse] = useState<WeatherResponse | null>(null);
  const [currentWeather, setCurrentWeather] = useState<CurrentWeather | null>(null);


  const getCoordinates = async (location : string) => {
    //encodeURIComponent allows special characters on links
    const url = `https://geocode.maps.co/search?q=${encodeURIComponent(location)}&api_key=${API_KEY}`;

    const res = await fetch(url);
    const data = await res.json();

    if(data.length === 0) {
      console.error("Data not found");
      return null;
    }

    const { lat, lon, display_name } = data[0];
    console.log(`Data found: ${display_name}`);
    setAddress({
      latitude: data[0].lat,
      longitude: data[0].lon,
      displayName: data[0].display_name
    })
  }

  const getWeather = async() => {
    // let coordinates = getCoordinates(location);
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${address?.latitude}&longitude=${address?.longitude}&current_weather=true`

    const res = await fetch(url);
    const body = await res.json();

    if(body.hourly === 0) {
      console.error("No data found")
      setAddress(null)
    }

    const {latitude, longitude, timezone, elevation, current_weather} = body;
    const {temperature, windspeed, winddirection, time} = current_weather;
    console.log("Data found!")
    setWeatherResponse({
      latitude,
      longitude,
      timezone,
      elevation,
      current_weather
    });
    setCurrentWeather(current_weather);
  }
  
  return(
    <>
      <header>
        <Image 
          src="/weather-icon.png"
          height={imgSize}
          width={imgSize}
          alt="Weather"
        />
        <h1>Weather App</h1>
      </header>
      <form>
        <div className="location-inp-container">
          <label htmlFor="location-input">Enter location</label>
          <input 
            type="text"
            id="location-input" 
            value={location}
            onChange={(e) => setLocation(e.target.value)}  
            placeholder="Ex. Manila"
          />
        </div>

        <button 
          type="submit"
          onClick={async (e) => { 
              e.preventDefault(); 
              await getCoordinates(location);
              await getWeather();
              setLocation("");
            }
          }  
        >
          Submit
        </button>
      </form>

      {weatherResponse && (
        <div className="output">
          <h1>Weather for {address?.displayName}</h1>
          <p>Latitude: {weatherResponse.latitude}</p>
          <p>Longitude: {weatherResponse.longitude}</p>
          <p>Timezone: {weatherResponse.timezone}</p>
          <p>Temperature: {currentWeather?.temperature} C</p>
          <p>Windspeed: {currentWeather?.windspeed}</p>
          <p>Wind direction: {currentWeather?.winddirection}</p>
          <p>Time: {currentWeather?.time}</p>
        </div>
      )}
    </>
  );
}