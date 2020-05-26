import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Card, InputGroup, InputGroupAddon, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers, faCalendar, faCode } from '@fortawesome/free-solid-svg-icons'
import { Animated } from 'react-animated-css';
import '../App.css';
import DateRangeFilter from './DateRangeFilter';
import DisplayVideoComponent from './DisplayVideoComponent';
import axios from "axios";

class MapFilterComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isSpeech: false,
            isPerson: false,
            personName: '',
            speech: '',
            isDate: false,
            dateValue: [new Date(), new Date()],
            disPlayVideo: false,
            videoSrc: ""
        }

        this.a = [];

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.personNamesMethod = this.personNamesMethod.bind(this);

        console.log(this.props.video)

    }

    componentDidMount() {
        this.personNamesMethod();
    }

    personNamesMethod() {
        this.personNames = this.props.loadPersonNames().values()[Symbol.iterator]()
        this.a = [];
        for (let item of this.personNames) {
            this.a.push(item);
        }
    }

    handleChange(event) {
        const { name, value } = event.target;
        this.setState({
            [name]: value === "true" ? true : value === "false" ? false : value,
            disPlayVideo: false
        });
    }

    handleChangeDate(event) {
        this.setState({
            dateValue: [new Date(event[0]), new Date(event[1])]
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.loadDataJson('/vuzixMap/video')
        this.setState({
            disPlayVideo: true, videoSrc: this.props.video
        })

        this.forceUpdate()

    }


    render() {

        return (
            <div className="col-md-12" style={{ height: '100vh', paddingTop: '5%' }}>
                <Card style={{ padding: 4 }}>
                    <div >
                        <Label>Filters: </Label>
                        <Form onSubmit={this.handleSubmit}>
                            {/* * Speech Form * */}
                            <FormGroup>
                                <Label style={{ width: '14vw', fontWeight: 'bold' }}>Search by Speech?</Label>
                                <select value={this.state.isSpeech} onChange={this.handleChange} name="isSpeech" style={{ width: '10vw', backgroundColor: 'white' }}>
                                    <option value={true}>Yes</option>
                                    <option value={false}>No</option>
                                </select>

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

                            {/* * Persons Form * */}
                            <FormGroup>
                                <Label style={{ width: '14vw', fontWeight: 'bold' }}>Search by Persons?</Label>
                                <select style={{ width: '10vw', backgroundColor: 'white' }} value={this.state.isPerson} onChange={this.handleChange} name="isPerson">
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
                                        <select style={{ width: '21vw', height: 36, minHeight: 36, backgroundColor: 'white' }} value={this.state.personName} onChange={this.handleChange} name="personName">
                                            {this.a.map(v => <option value={v}> {v}</option>)}
                                        </select>
                                    </InputGroup>
                                </Animated>
                            </FormGroup>

                            {/* * Date Value Form * */}
                            <FormGroup>
                                <Label style={{ width: '14vw', fontWeight: 'bold' }}>Search by Date?</Label>
                                <select style={{ width: '10vw', backgroundColor: 'white' }} value={this.state.isDate} onChange={this.handleChange} name="isDate">
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
                                            <Button style={{ borderTopLeftRadius: 4, borderBottomLeftRadius: 4 }}><FontAwesomeIcon icon={faCalendar} /></Button>
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
                <DisplayVideoComponent videoSrc={this.props.video} disPlayVideo={this.state.disPlayVideo} />
            </div>
        );
    }
}

export default MapFilterComponent;