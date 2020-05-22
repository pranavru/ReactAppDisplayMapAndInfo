import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GoogleMap, Marker, InfoWindow } from 'react-google-maps';
import * as DataVuzix from '../data.json';
import MapInfoWindow from './MapInfoWindow';

class Map extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedPoint: null,
            isOpen: false
        }
        this.setPoint = this.setPoint.bind(this);
        this.Marker = this.Marker.bind(this);

        navigator.geolocation.getCurrentPosition(pos => {
            console.log(pos.coords.latitude);
            console.log(pos.coords.longitude);
        })
    }

    setPoint(mapVuzix) {
        this.setState({ 
            selectedPoint: mapVuzix,
            isOpen: mapVuzix === null ? false: true
         });
    }

    Marker(data) {
        return (
            data.map(mapVuzix =>
                <Marker
                    key={mapVuzix.id}
                    position={{ lat: mapVuzix.lat, lng: mapVuzix.long }}
                    onClick={() => {
                        console.log("Clicked")
                        this.setPoint(mapVuzix);
                    }}
                />
            )
        );
    }

    render() {
        return (
            <GoogleMap defaultZoom={19} defaultCenter={{ lat: 40.7489, lng: -74.1566 }} >
                {this.Marker(DataVuzix.vuzixMap)}
                {this.state.selectedPoint && this.state.isOpen && (
                    <InfoWindow
                        position={{ lat: this.state.selectedPoint.lat, lng: this.state.selectedPoint.long }}
                        zIndex={0}
                        onCloseClick={() => {
                            this.setPoint(null);
                        }}
                    >
                        <MapInfoWindow point={this.state.selectedPoint} />
                    </InfoWindow>
                )}
            </GoogleMap>
        );
    }
}

export default Map;

/**
 *   icon={{ url: '/images.jpeg', scaledSize: new window.google.maps.Size(40, 40)}}
 *   { lat: 40.7489, lng: -74.1566 }
 *   { lat: 0, lng: 0}
*/