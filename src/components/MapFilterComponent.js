import React, { Component } from 'react';
import { Card, CardImg, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class MapFilterComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isSpeechDivVisible: true
        }
    }

    buttonValues = [
        { name: 'S', color: 'success', method: 'this.onToggleSpeech' },
        { name: 'P', color: 'info' },
        { name: 'T', color: 'warning' },
        { name: 'R', color: 'danger' }
    ];

    onToogleSpeech() {
        alert("speech Clicked")
    }

    onTooglePerson() {
        alert("clicked")
    }

    render() {
        return (
            <>
                <CardImg top src={'/images (1).jpeg'} style={{ height: '33vh' }} />
                <div className="col-md-12" style={{ height: '95vh', borderRadius: 6 }}>
                    <hr />
                    <Card style={{ backgroundColor: 'white', height: '60vh' }}>
                        <div className="row">
                            {this.buttonValues.map(bVal =>
                                <div className="col-md-2" style={{ marginTop: "2.5%", marginLeft: '4%', left: '4%' }}>
                                    <Button outline color={bVal.color}
                                        src={'/images (1).jpeg'}
                                        style={{ width: 50, height: 50, borderRadius: 30 }}
                                        onClick={bVal.name == "S" ? this.onToogleSpeech : bVal.name == 'P' ? this.onTooglePerson : this.onTooglePerson}>{bVal.name}</Button>
                                </div>
                            )}
                        </div>

                        {this.state.isSpeechDivVisible ?
                            <div style={{ margin: '3%' }}>
                                <Form>
                                    <FormGroup>
                                        <Label for="exampleSearch">Search</Label>
                                        <Input
                                            type="search"
                                            name="search"
                                            id="exampleSearch"
                                            placeholder="search placeholder"
                                        />
                                    </FormGroup>
                                </Form>
                            </div> : <div></div>}

                    </Card>
                </div>
            </>
        );
    }
}

export default MapFilterComponent;

