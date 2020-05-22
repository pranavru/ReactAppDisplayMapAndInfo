import React from 'react';
import { Card, CardImg, CardBody, CardTitle, Container, Row, Col, CardSubtitle, CardHeader, CardFooter, CardText } from 'reactstrap';

function speech(props) {
    return props.point.speech !== "" ?
        <CardBody>
            <CardSubtitle style={{ fontWeight: 'bold', fontSize: 14 }}>Speech:</CardSubtitle>
            <CardText>&nbsp;&nbsp;&nbsp;&nbsp;{props.point.speech}</CardText>
        </CardBody> : <div></div>
};

function displayPeople(props) {
    return props.point.person_names.length !== 0 ? 
        <CardFooter >
            <p style={{ fontWeight: 'bold', fontSize: 14 }} > Person Names</p>
            <div className="row">
                {props.point.person_names.map(person =>
                    <div className="card col-md-4 col-sm-6" style={{ fontWeight: 'normal', fontSize: 12, paddingTop: 10, paddingBottom: 10, textAlign: 'center', border: 0 }} >{person.person_name}</div>
                )}
            </div>
        </CardFooter> : <div></div>

}

function MapInfoWindow(props) {

    return (
        <div className="col-md-12" style={{ width: 400 }}>
            <Card >
                <CardHeader>
                    <CardTitle style={{ fontWeight: 'bold', fontSize: 16 }}>Vizux ID: {props.point.id} </CardTitle>
                    <CardSubtitle style={{ fontWeight: 'bold', fontSize: 12 }}>Country Location: {props.point.country}</CardSubtitle>
                </CardHeader>
                <CardImg top src={'/images (1).jpeg'} alt={props.point.id} style={{ width: '100%', height: '70%' }} />
                {speech(props)}
                {displayPeople(props)}
            </Card>
        </div>
    )
}

export default MapInfoWindow;