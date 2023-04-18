import React from 'react';
import bg from '../../../assets/logo.png'
import moment from 'moment';
import Marquee from "react-fast-marquee";
import { Button, Container } from 'react-bootstrap';

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
            </Container>
        </div>
    );
};

export default Header;