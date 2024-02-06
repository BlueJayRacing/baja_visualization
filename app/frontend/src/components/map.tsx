
import React, { useState, useEffect } from "react";

// Constants
const ENDPOINT = "https://api.nasa.gov/planetary/earth/imagery";
const YOUR_LONGITUDE = "39.328814"
const YOUR_LATITUDE = "-76.622101"
const DATE = "2020-03-13"
// Global variables
let API_KEY: any;
const Map = () => {
  // State to store the image URL
  const [imageUrl, setImageUrl] = useState("");
  API_KEY = localStorage.getItem("map_api_key");

  if (!API_KEY) {
    console.error("no key is found, please store in the localstorage")
    alert(
      "Please store your API key in local storage with the key 'map_api_key'.",
    );
    return;
  }
  useEffect(() => {
    // Fetch image data from NASA API
    const fetchImageData = async () => {
      try {
        //`${ENDPOINT}?lon=${YOUR_LONGITUDE}&lat=${YOUR_LATITUDE}&date=${DATE}&api_key=${API_KEY}`
        const response = await fetch(
          `https://api.nasa.gov/planetary/earth/imagery?lon=-95.33&lat=29.78&date=2018-01-01&dim=0.15&api_key=${API_KEY}`
        );
        const data = await response;
        console.log(data)
        // Update the image URL state with the received data
        setImageUrl(data.url);
      } catch (error) {
        console.error("Error fetching image data:", error);
      }
    };

    // Call the fetchImageData function
    fetchImageData();
  }, []); // Empty dependency array ensures that this effect runs only once after the component mounts

  return (
    <div className="flex flex-col w-full h-full bg-stone-400 min-h-screen md:max-w-lg">
      <h3>Map Demo</h3>
      {/* Render the image if imageUrl is not empty */}
      {imageUrl && (
        <img
          src={imageUrl}
          alt="Map imagery from NASA"
          className="map"
        />
      )}
    </div>
  );
};

export default Map;