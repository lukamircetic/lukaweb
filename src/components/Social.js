import React from 'react';
import {FontAwesomeIcon}from '@fortawesome/react-fontawesome';
import {
    // faYoutube,
    faTwitter,
    faGithub,
    faLinkedin
} from "@fortawesome/free-brands-svg-icons"
import { Container, Row, Col } from 'react-bootstrap';


export default function Social() {
    return (
        <Container className="social-tray">
            <Row>
                <Col xs={3}></Col>
                <Col>
                    <div className="social-container">
                        <a href="https://github.com/lukamircetic" className="github social">
                            <FontAwesomeIcon icon={faGithub} size="2x"/>
                        </a>
                    </div>
                </Col>
                <Col>
                    <div className="social-container">
                        <a href="https://www.linkedin.com/in/luka-mircetic/" className="linkedin social">
                            <FontAwesomeIcon icon={faLinkedin} size="2x"/>
                        </a>
                    </div>
                </Col>
                <Col>
                    <div className="social-container">
                        <a href="https://twitter.com/luka_software" className="twitter social">
                            <FontAwesomeIcon icon={faTwitter} size="2x"/>
                        </a>
                    </div>
                </Col>
                <Col xs={3}></Col>
            </Row>
            <Row>
                <div>
                    <p>
                        &nbsp;
                    </p>
                </div>
            </Row>

        </Container>
    );
}
