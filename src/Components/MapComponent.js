// import React, { useState } from "react";
// import { GoogleMap, InfoWindow, LoadScript, Marker } from "@react-google-maps/api";


// const MapComponent = () => {
//     const initialMarkers = [
//         {
//             position: {
//               lat: -1.2884,
//               lng: 36.8233
//             },
//             label: { color: "white", text: "P1" },
//             draggable: true
//         },
//         {
//             position: {
//                 lat: -1.2884,
//                 lng: 36.8233
//             },
//             label: { color: "white", text: "P2" },
//             draggable: false
//         },
//         {
//             position: {
//                 lat: -1.2884,
//                 lng: 36.8233
//             },
//             label: { color: "white", text: "P3" },
//             draggable: true
//         },
//     ];
    
//     const [activeInfoWindow, setActiveInfoWindow] = useState("");
//     const [markers, setMarkers] = useState(initialMarkers);

//     const containerStyle = {
//         width: "100%",
//         height: "400px",
//     }

//     const center = {
//         lat: -1.2884,
//         lng: 36.8233,
//     }

//     const mapClicked = (event) => { 
//         console.log(event.latLng.lat(), event.latLng.lng()) 
//     }

//     const markerClicked = (marker, index) => {  
//         setActiveInfoWindow(index)
//         console.log(marker, index)
//     }

//     const markerDragEnd = (marker, index) => { 
//         console.log(marker, index)
//     }

//     return (
//         <>
//         <h1>Let's Flex</h1>
//         <LoadScript googleMapsApiKey='AIzaSyBOZAsPx9-btmZEjX12TC1Qxb-NcJIXqks'>
//             <GoogleMap 
//                 mapContainerStyle={containerStyle} 
//                 center={center} 
//                 zoom={15}
//                 onClick={mapClicked}
//             >
//                 {markers.map((marker, index) => (
//                     <Marker 
//                         key={index} 
//                         position={marker.position}
//                         label={marker.label}
//                         draggable={marker.draggable}
//                         onDragEnd={event => markerDragEnd(marker, index)}
//                         onClick={event => markerClicked(marker, index)} 
//                     >
//                         {
//                             (activeInfoWindow === index)
//                             &&
//                             <InfoWindow position={marker.position}>
//                                 <b>{marker.position.lat}, {marker.position.lng}</b>
//                             </InfoWindow>
//                         }  
//                     </Marker>
//                 ))}
//             </GoogleMap>
//         </LoadScript>
//         </>
//     );
// };

// export default MapComponent;



// import React, { Component } from 'react';
// import { GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';

// import CurrentLocation from './CurrentLocation';

// export class MapContainer extends Component {
//   state = {
//     showingInfoWindow: false,
//     activeMarker: {},
//     selectedPlace: {}
//   };

//   onMarkerClick = (props, marker, e) =>
//     this.setState({
//       selectedPlace: props,
//       activeMarker: marker,
//       showingInfoWindow: true
//     });

//   onClose = props => {
//     if (this.state.showingInfoWindow) {
//       this.setState({
//         showingInfoWindow: false,
//         activeMarker: null
//       });
//     }
//   };

//   render() {
//     return (
//       <CurrentLocation
//         centerAroundCurrentLocation
//         google={this.props.google}
//       >
//         <Marker onClick={this.onMarkerClick} name={'Current Location'} />
//         <InfoWindow
//           marker={this.state.activeMarker}
//           visible={this.state.showingInfoWindow}
//           onClose={this.onClose}
//         >
//           <div>
//             <h4>{this.state.selectedPlace.name}</h4>
//           </div>
//         </InfoWindow>
//       </CurrentLocation>
//     );
//   }
// }

// export default GoogleApiWrapper({
//   apiKey: 'AIzaSyBOZAsPx9-btmZEjX12TC1Qxb-NcJIXqks'
// })(MapContainer);



// import React, { Component } from 'react';
// import { Map, GoogleApiWrapper } from 'google-maps-react';

// const mapStyles = {
//   width: '100%',
//   height: '100%'
// };

// export class MapContainer extends Component {
//   render() {
//     return (
//       <Map
//         google={this.props.google}
//         zoom={14}
//         style={mapStyles}
//         initialCenter={
//           {
//             lat: -1.2884,
//             lng: 36.8233
//           }
//         }
//       />
//     );
//   }
// }
// export default GoogleApiWrapper({
//   apiKey: 'AIzaSyBOZAsPx9-btmZEjX12TC1Qxb-NcJIXqks'
// })(MapContainer);


// import { useMemo } from "react";
// import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

// export default function Home() {
//   const { isLoaded } = useLoadScript({
//     googleMapsApiKey: "AIzaSyAcDg36tQXiqPYHYUx5uwssS1Ah-IYaNAg",
//   });

//   if (!isLoaded) return <div>Loading...</div>;
//   return <Map />;
// }

// function Map() {

//   const center = useMemo(() => ({ lat: -1.2884, lng: 36.8233 }), []);

//   return (
//     <GoogleMap 
//     zoom={10} 
//     center={center} 
//     mapContainerClassName="map-container"
//     >
//       <Marker position={center} />
//     </GoogleMap>
//   );
// }


import { useState, useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";
import "@reach/combobox/styles.css";

export default function MapComponent() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyAcDg36tQXiqPYHYUx5uwssS1Ah-IYaNAg",
    libraries: ["places"],
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Map />;
}

function Map() {
  const center = useMemo(() => ({ lat: -1.2884, lng: 36.8233 }), []);
  const [selected, setSelected] = useState(null);

  return (
    <>
      <div className="text-2xl font-bold flex-col flex items-center">
        <h1 className='flex items-center flex-col text-justify mx-10 container'>Nearby Gym/Fitness Centers</h1>
        <PlacesAutocomplete setSelected={setSelected} />
      </div>

      <GoogleMap
        zoom={10}
        center={center}
        mapContainerClassName="map-container"
      >
        {selected && <Marker position={selected} />}
      </GoogleMap>
    </>
  );
}

const PlacesAutocomplete = ({ setSelected }) => {
  const {
    ready,
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutocomplete();

  const handleSelect = async (address) => {
    setValue(address, false);
    clearSuggestions();

    const results = await getGeocode({ address });
    const { lat, lng } = await getLatLng(results[0]);
    setSelected({ lat, lng });
  };

  return (
    <Combobox onSelect={handleSelect}>
      <ComboboxInput
        value={value}
        onChange={(e) => setValue(e.target.value)}
        disabled={!ready}
        className="combobox-input"
        placeholder="Search ..."
      />
      <ComboboxPopover>
        <ComboboxList>
          {status === "OK" &&
            data.map(({ place_id, description }) => (
              <ComboboxOption key={place_id} value={description} />
            ))}
        </ComboboxList>
      </ComboboxPopover>
    </Combobox>
  );
};



