import React, { useState, useEffect } from "react";
import type { Map, Marker } from "@/lib/types";
import { setInterval } from "timers/promises";

let API_KEY: any;
let map: google.maps.Map;
var markers: string | any[] = [];

const Map = () => {
  const { centerLat, centerLng, zoomLevel }: Map = {
    centerLat: 39.328814,
    centerLng: -76.622101,
    zoomLevel: 15,
  };


  API_KEY = localStorage.getItem("map_api_key");

  if (!API_KEY) {
    console.error("no key is found, please store in the localstorage");
    alert(
      "Please store your API key in local storage with the key 'map_api_key'.",
    );
    return;
  }


  const initMap = () => {
    map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
      center: { lat: centerLat, lng: centerLng },
      zoom: zoomLevel,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });
    var position_marker = new google.maps.Marker({
      position: { lat: centerLat, lng: centerLng },
      map,
    });
    position_marker.setMap(map);
  };
  const loadGoogleMapsAPI = () => {
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}`;
    script.async = true;
    script.onload = initMap;
    script.onerror = () => console.error("Error loading Google Maps API.");
    document.head.appendChild(script);
  };
  
  loadGoogleMapsAPI();
  const updateMarker = (newLat: number, newLng: number) => {
    deleteMarkers();
    var marker = new google.maps.Marker({
      position: { lat: newLat, lng: newLng },
      map,
    });
    var markers: any[] = [];
    markers.push(marker);
    marker.setMap(map);
    console.log("marker added");
    marker.setMap(null);
    console.log("marker removed");
  }
  const deleteMarkers = () => {
    for (let i = 0; i < markers.length; i++) {
      (markers)[i].setMap(null);
    }
    markers = [];
  }
  for (let i = 0; i < 10; i++) {
    setTimeout(() => {
      updateMarker(centerLat + 0.0002*i, centerLng);
    }, 5000);
    
  }
  
  return (
    <div className="flex flex-auto flex-col w-full h-full bg-stone-400 min-h-screen md:max-w-lg">
      <h3>Map Demo</h3>
      <div id="map" style={{ width: "100%", height: "100%" }}></div>
    </div>
  );
};

export default Map;
