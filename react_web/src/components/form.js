import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';


export default function FormSec() {
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    console.log(email)


    const emailHandler = (e) => {
        setEmail(e.target.value)
    }

    return (
        <div className='form-section w-50 m-auto bg-info rounded my-5'>
            <Container>
                <Row>
                    <Col>
                        <div className='form-area p-3'>

                            <div className='d-flex mt-4 form-btn d-flex justify-content-between'>
                                <div className='px-3 for-btn'>
                                    <button className={isLogin ? 'active' : ""} onClick={() => setIsLogin(true)} type="submit">  Login </button>
                                </div>
                                <div className='px-3'>
                                    <button className={!isLogin ? 'active' : ""} onClick={() => setIsLogin(false)} >Sign Up</button>
                                </div>
                            </div>
                            {isLogin ? <>
                                <div className='form2'>
                                    <h2 className='fs-2 fw-bold text-center text-white pt-3'>Login Form</h2>
                                    <Form>
                                        <Form.Group className="mb-3" controlId="formGroupEmail">
                                            <Form.Label className='text-white fw-semibold'>Email address</Form.Label>
                                            {/* <Form.Control type="email" placeholder="Email" onChange={(e)=> setEmail(e.target.value)} /> */}
                                            <Form.Control type="email" placeholder="Email" onChange={(e) => emailHandler(e)} />

                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formGroupPassword">
                                            <Form.Label className='text-white fw-semibold'>Password</Form.Label>
                                            <Form.Control type="password" placeholder="Password" onChange={(e) => setEmail(e.target.value)} />
                                        </Form.Group>
                                        <div className='d-flex justify-content-between mb-2 mt-4'>
                                            <div className='mb-2'>
                                                <button className="bg-white py-2 px-3 border-0 rounded fw-semibold text-secondary">Login</button>
                                            </div>
                                            <div className='mt-2 text-end'>
                                                <a href="#" className='fw-bold text-decoration-none'>Forgot Password?</a>
                                            </div>
                                        </div>
                                        <p>Not a Member? <a href="#" onClick={() => setIsLogin(false)} className='text-decoration-none fw-semibold'>SignUp Now</a></p>
                                    </Form>
                                </div>
                            </> : <>
                                <h2 className='fs-2 fw-bold text-center text-white pt-3'>Sign Up Form</h2>
                                <Form>
                                    <Form.Group className="mb-3" controlId="formGroupEmail">
                                        <Form.Label className='text-white fw-semibold'>Email Id</Form.Label>
                                        <Form.Control type="email" placeholder="Email" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formGroupPassword">
                                        <Form.Label className='text-white fw-semibold'>Password</Form.Label>
                                        <Form.Control type="password" placeholder="Password" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formGroupPassword">
                                        <Form.Label className='text-white fw-semibold'>Confirm Password</Form.Label>
                                        <Form.Control type="password" placeholder="Confirm Password" />
                                    </Form.Group>
                                    <div className='mt-4'>
                                        <button onClick={() => setIsLogin(false)} className="bg-white py-2 border-0 rounded fw-semibold text-secondary">Sign Up</button>
                                    </div>
                                </Form>
                            </>}
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
