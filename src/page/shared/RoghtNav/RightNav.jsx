import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaBeer, FaFacebook, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';
import Qzone from '../Qzone/Qzone';

const RightNav = () => {
    return (
        <div className='d-block'>
            <div>
                <h3>Contact with us</h3>
                <Button variant="outline-primary"><FaFacebook className='me-2'></FaFacebook>Log in with Facebook</Button>
                <Button variant="outline-secondary"><FaGoogle className='me-2'></FaGoogle>Log in with Google</Button>
            </div>
            <ListGroup className='mt-4'>
                <ListGroup.Item><FaFacebook className='me-2'></FaFacebook>Facebook</ListGroup.Item>
                <ListGroup.Item><FaTwitter className='me-2'></FaTwitter>Twitter</ListGroup.Item>
                <ListGroup.Item><FaGoogle className='me-2'></FaGoogle>Google</ListGroup.Item>
            </ListGroup>
            <Qzone></Qzone>
            <div>
                <img src="" alt="" />
            </div>
        </div>
    );
};

export default RightNav;