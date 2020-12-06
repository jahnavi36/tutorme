import React, { Component } from 'react';
import {Form} from 'react-bootstrap';
import './App.css';

class StudentRating extends Component {
    render () {
        return (
            <Form>
                <title>Student Rating</title>
                <h4>Please rate the student regarding your session</h4>
                <h6>Politeness:</h6>
  {[ 'radio'].map((type) => (
    <div key={`inline-${type}`} className="mb-2">
      <Form.Check inline label="1-Good" type={type} id={`inline-${type}-1`} />
      <Form.Check inline label="2-Mixed" type={type} id={`inline-${type}-1`} />
      <Form.Check inline label="3-BAD" type={type} id={`inline-${type}-1`} /> 
      <Form.Label>Comments</Form.Label>
      <Form.Control as="textarea" rows={3} />
 
      <br/>
      <h6>Openness:</h6>
      <Form.Check inline label="1-Good" type={type} id={`inline-${type}-1`} />
      <Form.Check inline label="2-Mixed" type={type} id={`inline-${type}-1`} />
      <Form.Check inline label="3-BAD" type={type} id={`inline-${type}-1`} />
      <Form.Label>Comments</Form.Label>
      <Form.Control as="textarea" rows={3} />
    <br/>
    <h6>Flexibility:</h6>
      <Form.Check inline label="1-Good" type={type} id={`inline-${type}-1`} />
      <Form.Check inline label="2-Mixed" type={type} id={`inline-${type}-1`} />
      <Form.Check inline label="3-BAD" type={type} id={`inline-${type}-1`} />
      <Form.Label>Comments</Form.Label>
      <Form.Control as="textarea" rows={3} />
    </div>
  ))}
</Form>
        )
    }
}
export default StudentRating;