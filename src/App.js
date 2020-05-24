import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { withScriptjs, withGoogleMap } from 'react-google-maps';
import MapComponent from './components/MapComponent';
import MapFilterComponent from './components/MapFilterComponent';
import { Button, CardText } from 'reactstrap';
import { Animated } from 'react-animated-css';

const WrappedMap = withScriptjs(withGoogleMap(MapComponent));

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      filter: true
    }
  }

  render() {
    return (
      <>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.css" />
        <Animated animationIn="slideInLeft" animationInDuration={450} animationOut="zoomOut" isVisible={this.state.filter} style={{ zIndex: 4, position: 'absolute' }}>
          <div style={{ zIndex: 2, backgroundColor: 'white', width: '30vw' }}>
            <MapFilterComponent />
          </div>
        </Animated>

        <div style={{ width: '100vw', height: '100vh' }}>
          <WrappedMap
            googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyABBr3dtnI6vkHnyzMjztupIDjhxNXCmng`}
            loadingElement={<div style={{ height: '100%' }} />}
            containerElement={<div style={{ height: '100%' }} />}
            mapElement={<div style={{ height: '100%' }} />}
          />
        </div>
      </>
    );
  }
}

export default App;