import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';


function Header() {
    const [menuStatus, setMenuStatus] = useState(false);
    return (
        <div className="header-sec">
            <Container>
                <Row>
                    <Col>
                        <div className="nav-sec">
                            <Link className="logo-img text-dark" to="/">LOGO</Link>
                            <div>
                                <ul className="mylist">
                                    <li><Link to="about-us" className='nav-list'>About Us</Link></li>
                                    <li><Link to="services" className='nav-list'>Secrvices</Link></li>
                                    <li><Link to="blogs" className='nav-list'> Blogs</Link></li>
                                    <li><Link to="contact-us" className='nav-list'>Contact Us</Link></li>
                                    <li> <Link to='/login' className='nav-list'>login </Link></li>
                                </ul>
                            </div>
                            {/* <Button className='micon bg-secondary border text-white fs-5' onClick={() => setMenuStatus(!menuStatus)}>
                                { menuStatus ? <span>&times;</span> : <span>&#9776;</span> }
                            </Button>
                            <div className={`menu ${menuStatus ? 'activeMenu' : ''}`}>
                                <ul className="mylist">
                                    <li>About Us</li>
                                    <li>Blog</li>
                                    <li>Contact Us</li>
                                </ul>
                            </div> */}
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Header;



