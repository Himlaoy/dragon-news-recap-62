import React, { useContext } from 'react';
import bg from '../../../assets/logo.png'
import moment from 'moment';
import Marquee from "react-fast-marquee";
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { AuthContext } from '../../../Provide/AuthProvide';

const Header = () => {

    const {user} = useContext(AuthContext)

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
                                <Link to="/">Home</Link>
                                <Nav.Link href="#pricing">About</Nav.Link>
                                <Nav.Link href="#pricing">Career</Nav.Link> 
                            </Nav>
                            <Nav>
                                { user && <Nav.Link href="#deets"><FaUserCircle style={{fontSize:"2rem"}}></FaUserCircle></Nav.Link>}
                                
                               { user? <Button variant="secondary">LogOut</Button>:
                               <Link to="/login"><Button variant="secondary">Login</Button></Link>}
                               
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Container>
        </div>
    );
};

export default Header;