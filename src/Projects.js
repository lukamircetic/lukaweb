import React from 'react';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import { Link, animateScroll as scroll } from 'react-scroll';
import Image from 'react-bootstrap/Image';
import './Projects.css';
import BImage from './assets/neuralinkneedle.jpg';
import CImage from './assets/sit.png';
import DImage from './assets/elec.jpg';
import { Button } from './components/Button';

const scrollToTop = () => {
    scroll.scrollToTop(); 
};

export const Projects = () => (
    <Container>
        <div className="header-image">
            <h3 id="top">Projects</h3>
        </div>
        <Row>
            <Image src={BImage} className="biomed-image" />
            <h4>Biomedical Engineering Projects</h4>
            <h5>Mostly comprised of my school projects, but I am interested in developing some neural networks that are related to the medical field</h5>
            <Button onClick={() => {window.location.href="/biomedical"} }
            type = "button"
            buttonStyle = "btn--primary--solid"
            buttonSize = "btn--small"
            >
            To Biomedical Projects
            </Button>
            <Button 
            type="button" 
            buttonStyle = "btn--primary--outline"
            buttonSize = "btn--medium"
            >
                <Link 
                activeClass="active"
                to="section1"
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}
                >
                <div class="icon-arrows">
                    <span></span>
                </div>
                </Link>
            </Button>
            </Row>
            <Row>
                <Image src={CImage} className="prog-image"/>
                <h6 id="section1">Software Projects</h6>
                <h7>At the moment I am focusing on creating projects in Python, Java and C++ with a focus on neural networks and automation as well as some games on the side.</h7>
                <Button onClick={() => {window.location.href="/programming"} }
                type = "button"
                buttonStyle = "btn--warning--solid"
                buttonSize = "btn--small"
                >
                To Software Projects</Button>
                <Button 
                type="button" 
                buttonStyle = "btn--success--outline"
                buttonSize = "btn--medium"
                >
                    <Link 
                    activeClass="active"
                    to="section2"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={1000}
                    >
                    <div class="icon-arrows">
                        <span></span>
                    </div>
                    </Link>
                </Button>
            </Row>
            <Row>
                <Image src={DImage} className="elec-image"/>
                <h8 id="section2">Other Projects</h8>
                <h9>Other projects that I complete such as mini-electrical projects with the Raspberry Pi</h9>
                <Button onClick={() => {window.location.href="/other"} }
                type = "button"
                buttonStyle = "btn--other--solid"
                buttonSize = "btn--small"
                >
                To Other Projects</Button>
                <Button 
                type="button" 
                buttonStyle = "btn--other--outline"
                buttonSize = "btn--medium"
                >
                    <Link 
                    activeClass="active"
                    onClick={scrollToTop}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={1000}
                    >
                    <div class="icon-arrows-up">
                        <span></span>
                    </div>
                    </Link>
                </Button>
            </Row>
            <Row>
                <div className="footer">
                    <p>Website designed by Luka Mircetic 2020</p>
                </div>
            </Row>

    </Container>
)

/* Developed By Luka Mircetic 2020 */
/* Another Test */