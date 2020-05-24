import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GoogleMap, Marker, InfoWindow } from 'react-google-maps';
import * as DataVuzix from '../data.json';
import MapInfoWindow from './MapInfoWindow';

function Map(props) {

    const [selectedPoint, setSelectedPoint] = React.useState(null);

    const MarkerData = (data) => {
        return (
            data.map(mapVuzix =>
                <Marker
                    key={mapVuzix.id}
                    position={{ lat: mapVuzix.lat, lng: mapVuzix.long }}
                    onClick={() => {
                        console.log("Clicked")
                        setSelectedPoint(mapVuzix)
                    }}
                />
            )
        );
    }

    return (
        <GoogleMap defaultZoom={19} defaultCenter={{ lat: 40.7489, lng: -74.1566 }} >
            {MarkerData(DataVuzix.vuzixMap)}
            {selectedPoint && (
                <InfoWindow
                    position={{ lat: selectedPoint.lat, lng: selectedPoint.long }}
                    onCloseClick={() => { setSelectedPoint(null); }}
                >
                    <MapInfoWindow point={selectedPoint} />
                </InfoWindow>
            )}
        </GoogleMap>
    );
}

export default Map;

/**
 *   icon={{ url: '/images.jpeg', scaledSize: new window.google.maps.Size(40, 40)}}
 *   { lat: 40.7489, lng: -74.1566 }
 *   { lat: 0, lng: 0}
 *
*/
