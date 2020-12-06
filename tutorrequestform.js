import React, { Component } from 'react';
import {Form,Col,Button} from 'react-bootstrap';
import './App.css';

class TutorRequestForm extends Component {
  render() {
    return (
      <div className="tutorrequestform">
      <Form>
        <h5>Tutoring Session Request</h5>

  
  <Form.Group controlId="exampleForm.ControlInput1">
    
    <Form.Control type="subjectname" placeholder="Subject" />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlInput1">
    
    <Form.Control type="subjectname" placeholder="Topic" />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlInput1">
    
    <Form.Control type="subjectname" placeholder="Context" />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlInput1">
    
    <Form.Control type="subjectname" placeholder="Tasks already completed " />
  </Form.Group>
 
  
  <Form.Group controlId="exampleForm.ControlTextarea1">
    
    <Form.Control as="textarea" rows={3} placeholder="Questions to be answered"  />
  </Form.Group>
  <Form.Row>
    <Col>
      <Form.Control placeholder="Duration" />
    </Col>
    <Col>
      <Form.Control placeholder="Language" />
    </Col>
  </Form.Row>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
</div>
   );
  }
  }
  export default TutorRequestForm;
 
      