import React from 'react';
import ReactPlayer from 'react-player'
import { Card } from 'reactstrap';

const DisplayVideoComponent = (props) => {

    console.log(props.videoSrc)
    return (
        <Card style={{ bottom: 0, left: 0, position: "absolute", marginLeft: '3.5%', marginBottom: '3%', padding: 4, marginTop: '5%' }}>
            <ReactPlayer width="27vw" height="30vh" url={props.videoSrc} onError={(err) => console.log(err)} />
        </Card>
    );
}

export default DisplayVideoComponent;