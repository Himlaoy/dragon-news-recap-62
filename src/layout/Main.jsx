import React from 'react';
import Header from '../page/shared/Header/Header';
import Footer from '../page/shared/Footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import RightNav from '../page/shared/RoghtNav/RightNav';
import LeftNav from '../page/shared/LeftNav/LeftNav';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    <Col lg={3}>
                        <LeftNav></LeftNav>
                    </Col>
                    <Col lg={6} className='text-center mt-5'>
                        <Outlet></Outlet>
                    </Col>
                    <Col lg={3}>
                        <RightNav></RightNav>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Footer></Footer>
            </Container>
        </div>
    );
};

export default Main;