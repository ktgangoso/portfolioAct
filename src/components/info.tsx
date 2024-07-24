import React from 'react'
import './info.css'
import { Container, Row, Col, Image } from 'react-bootstrap'
import picture from '../image/kevin.jpg';
import { FaFacebook, FaLinkedin, FaGithubSquare } from "react-icons/fa";

function Info() {
    return (
        <div>
            <Container className='my-container'>
                <Row className='align-items-center'>
                    <Col className='text text-md-left'>
                        <Image src={picture} className='profile2' />
                    </Col>
                    <Col className='text2 text-md-right'>
                        <Col className='about'>
                            <p>About Me</p>
                        </Col>
                        <Col className='content'>
                            <p>Graduate from Taguig City University with a Bachelor of Science degree in
                                Information Systems
                            </p>
                            <a className='icon'>
                                <FaFacebook />
                            </a>
                            <a className='icon'>
                                <FaLinkedin />
                            </a>
                            <a className='icon'>
                                <FaGithubSquare />
                            </a>
                        </Col>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Info
