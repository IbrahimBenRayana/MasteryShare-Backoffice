import React, {Component} from 'react';
import Aux from "../../../hoc/_Aux";
import {Row, Col, Card, Form, Button, InputGroup, FormControl, DropdownButton, Dropdown} from 'react-bootstrap';


class AddCourse extends Component {
    render() {
        return (
            <Aux>
                <Row>
                    <Col>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">Add a new course</Card.Title>
                            </Card.Header>
                            <Form>
                            <Card.Body>
                                <Row>
                                    <Col md={6}>
                                        
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Select Course Categorie</Form.Label>
                                                <Form.Control as="select" className="mb-3">
                                                     <option>Default Categorie</option>
                                                     <option>Categorie 1</option>
                                                     <option>Categorie 2</option>
                                                     <option>Categorie 3</option>
                                                     <option>Categorie 4</option>
                                                     <option>Categorie 5</option>
                                                </Form.Control>
                                                
                                            </Form.Group>

                                            <Form.Group controlId="formBasicPassword">
                                                <Form.Label>Tutor Name</Form.Label>
                                                <Form.Control type="text" placeholder="Tutor Name" />
                                            </Form.Group>
                                            <Form.Group controlId="formBasicChecbox">
                                                <Form.Check type="checkbox" label="Check me out" />
                                            </Form.Group>
                                            
                                            <Button variant="primary">
                                                Submit
                                        </Button>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group controlId="exampleForm.ControlInput1">
                                            <Form.Label>Course Name</Form.Label>
                                            <Form.Control type="text" placeholder="Course Name" />
                                        </Form.Group>
                                        <Form.Group controlId="exampleForm.ControlTextarea1">
                                            <Form.Label>Course Dscription</Form.Label>
                                            <Form.Control as="textarea" rows="3" />
                                        </Form.Group>
                                        
                                      </Col>
                                    
                                   </Row>
                                </Card.Body>
                            </Form>
                        </Card>
                       
                    </Col>
                </Row>
            </Aux>
        );
    }
}

export default AddCourse;