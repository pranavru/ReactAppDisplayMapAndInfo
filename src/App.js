import React from 'react';
import './App.css';
import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps';

function Map() {
  return (
    <GoogleMap defaultZoom={10} defaultCenter={{ lat: 40.735657, lng: -74.172363 }} />
  );
}

const WrappedMap = withScriptjs(withGoogleMap(Map))
function App() {
  return (
    <div style={{ width: '100vw', height: '100vh'}}>
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
