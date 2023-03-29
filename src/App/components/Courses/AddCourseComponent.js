import React, {useState} from 'react';
import Aux from "../../../hoc/_Aux";
import {Row, Col, Card, Form, Button, InputGroup, FormControl, DropdownButton, Dropdown} from 'react-bootstrap';
import DurationPicker from "react-duration-picker";

const AddCourse =() => {


    const [duration, setDuration] = useState({
        hours: 0,
        minutes: 0,
        seconds: 0
      });

      const [Course, setCourse] = useState({
        title: '',
        description: '',
        price: '',
        tags: [],
        category: '',
        subCategory: '',
        duration: 0,
        language: '',
        instructor : ''
      });
      const [Tags, setTags] = useState([]);
      const handleAddButtonClick = () => {
        if (Course.tags !== []) {
            setTags([...Tags, Course.tags]);
            setTags([]);
        }
      };

      
      const onChange = (duration) => {
        const { hours, minutes, seconds } = duration;
        setDuration({ hours, minutes, seconds });
      };

      const handleTitleChange = (event) => {
        setCourse({ ...Course, title: event.target.value });
      };

        const handleDescriptionChange = (event) => {
            setCourse({ ...Course, description: event.target.value });
        };

        const handlePriceChange = (event) => {
            setCourse({ ...Course, price: event.target.value });
        };

        const handleTagsChange = (event) => {
            setCourse({ ...Course, tags: event.target.value });
        };

        const handleCategoryChange = (event) => {
            setCourse({ ...Course, category: event.target.value });
        };

        const handleSubCategoryChange = (event) => {
            setCourse({ ...Course, subCategory: event.target.value });
        };

        const handleDurationChange = (event) => {
            setCourse({ ...Course, duration: event.target.value });
        };

        const handleLanguageChange = (event) => {
            setCourse({ ...Course, language: event.target.value });
        };

        const handleInstructorChange = (event) => {
            setCourse({ ...Course, instructor: event.target.value });
        };

        const handleSubmit = (event) => {
        event.preventDefault();
        const { title, description, price, tags, category, subCategory, duration, language, instructor } = Course;
        const course = { title, description, price, tags, category, subCategory, duration, language, instructor };
        console.log(course);
        };

    
        return (
            <Aux>
                <Row>
                    <Col>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">Add a new course</Card.Title>
                            </Card.Header>
                            <Form onSubmit={handleSubmit}>
                            <Card.Body>
                                <Row>
                                    <Col md={6}>
                                        
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Select Course Categorie</Form.Label>
                                                <Form.Control as="select" className="mb-3" value={Course.name} onChange={handleCategoryChange}>
                                                     <option>Default Categorie</option>
                                                     <option>Categorie 1</option>
                                                     <option>Categorie 2</option>
                                                     <option>Categorie 3</option>
                                                     <option>Categorie 4</option>
                                                     <option>Categorie 5</option>
                                                </Form.Control>
                                                
                                            </Form.Group>

                                            <Form.Group controlId="formBasicName">
                                                <Form.Label>Tutor Name</Form.Label>
                                                <Form.Control type="text" placeholder="Tutor Name" value={Course.instructor} onChange={handleInstructorChange} />
                                            </Form.Group>
                                            <Form.Group className="mb-3 mr-5">
                                                <Form.Label>Price</Form.Label>
                                                <Form.Control type="number" placeholder="Price" value={Course.price} onChange={handlePriceChange}/>
                                            </Form.Group>
                                            <Form.Group>
                                            <Form.Label>Chose the course language</Form.Label>
                                            <Form.Check
                                                custom
                                                type="radio"
                                                label="Arabic"
                                                name="Language"
                                                id="LanguageArabic"
                                                value={Course.language}
                                                onChange={handleLanguageChange}
                                            />
                                            <Form.Check
                                                custom
                                                type="radio"
                                                label="Frensh"
                                                name="Language"
                                                id="Frensh"
                                                value={Course.language}
                                                onChange={handleLanguageChange}
                                            />
                                            <Form.Check
                                                custom
                                                type="radio"
                                                label="English"
                                                name="Language"
                                                id="English"
                                                value={Course.language}
                                                onChange={handleLanguageChange}
                                            />
                                        </Form.Group>
                                           
                                            <Button variant="primary" type="submit">
                                                Submit
                                        </Button>
                                    </Col>
                                    <Col md={6}>
                                    <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Select Sub-Categorie</Form.Label>
                                                <Form.Control as="select" className="mb-3" value={Course.subCategory} onChange={handleSubCategoryChange} >
                                                     <option>Default Sub-Categorie</option>
                                                     <option>Sub-Categorie 1</option>
                                                     <option>Sub-Categorie 2</option>
                                                     <option>Sub-Categorie 3</option>
                                                     <option>Sub-Categorie 4</option>
                                                     <option>Sub-Categorie 5</option>
                                                </Form.Control>
                                                
                                            </Form.Group>
                                       
                                        <Form.Group controlId="exampleForm.ControlInput1">
                                            <Form.Label>Course Title</Form.Label>
                                            <Form.Control type="text" placeholder="Course Name" value={Course.title} onChange={handleTitleChange} />
                                        </Form.Group>
                                        <Form.Group controlId="exampleForm.ControlTextarea1">
                                            <Form.Label>Course Dscription</Form.Label>
                                            <Form.Control as="textarea" rows="3" value={Course.description} onChange={handleDescriptionChange}  />
                                        </Form.Group>
                                        <InputGroup className="mb-3">
                                            <InputGroup.Prepend>
                                                <Button onClick={handleAddButtonClick}>Add</Button>
                                            </InputGroup.Prepend>
                                            <FormControl aria-describedby="basic-addon1" placeholder="Add a Tag here" />
                                        </InputGroup>
                                        <ul>
                                          {Tags.map((string, index) => (
                                           <li key={index}>{string}</li>
                                           ))}
                                        </ul>
                                        <Form.Label>Course Dscription</Form.Label>
                                        <DurationPicker
                                             onChange={onChange}
                                             initialDuration={{ hours: 0, minutes: 0, seconds: 0 }}
                                             maxHours={20}
                                             value={duration}
                                             seconds={0}
                                        />
                                        
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

export default AddCourse;