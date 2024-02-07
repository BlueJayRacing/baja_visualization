
import React, { useState, useEffect } from "react";

let API_KEY: any;
//AIzaSyB8RTURcR1ADEWT1thZfEt1uFUz2FUUiUs
let map: google.maps.Map;
const Map = () => {
  const YOUR_LONGITUDE = "39.328814";
  const YOUR_LATITUDE = "-76.622101";
  API_KEY = localStorage.getItem("map_api_key");

  if (!API_KEY) {
    console.error("no key is found, please store in the localstorage")
    alert(
      "Please store your API key in local storage with the key 'map_api_key'.",
    );
    return;
  }
 const loadGoogleMapsAPI = () => {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}`;
      script.async = true;
      script.onload = initMap;
      script.onerror = () => console.error('Error loading Google Maps API.');
      document.head.appendChild(script);
    };

    const initMap = () => {
      map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
        center: { lat: 39.328814, lng: -76.622101},
        zoom: 8,
      });
    };

    loadGoogleMapsAPI();


  return (
    <div className="flex flex-col w-full h-full bg-stone-400 min-h-screen md:max-w-lg">
      <h3>Map Demo</h3>
      <div id="map" style={{ width: "100%", height: "400px" }}></div>
    </div>
  );
};

export default Map;