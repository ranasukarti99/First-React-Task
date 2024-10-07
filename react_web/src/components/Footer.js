import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';


export default function Footer() {
    return (
        <div className='bg-dark text-white py-5'>
             <Container>
            <Row>
                <Col lg="4">
                    <Link to="/" className='text-white fw-bold fs-3 text-decoration-none'>LOGO</Link>
                    <p className='text-dark mt-4 text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ull</p>
                </Col>
                <Col lg="4">
                    <ul>
                        <h5 className='my-3 fw-bold text-info '>Our Services</h5>
                        <li className='list-unstyled'>Automation Testing</li>
                        <li className='list-unstyled'>Manual Testing</li>
                        <li className='list-unstyled'>TCOE Testing</li>
                        <li className='list-unstyled'>API Testing</li>
                        <li className='list-unstyled'>Big Data Testing</li>
                    </ul>
                </Col>
                <Col lg="4">
                    <ul>
                    <h5 className='my-3 fw-bold text-info '>More Information</h5>
                        <li className='list-unstyled'>Contact Us</li>
                        <li className='list-unstyled'>Privacy Policy</li>
                        <li className='list-unstyled'>FAQ</li>
                    </ul>
                </Col>
            </Row>
        </Container>
        </div>
    )
}
