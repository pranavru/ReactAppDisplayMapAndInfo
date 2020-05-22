import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GoogleMap, Marker, InfoWindow } from 'react-google-maps';
import * as DataVuzix from '../data.json';
import MapInfoWindow from './MapInfoWindow';

class Map extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedPoint: null
        }
        this.setPoint = this.setPoint.bind(this);
        this.Marker = this.Marker.bind(this);

        navigator.geolocation.getCurrentPosition(pos => {
            console.log(pos.coords.latitude);
            console.log(pos.coords.longitude);
        })
    }

    setPoint(mapVuzix) {
        this.setState({ selectedPoint: mapVuzix });
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
                {this.state.selectedPoint && (
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
{ lat: 40.7489, lng: -74.1566 }
{ lat: 0, lng: 0}
*/