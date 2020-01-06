import React from 'react'
import './Programming.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Link, animateScroll as scroll } from 'react-scroll';
import Image from 'react-bootstrap/Image';
import FImage from './assets/flappyweb.png';
import SImage from './assets/astar3.png';
import DImage from './assets/flies.png';
import NImage from './assets/numtorch.png';
import ZImage from './assets/dogs.png';
import { Button } from './components/Button';
import Table from 'react-bootstrap/Table'
const scrollToTop = () => {
    scroll.scrollToTop(); 
};

export const Programming = () => (
        <Container>
            <div className="prog-header-image">
                <div className="h10" id="top">Programming Projects</div>
            </div>
            <Row>
                <Button
                type = "button"
                buttonStyle = "btn--prog--all"
                buttonSize = "btn--small"
                >
                    <Link 
                activeClass="active"
                to="section4"
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}
                >
                <div>Projects Overview</div>
                </Link></Button>
                <h12>Projects by language</h12>
            </Row>
            <Row>
            <Image src={FImage} className="flappy-image" />
            <h13>Javascript</h13>
            <h14>Flappy Bird Game and Neural Net</h14>
            <Button onClick={() => {window.location.href="/Flappy"} }
            type = "button"
            buttonStyle = "btn--flappy"
            buttonSize = "btn--medium"
            >
            Go to Flappy Bird
            </Button>
            <Button type = "button" buttonStyle="btn--flappy--github" buttonSize="btn--extra--small"></Button>
            <Button 
            type="button" 
            buttonStyle = "btn--primary--outline2"
            buttonSize = "btn--extra--small"
            >
                <Link 
                activeClass="active"
                to="section1"
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}
                >
                <div class="icon-arrows-small">
                    <span></span>
                </div>
                </Link>
            </Button>
            </Row>
            <Row>
                <Image src={SImage} className="vis-image"/>
                <h14 style={{marginLeft: 170 + 'px', marginTop: 50 + 'px'}}>A* Pathfinding Visualizer</h14>
                <Button onClick={() => {window.location.href="/astar"} }
                    type = "button"
                    buttonStyle = "btn--flappy--2"
                    buttonSize = "btn--medium"
                    >
                    Go to A* Visualizer
                </Button>
                <Button type = "button" buttonStyle="btn--flappy--github2" buttonSize="btn--extra--small"></Button> 
            </Row>
            <Row>
                <Image src={DImage} className="flies-image"/>
                <h13 id="section1" style={{marginLeft: 15 + 'px', marginTop: -540 + 'px'}}>Java</h13>
                <h14 style={{marginLeft: 160 + 'px', marginTop: -400 + 'px'}}>Flies.ai</h14>
                <p style={{marginTop: -350 + 'px', textAlign: "left", marginLeft: 15+'px', marginRight: 500 + 'px'}}>Using the Processing framework, I developed a neural network that trains a fly (black dots) to navigate through obstacles (blue bars) and reach the goal (red circle) using reinforcement learning.</p>
                <Button 
                type="button" 
                buttonStyle = "btn--primary--outline3"
                buttonSize = "btn--extra--small"
                >
                <Link 
                activeClass="active"
                to="section2"
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}
                >
                <div class="icon-arrows-small">
                    <span></span>
                </div>
                </Link>
            </Button>
            <Button type = "button" buttonStyle="btn--flappy--github3" buttonSize="btn--extra--small"></Button> 
            <Button type = "button" buttonStyle="btn--flies--yt" buttonSize="btn--extra--small"></Button> 
            </Row>
            <Row>
            <Image src={NImage} className="nt-image" />
            <h13 id="section2" style={{marginLeft: -500 + 'px', marginTop: 60 + 'px'}}>Python</h13>
            <h14 style={{marginTop: 160 +'px', marginLeft: 600 + 'px'}}>Numbers Pytorch</h14>
            <p style={{marginLeft: 535 + 'px', textAlign: "right", marginTop: -230 + 'px'}}>Neural network in Pytorch that can distinguish between handwritten numbers</p>
            <Button type = "button" buttonStyle="btn--flappy--github4" buttonSize="btn--extra--small"></Button>
            <Button 
            type="button" 
            buttonStyle = "btn--primary--outline4"
            buttonSize = "btn--extra--small"
            >
                <Link 
                activeClass="active"
                to="section4"
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}
                >
                <div class="icon-arrows-small">
                    <span></span>
                </div>
                </Link>
            </Button>
            </Row>
            <Row>
                <Image src={ZImage} className="dog-image"/>
                <h14 style={{marginLeft: 170 + 'px', marginTop: 50 + 'px'}}>Dogs vs Cats Neural Network</h14>
                <p style={{marginTop: -250 + 'px', textAlign: "center", marginLeft: 520 + 'px'}}>Neural network in Pytorch that learns to disinguish between dog and cat images at an accuracy of around 75% </p>
                <Button type = "button" buttonStyle="btn--flappy--github5" buttonSize="btn--extra--small"></Button> 
            </Row>
            <Row>
                <h13 id="section4" style={{marginLeft: 425 + 'px', marginTop: 200 + 'px'}}>Projects Overview</h13>
            </Row>
            <Row style={{marginTop: 20 + 'px'}}>
                <Table bordered responsive variant="dark">
                    <thead>
                        <tr>
                            <th>Project</th>
                            <th>Language (Platform//Framework)</th>
                            <th>Source Code</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Handwritten Numbers NN</td>
                            <td>Python (PyTorch)</td>
                            <td>
                                <a href="https://github.com/lukamircetic/numberspytorch">Link</a>
                            </td>
                            <td>12/12/2019</td>
                        </tr>
                        <tr>
                            <td>DogsVsCats NN</td>
                            <td>Python (PyTorch)</td>
                            <td>
                                <a href="https://github.com/lukamircetic/DogsVsCatsNeuralNetwork">Link</a>
                            </td>
                            <td>22/12/2019</td>
                        </tr>
                        <tr>
                            <td>lukaweb (personal website)</td>
                            <td>Javascript (React-Bootstrap)</td>
                            <td>
                                <a href="https://github.com/lukamircetic/lukaweb">Link</a>
                            </td>
                            <td>25/12/2019</td>
                        </tr>
                        <tr>
                            <td>Flies.ai</td>
                            <td>Java (Processing)</td>
                            <td>
                                <a href="https://github.com/lukamircetic/flies">Link</a>
                            </td>
                            <td>27/12/2019</td>
                        </tr>
                        <tr>
                            <td>A* Pathfinding Visualizer</td>
                            <td>Javascript (P5.js)</td>
                            <td>
                                <a href="https://github.com/lukamircetic/PathfindingVisualizer">Link</a>
                            </td>
                            <td>30/12/2019</td>
                        </tr>
                        <tr>
                            <td>Flappy Bird Game and Neural Net</td>
                            <td>Javascript (P5.js)</td>
                            <td>
                                <a href="https://github.com/lukamircetic/flappybirdneuralnet">Link</a>
                            </td>
                            <td>01/01/2020</td>
                        </tr>
                        <tr>
                            
                        </tr>
                    </tbody>
                </Table>
            </Row>
            <Row>
                <h14>Back to Top</h14>
                <Button 
                type="button" 
                buttonStyle = "btn--single"
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
                    <div class="icon-arrows-up-single">
                        <span></span>
                    </div>
                    </Link>
                </Button>
            </Row>
            <Row style={{marginLeft: -100 + 'px', marginTop: 0 + 'px'}}>
            <div className="footer">
                <p>Website designed by Luka Mircetic 2020</p>
            </div>
        </Row>

        </Container>
)