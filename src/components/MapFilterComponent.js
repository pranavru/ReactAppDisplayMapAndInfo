import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Card, InputGroup, InputGroupAddon, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers, faCalendar, faDigitalTachograph, faCode } from '@fortawesome/free-solid-svg-icons'
import { Animated } from 'react-animated-css';
import '../App.css';
import DateRangeFilter from './DateRangeFilter';
import DisplayVideoComponent from './DisplayVideoComponent';

class MapFilterComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isSpeech: false,
            isPerson: false,
            speech: '',
            noOfPersons: 0,
            isDate: false,
            dateValue: [new Date(), new Date()],
            disPlayVideo: false,
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const { name, value } = event.target;
        this.setState({
            [name]: value === "true" ? true : value === "false" ? false : value,
            disPlayVideo: false
        });
    }

    handleChangeDate(event) {
        console.log("Value is ", new Date(event[0]));
        this.setState({
            dateValue: [new Date(event[0]), new Date(event[1])]
        })
    }

    handleSubmit(event) {
        event.preventDefault()
        this.setState({
            disPlayVideo: true
        })
        console.log(this.state)
    }

    render() {
        return (
            <div className="col-md-12" style={{ height: '100vh', paddingTop: '5%' }}>
                <Card style={{ padding: 4 }}>
                    <div >
                        <Label>Filters: </Label>
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup>
                                <Label style={{ width: '14vw', fontWeight: 'bold' }}>Search by Speech?</Label>
                                <select onChange={this.handleChange} name="isSpeech" style={{ width: '10vw' }}>
                                    <option value={true}>Yes</option>
                                    <option selected value={false}>No</option>
                                </select>

                                {/** Speech Form  */}
                                <Animated
                                    animationIn='fadeInUp' animationOut='fadeOut'
                                    animationInDuration={400} animationOutDuration={600}
                                    className={this.state.isSpeech ? "displayBlock" : "displayNone"} style={{ marginLeft: '5%', marginTop: '3%' }}
                                >
                                    <FormGroup>
                                        <Label for="exampleSearch">Search by Speech</Label>
                                        <InputGroup>
                                            <InputGroupAddon addonType="append">
                                                <Button style={{ borderTopLeftRadius: 4, borderBottomLeftRadius: 4 }}><FontAwesomeIcon icon={faCode} size={"lg"} /></Button>
                                            </InputGroupAddon>
                                            <Input
                                                type="search"
                                                name="speech"
                                                id="speechSearch"
                                                placeholder="Search by Speech Value"
                                                value={this.state.speech}
                                                onChange={this.handleChange}
                                                style={{ width: "21vw" }}
                                            />
                                        </InputGroup>
                                    </FormGroup>

                                </Animated>
                            </FormGroup>

                            <FormGroup>
                                <Label style={{ width: '14vw', fontWeight: 'bold' }}>Search by Persons?</Label>
                                <select style={{ width: '10vw' }} value={this.state.isPerson} onChange={this.handleChange} name="isPerson">
                                    <option value={true}>Yes</option>
                                    <option value={false}>No</option>
                                </select>

                                <Animated
                                    animationIn='fadeInUp' animationOut='fadeOut'
                                    animationInDuration={400} animationOutDuration={600}
                                    className={this.state.isPerson ? "displayBlock" : "displayNone"} style={{ marginLeft: '5%', marginTop: '3%' }} >
                                    <InputGroup>
                                        <InputGroupAddon addonType="append">
                                            <Button style={{ borderTopLeftRadius: 4, borderBottomLeftRadius: 4 }}><FontAwesomeIcon icon={faUsers} size={"lg"} /></Button>
                                        </InputGroupAddon>
                                        <Input
                                            type="number"
                                            name="noOfPersons"
                                            placeholder="No of Persons"
                                            value={this.state.noOfPersons}
                                            onChange={this.handleChange}
                                            min={0} max={100}
                                            style={{ width: "21vw" }}
                                        />
                                    </InputGroup>
                                </Animated>
                            </FormGroup>

                            <FormGroup>
                                <Label style={{ width: '14vw', fontWeight: 'bold' }}>Search by Date?</Label>
                                <select style={{ width: '10vw' }} value={this.state.isDate} onChange={this.handleChange} name="isDate">
                                    <option value={true}>Yes</option>
                                    <option value={false}>No</option>
                                </select>

                                <Animated
                                    animationIn='fadeInUp' animationOut='fadeOut'
                                    animationInDuration={400} animationOutDuration={600}
                                    className={this.state.isDate ? "displayBlock" : "displayNone"} style={{ marginLeft: '5%', marginTop: "3%" }} >

                                    <Label for="exampleSearch">Search by Date</Label>
                                    <InputGroup>
                                        <InputGroupAddon addonType="append">
                                            <Button style={{ borderTopLeftRadius: 4, borderBottomLeftRadius: 4 }}><FontAwesomeIcon icon={faCalendar} size={''} /></Button>
                                        </InputGroupAddon>
                                        <Card style={{ padding: 4, width: '22vw', borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}>
                                            <DateRangeFilter handleChangeDate={this.handleChangeDate.bind(this)} dateValue={this.state.dateValue} />
                                        </Card>
                                    </InputGroup>
                                </Animated>
                            </FormGroup>

                            <Input type="submit" value="Submit" />
                        </Form>
                    </div>
                </Card>
                <DisplayVideoComponent videoSrc={"https://www.youtube.com/watch?v=pCgDRgmfilE"} disPlayVideo={this.state.disPlayVideo} />
            </div>
        );
    }
}

export default MapFilterComponent;