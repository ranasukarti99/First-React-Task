import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function Us() {
    let displayData = () => {
        alert("Hello")
    }
    return (
        <>
            <div className="about-sec d-flex justify-content-center align-items-center">
                <Container>
                    <Row>
                        <Col>
                            <div className="about-us">
                                <h2 className='fw-bold fs-1 text-dark mb-5'>Services</h2>
                                <p className='para text-dark fw-semibold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                <p className='para text-dark fw-semibold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim ven  llamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}


export default Us;