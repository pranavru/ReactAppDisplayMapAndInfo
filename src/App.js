import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { withScriptjs, withGoogleMap } from 'react-google-maps';
import MapComponent from './components/MapComponent';

const WrappedMap = withScriptjs(withGoogleMap(MapComponent));

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