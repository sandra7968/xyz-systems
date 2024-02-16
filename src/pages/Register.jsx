import React from 'react'
import celeb from '../assets/celeb.png'
import { Button, Col, Dropdown, Form, Row } from 'react-bootstrap'
function Register() {
  return (
    <div className='row m-5'>
      <div className="col-sm">
        <h1 className='text-primary'>Unlock Exclusive Benefits</h1>
      <Form className='w-75 '>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCode">
          <Form.Label>PHONE NUMBER</Form.Label>
          <Dropdown>
      <Dropdown.Toggle variant="secondary" className='w-100' id="dropdown-basic">
        Code
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Code</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>        </Form.Group>

        <Form.Group as={Col} controlId="formGridNumber" className='mt-2'>
          <Form.Control type="text" placeholder="Enter phone number" className='mt-4' />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridName">
        <Form.Label>NAME</Form.Label>
        <Form.Control placeholder="Enter Your Name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridEmail">
        <Form.Label>EMAIL [OPTIONAL] </Form.Label>
        <Form.Control placeholder="Enter Your Email ID" />
      </Form.Group>
      <Button className="btn btn-primary w-100">CONTINUE</Button>
      <p className='mt-2'>Get ready to receive a secret code (OTP) on your phone.</p>
      </Form>
      </div>
      <div className="col-sm">
        <img src={celeb} className='img-fluid' alt="" />
      </div>
    </div>
  )
}

export default Register