import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { withScriptjs, withGoogleMap } from 'react-google-maps';
import MapComponent from './components/MapComponent';
import MapFilterComponent from './components/MapFilterComponent';
import { Animated } from 'react-animated-css';
import * as DataVuzix from './data.json';

const WrappedMap = withScriptjs(withGoogleMap(MapComponent));

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      filter: true
    }

    //data calling
  }

  loadDataJson() {
    
  }

  loadPersonNames() {
    let personNames = new Map([]);
    DataVuzix.vuzixMap.map(m => {
      if (m.person_names.length !== 0) {
        m.person_names.map(p => {
          if (!personNames.has(p.person_name)) {
            personNames.set(p.person_name, p.person_name)
          }
        })
      }
    });

    return personNames;
  }

  render() {

    return (
      <>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.css" />
        <Animated animationIn="slideInLeft" animationInDuration={450} animationOut="zoomOut" isVisible={this.state.filter} style={{ zIndex: 4, position: 'absolute' }}>
          <div style={{ zIndex: 2, backgroundColor: 'white', width: '30vw' }}>
            <MapFilterComponent loadPersonNames={this.loadPersonNames.bind(this)} />
          </div>
        </Animated>

        <div style={{ width: '100vw', height: '100vh' }}>
          <WrappedMap
            googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyABBr3dtnI6vkHnyzMjztupIDjhxNXCmng`}
            loadingElement={<div style={{ height: '100%' }} />}
            containerElement={<div style={{ height: '100%' }} />}
            mapElement={<div style={{ height: '100%' }} />}
            filter={this.state.filter}
          />
        </div>
      </>
    );
  }
}

export default App;