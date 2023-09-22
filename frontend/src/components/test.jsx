import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import API_MAP from './restrcitedData'
// import jsonData from "./Vehicle_No_0774.json"
// import jsonData from "./Vehicle_No_2524.json"
import jsonData from "./Vehicle_No_3539.json"
// import jsonData from "./Vehicle_No_5104.json"

const MapComponent = () => {
    const containerStyle = {
        width: "100%",
        height: "1080px",
    };

    const center = {
        lat: +jsonData[0].Lattitude,
        lng: +jsonData[0].Longitude,
    };
    let markers = []
    for (let data in jsonData) {
        markers.push({ position: { lat: +jsonData[data].Lattitude, lng: +jsonData[data].Longitude } })
    }


    return (
        <LoadScript
            googleMapsApiKey={API_MAP.API_KEY}// Replace with your API key
        >
            <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={8}>
                {markers.map((marker, index) => (
                    <Marker
                        key={index}
                        position={marker.position}
                    />
                ))}
            </GoogleMap>
        </LoadScript>
    );
};

export default MapComponent;
