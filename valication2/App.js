import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faMailBulk, faPhone } from "@fortawesome/free-solid-svg-icons";

import { Alert, Button, Container, Row, Col } from "react-bootstrap";
import { Form, InputGroup } from "react-bootstrap";

import validator, { field } from './validator';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      name: field({ value: '', name: 'name', minLength: 2 }),
      cellular_phone: field({ value: '', name: 'cellular_phone', pattern:  /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/ }),
      reach_us: field({ value: '', name: 'reach_us' })
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onInputChange({ target: { name, value } }) {
    this.setState({
      [name]: {
        ...this.state[name],
        value,
        ...validator(value, name, this.state[name].validations)
      }
    });
  }

  onSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <Alert variant="secondary">
        <Container>
          <Row>
            <Col md={{ span: 10, offset: 1 }}>
              <h1>Student Details Form</h1>
              <hr />
            </Col>
          </Row>
          <Row>
            <Col>
              <Form onSubmit={this.onSubmit}>

                <Row>
                  <Col>
                    <Form.Group controlId="formControlUsername">
                      <Form.Label>Name</Form.Label>
                      <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                          <InputGroup.Text>
                            <FontAwesomeIcon icon={faUser} />
                          </InputGroup.Text>
                        </InputGroup.Prepend>
                        <Form.Control
                          name="name"
                          placeholder="Enter your Name  "
                          aria-label="name"
                          defaultValue={this.state.name.value}
                          onBlur={this.onInputChange}
                        />
                      </InputGroup>
                      {this.state.name.errors.map((err, i) => (
                        <Form.Text key={i} className="text-danger">
                          {err}
                        </Form.Text>
                      ))}
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <Form.Group controlId="formControlUsername">
                      <Form.Label>Cellular Phone</Form.Label>
                      <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                          <InputGroup.Text>
                            <FontAwesomeIcon icon={faPhone} />
                          </InputGroup.Text>
                        </InputGroup.Prepend>
                        <Form.Control
                          name="cellular_phone"
                          placeholder="Enter your Cellular Phone  "
                          aria-label="cellular_phone"
                          defaultValue={this.state.cellular_phone.value}
                          onBlur={this.onInputChange}
                        />
                      </InputGroup>
                      {this.state.cellular_phone.errors.map((err, i) => (
                        <Form.Text key={i} className="text-danger">
                          {err}
                        </Form.Text>
                      ))}
                    </Form.Group>
                  </Col>
                </Row>


                <Row>
                  <Col>
                  <Form.Group controlId="formControlCourse">
                    <Form.Label>How did you reached us?</Form.Label>
                    <InputGroup className="mb-3">
                      <InputGroup.Prepend>
                        <InputGroup.Text>
                          <FontAwesomeIcon icon={faMailBulk} />
                        </InputGroup.Text>
                      </InputGroup.Prepend>
                      <Form.Control
                        as="select"
                        name="reach_us"
                        defaultValue={this.state.reach_us.value}
                        onBlur={this.onInputChange}
                      >
                        <option value="">Select How did you Reached Us please</option>
                        <option value="advertisment">Advertisment</option>
                        <option value="news">News</option>
                        <option value="friends">Friends</option>
                        <option value="social_media">Social Media</option>
                      </Form.Control>
                    </InputGroup>
                  </Form.Group>
                  {this.state.reach_us.errors.map((err, i) => (
                    <Form.Text key={i} className="text-danger">
                      {err}
                    </Form.Text>
                  ))}

                  </Col>
                </Row>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </Alert>
    );
  }
}
