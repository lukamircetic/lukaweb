import React from 'react'
import LImage from './assets/luka.png';
import BImage from './assets/lukabball.png';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './About.css';

export const About = () => (
    <Container>
        <Row>
        <h2 style={{marginLeft: 485 + 'px'}}>About me</h2>
        </Row>
        <Row>
            <Image src={LImage} roundedCircle className="luka-img"/>
        </Row>
        <Row>
            <h14 style={{marginLeft:100 + 'px', textAlign: "center", marginRight: 50 + 'px'}}>I am currently a second year student enrolled in Software and Biomedical Engineering at McMaster University. I have a passion for software development and engineering medical devices. I am currently seeking a Software/Engineering internship for the Summer 2020 term.</h14>
        </Row>
        <Row>
            <Image src={BImage} roundedCircle className="lukabball-img"/>
        </Row>
        <Row>
            <h14 style={{marginLeft:100 + 'px', textAlign: "center", marginRight: 50 + 'px'}}>Basketball has been a passion of mine since I was 5 years old and I am currently playing for the McMaster Men's Varsity Basketball Team</h14>
        </Row>
        <Row>
            <h2 style={{marginLeft:505 + 'px', marginTop: 100 + 'px'}}>Skills</h2>
        </Row>
        <Row>
            <Col>
                <Row>
                    <h1 style={{marginLeft: 150 + 'px', marginTop: 75 + 'px', fontSize: 20 + 'px'}}>Programming Languages</h1>
                </Row>
                <h2 style={{marginTop: 50 + 'px', fontSize: 20 + 'px', textAlign: "center"}}>&lt; C++ | C | Java | Javascript | Python | Matlab | AutoCAD | Microsoft Office /&gt;</h2>
            </Col>
            <Col>
            <Row>
            <h1 style={{marginLeft: 150 + 'px', marginTop: 75 + 'px', fontSize: 20 + 'px'}}>Environments // Frameworks</h1>
            </Row>
            <h2 style={{marginLeft: 30 + 'px',marginTop: 50 + 'px', fontSize: 20 + 'px', textAlign: "center"}}> &lt; Jupyter Notebook | Pytorch | Processing | P5.js | Tensorflow | numpy | Pandas /&gt;</h2>
            </Col>
        </Row>
        <Row style={{marginLeft: -100 + 'px', marginTop: 100 + 'px'}}>
            <div className="footer">
                <p>Website designed by Luka Mircetic 2020</p>
            </div>
        </Row>
    </Container>

)