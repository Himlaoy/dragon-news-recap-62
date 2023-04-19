import React from 'react';
import bg from '../../../assets/logo.png'
import moment from 'moment';
import Marquee from "react-fast-marquee";
import { Button, Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <div >
            <Container>
                <div className='text-center mt-5'>
                    <img src={bg} alt="" />
                    <p className='text-success'><small>Journalism Without Fear or Favour</small></p>
                    <p>{moment().format("dddd, MMMM, YYYY")}</p>
                </div>
                <div className='d-flex mt-5'>
                    <Button variant="danger">Latest</Button>
                    <Marquee speed={70}>
                        <p> Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</p>
                    </Marquee>
                </div>
                <Navbar collapseOnSelect expand="lg" bg="" variant="white" className='bg-success mt-4 rounded'>
                    <Container>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mx-auto">
                                <Nav.Link href="#features">Home</Nav.Link>
                                <Nav.Link href="#pricing">About</Nav.Link>
                                <Nav.Link href="#pricing">Career</Nav.Link>
                                
                            </Nav>
                            <Nav>
                                <Nav.Link href="#deets">Profile</Nav.Link>
                                <Nav.Link eventKey={2} href="#memes">
                                <Button variant="secondary">Login</Button>
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Container>
        </div>
    );
};

export default Header;