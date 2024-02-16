import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import house from '../assets/real-estate-house.png'
import { Link } from 'react-router-dom'
function Header() {
  return (
    <>
        <Navbar className="bg-body-tertiary">
        <Container className=''>
          <Navbar.Brand  className='d-flex align-items-center justify-content-center'>
            <img
              alt=""
              src={house}
              width="100"
              height="100"
              style={{padding:'0px', margin: '-20px 20px'}}
            />
            <Link to={'/'} style={{textDecoration:'none', color:'black'}} ><h3>XYZ SYSTEMS LLP.</h3></Link>
          </Navbar.Brand>
          
        </Container>
      </Navbar>
    </>
  )
}

export default Header