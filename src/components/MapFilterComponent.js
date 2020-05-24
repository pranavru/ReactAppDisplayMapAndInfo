import React, { Component } from 'react';
import { Card, CardImg, Button, Form, FormGroup, Label, Input, FormText, InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap';
import { Animated } from 'react-animated-css';
import '../App.css';

class MapFilterComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isSpeechDivVisible: false,
            isDateRangeVisible: false,
            isPersonFilterVisible: false,
            queryParams: {
                speech: ''
            }
        }
        setTimeout(() => this.render(), 500);
    }

    buttonValues = [
        { name: 'S', color: 'success' },
        { name: 'P', color: 'info' },
        { name: 'T', color: 'warning' },
        { name: 'R', color: 'danger' }
    ];

    onToogleSpeech() {
        this.setState({
            isSpeechDivVisible: !this.state.isSpeechDivVisible,
            isPersonFilterVisible: false,
            isDateRangeVisible: false
        })
    }

    onTooglePerson() {
        this.setState({
            isSpeechDivVisible: false,
            isPersonFilterVisible: !this.state.isPersonFilterVisible,
            isDateRangeVisible: false
        })
    }

    onToogleTimeline() {
        this.setState({
            isSpeechDivVisible: false,
            isPersonFilterVisible: false,
            isDateRangeVisible: !this.state.isDateRangeVisible
        })
    }

    onToogleR() {
        this.setState({
            isSpeechDivVisible: !this.state.isSpeechDivVisible,
            isPersonFilterVisible: !this.state.isPersonFilterVisible,
            isDateRangeVisible: !this.state.isDateRangeVisible
        })
    }

    handleChange(event) {
        this.setState({ value: event.target.value })
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {

        return (
            <>
                {/* <CardImg top src={'/images (1).jpeg'} style={{ height: '33vh' }} /> */}

                <div>
                    <form onSubmit={this.handleSubmit.bind(this)}>
                        <FormGroup>
                            <Label for="exampleSearch">Search by Speech</Label>
                            <InputGroup>
                                <Input
                                    type="search"
                                    name="search"
                                    id="exampleSearch"
                                    placeholder="Search by Speech Value"
                                    value={this.state.value}
                                    onChange={this.handleChange.bind(this)}
                                />
                                <InputGroupAddon addonType="append">
                                    <Button outline color="success" >Search</Button>
                                </InputGroupAddon>
                            </InputGroup>
                        </FormGroup>
                    </form>
                </div>

                <div className="col-md-12" style={{ height: '95vh', borderRadius: 6 }}>
                    <hr />
                    <Card>
                        <div className="row">
                            {this.buttonValues.map(bVal =>
                                <div className="col-md-2" style={{ marginTop: "2.5%", marginLeft: '4%', left: '4%' }}>
                                    <Button outline color={bVal.color}
                                        style={{ width: 50, height: 50, borderRadius: 30 }}
                                        onClick={
                                            bVal.name == "S" ? this.onToogleSpeech.bind(this) :
                                                bVal.name == 'P' ? this.onTooglePerson.bind(this) :
                                                    bVal.name == 'T' ? this.onToogleTimeline.bind(this) :
                                                        bVal.name == 'R' ? this.onToogleR.bind(this) : this.render()}>{bVal.name}</Button>
                                </div>
                            )}
                        </div>

                        <div style={{ margin: '3%' }}>
                            <Animated
                                animationIn='fadeInUp' animationOut='fadeOut'
                                animationInDuration={400} animationOutDuration={600}
                                className={this.state.isSpeechDivVisible ? "displayBlock" : "displayNone"}
                            >
                                <Form>
                                    <FormGroup>
                                        <Label for="exampleSearch">Search by Speech</Label>
                                        <InputGroup>
                                            <Input
                                                type="search"
                                                name="search"
                                                id="exampleSearch"
                                                placeholder="Search by Speech Value"
                                                value={this.state.queryParams.spe}
                                                onChange={this.handleChange.bind(this)}
                                            />
                                            <InputGroupAddon addonType="append">
                                                <Button outline color="success">Search</Button>
                                            </InputGroupAddon>
                                        </InputGroup>
                                    </FormGroup>
                                </Form>
                            </Animated>
                            <Animated
                                animationIn='fadeInUp' animationOut='fadeOut'
                                animationInDuration={400} animationOutDuration={600}
                                className={this.state.isPersonFilterVisible ? "displayBlock" : "displayNone"} >
                                <Form>
                                    <FormGroup>
                                        <Label for="exampleSearch">Search by Name</Label>
                                        <InputGroup>
                                            <Input
                                                type="search"
                                                name="dateValue"
                                                id="timeline"
                                                placeholder="Search by Name Value"
                                            />
                                            <InputGroupAddon addonType="append">
                                                <Button outline color="primary">Search</Button>
                                            </InputGroupAddon>
                                        </InputGroup>
                                    </FormGroup>
                                </Form>
                            </Animated>
                            <Animated
                                animationIn='fadeInUp' animationOut='fadeOut'
                                animationInDuration={400} animationOutDuration={600}
                                className={this.state.isDateRangeVisible ? "displayBlock" : "displayNone"}
                            >
                                <Form>
                                    <FormGroup>
                                        <Label for="exampleSearch">Search by Date Range</Label>

                                        <InputGroup>
                                            <Input
                                                type="search"
                                                name="dateValue"
                                                id="timeline"
                                                placeholder="Search using Date Range"
                                            />
                                            <InputGroupAddon addonType="append">
                                                <Button outline color="warning">Search</Button>
                                            </InputGroupAddon>
                                        </InputGroup>
                                    </FormGroup>
                                </Form>
                            </Animated>
                        </div>
                    </Card>
                </div>
            </>
        );
    }
}


export default MapFilterComponent;

