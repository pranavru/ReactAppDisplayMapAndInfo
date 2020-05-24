import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, InputGroup, InputGroupAddon } from 'reactstrap';
import { Animated } from 'react-animated-css';
import DateRangePicker from '@wojtekmaj/react-daterange-picker';
import '../App.css';
import DateRangeFilter from './DateRangeFilter';

class MapFilterComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isSpeech: false,
            isPerson: false,
            speech: '',
            noOfPersons: 0,
            isDate: false,
            dateValue: {}
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const value = target.name === "isSpeech" ? (target.value ? true : false) : target.name === "isPerson" ? (target.value ? true : false) :
            target.name === "isDate" ? (target.value ? true : false) : target.name === 'speech' ? target.value : target.name === "noOfPersons" ? target.value : null;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }

    handleChangeDate(value) {
        console.log("Value is ",  value);
    }

    handleSubmit(event) {
        setTimeout(3000)
        console.log(this.state)
        event.preventDefault()
    }

    render() {
        return (
            <div className="col-md-12" style={{ height: '100vh' }}>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label style={{ width: '14vw' }}>Search by Speech?</Label>
                        <select value={this.state.isSpeech} onChange={this.handleChange} name="isSpeech" style={{ width: '10vw' }}>
                            <option value={true}>Yes</option>
                            <option value={false}>No</option>
                        </select>

                        <div style={{ margin: '3%' }}>
                            {/** Speech Form  */}
                            <Animated
                                animationIn='fadeInUp' animationOut='fadeOut'
                                animationInDuration={400} animationOutDuration={600}
                                className={this.state.isSpeech ? "displayBlock" : "displayNone"}
                            >

                                <Label for="exampleSearch">Search by Speech</Label>
                                <InputGroup>
                                    <Input
                                        type="search"
                                        name="speech"
                                        id="speechSearch"
                                        placeholder="Search by Speech Value"
                                        value={this.state.speech}
                                        onChange={this.handleChange}
                                    />
                                    <InputGroupAddon addonType="append">
                                        <Button outline color="success">Search</Button>
                                    </InputGroupAddon>
                                </InputGroup>
                            </Animated>
                        </div>
                    </FormGroup>

                    <FormGroup>
                        <Label style={{ width: '14vw' }}>Search by Persons?</Label>
                        <select style={{ width: '10vw' }} value={this.state.isPerson} onChange={this.handleChange} name="isPerson">
                            <option value={true}>Yes</option>
                            <option value={false}>No</option>
                        </select>

                        <Animated
                            animationIn='fadeInUp' animationOut='fadeOut'
                            animationInDuration={400} animationOutDuration={600}
                            className={this.state.isPerson ? "displayBlock" : "displayNone"} style={{ marginLeft: '5%' }} >
                            <InputGroup>
                                <Input
                                    type="number"
                                    name="noOfPersons"
                                    placeholder="No of Persons"
                                    value={this.state.noOfPersons}
                                    onChange={this.handleChange}
                                    min={0} max={100}
                                />
                                <InputGroupAddon addonType="append">
                                    <Button outline color="primary" >Search</Button>
                                </InputGroupAddon>
                            </InputGroup>

                        </Animated>
                    </FormGroup>


                    <FormGroup>
                        <Label style={{ width: '14vw' }}>Search by Date?</Label>
                        <select style={{ width: '10vw' }} value={this.state.isDate} onChange={this.handleChange} name="isDate">
                            <option value={true}>Yes</option>
                            <option value={false}>No</option>
                        </select>

                        <Animated
                            animationIn='fadeInUp' animationOut='fadeOut'
                            animationInDuration={400} animationOutDuration={600}
                            className={this.state.isDate ? "displayBlock" : "displayNone"} style={{ marginLeft: '5%' }} >
                            <InputGroup>
                                <DateRangeFilter handleChangeDate={this.handleChangeDate} />
                                <InputGroupAddon addonType="append">
                                    <Button outline color="primary" >Search</Button>
                                </InputGroupAddon>
                            </InputGroup>

                        </Animated>
                    </FormGroup>

                    <Input type="submit" value="Submit" />
                </Form>
            </div>
        );
    }
}

export default MapFilterComponent;