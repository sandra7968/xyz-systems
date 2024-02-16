import React from 'react'
import { Button, Card, Carousel, Container, Nav, Navbar } from 'react-bootstrap'
import membership from '../assets/membership.jpg'
import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.jpg'
import { Link } from 'react-router-dom'
import './home.css'
function Home() {
  return (
    <>
     <Navbar  collapseOnSelect expand="lg" >
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav style={{margin:'0 auto'}} className="fw-bold">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#dashboard">Dashboard</Nav.Link>
            <Nav.Link href="#products">Products</Nav.Link>
            <Nav.Link href="#transactions">Transactions</Nav.Link>
            <Nav.Link href="#journal">Journal</Nav.Link>

          </Nav>
          <Nav className='fs-5'>
            <Nav.Link className='d-flex flex-column align-items-center' href="#user"><i className="fa-solid fa-user fa-xl mt-2 mb-3"></i> <span>Joseph Lazar</span></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <div className="features container">
        <h2>New Arrival</h2>
        <div className='features-grid row'>
            <div className="membership col-sm">
            <p><span style={{textDecoration:'underline'}}>JOIN</span> TODAY</p>
                <div className='d-flex flex-column text-center'>
                    <img className='membershipImg' src={membership} style={{width:'300px'}} alt="community-membership" />
                    <Link to="/register"><Button  className="btn btn-secondary fw-bold mt-2 w-75">JOIN NOW</Button></Link>
                </div>
            </div>
            <div className="features-carousel col-sm">
                <div className='text-center fs-2 text-success'>Unlock Premium Features Now
               </div>
            <Carousel data-bs-theme="dark" className='ps-5 pe-5'>
      <Carousel.Item>
      <div className="cardSlider d-flex m-4 text-center">
          <Card className='m-4 bg-light text-dark border-success' style={{ width: '14rem' }}>
          <Card.Img variant="top" src={img1} />
          <Card.Body>
            <Card.Title className='text-success'>Lower Interest Rates</Card.Title>
          </Card.Body>
        </Card>
        <Card className='m-4 bg-light text-dark border-success' style={{ width: '14rem' }}>
          <Card.Img variant="top" src={img2} />
          <Card.Body>
            <Card.Title className='text-success'>Interest Free Payments</Card.Title>
          </Card.Body>
        </Card>
        <Card className='m-4 bg-light text-dark border-success' style={{ width: '14rem' }}>
          <Card.Img variant="top" src={img3} />
          <Card.Body>
            <Card.Title className='text-success'>Discount on Materials</Card.Title>
          </Card.Body>
        </Card>
      </div>
      </Carousel.Item>
      <Carousel.Item className='slide2'>
      <div className="cardSlider d-flex m-4 text-center">
        <Card className='m-4 bg-light text-dark border-success' style={{ width: '14rem' }}>
          <Card.Img variant="top" src={img2} />
          <Card.Body>
            <Card.Title className='text-success'>Interest Free Payments</Card.Title>
          </Card.Body>
        </Card>
        <Card className='m-4 bg-light text-dark border-success' style={{ width: '14rem' }}>
          <Card.Img variant="top" src={img3} />
          <Card.Body>
            <Card.Title className='text-success'>Discount on Materials</Card.Title>
          </Card.Body>
        </Card>
        <Card className='m-4 bg-light text-dark border-success' style={{ width: '14rem' }}>
          <Card.Img variant="top" src={img1} />
          <Card.Body>
            <Card.Title className='text-success'>Lower Interest Rates</Card.Title>
          </Card.Body>
        </Card>
      </div>
      </Carousel.Item>
      <Carousel.Item className='slide3'>
      <div className="cardSlider d-flex m-4 text-center">
        <Card className='m-4 bg-light text-dark border-success' style={{ width: '14rem' }}>
          <Card.Img variant="top" src={img3} />
          <Card.Body>
            <Card.Title className='text-success'>Discount on Materials</Card.Title>
          </Card.Body>
        </Card>
        <Card className='m-4 bg-light text-dark border-success' style={{ width: '14rem' }}>
          <Card.Img variant="top" src={img1} />
          <Card.Body>
            <Card.Title className='text-success'>Lower Interest Rates</Card.Title>
          </Card.Body>
        </Card>
        <Card className='m-4 bg-light text-dark border-success' style={{ width: '14rem' }}>
          <Card.Img variant="top" src={img2} />
          <Card.Body>
            <Card.Title className='text-success'>Interest Free Payments</Card.Title>
          </Card.Body>
        </Card>
      </div>
      </Carousel.Item>
    </Carousel>

    <div className='features-button d-flex flex-column align-items-center'>
        <Button className='btn btn-success mb-2 fw-bold w-25'>UNLOCK NOW</Button>
        <Button style={{width:'180px'}} className='btn fw-bold btn-success'>DETAILS</Button>
    </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Home