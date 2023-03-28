import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap';
import Aux from "../../../hoc/_Aux";
import Card from "../MainCard";


class ListCourse extends Component {
    render() {
        return (
            <Aux>
                <Row>
                    <Col>
                        <Card title='Hello Card' isOption>
                            <p>
                               List Course
                            </p>
                        </Card>
                    </Col>
                </Row>
            </Aux>
        );
    }
}

export default ListCourse;