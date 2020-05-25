import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Card } from 'reactstrap';
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
                    <div style={{ border: 1, padding: 3 }}>
                        <Label>Filters: </Label>
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup>
                                <Label style={{ width: '14vw', fontWeight: 'bold' }}>Search by Speech?</Label>
                                <select onChange={this.handleChange} name="isSpeech" style={{ width: '10vw' }}>
                                    <option value={true}>Yes</option>
                                    <option selected value={false}>No</option>
                                </select>

                                {/** Speech Form  */}
                                <div style={{ margin: '3%' }}>
                                    <Animated
                                        animationIn='fadeInUp' animationOut='fadeOut'
                                        animationInDuration={400} animationOutDuration={600}
                                        className={this.state.isSpeech ? "displayBlock" : "displayNone"}
                                    >
                                        <FormGroup>
                                            <Label for="exampleSearch">Search by Speech</Label>
                                            <Input
                                                type="search"
                                                name="speech"
                                                id="speechSearch"
                                                placeholder="Search by Speech Value"
                                                value={this.state.speech}
                                                onChange={this.handleChange}
                                                style={{ width: "24vw" }}
                                            />
                                        </FormGroup>

                                    </Animated>
                                </div>
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
                                    className={this.state.isPerson ? "displayBlock" : "displayNone"} style={{ marginLeft: '5%' }} >
                                    <Label for="exampleSearch">Search by Name</Label>
                                    <Input
                                        type="number"
                                        name="noOfPersons"
                                        placeholder="No of Persons"
                                        value={this.state.noOfPersons}
                                        onChange={this.handleChange}
                                        min={0} max={100}
                                        style={{ width: "24vw" }}
                                    />
                                    {/* <InputGroupAddon addonType="append">
                                    <Button outline color="primary" >Search</Button>
                                </InputGroupAddon> */}

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
                                    className={this.state.isDate ? "displayBlock" : "displayNone"} style={{ marginLeft: '5%' }} >

                                    <Label for="exampleSearch">Search by Date</Label>
                                    <DateRangeFilter handleChangeDate={this.handleChangeDate.bind(this)} dateValue={this.state.dateValue} />
                                    {/* <InputGroupAddon addonType="append">
                                    <Button outline color="primary" >Search</Button>
                                </InputGroupAddon> */}
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