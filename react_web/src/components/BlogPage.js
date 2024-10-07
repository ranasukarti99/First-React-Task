import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function BlogPage() {
    return (
        <div>
            <Container>
                <Row>
                    <Row>
                        <Col lg="6">
                            <div className='mt-5 pt-5'>
                                <div className='my-5 py-5 px-3'>
                                    {/* <img src='{contactImg}'/> */}
                                    <img src='/images/contact.jpg' className="w-100" />
                                </div>
                            </div>
                        </Col>
                        <Col lg="6">
                            <div className='mt-5 pt-5'>
                                <h2 className='mt-5 pt-5'>Blogs</h2>
                                <p>A typical blog combines text, digital images, and links to other blogs, web pages, and other media related to its topic. </p>                    </div>
                        </Col>
                    </Row>
                </Row>
            </Container>
        </div>
    )
}