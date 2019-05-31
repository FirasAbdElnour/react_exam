import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faMailBulk, faPhone } from "@fortawesome/free-solid-svg-icons";

import { Card, ListGroup, Container, Row, Col } from "react-bootstrap";
import { Form, InputGroup } from "react-bootstrap";

import validator, { field } from './validator';

export default class Show extends Component {
    constructor() {
        super();
        // this.state = {
        //   name: field({ value: '', name: 'name', minLength: 2 }),
        //   cellular_phone: field({ value: '', name: 'cellular_phone', pattern:  /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/ }),
        //   reach_us: field({ value: '', name: 'reach_us' })
        // };

        // this.onInputChange = this.onInputChange.bind(this);
        // this.onSubmit = this.onSubmit.bind(this);
    }

    //   onInputChange({ target: { name, value } }) {
    //     this.setState({
    //       [name]: {
    //         ...this.state[name],
    //         value,
    //         ...validator(value, name, this.state[name].validations)
    //       }
    //     });
    //   }

    //   onSubmit(e) {
    //     e.preventDefault();
    //   }

    render() {
        return (
            <>
                <Card className='ml-5' style={{ width: '18rem' }}>
                    <Card.Header>contact us data</Card.Header>
                    <ListGroup variant="flush">
                        {/* <ListGroup.Item>Cras justo odio</ListGroup.Item>
                        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                        <ListGroup.Item>Vestibulum at eros</ListGroup.Item> */}
                        {this.props.details.map(item =>
                            <ListGroup.Item key={item}>{item}</ListGroup.Item>)}
                    </ListGroup>
                </Card>
            </>
        );
    }
}
