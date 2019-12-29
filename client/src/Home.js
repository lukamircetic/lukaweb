import React from 'react'
import Limage from './assets/LUKA.jpg';
import Bimage from './assets/Biomed2.jpg';
import Cimage from './assets/coding.jpg';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import ReactRotatingText from 'react-rotating-text';
import './Home.css';
export const Home = () => (
    <Container>   
    <Row>
        <div>
            <Container>
                <Row>
                    <Col xs={12} md={4} className="person-wrapper">
                        <Image src={Bimage} alt="Biomedical Engineering" roundedCircle fluid/>
                    </Col>
                    <Col xs={12} md={4}>
                        <Image src={Cimage} alt="Coding" roundedCircle fluid/>
                    </Col>
                    <Col xs={12} md={4}>
                        <Image src={Limage} alt="Basketball" roundedCircle fluid/>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <div class="rotating-text">
                        <p>
                        <ReactRotatingText items={['Biomedical Engineering', 'Software Development', 'Basketball']}/>
                        </p>
                    </div>
                </Row>
            </Container>

        </div>
    </Row>
    <div id="react-root"></div>
    </Container>

    
);
