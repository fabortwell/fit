import React, { useState } from "react";
import { GoogleMap, InfoWindow, LoadScript, Marker } from "@react-google-maps/api";

const MapComponent = () => {
    const initialMarkers = [
        {
            position: {
              lat: -1.2884,
              lng: 36.8233
            },
            label: { color: "white", text: "P1" },
            draggable: true
        },
        {
            position: {
                lat: -1.2884,
                lng: 36.8233
            },
            label: { color: "white", text: "P2" },
            draggable: false
        },
        {
            position: {
                lat: -1.2884,
                lng: 36.8233
            },
            label: { color: "white", text: "P3" },
            draggable: true
        },
    ];
    
    const [activeInfoWindow, setActiveInfoWindow] = useState("");
    const [markers, setMarkers] = useState(initialMarkers);

    const containerStyle = {
        width: "100%",
        height: "400px",
    }

    const center = {
        lat: -1.2884,
        lng: 36.8233,
    }

    const mapClicked = (event) => { 
        console.log(event.latLng.lat(), event.latLng.lng()) 
    }

    const markerClicked = (marker, index) => {  
        setActiveInfoWindow(index)
        console.log(marker, index)
    }

    const markerDragEnd = (marker, index) => { 
        console.log(marker, index)
    }

    return (
        <>
     Let's Flex
     <input id="searchInput" className="controls" type="text" placeholder="Enter a location"></input>
        <LoadScript googleMapsApiKey='AIzaSyBOZAsPx9-btmZEjX12TC1Qxb-NcJIXqks'>
            <GoogleMap 
                mapContainerStyle={containerStyle} 
                center={center} 
                zoom={15}
                onClick={mapClicked}
            >
                {markers.map((marker, index) => (
                    <Marker 
                        key={index} 
                        position={marker.position}
                        label={marker.label}
                        draggable={marker.draggable}
                        onDragEnd={event => markerDragEnd(marker, index)}
                        onClick={event => markerClicked(marker, index)} 
                    >
                        {
                            (activeInfoWindow === index)
                            &&
                            <InfoWindow position={marker.position}>
                                <b>{marker.position.lat}, {marker.position.lng}</b>
                            </InfoWindow>
                        }  
                    </Marker>
                ))}
            </GoogleMap>
        </LoadScript>
        </>
    );
};

export default MapComponent;