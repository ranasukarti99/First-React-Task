import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import contactImg from '../../public/images/contact.jpg';

export default function BlogPage() {
  return (
    <div className='d-flex justify-content-center align-items-center '>
        <Container>
            <Row>
                <Col lg="6">
                    <div className='mt-5 pt-5'> 
                    <h2 className='mt-5 pt-5'>Contact Us</h2>
                    <p>Looking for inspiration to enhance your Contact Us page? Check out these over 40 examples that will help you create a captivating and user-friendly page.</p>
                    </div>
                </Col>
                <Col lg="6">
                <div className='mt-5 pt-5'> 
                    <div className='my-5 py-5 px-3'>
                        {/* <img src='{contactImg}'/> */}
                        <img src='/images/contact.jpg' className="w-100"/>
                    </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}
