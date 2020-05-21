import React, { useState } from 'react';
import './App.css';

import { GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow } from 'react-google-maps';
import * as DataVuzix from './data.json';

function Map() {
  const [selectedPoint, setSelectedPoint] = useState(null);

  return (
    <GoogleMap defaultZoom={10} defaultCenter={{ lat: 40.735657, lng: -74.172363 }} >
      {DataVuzix.vuzixMap.map(mapVuzix =>
        <Marker
          key={mapVuzix.id}
          position={{ lat: mapVuzix.lat, lng: mapVuzix.long }}
          onClick={() => {
            console.log(selectedPoint)
            setSelectedPoint(mapVuzix);
          }}
        />
      )}

      {selectedPoint && (
        <InfoWindow
          position={{ lat: selectedPoint.lat, lng: selectedPoint.long }}
          zIndex={0}
          onCloseClick={() => {
            setSelectedPoint(null);
          }}
        >
          <div>
            <div>
              <img src='/images (1).jpeg' style={{ borderRadius: 6 }}></img>
            </div>
            <div>
              <h2>ID: {selectedPoint.id}</h2>
              <p>Country: {selectedPoint.country}</p>
            </div>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  );
}

const WrappedMap = withScriptjs(withGoogleMap(Map))
function App() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <WrappedMap
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyABBr3dtnI6vkHnyzMjztupIDjhxNXCmng`}
        loadingElement={<div style={{ height: '100%' }} />}
        containerElement={<div style={{ height: '100%' }} />}
        mapElement={<div style={{ height: '100%' }} />}
      />
    </div>
  );
}

export default App;

{/* icon={{ url: '/images.jpeg', scaledSize: new window.google.maps.Size(40, 40)}} */ }