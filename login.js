import React, { Component } from 'react';
import { Form,Button } from 'react-bootstrap';
import '../../App.css'

class LogIn extends Component {
    render() {
        return(


          <div className = "loginform">
             <Form>
               <h5>Log In</h5>
               <br/>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Keep me signed in" />
  </Form.Group>
  <Button variant="primary" type="submit">
  Log In
  </Button>
</Form>
</div>
    

         
          
            
        
        )     
    
    }
}
export default LogIn;