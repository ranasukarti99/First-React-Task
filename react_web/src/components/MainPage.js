import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Cards from './card';
import Forms from './form';
import Fetching from './ApiDAta';


function Us() {
    let displayData = () => {
        alert("Hello")
    }
    return (
        <>
            <div className="top-sec d-flex justify-content-center align-items-center">
        {<Fetching/>}
                <Container>
                    <Row>
                        <Col>
                            <div className="main-sec text-center">
                                <h2 className='fw-bold display-4 text-dark'>Welcome To our World</h2>
                                <p className='para text-dark fw-semibold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div>
                <Cards/>
            </div>
            <div>
                <Forms/>
            </div>
        </>
    );
}


export default Us;