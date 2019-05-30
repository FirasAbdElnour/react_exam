import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faMailBulk, faCity } from "@fortawesome/free-solid-svg-icons";

import { Alert, Button, Container, Row, Col } from "react-bootstrap";
import { Form, InputGroup } from "react-bootstrap";


export default class App extends Component {
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
                          onBlur={this.onInputChange}
                        />
                      </InputGroup>
                      
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
                            <FontAwesomeIcon icon={faUser} />
                          </InputGroup.Text>
                        </InputGroup.Prepend>
                        <Form.Control
                          name="cellular_phone"
                          placeholder="Enter your Cellular Phone  "
                          aria-label="cellular_phone"
                          onBlur={this.onInputChange}
                        />
                      </InputGroup>
                     
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
