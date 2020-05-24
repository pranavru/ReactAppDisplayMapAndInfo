import React, { Component, useState } from 'react';
import { Card, CardImg, Button, Form, FormGroup, Label, Input, FormText, InputGroup, InputGroupAddon, InputGroupText, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Animated } from 'react-animated-css';
import '../App.css';

class MapFilterComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isSpeech: false,
            isPerson: false,
            noOfPersons: 0,
            isDate: false
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const value = target.name === "isSpeech" ? (target.value ? true : false) : target.name === "isPerson" ? (target.value ? true : false) : null;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        setTimeout(3000)
        console.log(this.state)
        alert()
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
                            className={this.state.isPerson ? "displayBlock" : "displayNone"} style={{ marginLeft: '5%'}} >
                            <InputGroup>
                                <Input
                                    type="number"
                                    name="personNumber"
                                    id="personNumber"
                                    placeholder="No of Persons"
                                />
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