import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import picture from '../image/kevin.jpg';
import './home.css'

function Home() {
  return (
    <div>
      <Container className='my-container'>
        <Row className='align-items-center'>
          <Col className='text text-md-left'>
            <Col className='name'>
              <p>Kevin Gangoso</p>
            </Col>
            <Col className='school'>
              <p>Taguig City University</p>
            </Col>
            <Col className='work'>
              <p>Web Developer</p>
            </Col>
          </Col>
          <Col className='text-md-right'>
            <Image src={picture} className='profile' />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Home
