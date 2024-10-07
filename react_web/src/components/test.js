import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import Button from 'react-bootstrap/esm/Button';
import { FaCaretSquareDown } from "react-icons/fa";

const Info = (data) => {
    let [pstatus, setPstatus] = useState(false)
    return (
        <div className='information'>
            <Container>
                <Row>
                    <Col>
                        <div className='text-center'>
                            <h4>Data</h4> 
                            <FaCaretSquareDown style={{color:"dark", fontSize:"30px"}}/>
                            <div>my email:{data.data.email}</div>
                            <div>my phone:{data.data.phone}</div>
                        </div>
                        <div className='hamburger-sec text-center mt-3'>
                            <input type={pstatus ? 'text' :'password'} className='p-2 border rounded'/> 
                            <Button onClick={() => setPstatus(!pstatus)} className='bg-secondary border-0 ms-2'>
                                {pstatus ? 'Hide' :'Show'}</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>

    )
}

export default Info;